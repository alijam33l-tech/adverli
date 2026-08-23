"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";

const budgets = [
  "Under $10k / month",
  "$10k – $50k / month",
  "$50k – $150k / month",
  "$150k+ / month",
];

const inputStyles =
  "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-cream placeholder:text-faint outline-none transition-colors focus:border-lime";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (title: string) =>
    setSelectedServices((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, services: selectedServices }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
      setSelectedServices([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-lime/30 bg-surface p-10 text-center">
        <p className="font-display text-3xl font-medium text-lime">
          Request received.
        </p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          Thank you — a growth lead will review your details and reply within
          one business day with next steps and available call times.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
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
            placeholder="Company Inc."
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm text-muted">
            Monthly marketing budget
          </label>
          <select id="budget" name="budget" className={inputStyles}>
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
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
          {services.map((s) => {
            const active = selectedServices.includes(s.title);
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => toggleService(s.title)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-lime bg-lime text-ink"
                    : "border-line-strong text-muted hover:border-lime hover:text-cream"
                }`}
              >
                {s.shortTitle}
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
          rows={5}
          placeholder="What are you trying to achieve, and what's standing in the way?"
          className={inputStyles}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-lime px-6 py-4 font-display text-sm font-medium text-ink transition-colors hover:bg-lime-dim disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request a strategy call →"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending your request. Please try again, or email
          us directly at hello@adverli.com.
        </p>
      )}
    </form>
  );
}
