import { isIP } from "node:net";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

export type ContactRateLimitResult = {
  allowed: boolean;
  retryAfter: number;
};

/**
 * This store is intentionally process-local and provides defense-in-depth only.
 * Serverless instances do not share it, so production still requires a durable
 * Vercel Firewall/WAF rule or an approved shared rate-limit store.
 */
class ProcessLocalContactRateLimiter {
  private readonly entries = new Map<string, RateLimitEntry>();

  check(identifier: string): ContactRateLimitResult {
    const now = Date.now();

    for (const [key, entry] of this.entries) {
      if (entry.resetAt <= now) this.entries.delete(key);
    }

    const current = this.entries.get(identifier);
    if (!current || current.resetAt <= now) {
      this.entries.set(identifier, {
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
}

const processLocalContactRateLimiter = new ProcessLocalContactRateLimiter();

function readFirstValidIp(value: string | null) {
  const candidate = value?.split(",", 1)[0]?.trim();
  return candidate && isIP(candidate) ? candidate : null;
}

export function getContactRateLimitIdentifier(request: Request) {
  if (process.env.VERCEL === "1") {
    const address =
      readFirstValidIp(request.headers.get("x-vercel-forwarded-for")) ??
      readFirstValidIp(request.headers.get("x-forwarded-for")) ??
      readFirstValidIp(request.headers.get("x-real-ip"));

    return address ? `vercel:${address}` : "vercel:unknown";
  }

  // A standard Web Request does not expose the connection address locally.
  // Do not trust caller-controlled forwarding headers outside Vercel.
  return "local:unknown";
}

export function checkContactRateLimit(request: Request) {
  return processLocalContactRateLimiter.check(
    getContactRateLimitIdentifier(request)
  );
}
