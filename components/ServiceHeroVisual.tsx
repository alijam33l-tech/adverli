import Image from "next/image";
import { serviceImages } from "@/lib/service-images";
import styles from "./ServiceHeroVisual.module.css";

type ServiceHeroVisualProps = {
  slug: string;
  index: string;
  title: string;
};

export default function ServiceHeroVisual({
  slug,
  index,
  title,
}: ServiceHeroVisualProps) {
  const image = serviceImages[slug] ?? serviceImages["website-development"];

  return (
    <div className={styles.visual} data-service={slug}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.frame}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          placeholder="blur"
          sizes="(max-width: 1023px) calc(100vw - 3rem), (max-width: 1400px) 40vw, 34rem"
          className={styles.image}
          style={{ objectPosition: image.objectPosition }}
        />
        <div className={styles.imageWash} aria-hidden="true" />
      </div>

      <div className={styles.frameLabel} aria-hidden="true">
        <span>{index}</span>
        <span>{title}</span>
      </div>

      <div className={styles.signalRail} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
