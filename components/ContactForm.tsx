"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import styles from "./ContactForm.module.css";

const engagementScopes = [
  "Focused project",
  "Ongoing growth support",
  "Multi-channel engagement",
  "Not sure yet",
];

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
        : [...previous, title],
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
    setSubmission({ status: "pending", message: "Sending your inquiry…" });

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
          result?.message ?? "We could not send your inquiry. Please try again.",
        );
      }

      form.reset();
      setSelectedServices([]);
      setSubmission({
        status: "success",
        message:
          "Inquiry sent. We’ll review the context and respond with a useful next step.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your inquiry. Please try again.",
      });
    }
  }

  const describedBy = (field: FieldName, helperId?: string) =>
    [helperId, fieldErrors[field] ? `${field}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={styles.form}
      aria-busy={submission.status === "pending"}
    >
      <div className={styles.formSectionLabel}>
        <span>01</span>
        <strong>Your details</strong>
        <i aria-hidden="true" />
        <span>Required fields marked *</span>
      </div>

      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="name">
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
            aria-describedby={describedBy("name")}
            onChange={() => clearFieldError("name")}
            className={styles.control}
          />
          {fieldErrors.name && (
            <p id="name-error" className={styles.fieldError}>
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">
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
            inputMode="email"
            placeholder="jordan@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={describedBy("email")}
            onChange={() => clearFieldError("email")}
            className={styles.control}
          />
          {fieldErrors.email && (
            <p id="email-error" className={styles.fieldError}>
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="company">
            Company <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="company"
            name="company"
            required
            maxLength={160}
            autoComplete="organization"
            placeholder="Company name"
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={describedBy("company")}
            onChange={() => clearFieldError("company")}
            className={styles.control}
          />
          {fieldErrors.company && (
            <p id="company-error" className={styles.fieldError}>
              {fieldErrors.company}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="engagementScope">Engagement scope</label>
          <select
            id="engagementScope"
            name="engagementScope"
            className={styles.control}
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

      <fieldset className={styles.serviceFieldset}>
        <legend>Primary need / service</legend>
        <p id="services-help">Choose any disciplines that may be relevant.</p>
        <div className={styles.serviceGrid} aria-describedby="services-help">
          {services.map((service) => {
            const active = selectedServices.includes(service.title);
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => toggleService(service.title)}
                aria-pressed={active}
                className={styles.serviceButton}
              >
                <span aria-hidden="true">{service.index}</span>
                {service.shortTitle}
                <i aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className={styles.formSectionLabel}>
        <span>02</span>
        <strong>The brief</strong>
        <i aria-hidden="true" />
        <span>Useful context, not a perfect document</span>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">
          Goal, current situation, and constraint <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <p id="message-help" className={styles.fieldHelp}>
          Include the market, what is already in place, what needs to improve,
          and what is currently getting in the way.
        </p>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={7}
          placeholder="We are trying to… Our current setup is… The main constraint is…"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={describedBy("message", "message-help")}
          onChange={() => clearFieldError("message")}
          className={`${styles.control} ${styles.textarea}`}
        />
        {fieldErrors.message && (
          <p id="message-error" className={styles.fieldError}>
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.submitArea}>
        <div>
          <strong>What to expect</strong>
          <p>
            We review the context first, then recommend the most useful next step.
          </p>
        </div>
        <button
          type="submit"
          disabled={submission.status === "pending"}
          className={styles.submitButton}
        >
          <span>
            {submission.status === "pending" ? "Sending inquiry…" : "Send inquiry"}
          </span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className={styles.statusSlot}>
        {submission.status !== "idle" && (
          <div
            role={submission.status === "error" ? "alert" : "status"}
            aria-live={submission.status === "error" ? "assertive" : "polite"}
            className={`${styles.status} ${
              submission.status === "error" ? styles.statusError : ""
            }`}
          >
            <span aria-hidden="true" />
            <p>{submission.message}</p>
          </div>
        )}
      </div>

      <p className={styles.privacyNotice}>
        By submitting this form, you agree that Adverli may use the information
        provided to respond to your inquiry. See our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
