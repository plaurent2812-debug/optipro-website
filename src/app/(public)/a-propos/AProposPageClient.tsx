'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import styles from './a-propos.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TimelineItem = {
  period: string;
  company: string;
  role: string;
  description: string;
  current?: boolean;
};

const timeline: TimelineItem[] = [
  {
    period: 'Sept. 2025 — Mars 2026',
    company: 'GL Events Live',
    role: 'Responsable Exploitation logistique événementielle',
    description:
      "Pilotage de l'exploitation logistique sur la Côte d'Azur. Une nouvelle facette du métier : tempo serré, terrain mouvant, et toujours la même logique — anticiper, structurer, livrer.",
  },
  {
    period: 'Nov. 2019 — Sept. 2024',
    company: 'Factory',
    role: 'Responsable Logistique & Exploitation',
    description:
      "Pilotage de projets d'aménagement de bureaux de 20 k€ à 1 M€, portefeuille ADV de 7 M€/an, coordination quotidienne de 15 à 20 artisans et techniciens. C'est là que j'ai vu de près ce qui freine vraiment les indépendants : pas le travail terrain, mais tout ce qui gravite autour.",
  },
  {
    period: 'Janv. 2019 — Nov. 2019',
    company: 'Groupe EDDIFIS',
    role: 'Responsable Logistique',
    description:
      "Création d'une filiale from scratch : déploiement EBP, structuration des process d'approvisionnement, des stocks et de la facturation. Tout construire depuis la page blanche — exactement ce qu'on fait ensuite chez OptiPro pour des TPE.",
  },
  {
    period: 'Déc. 2017 — Janv. 2019',
    company: 'DBS Drive',
    role: 'Responsable d’agence — robinetterie & chauffage',
    description:
      "Gestion d'une agence avec 8 500 références, en relation directe et quotidienne avec des artisans plombiers et chauffagistes. J'ai parlé leur langue tous les jours pendant un an. Ça ne s'oublie pas.",
  },
];

const valeurs = [
  {
    icon: '\u{1F91D}',
    title: 'Un seul interlocuteur',
    description:
      "Pas de commercial qui passe la main, pas de sous-traitance. C'est moi qui analyse, concçoit et développe — du premier appel à la livraison finale.",
  },
  {
    icon: '\u{1F527}',
    title: 'Terrain avant tout',
    description:
      'J’ai passé dix ans à côtoyer des artisans et des chefs de TPE. Je propose des outils qui s’intègrent dans votre journée réelle, pas dans une présentation PowerPoint.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Résultats mesurables',
    description:
      "Audit gratuit, chiffres concrets, ROI visible. On part des heures que vous perdez chaque semaine et on les transforme en heures récupérées.",
  },
];

