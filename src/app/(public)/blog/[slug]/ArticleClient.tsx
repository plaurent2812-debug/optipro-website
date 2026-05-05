'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Article } from '@/lib/blog';
import { formatDateFr } from '@/lib/blog';
import styles from './article.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ArticleClientProps = {
  article: Article;
  relatedArticles: Article[];
};

export default function ArticleClient({
  article,
  relatedArticles,
}: ArticleClientProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const articleRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // SECURITY NOTE :
  // Le HTML injecté provient exclusivement de src/lib/blog.ts, source statique
  // gérée en interne (zéro input utilisateur). C'est le pattern déjà adopté
  // côté Server Component avant ce refactor. Pas besoin de DOMPurify ici.
  const articleHtml = { __html: article.contenu };

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
                `.${styles.breadcrumb}`,
                `.${styles.articleHeader} > *`,
                `.${styles.body} h2`,
                `.${styles.body} h3`,
                `.${styles.sidebarBox}`,
                `.${styles.backToBlog}`,
              ],
              { opacity: 1, x: 0, y: 0, clearProps: 'transform' },
            );
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = 'scaleX(0)';
            }
            return;
          }

          // ───────────────────────────────────────────────
          // 1) Barre de progression de lecture (scrub)
          // ───────────────────────────────────────────────
          if (progressBarRef.current && articleRef.current) {
            gsap.set(progressBarRef.current, {
              scaleX: 0,
              transformOrigin: 'left center',
            });

            gsap.to(progressBarRef.current, {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: articleRef.current,
                start: 'top top+=80',
                end: 'bottom bottom',
                scrub: true,
              },
            });
          }

          // ───────────────────────────────────────────────
          // 2) Entrée breadcrumb + header article
          // ───────────────────────────────────────────────
          const headerTl = gsap.timeline({
            defaults: { ease: 'power2.out' },
          });

          headerTl
            .from(`.${styles.breadcrumb}`, {
              opacity: 0,
              y: 15,
              duration: 0.5,
            })
            .from(
              `.${styles.articleMeta}`,
              { opacity: 0, y: 15, duration: 0.5 },
              '-=0.3',
            )
            .from(
              `.${styles.title}`,
              { opacity: 0, y: 15, duration: 0.6 },
              '-=0.3',
            )
            .from(
              `.${styles.author}`,
              { opacity: 0, y: 15, duration: 0.5 },
              '-=0.35',
            );

          // ───────────────────────────────────────────────
          // 3) Reveal des h2/h3 du contenu
          // ───────────────────────────────────────────────
          const headings = gsap.utils.toArray<HTMLElement>(
            `.${styles.body} h2, .${styles.body} h3`,
          );

          headings.forEach((heading) => {
            gsap.from(heading, {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                once: true,
              },
            });
          });

          // ───────────────────────────────────────────────
          // 4) Sidebar — slide depuis la droite
          // ───────────────────────────────────────────────
          const sidebarBoxes = gsap.utils.toArray<HTMLElement>(
            `.${styles.sidebarBox}`,
          );

          sidebarBoxes.forEach((box, idx) => {
            gsap.from(box, {
              opacity: 0,
              x: 20,
              duration: 0.6,
              delay: idx * 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: box,
                start: 'top 85%',
                once: true,
              },
            });
          });

          // ───────────────────────────────────────────────
          // 5) Bouton retour au blog
          // ───────────────────────────────────────────────
          gsap.from(`.${styles.backToBlog}`, {
            opacity: 0,
            duration: 0.6,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: `.${styles.backToBlog}`,
              start: 'top 90%',
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
      {/* Barre de progression de lecture */}
      <div
        ref={progressBarRef}
        className={styles.readingProgress}
        aria-hidden="true"
      />

      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{article.titre}</span>
        </nav>

        <div className={styles.layout}>
          {/* Article principal */}
          <article ref={articleRef} className={styles.article}>
            <header className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <span className={styles.badge}>{article.categorie}</span>
                <span className={styles.metaText}>
                  {formatDateFr(article.datePublication)}
                </span>
                <span className={styles.metaSep}>·</span>
                <span className={styles.metaText}>
                  {article.tempsLecture} min de lecture
                </span>
              </div>
              <h1 className={styles.title}>{article.titre}</h1>
              <div className={styles.author}>
                <div className={styles.authorAvatar} aria-hidden="true">
                  PL
                </div>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>Pierre Laurent</span>
                  <span className={styles.authorRole}>
                    Fondateur OptiPro · Vence (06)
                  </span>
                </div>
              </div>
            </header>

            <div
              className={styles.body}
              dangerouslySetInnerHTML={articleHtml}
            />

            <div className={styles.backToBlog}>
              <Link href="/blog" className={styles.backLink}>
                ← Retour au blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={`${styles.sidebarBox} ${styles.sidebarBoxAccent}`}>
              <h3 className={styles.sidebarTitle}>Premier appel — 30 min</h3>
              <p className={styles.sidebarText}>
                Vous me décrivez votre situation, je vous dis honnêtement si je peux
                vous être utile et comment. Si oui, on enchaîne sur un vrai audit.
                Si non, je vous oriente. Gratuit, sans engagement.
              </p>
              <Link href="/contact" className={styles.sidebarButton}>
                Réserver →
              </Link>
            </div>

            {relatedArticles.length > 0 && (
              <div className={styles.sidebarBox}>
                <h3 className={styles.sidebarTitle}>À lire aussi</h3>
                <div className={styles.sidebarList}>
                  {relatedArticles.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className={styles.sidebarItem}
                    >
                      <span className={styles.sidebarItemBadge}>
                        {r.categorie}
                      </span>
                      <div className={styles.sidebarItemTitle}>{r.titre}</div>
                      <div className={styles.sidebarItemMeta}>
                        {r.tempsLecture} min · {formatDateFr(r.datePublication)}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
