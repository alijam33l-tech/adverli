"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type CSSProperties } from "react";
import { serviceImages } from "@/lib/service-images";
import styles from "./ServicesGrowthSystem.module.css";

export type ServiceSummary = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
};

const SERVICE_FLOWS: Record<string, readonly string[]> = {
  "website-development": [
    "Architecture",
    "UX",
    "Development",
    "Tracking",
    "Conversion",
  ],
  "meta-ads": [
    "Creative",
    "Audience",
    "Landing Page",
    "CAPI",
    "Conversion",
  ],
  "google-ads": [
    "Intent",
    "Search / Shopping / PMax",
    "Landing Page",
    "Measurement",
    "Revenue",
  ],
  seo: [
    "Technical",
    "Content",
    "Authority",
    "AI Search",
    "Organic Demand",
  ],
  "content-creation": [
    "Positioning",
    "Creative",
    "Distribution",
    "Engagement",
    "Demand",
  ],
};

export default function ServicesGrowthSystem({
  services,
}: {
  services: ServiceSummary[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const activeService = services[activeIndex] ?? services[0];
  const activeFlow = SERVICE_FLOWS[activeService.slug] ?? [];
  const activeImage =
    serviceImages[activeService.slug] ?? serviceImages["website-development"];
  const tabId = `${id}-service-${activeIndex}`;
  const panelId = `${id}-service-panel`;

  function selectService(index: number) {
    setActiveIndex(index);
  }

  function moveSelection(currentIndex: number, direction: -1 | 1) {
    const nextIndex =
      (currentIndex + direction + services.length) % services.length;
    selectService(nextIndex);
    document.getElementById(`${id}-service-${nextIndex}`)?.focus();
  }

  return (
    <div className={styles.system}>
      <div
        className={styles.selectors}
        role="tablist"
        aria-label="Adverli services"
      >
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={service.slug}
              id={`${id}-service-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={styles.selector}
              onClick={() => selectService(index)}
              onFocus={() => selectService(index)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") selectService(index);
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  moveSelection(index, 1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  moveSelection(index, -1);
                }
              }}
            >
              <span className={styles.selectorNode} aria-hidden="true" />
              <span className={styles.selectorIndex}>{service.index}</span>
              <span className={styles.selectorTitle}>{service.title}</span>
              <span className={styles.selectorArrow} aria-hidden="true">
                →
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId}
        className={styles.detail}
      >
        <div key={activeService.slug} className={styles.detailInner}>
          <div className={styles.detailHead}>
            <div className={styles.detailText}>
              <p className={styles.detailNumber}>
                Discipline {activeService.index} / 05
              </p>
              <h3 className={styles.detailTitle}>{activeService.title}</h3>
              <p className={styles.detailCopy}>{activeService.tagline}</p>
              <Link
                href={`/services/${activeService.slug}`}
                className={styles.serviceLink}
              >
                Explore service
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              className={styles.serviceVisual}
              data-service={activeService.slug}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 899px) calc(100vw - 5.5rem), (max-width: 1400px) 24vw, 19rem"
                className={styles.servicePhoto}
                style={{ objectPosition: activeImage.objectPosition }}
              />
              <div className={styles.photoWash} aria-hidden="true" />
              <div className={styles.photoSignal} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={styles.flowShell}>
            <div className={styles.flowHeading}>
              <span>Capability flow</span>
              <span className={styles.flowState}>Connected</span>
            </div>

            <div className={styles.flowCanvas}>
              <div className={styles.flowTrack} aria-hidden="true">
                <span className={styles.flowProgress} />
                <span className={styles.travelSignal} />
              </div>
              <ol
                className={styles.flow}
                aria-label={`${activeService.title} capability flow`}
              >
                {activeFlow.map((step, index) => (
                  <li
                    key={step}
                    className={styles.flowStep}
                    style={
                      { "--step-delay": `${180 + index * 100}ms` } as CSSProperties
                    }
                  >
                    <span className={styles.flowNode} aria-hidden="true">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </span>
                    <span className={styles.flowLabel}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className={styles.loopNote}>
              <span aria-hidden="true" />
              Feeds the next growth decision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
