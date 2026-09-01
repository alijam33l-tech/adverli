"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const budgets = [
  "Under $10k / month",
  "$10k – $50k / month",
  "$50k – $150k / month",
  "$150k+ / month",
];

const inputStyles =
  "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-cream placeholder:text-faint outline-none transition-colors focus:border-lime";

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (title: string) =>
    setSelectedServices((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const budget = String(data.get("budget") ?? "Not provided");
    const message = String(data.get("message") ?? "");
    const serviceList = selectedServices.length
      ? selectedServices.join(", ")
      : "Not selected";
    const subject = `Strategy call request — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `Monthly marketing budget: ${budget || "Not provided"}`,
      `Services: ${serviceList}`,
      "",
      "Goals:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailtoUrl);
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
        className="w-full rounded-full bg-lime px-6 py-4 font-display text-sm font-medium text-ink transition-colors hover:bg-lime-dim sm:w-auto"
      >
        Draft email to Adverli →
      </button>

      <p className="text-sm leading-relaxed text-faint">
        This opens a prefilled message in your email app. Nothing is sent until
        you send it. You can also email us directly at{" "}
        <a
          href={site.emailHref}
          className="text-cream transition-colors hover:text-lime"
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
