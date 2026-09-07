import Image from "next/image";
import type { ProductProject } from "@/data/projects";
import styles from "./ProjectVisual.module.css";

export default function ProjectVisual({ project, index = 0 }: { project: ProductProject; index?: number }) {
  return (
    <div className={styles.stage} data-tone={project.statusTone} data-visual={project.visual}>
      <div className={styles.topline}><span>{project.category}</span><span>0{index + 1}</span></div>
      <div className={styles.orbit} aria-hidden="true" />
      {project.visual === "browser" ? (
        <div className={styles.browser}>
          <div className={styles.browserBar} aria-hidden="true"><span>● ● ●</span><span>{project.name}</span><span>↗</span></div>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 720px) 85vw, (max-width: 1024px) 70vw, 620px" />
        </div>
      ) : project.visual === "identity" ? (
        <div className={styles.identity}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="160px" />
          <strong>Carnet d’explorateur</strong><span>Quêtes · Chapitres · Progression</span>
        </div>
      ) : (
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>
            <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 720px) 160px, (max-width: 1024px) 185px, 220px" />
          </div>
        </div>
      )}
      <span className={styles.caption}>{project.visual === "identity" ? "Identité du prototype · Projet en pause" : "Aperçu réel du projet"}</span>
    </div>
  );
}
