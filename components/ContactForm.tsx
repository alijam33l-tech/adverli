"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const engagementScopes = [
  "Focused project",
  "Ongoing growth support",
  "Multi-channel engagement",
  "Not sure yet",
];

const inputStyles =
  "w-full rounded-xl border border-[rgba(255,255,255,0.36)] bg-surface px-4 py-3 text-sm text-cream placeholder:text-faint outline-none transition-colors focus:border-lime focus-visible:ring-2 focus-visible:ring-lime/30 disabled:cursor-not-allowed disabled:opacity-60";

type FieldName = "name" | "email" | "company" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

type SubmissionState = {
  status: "idle" | "pending" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  const toggleService = (title: string) =>
    setSelectedServices((previous) =>
      previous.includes(title)
        ? previous.filter((service) => service !== title)
        : [...previous, title]
    );

  const clearFieldError = (field: FieldName) => {
    setFieldErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  function validate(formData: FormData): FieldErrors {
    const errors: FieldErrors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) errors.name = "Enter your full name.";
    if (!email) {
      errors.email = "Enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!company) errors.company = "Enter your company name.";
    if (!message) errors.message = "Tell us what you would like to achieve.";

    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submission.status === "pending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmission({
        status: "error",
        message: "Please review the highlighted fields and try again.",
      });
      const firstInvalidField = Object.keys(errors)[0] as FieldName;
      const firstInvalidControl = form.elements.namedItem(firstInvalidField);
      if (firstInvalidControl instanceof HTMLElement) firstInvalidControl.focus();
      return;
    }

    setFieldErrors({});
    setSubmission({ status: "pending", message: "Sending your enquiry…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          engagementScope: formData.get("engagementScope"),
          selectedServices,
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message ?? "We could not send your enquiry. Please try again."
        );
      }

      form.reset();
      setSelectedServices([]);
      setSubmission({
        status: "success",
        message:
          "Enquiry sent. We’ll review the details and respond with a useful next step.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your enquiry. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-busy={submission.status === "pending"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Full name <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Jordan Smith"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            onChange={() => clearFieldError("name")}
            className={inputStyles}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-2 text-xs leading-relaxed text-red-300">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Work email <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="jordan@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            onChange={() => clearFieldError("email")}
            className={inputStyles}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-2 text-xs leading-relaxed text-red-300">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm text-muted">
            Company <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="company"
            name="company"
            required
            maxLength={160}
            autoComplete="organization"
            placeholder="Company Inc."
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? "company-error" : undefined}
            onChange={() => clearFieldError("company")}
            className={inputStyles}
          />
          {fieldErrors.company && (
            <p
              id="company-error"
              className="mt-2 text-xs leading-relaxed text-red-300"
            >
              {fieldErrors.company}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="engagementScope"
            className="mb-2 block text-sm text-muted"
          >
            Engagement scope
          </label>
          <select
            id="engagementScope"
            name="engagementScope"
            className={inputStyles}
          >
            <option value="">Select an option</option>
            {engagementScopes.map((scope) => (
              <option key={scope} value={scope}>
                {scope}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm text-muted">
          What do you need help with?
        </legend>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => {
            const active = selectedServices.includes(service.title);
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => toggleService(service.title)}
                aria-pressed={active}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  active
                    ? "border-lime bg-lime text-ink"
                    : "border-line-strong text-muted hover:border-lime hover:text-cream"
                }`}
              >
                {service.shortTitle}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Tell us about your goals <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="What are you trying to achieve, and what's standing in the way?"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          onChange={() => clearFieldError("message")}
          className={inputStyles}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-2 text-xs leading-relaxed text-red-300">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submission.status !== "idle" && (
        <div
          role={submission.status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex items-start gap-3 border-l-2 px-4 py-3 text-sm leading-relaxed ${
            submission.status === "error"
              ? "border-red-400 bg-red-400/5 text-cream"
              : "border-lime bg-lime/5 text-cream"
          }`}
        >
          <span
            aria-hidden="true"
            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
              submission.status === "error" ? "bg-red-400" : "bg-lime"
            }`}
          />
          <span>{submission.message}</span>
        </div>
      )}

      <p className="max-w-xl text-xs leading-relaxed text-faint">
        By submitting this form, you agree that Adverli may use the information
        provided to respond to your enquiry. See our{" "}
        <Link
          href="/privacy"
          className="text-muted underline decoration-line-strong underline-offset-4 outline-none transition-colors hover:text-lime focus-visible:rounded-sm focus-visible:text-lime focus-visible:ring-2 focus-visible:ring-lime/60"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={submission.status === "pending"}
        className="w-full rounded-full bg-lime px-6 py-4 font-display text-sm font-medium text-ink outline-none transition-colors hover:bg-lime-dim focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-wait disabled:bg-lime-dim sm:w-auto"
      >
        {submission.status === "pending" ? "Sending enquiry…" : "Send enquiry →"}
      </button>

      <p className="text-sm leading-relaxed text-faint">
        Prefer email? Contact us directly at{" "}
        <a
          href={site.emailHref}
          className="text-cream outline-none transition-colors hover:text-lime focus-visible:text-lime focus-visible:underline"
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
