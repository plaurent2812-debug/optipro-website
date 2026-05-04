'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Article } from '@/lib/blog';
import { formatDateFr } from '@/lib/blog';
import styles from './blog-list.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type BlogListClientProps = {
  articles: Article[];
};

export default function BlogListClient({ articles }: BlogListClientProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
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
            gsap.set(
              [
                `.${styles.eyebrow}`,
                `.${styles.h1}`,
                `.${styles.subtitle}`,
                `.${styles.card}`,
                `.${styles.bottomCta}`,
              ],
              { opacity: 1, y: 0, clearProps: 'transform' },
            );
            return;
          }

          // ───────────────────────────────────────────────
          // HERO — entrée staggered
          // ───────────────────────────────────────────────
          const heroTl = gsap.timeline({
            defaults: { ease: 'power3.out' },
          });

          heroTl
            .from(`.${styles.eyebrow}`, {
              opacity: 0,
              y: 18,
              duration: 0.6,
            })
            .from(
              `.${styles.h1}`,
              { opacity: 0, y: 24, duration: 0.7 },
              '-=0.35',
            )
            .from(
              `.${styles.subtitle}`,
              { opacity: 0, y: 16, duration: 0.6 },
              '-=0.4',
            );

          // ───────────────────────────────────────────────
          // Cards — ScrollTrigger.batch (par vagues)
          // ───────────────────────────────────────────────
          const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);

          // État initial (sécurité contre le flash)
          gsap.set(cards, { opacity: 0, y: 40 });

          ScrollTrigger.batch(cards, {
            start: 'top 88%',
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            },
          });

          // ───────────────────────────────────────────────
          // Bottom CTA
          // ───────────────────────────────────────────────
          gsap.from(`.${styles.bottomCta}`, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `.${styles.bottomCta}`,
              start: 'top 85%',
              once: true,
            },
          });
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>Ressources</div>
            <h1 className={styles.h1}>Ressources &amp; conseils</h1>
            <p className={styles.subtitle}>
              Des guides pratiques pour artisans et TPE qui veulent reprendre le
              contrôle de leur temps.
            </p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section>
        <div className="container">
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={styles.card}
              >
                <div className={styles.cardMeta}>
                  <span className={styles.badge}>{article.categorie}</span>
                  <span className={styles.metaText}>
                    {formatDateFr(article.datePublication)}
                  </span>
                  <span className={styles.metaSep}>·</span>
                  <span className={styles.metaText}>
                    {article.tempsLecture} min
                  </span>
                </div>
                <h2 className={styles.cardTitle}>{article.titre}</h2>
                <p className={styles.cardDescription}>{article.description}</p>
                <span className={styles.cardCta}>Lire l&apos;article →</span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCta}>
            <h2 className={styles.bottomCtaTitle}>
              Besoin d&apos;aide sur votre cas ?
            </h2>
            <p className={styles.bottomCtaText}>
              Chaque artisan a sa réalité. En 30 minutes d&apos;échange gratuit,
              je vous donne un avis honnête sur vos outils, vos process et les
              prochaines étapes pour gagner du temps.
            </p>
            <Link href="/contact" className={styles.bottomCtaButton}>
              Réserver mon audit gratuit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
