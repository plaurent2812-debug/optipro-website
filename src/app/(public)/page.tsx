import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SystemCore from "@/components/visuals/SystemCore";
import BuildSequence from "@/components/visuals/BuildSequence";
import ProjectVisual from "@/components/projects/ProjectVisual";
import ProfessionalOverview from "@/components/profile/ProfessionalOverview";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroColumn}>
            <p className="eyebrow">Pierre Laurent / Site personnel</p>
            <h1 id="hero-title">Relier les idées.<br />Construire<br /><em>le concret.</em></h1>
            <p className={styles.heroDescription}>Responsable des Opérations.<br />Créateur d’applications, d’automatisations et d’outils IA.</p>
            <p className={styles.heroNote}>Du terrain à l’interface, j’aime comprendre ce qui pourrait mieux fonctionner. Puis le construire.</p>
            <div className={styles.heroActions}>
              <a href="#projets" className="button-primary">Explorer mes projets <span aria-hidden="true">↓</span></a>
              <a href="#construction" className={styles.textLink}>Ma façon de construire <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <SystemCore />
        </div>
        <div className={`shell ${styles.projectDock}`}>
          <div className={styles.dockIntro}><span>EN EXPLORATION</span><p>Cinq projets.<br />Cinq terrains de jeu.</p></div>
          <nav aria-label="Accès direct aux projets">
            {projects.map((project) => <a key={project.slug} href={`#projet-${project.slug}`}><Image src={project.icon} width={38} height={38} alt="" /><div><strong>{project.name}</strong><span>{project.status}</span></div><span className={styles.dockArrow} aria-hidden="true">↘</span></a>)}
          </nav>
        </div>
      </section>

      <BuildSequence />

      <section id="projets" className={styles.projectsSection} aria-labelledby="projects-title">
        <div className="shell">
          <div className={styles.sectionHeader}>
            <div><p className="eyebrow">02 / Projets choisis</p><h2 id="projects-title" className="section-title">Les idées passent.<br /><span>Les outils restent.</span></h2></div>
            <p className="section-copy">Des applications, des expériences web et des prototypes. Voici ce que je construis, pourquoi, et où chaque projet en est.</p>
          </div>
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <article id={`projet-${project.slug}`} key={project.slug} className={styles.project} data-tone={project.statusTone} tabIndex={-1}>
                <div className={styles.projectCopy}>
                  <span className={styles.projectNumber}>0{index + 1} / {project.category}</span>
                  <h3><Link href={`/projets#${project.slug}`}>{project.name}</Link></h3>
                  <span className={styles.projectStatus}><i />{project.status}</span>
                  <p>{project.summary}</p>
                  <div className={styles.projectTags}>{project.technologies.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div>
                  <Link href={`/projets#${project.slug}`} className={styles.projectCta} aria-label={`Découvrir le projet ${project.name}`}>Explorer le projet <span aria-hidden="true">↗</span></Link>
                  {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>{project.linkLabel} <span aria-hidden="true">↗</span></a>}
                </div>
                <Link href={`/projets#${project.slug}`} className={styles.visualLink} aria-label={`Voir ${project.name} en détail`}><ProjectVisual project={project} index={index} /></Link>
              </article>
            ))}
          </div>
          <div className={styles.projectsFootnote}><p>Concevoir. Développer. Apprendre. Recommencer.</p><Link href="/projets">Tous les détails des projets <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <ProfessionalOverview />
      <section className={styles.finalSection} aria-labelledby="exploration-title">
        <div className="shell">
          <p className="eyebrow">04 / Toujours en construction</p>
          <div className={styles.finalInner}><h2 id="exploration-title">La curiosité<br /><em>continue.</em></h2><div><p>Ce site garde une trace de ce que j’explore et de ce que je construis. Certains projets prennent forme, d’autres attendent. Tous m’apprennent quelque chose.</p><Link href="/projets" className={styles.explorationLink}>Explorer les projets <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>
    </main>
  );
}
