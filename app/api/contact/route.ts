import { Resend } from "resend";
import { services } from "@/lib/services";

export const runtime = "nodejs";

const CONTACT_RECIPIENT = "hello@adverli.com";
const CONTACT_SENDER = "Adverli Website <leads@adverli.com>";
const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const engagementScopes = new Set([
  "Focused project",
  "Ongoing growth support",
  "Multi-channel engagement",
  "Not sure yet",
]);
const serviceTitles = new Set(services.map((service) => service.title));

type RateLimitEntry = { count: number; resetAt: number };
const rateLimits = new Map<string, RateLimitEntry>();

type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  engagementScope: string;
  selectedServices: string[];
  message: string;
  website: string;
};

type ValidationResult =
  | { success: true; data: ContactSubmission }
  | { success: false; message: string };

function jsonResponse(body: object, status = 200, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const address = forwardedFor?.split(",")[0]?.trim();
  return address || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(identifier: string) {
  const now = Date.now();

  for (const [key, entry] of rateLimits) {
    if (entry.resetAt <= now) rateLimits.delete(key);
  }

  const current = rateLimits.get(identifier);
  if (!current || current.resetAt <= now) {
    rateLimits.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function cleanSingleLine(value: string) {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanMultiline(value: string) {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
}

function readString(
  payload: Record<string, unknown>,
  key: string,
  maximumLength: number,
  required: boolean,
  multiline = false
) {
  if (typeof payload[key] !== "string") return required ? null : "";

  const value = multiline
    ? cleanMultiline(payload[key])
    : cleanSingleLine(payload[key]);

  if ((required && !value) || value.length > maximumLength) return null;
  return value;
}

function isValidEmail(value: string) {
  if (value.length > 254 || /[\r\n]/.test(value)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validateSubmission(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { success: false, message: "Please check the form and try again." };
  }

  const record = payload as Record<string, unknown>;
  const name = readString(record, "name", 100, true);
  const email = readString(record, "email", 254, true)?.toLowerCase() ?? null;
  const company = readString(record, "company", 160, true);
  const engagementScope = readString(record, "engagementScope", 80, false);
  const message = readString(record, "message", 5_000, true, true);
  const website = readString(record, "website", 200, false);

  if (!name || !email || !company || !message || website === null) {
    return {
      success: false,
      message: "Please complete all required fields and check their length.",
    };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid work email address." };
  }

  if (
    engagementScope === null ||
    (engagementScope && !engagementScopes.has(engagementScope))
  ) {
    return { success: false, message: "Please select a valid engagement scope." };
  }

  if (!Array.isArray(record.selectedServices) || record.selectedServices.length > 5) {
    return { success: false, message: "Please select valid services." };
  }

  const selectedServices = [
    ...new Set(
      record.selectedServices.map((service) =>
        typeof service === "string" ? cleanSingleLine(service) : ""
      )
    ),
  ];

  if (selectedServices.some((service) => !service || !serviceTitles.has(service))) {
    return { success: false, message: "Please select valid services." };
  }

  return {
    success: true,
    data: {
      name,
      email,
      company,
      engagementScope,
      selectedServices,
      message,
      website,
    },
  };
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function emailRows(submission: ContactSubmission, timestamp: string) {
  const serviceList = submission.selectedServices.length
    ? submission.selectedServices.join(", ")
    : "Not selected";

  return [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Company", submission.company],
    ["Engagement scope", submission.engagementScope || "Not provided"],
    ["Selected services", serviceList],
    ["Timestamp", timestamp],
    ["Source", "Adverli website contact form"],
  ] as const;
}

function createEmailHtml(submission: ContactSubmission, timestamp: string) {
  const rows = emailRows(submission, timestamp)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 10px 16px 10px 0; color: #77776f; font-size: 13px; vertical-align: top; white-space: nowrap;">${escapeHtml(label)}</td>
          <td style="padding: 10px 0; color: #171712; font-size: 14px; line-height: 1.5;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");
  const goals = escapeHtml(submission.message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html lang="en">
  <body style="margin: 0; background: #f4f4ef; color: #171712; font-family: Arial, Helvetica, sans-serif;">
    <div style="padding: 32px 16px;">
      <div style="max-width: 640px; margin: 0 auto; overflow: hidden; background: #ffffff; border: 1px solid #ddddcf; border-radius: 18px;">
        <div style="padding: 24px 28px; background: #12120f; border-bottom: 3px solid #c7ff35;">
          <p style="margin: 0 0 8px; color: #c7ff35; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;">New website enquiry</p>
          <h1 style="margin: 0; color: #f5f5ed; font-size: 24px; line-height: 1.25;">${escapeHtml(submission.company)}</h1>
        </div>
        <div style="padding: 22px 28px 28px;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">${rows}</table>
          <div style="margin-top: 22px; padding-top: 22px; border-top: 1px solid #e4e4d9;">
            <p style="margin: 0 0 10px; color: #77776f; font-size: 13px;">Goals / message</p>
            <p style="margin: 0; color: #171712; font-size: 15px; line-height: 1.65;">${goals}</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function createEmailText(submission: ContactSubmission, timestamp: string) {
  const details = emailRows(submission, timestamp).map(
    ([label, value]) => `${label}: ${value}`
  );
  return [...details, "", "Goals / message:", submission.message].join("\n");
}

export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return jsonResponse({ message: "This request could not be accepted." }, 403);
  }

  const rateLimit = checkRateLimit(getClientIdentifier(request));
  if (!rateLimit.allowed) {
    return jsonResponse(
      { message: "Too many enquiries were submitted. Please try again shortly." },
      429,
      { "Retry-After": String(rateLimit.retryAfter) }
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ message: "This request could not be accepted." }, 415);
  }
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ message: "The submitted message is too large." }, 413);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).length > MAX_BODY_BYTES) {
      return jsonResponse({ message: "The submitted message is too large." }, 413);
    }
    payload = JSON.parse(body);
  } catch {
    return jsonResponse({ message: "Please check the form and try again." }, 400);
  }

  const validation = validateSubmission(payload);
  if (!validation.success) {
    return jsonResponse({ message: validation.message }, 400);
  }

  if (validation.data.website) {
    return jsonResponse({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact submission failed: RESEND_API_KEY is not configured.");
    return jsonResponse(
      { message: "We could not send your enquiry right now. Please try again." },
      503
    );
  }

  const timestamp = new Date().toISOString();
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_SENDER,
      to: [CONTACT_RECIPIENT],
      replyTo: validation.data.email,
      subject: `New website enquiry — ${validation.data.company}`,
      html: createEmailHtml(validation.data, timestamp),
      text: createEmailText(validation.data, timestamp),
    });

    if (error) {
      console.error("Resend rejected a contact submission:", error);
      return jsonResponse(
        { message: "We could not send your enquiry right now. Please try again." },
        502
      );
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Contact submission could not be delivered:", error);
    return jsonResponse(
      { message: "We could not send your enquiry right now. Please try again." },
      502
    );
  }
}
