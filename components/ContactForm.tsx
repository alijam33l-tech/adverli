"use client";

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
  "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-cream placeholder:text-faint outline-none transition-colors focus:border-lime focus-visible:ring-2 focus-visible:ring-lime/30 disabled:cursor-not-allowed disabled:opacity-60";

type SubmissionState = {
  status: "idle" | "pending" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submission.status === "pending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
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
      className="space-y-5"
      aria-busy={submission.status === "pending"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Jordan Smith"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="jordan@company.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm text-muted">
            Company *
          </label>
          <input
            id="company"
            name="company"
            required
            maxLength={160}
            autoComplete="organization"
            placeholder="Company Inc."
            className={inputStyles}
          />
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
                className={`rounded-full border px-4 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
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
          Tell us about your goals *
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="What are you trying to achieve, and what's standing in the way?"
          className={inputStyles}
        />
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
