import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import planning from "@/public/images/adverli/inside-work/planning.jpg";
import performance from "@/public/images/adverli/inside-work/performance.jpg";
import delivery from "@/public/images/adverli/inside-work/delivery.jpg";
import styles from "./InsideWorkSequence.module.css";

type WorkView = {
  step: string;
  stage: string;
  caption: string;
  alt: string;
  image: StaticImageData;
  position: string;
  wrapClass: string;
  itemClass: string;
  sizes: string;
};

const workViews: WorkView[] = [
  {
    step: "01",
    stage: "Plan",
    caption: "Focused planning sessions",
    alt: "People arranging notes on a workshop board during a planning exercise",
    image: planning,
    position: "68% center",
    wrapClass: styles.planWrap,
    itemClass: styles.plan,
    sizes:
      "(max-width: 1023px) calc(100vw - 3rem), (max-width: 1400px) 58vw, 44rem",
  },
  {
    step: "02",
    stage: "Measure",
    caption: "Performance reviews",
    alt: "Close view of an analytics interface displayed on a laptop",
    image: performance,
    position: "58% 42%",
    wrapClass: styles.measureWrap,
    itemClass: styles.measure,
    sizes:
      "(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 50vw, (max-width: 1400px) 38vw, 30rem",
  },
  {
    step: "03",
    stage: "Deliver",
    caption: "Connected delivery workflows",
    alt: "People collaborating around a laptop and printed working documents",
    image: delivery,
    position: "center 48%",
    wrapClass: styles.deliverWrap,
    itemClass: styles.deliver,
    sizes:
      "(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 50vw, (max-width: 1400px) 38vw, 30rem",
  },
];

export default function InsideWorkSequence() {
  return (
    <div className={styles.sequence}>
      <p className={styles.context}>
        <span aria-hidden="true" />
        Working rhythm
      </p>

      <div className={styles.layout}>
        {workViews.map((view, index) => {
          const captionId = `inside-work-${view.stage.toLowerCase()}`;

          return (
            <Reveal
              key={view.stage}
              delay={index * 100}
              className={`${styles.reveal} ${view.wrapClass}`}
            >
              <figure
                className={`${styles.item} ${view.itemClass}`}
                tabIndex={0}
                aria-labelledby={captionId}
              >
                <Image
                  src={view.image}
                  alt={view.alt}
                  fill
                  placeholder="blur"
                  sizes={view.sizes}
                  className={styles.image}
                  style={{ objectPosition: view.position }}
                />

                <div className={styles.wash} aria-hidden="true" />
                <div className={styles.texture} aria-hidden="true" />

                <div className={styles.stageLabel} aria-hidden="true">
                  <span className={styles.step}>{view.step}</span>
                  <span className={styles.rule} />
                  <span className={styles.stage}>{view.stage}</span>
                </div>

                <div className={styles.signal} aria-hidden="true">
                  <span />
                  <span />
                </div>

                <figcaption id={captionId} className={styles.caption}>
                  {view.caption}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
