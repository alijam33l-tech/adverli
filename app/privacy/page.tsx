import type { Metadata } from "next";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Adverli collects, uses, protects, and shares information submitted through its website and contact form.",
  path: "/privacy",
});

const sectionHeading =
  "font-display text-2xl font-semibold tracking-tight text-cream sm:text-3xl";
const bodyCopy = "mt-4 text-base leading-8 text-muted";
const listStyle = "mt-4 space-y-3 pl-5 text-base leading-8 text-muted";

export default function PrivacyPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-lime"
            />
            Privacy
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Privacy Policy<span className="text-lime">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            This policy explains how Adverli handles personal information when
            you visit our website or contact us about working together.
          </p>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-faint">
            Last updated September 24, 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-4">
            <div className="border-l border-lime/50 pl-6 lg:sticky lg:top-28">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                At a glance
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
                We collect the information needed to respond to enquiries,
                operate the website, and protect its reliability. Questions or
                privacy requests can be sent to{" "}
                <a
                  href={site.emailHref}
                  className="text-cream underline decoration-line-strong underline-offset-4 outline-none transition-colors hover:text-lime focus-visible:rounded-sm focus-visible:text-lime focus-visible:ring-2 focus-visible:ring-lime/60"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </aside>

          <article className="min-w-0 space-y-16 lg:col-span-8">
            <section aria-labelledby="scope">
              <h2 id="scope" className={sectionHeading}>
                1. Scope
              </h2>
              <p className={bodyCopy}>
                This Privacy Policy applies to information handled through{" "}
                <a
                  href={site.url}
                  className="break-words text-cream underline decoration-line-strong underline-offset-4 outline-none transition-colors hover:text-lime focus-visible:rounded-sm focus-visible:text-lime focus-visible:ring-2 focus-visible:ring-lime/60"
                >
                  {site.url}
                </a>{" "}
                and related communications with Adverli. Adverli works with
                businesses across global markets and is responsible for the
                personal information described in this policy.
              </p>
            </section>

            <section aria-labelledby="information-we-collect">
              <h2 id="information-we-collect" className={sectionHeading}>
                2. Information we collect
              </h2>
              <p className={bodyCopy}>
                When you submit the contact form, we collect the information
                you choose to provide, including:
              </p>
              <ul className={`${listStyle} list-disc marker:text-lime`}>
                <li>Your full name and work email address.</li>
                <li>Your company.</li>
                <li>Your selected engagement scope and services.</li>
                <li>Your goals, message, and other enquiry details.</li>
              </ul>
              <p className={bodyCopy}>
                We may also receive technical information generated when you
                access the website, such as your IP address, browser and device
                information, timestamps, request details, and infrastructure or
                security logs. Our hosting provider may process this
                information to deliver, monitor, troubleshoot, and protect the
                website.
              </p>
              <p className={bodyCopy}>
                If you communicate with us by email or phone, we may retain the
                information contained in that communication and any related
                business correspondence.
              </p>
            </section>

            <section aria-labelledby="use-of-information">
              <h2 id="use-of-information" className={sectionHeading}>
                3. How we use information
              </h2>
              <p className={bodyCopy}>We use information to:</p>
              <ul className={`${listStyle} list-disc marker:text-lime`}>
                <li>Review and respond to enquiries.</li>
                <li>
                  Understand your goals, evaluate fit, and discuss potential
                  services or engagement scope.
                </li>
                <li>Operate, maintain, troubleshoot, and secure the website.</li>
                <li>
                  Prevent spam, misuse, fraud, and other harmful activity.
                </li>
                <li>
                  Improve website reliability, performance, and the way our
                  services are presented.
                </li>
                <li>
                  Maintain appropriate business records and meet applicable
                  legal obligations.
                </li>
              </ul>
            </section>

            <section aria-labelledby="service-providers">
              <h2 id="service-providers" className={sectionHeading}>
                4. Service providers and disclosures
              </h2>
              <p className={bodyCopy}>
                We use a limited number of service providers to operate this
                website and deliver contact-form enquiries:
              </p>
              <ul className={`${listStyle} list-disc marker:text-lime`}>
                <li>
                  <strong className="font-medium text-cream">Vercel</strong> for
                  website hosting, infrastructure, delivery, and associated
                  operational or security logging.
                </li>
                <li>
                  <strong className="font-medium text-cream">Resend</strong> for
                  transmitting and delivering contact-form emails to Adverli.
                </li>
              </ul>
              <p className={bodyCopy}>
                These providers process information on our behalf in connection
                with the services they provide. We may also disclose information
                when reasonably necessary to comply with law, respond to valid
                legal process, protect rights or safety, investigate misuse, or
                support a business reorganization or transfer.
              </p>
            </section>

            <section aria-labelledby="cookies-and-analytics">
              <h2 id="cookies-and-analytics" className={sectionHeading}>
                5. Cookies and analytics
              </h2>
              <p className={bodyCopy}>
                The website may use technical mechanisms necessary to deliver
                pages, maintain security, and support core functionality.
                Adverli has not currently enabled website analytics or
                advertising tracking on this site. If we introduce
                non-essential analytics, advertising technologies, or cookies,
                we will update this policy and provide any notice or choices
                required by applicable law.
              </p>
            </section>

            <section aria-labelledby="retention">
              <h2 id="retention" className={sectionHeading}>
                6. Retention
              </h2>
              <p className={bodyCopy}>
                We retain personal information for as long as reasonably
                necessary to respond to your enquiry, manage a potential or
                active business relationship, maintain appropriate business
                records, resolve disputes, protect the website, and meet legal
                obligations. Retention periods vary according to the nature of
                the information and why it is needed. When information is no
                longer reasonably required, we will delete or anonymize it,
                subject to applicable legal requirements and routine backup
                processes.
              </p>
            </section>

            <section aria-labelledby="security">
              <h2 id="security" className={sectionHeading}>
                7. Security
              </h2>
              <p className={bodyCopy}>
                We use reasonable administrative and technical measures
                intended to protect personal information against unauthorized
                access, loss, misuse, or alteration. No website, transmission,
                or storage system can be guaranteed to be completely secure.
              </p>
            </section>

            <section aria-labelledby="international-processing">
              <h2 id="international-processing" className={sectionHeading}>
                8. International processing
              </h2>
              <p className={bodyCopy}>
                Adverli works with businesses across global markets. We and our
                service providers may process information in countries other
                than the country where you are located. Privacy laws may differ
                between jurisdictions. Where required, appropriate safeguards
                are used for international transfers of personal information.
              </p>
            </section>

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className={sectionHeading}>
                9. Your privacy rights
              </h2>
              <p className={bodyCopy}>
                Depending on where you live, you may have rights concerning
                your personal information, including the ability to request
                access, correction, deletion, restriction, or a copy of certain
                information, or to object to certain processing. Where
                processing relies on consent, you may be able to withdraw that
                consent. You may also have the right to raise a concern with a
                relevant privacy authority.
              </p>
              <p className={bodyCopy}>
                These rights may be subject to legal exceptions. To make a
                request, email{" "}
                <a
                  href={site.emailHref}
                  className="text-cream underline decoration-line-strong underline-offset-4 outline-none transition-colors hover:text-lime focus-visible:rounded-sm focus-visible:text-lime focus-visible:ring-2 focus-visible:ring-lime/60"
                >
                  {site.email}
                </a>
                . We may need to verify your identity before completing a
                request.
              </p>
            </section>

            <section aria-labelledby="policy-updates">
              <h2 id="policy-updates" className={sectionHeading}>
                10. Policy updates
              </h2>
              <p className={bodyCopy}>
                We may update this policy as our website, services, or legal
                obligations change. The date at the top of this page identifies
                the latest version.
              </p>
            </section>

            <section
              aria-labelledby="contact-us"
              className="border-t border-line pt-12"
            >
              <h2 id="contact-us" className={sectionHeading}>
                11. Contact us
              </h2>
              <p className={bodyCopy}>
                For questions about this policy or how Adverli handles personal
                information, contact us at{" "}
                <a
                  href={site.emailHref}
                  className="text-cream underline decoration-line-strong underline-offset-4 outline-none transition-colors hover:text-lime focus-visible:rounded-sm focus-visible:text-lime focus-visible:ring-2 focus-visible:ring-lime/60"
                >
                  {site.email}
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