export default function AProposPageClient() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      // ───────────────────────────────────────────────
      // matchMedia : on désactive les animations
      // si l'utilisateur préfère reduced-motion.
      // ───────────────────────────────────────────────
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMotion: '(prefers-reduced-motion: no-preference)',
          isReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const conditions = context.conditions as
            | { isMotion: boolean; isReduced: boolean }
            | undefined;

          if (!conditions || conditions.isReduced) {
            // Reduced motion : on rend tout visible immédiatement.
            gsap.set(
              [
                `.${styles.heroBadge}`,
                `.${styles.heroTitle}`,
                `.${styles.heroSubtitle}`,
                `.${styles.heroMeta}`,
                `.${styles.avatarWrap}`,
                `.${styles.philosophieText} p`,
                `.${styles.timelineItem}`,
                `.${styles.timelineDot}`,
                `.${styles.timelineContent}`,
                `.${styles.formationCard}`,
                `.${styles.valeurCard}`,
                `.${styles.ctaInner}`,
              ],
              { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' },
            );
            return;
          }

          // ───────────────────────────────────────────────
          // HERO — timeline staggered au mount
          // ───────────────────────────────────────────────
          const heroTl = gsap.timeline({
            defaults: { ease: 'power3.out' },
          });

          heroTl
            .from(`.${styles.heroBadge}`, {
              opacity: 0,
              y: 20,
              duration: 0.6,
            })
            .from(
              `.${styles.heroTitle}`,
              { opacity: 0, y: 30, duration: 0.8 },
              '-=0.3',
            )
            .from(
              `.${styles.heroSubtitle}`,
              { opacity: 0, y: 20, duration: 0.7 },
              '-=0.45',
            )
            .from(
              `.${styles.heroMetaItem}`,
              {
                opacity: 0,
                y: 12,
                duration: 0.5,
                stagger: 0.08,
              },
              '-=0.4',
            )
            .from(
              `.${styles.avatarWrap}`,
              {
                opacity: 0,
                scale: 0.8,
                duration: 0.9,
                ease: 'back.out(1.4)',
              },
              '-=0.7',
            );

          // Anneau avatar : rotation continue (remplace l'animation CSS).
          gsap.to(`.${styles.avatarRing}`, {
            rotation: 360,
            transformOrigin: '50% 50%',
            duration: 24,
            repeat: -1,
            ease: 'none',
          });

          // Avatar glow : pulse subtle
          gsap.to(`.${styles.avatarGlow}`, {
            scale: 1.08,
            opacity: 0.85,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });

          // ───────────────────────────────────────────────
          // PHILOSOPHIE — paragraphes staggered au scroll
          // ───────────────────────────────────────────────
          gsap.from(`.${styles.philosophieText} p`, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: `.${styles.philosophie}`,
              start: 'top 75%',
              once: true,
            },
          });

          // ───────────────────────────────────────────────
          // PARCOURS — la pièce maîtresse
          // ───────────────────────────────────────────────

          // 1) Ligne verticale "scrubbed" : on anime --line-progress
          //    de 0 à 100 selon la progression dans la liste.
          const timelineList = rootRef.current?.querySelector<HTMLElement>(
            `.${styles.timelineList}`,
          );

          if (timelineList) {
            ScrollTrigger.create({
              trigger: timelineList,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.6,
              onUpdate: (st) => {
                timelineList.style.setProperty(
                  '--line-progress',
                  `${(st.progress * 100).toFixed(2)}%`,
                );
              },
            });
          }

          // 2) Items de la timeline : dot d'abord, puis contenu.
          const items = gsap.utils.toArray<HTMLElement>(
            `.${styles.timelineItem}`,
          );

          items.forEach((item) => {
            const dot = item.querySelector<HTMLElement>(`.${styles.timelineDot}`);
            const content = item.querySelector<HTMLElement>(
              `.${styles.timelineContent}`,
            );

            if (!dot || !content) return;

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                once: true,
              },
              defaults: { ease: 'power2.out' },
            });

            tl.set(item, { opacity: 1 })
              .from(dot, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'back.out(2)',
                transformOrigin: '50% 50%',
              })
              .from(
                content,
                {
                  opacity: 0,
                  x: -24,
                  duration: 0.6,
                },
                '-=0.2',
              );
          });

          // 3) Badge "En poste" : pulsation subtle
          gsap.to(`.${styles.timelineBadge}`, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            transformOrigin: '50% 50%',
          });

          // 4) Carte formation
          gsap.from(`.${styles.formationCard}`, {
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `.${styles.formationCard}`,
              start: 'top 85%',
              once: true,
            },
          });

          // ───────────────────────────────────────────────
          // VALEURS — cards staggered au scroll
          // ───────────────────────────────────────────────
          gsap.from(`.${styles.valeurCard}`, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: `.${styles.valeursGrid}`,
              start: 'top 80%',
              once: true,
            },
          });

          // ───────────────────────────────────────────────
          // CTA — fade + bouton subtle pulse
          // ───────────────────────────────────────────────
          gsap.from(`.${styles.ctaInner}`, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `.${styles.cta}`,
              start: 'top 75%',
              once: true,
            },
          });

          // Subtle glow pulse sur le CTA principal
          const ctaBtn = rootRef.current?.querySelector<HTMLElement>(
            `.${styles.ctaActions} a:first-child`,
          );

          if (ctaBtn) {
            gsap.to(ctaBtn, {
              boxShadow: '0 0 28px rgba(249, 115, 22, 0.55)',
              duration: 2.2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <main className={styles.main} ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBgGlow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Fondateur · OptiPro</span>
            <h1 className={styles.heroTitle}>Pierre Laurent</h1>
            <p className={styles.heroSubtitle}>
              10 ans à piloter des process et coordonner des artisans —
              maintenant de l’autre côté.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroMetaItem}>
                <span className={styles.heroMetaDot} />
                Basé à Vence (06)
              </span>
              <span className={styles.heroMetaItem}>
                <span className={styles.heroMetaDot} />
                Anglais bilingue
              </span>
              <span className={styles.heroMetaItem}>
                <span className={styles.heroMetaDot} />
                Interlocuteur unique
              </span>
            </div>
          </div>

          {/* Avatar placeholder PL */}
          <div className={styles.avatarWrap} aria-hidden="true">
            <div className={styles.avatarRing} />
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>PL</span>
            </div>
            <div className={styles.avatarGlow} />
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className={styles.philosophie}>
        <div className="container">
          <div className={styles.philosophieInner}>
            <span className={styles.sectionLabel}>Pourquoi OptiPro</span>
            <h2 className={styles.sectionTitle}>
              J’ai vu les mêmes problèmes pendant dix ans.
            </h2>
            <div className={styles.philosophieText}>
              <p>
                Chez Factory, j’ai passé cinq ans à coordonner des
                installations d’artisans et de techniciens sur des chantiers
                d’aménagement de bureaux. Avant ça, chez DBS Drive, je
                discutais tous les jours avec des plombiers et chauffagistes au
                comptoir d’une agence. Toujours la même scène : des gens
                qui excellent dans leur métier, mais qui rentrent le soir face
                à une montagne d’admin, des tableurs Excel à rallonge et
                des outils mal adaptés.
              </p>
              <p>
                En parallèle, j’ai piloté des projets de 1 M€,
                déployé un ERP from scratch dans une filiale, structuré des
                process d’approvisionnement et de facturation. J’ai vu ce qui
                fait gagner du temps, ce qui en fait perdre, et surtout pourquoi les
                outils des grandes structures ne se transposent jamais tels quels
                chez un artisan ou une TPE.
              </p>
              <p>
                À un moment, j’ai décidé de passer de l’autre
                côté. Plutôt que d’optimiser des process pour de
                grandes structures qui en avaient déjà trois consultants,
                mettre cette expertise au service de ceux qui en ont vraiment
                besoin : les artisans, les TPE, les indépendants. C’est
                exactement ça, OptiPro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours / Timeline */}
      <section className={styles.parcours}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Mon parcours</span>
            <h2 className={styles.sectionTitle}>10 ans à structurer, piloter, coordonner.</h2>
            <p className={styles.sectionLead}>
              Du comptoir d’une agence robinetterie au pilotage de projets
              d’1 M€, chaque étape a alimenté ce qu’OptiPro est aujourd’hui.
            </p>
          </div>

          <ol className={styles.timelineList}>
            {timeline.map((item, idx) => (
              <li
                key={item.company + idx}
                className={`${styles.timelineItem} ${item.current ? styles.timelineItemCurrent : ''}`}
              >
                <div className={styles.timelineDot}>
                  <span className={styles.timelineDotInner} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.timelinePeriod}>{item.period}</span>
                    {item.current && (
                      <span className={styles.timelineBadge}>En poste</span>
                    )}
                  </div>
                  <h3 className={styles.timelineRole}>{item.role}</h3>
                  <p className={styles.timelineCompany}>{item.company}</p>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.formationCard}>
            <span className={styles.formationLabel}>Formation</span>
            <p className={styles.formationText}>
              <strong>Bac Pro Option Commerce</strong> — Afipe (2008–2010)
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs / Comment je travaille */}
      <section className={styles.valeurs}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Comment je travaille</span>
            <h2 className={styles.sectionTitle}>Trois principes, jamais négociés.</h2>
          </div>

          <div className={styles.valeursGrid}>
            {valeurs.map((v) => (
              <article key={v.title} className={styles.valeurCard}>
                <div className={styles.valeurIcon} aria-hidden="true">{v.icon}</div>
                <h3 className={styles.valeurTitle}>{v.title}</h3>
                <p className={styles.valeurDesc}>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>On commence par un audit gratuit.</h2>
            <p className={styles.ctaText}>
              30 minutes pour faire le point sur vos outils et vos process. Sans
              engagement. Sans jargon.
            </p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="primary">
                Démarrer mon audit gratuit
              </Button>
              <Link href="/services" className={styles.ctaLink}>
                Voir les services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
