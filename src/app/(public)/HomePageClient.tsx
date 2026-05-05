'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HomePage.module.css';
import Button from '@/components/ui/Button';
import AuditCta from '@/components/ui/AuditCta';
import HeroAnimation from '@/components/visuals/HeroAnimation';
import Image from 'next/image';

// Mockups sous le fold : split chunk (chargés en parallèle après HeroAnimation)
const AuditMockup = dynamic(() => import('@/components/visuals/AuditMockup'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
});
const AnalyseMockup = dynamic(() => import('@/components/visuals/AnalyseMockup'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
});
const CreationMockup = dynamic(() => import('@/components/visuals/CreationMockup'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
});
const AutomationMockup = dynamic(() => import('@/components/visuals/AutomationMockup'), {
  loading: () => <div style={{ minHeight: '200px' }} />,
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomePageClient() {
  const mainRef = useRef<HTMLElement>(null);
  const decoRef1 = useRef<HTMLDivElement>(null);
  const decoRef2 = useRef<HTMLDivElement>(null);

  // Parallax via GSAP ScrollTrigger (compositor-only) au lieu de setState +
  // re-render React à chaque pixel. Économie majeure de Style & Layout.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      if (decoRef1.current) {
        gsap.to(decoRef1.current, {
          y: () => window.innerHeight * 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: decoRef1.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
      if (decoRef2.current) {
        gsap.to(decoRef2.current, {
          y: () => -window.innerHeight * 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: decoRef2.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motionOk: '(prefers-reduced-motion: no-preference)',
          motionReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const conditions = context.conditions as {
            motionOk: boolean;
            motionReduced: boolean;
          };
          const reduced = conditions.motionReduced;

          // ========= HERO INTRO TIMELINE =========
          const heroBadge = mainRef.current?.querySelector(
            `.${styles.heroBadge}`,
          );
          const heroTitle = mainRef.current?.querySelector(
            `.${styles.heroTitle}`,
          );
          const heroSub = mainRef.current?.querySelector(`.${styles.heroSub}`);
          const heroCtas = mainRef.current?.querySelector(
            `.${styles.heroCtas}`,
          );
          const heroVisual = mainRef.current?.querySelector(
            `.${styles.heroVisual}`,
          );

          const heroEls = [heroBadge, heroTitle, heroSub, heroCtas].filter(
            (el): el is Element => el != null,
          );

          if (heroEls.length > 0) {
            gsap.set(heroEls, {
              opacity: 0,
              y: reduced ? 0 : 20,
              willChange: 'transform, opacity',
            });

            const tl = gsap.timeline({
              defaults: { ease: 'power3.out' },
              onComplete: () => {
                heroEls.forEach((el) => {
                  if (el instanceof HTMLElement) el.style.willChange = 'auto';
                });
                if (heroVisual instanceof HTMLElement) {
                  heroVisual.style.willChange = 'auto';
                }
              },
            });

            tl.to(heroEls, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
            });

            if (heroVisual) {
              gsap.set(heroVisual, {
                opacity: 0,
                scale: reduced ? 1 : 0.95,
                willChange: 'transform, opacity',
              });
              tl.to(
                heroVisual,
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                },
                0.3,
              );
            }
          }

          // ========= REVEAL ON SCROLL (sections + cards) =========
          const revealTargets = mainRef.current?.querySelectorAll<HTMLElement>(
            '[data-reveal]',
          );

          revealTargets?.forEach((target) => {
            gsap.set(target, {
              opacity: 0,
              y: reduced ? 0 : 30,
            });

            ScrollTrigger.create({
              trigger: target,
              start: 'top 80%',
              once: true,
              onEnter: () => {
                target.style.willChange = 'transform, opacity';
                gsap.to(target, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power2.out',
                  onComplete: () => {
                    target.style.willChange = 'auto';
                  },
                });
              },
            });
          });

          // ========= PROJECT CARDS — staggered =========
          const projectCards =
            mainRef.current?.querySelectorAll<HTMLElement>(
              '[data-reveal-project]',
            );

          if (projectCards && projectCards.length > 0) {
            gsap.set(projectCards, {
              opacity: 0,
              y: reduced ? 0 : 30,
            });

            ScrollTrigger.create({
              trigger: projectCards[0],
              start: 'top 80%',
              once: true,
              onEnter: () => {
                projectCards.forEach((c) => {
                  c.style.willChange = 'transform, opacity';
                });
                gsap.to(projectCards, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power2.out',
                  stagger: 0.15,
                  onComplete: () => {
                    projectCards.forEach((c) => {
                      c.style.willChange = 'auto';
                    });
                  },
                });
              },
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef}>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className="container">
          {/* Decorative elements */}
          <div
            ref={decoRef1}
            style={{
              position: 'absolute',
              top: '15%',
              right: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'rgba(249, 115, 22, 0.03)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              willChange: 'transform',
            }}
          />
          <div
            ref={decoRef2}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-5%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(249, 115, 22, 0.04)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              willChange: 'transform',
            }}
          />
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className={styles.heroBadge}>
                Conseil ops, sites web et automatisation — Vence, PACA
              </span>
              <h1 className={styles.heroTitle}>
                Sites web, automatisation et outils sur mesure pour{' '}
                <span className={styles.heroAccent}>
                  artisans, TPE et PME ops sur la Côte d&apos;Azur
                </span>
              </h1>
              <p className={styles.heroSub}>
                10 ans en exploitation logistique : ERP déployé, 8 500 références gérées,
                7 M€ de portefeuille piloté. Je connais le coût d&apos;une erreur sur le
                terrain. OptiPro accompagne plombiers, restaurateurs, TPE et PME
                logistique/transport/BTP : audit ops, automatisation des flux,
                outils sur mesure. Basé à Vence (06140), interventions Vence, Nice,
                Antibes, Cannes, Grasse — France entière à distance.
              </p>
              <div className={styles.heroCtas}>
                <Button href="/contact" variant="primary">
                  Premier appel — gratuit
                </Button>
                <Button href="/services" variant="outline">
                  Voir les services
                </Button>
              </div>
            </div>

            {/* Hero animation */}
            <div className={styles.heroVisual}>
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== LE PROBLÈME ===== */}
      <section data-reveal style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="problem-grid">
            <div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2,
                }}
              >
                Pourquoi les TPE, artisans et PME perdent-ils autant de temps sur leurs opérations ?
              </h2>
              <p
                style={{
                  color: 'var(--secondary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                }}
              >
                Outils mal adaptés, ERP qui ne se parle pas avec le terrain, sous-traitants
                pilotés à l&apos;email. Quand un outil casse, personne n&apos;est là pour le régler.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Outils mal adaptés à votre activité',
                'Tableurs à rallonge, process manuels',
                'ERP/TMS désynchronisés du terrain',
                'Sous-traitants pilotés à coups d\'emails',
                'Reporting hebdo qui prend 3h chaque lundi',
                "Des heures perdues sur l'admin",
              ].map((item) => (
                <div key={item} className="pain-point">
                  <span style={{ color: 'var(--danger)', fontSize: '1.1rem', flexShrink: 0 }}>✕</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SERVICE 1: AUDIT ===== */}
      <section data-reveal className="service-showcase">
        <div className="container">
          <div className="service-showcase-grid">
            <div className="service-showcase-text">
              <span className="service-showcase-label">Étape 1 · Audit</span>
              <h2 className="service-showcase-title">
                Comment se déroule un projet avec OptiPro ?
              </h2>
              <p className="service-showcase-desc">
                Je passe en revue vos outils, vos process quotidiens et
                vos points de friction. Vous repartez avec un diagnostic
                clair et des recommandations priorisées.
              </p>
              <ul className="service-showcase-features">
                <li>Cartographie complète de vos outils</li>
                <li>Identification des points de friction</li>
                <li>Rapport détaillé avec plan d&apos;action</li>
                <li>Le premier appel découverte est gratuit</li>
              </ul>
            </div>
            <div className="service-showcase-visual">
              <AuditMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE 2: ANALYSE ===== */}
      <section data-reveal className="service-showcase">
        <div className="container">
          <div className="service-showcase-grid reversed">
            <div className="service-showcase-text">
              <span className="service-showcase-label">Étape 2 · Analyse</span>
              <h2 className="service-showcase-title">
                Chaque minute perdue<br />a un coût
              </h2>
              <p className="service-showcase-desc">
                À partir de l&apos;audit, je priorise les sujets qui vous
                bloquent ou vous coûtent le plus. On définit ensemble un
                plan d&apos;action concret, adapté à votre budget.
              </p>
              <ul className="service-showcase-features">
                <li>Blocages priorisés par impact</li>
                <li>Estimation des gains de temps</li>
                <li>Solutions recommandées et chiffrées</li>
              </ul>
            </div>
            <div className="service-showcase-visual">
              <AnalyseMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE 3: CRÉATION ===== */}
      <section data-reveal className="service-showcase">
        <div className="container">
          <div className="service-showcase-grid">
            <div className="service-showcase-text">
              <span className="service-showcase-label">Étape 3 · Création</span>
              <h2 className="service-showcase-title">
                Des outils construits<br />pour votre métier
              </h2>
              <p className="service-showcase-desc">
                Site vitrine, application web, tableau de bord, espace
                client — chaque solution est conçue sur mesure. Pas de
                template générique, pas de compromis.
              </p>
              <ul className="service-showcase-features">
                <li>Design sur mesure, responsive</li>
                <li>Maquettes validées avant développement</li>
                <li>Formation et accompagnement inclus</li>
              </ul>
            </div>
            <div className="service-showcase-visual">
              <CreationMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE 4: AUTOMATISATION ===== */}
      <section data-reveal className="service-showcase">
        <div className="container">
          <div className="service-showcase-grid reversed">
            <div className="service-showcase-text">
              <span className="service-showcase-label">Étape 4 · Automatisation</span>
              <h2 className="service-showcase-title">
                Vos outils se parlent.<br />Le répétitif disparaît.
              </h2>
              <p className="service-showcase-desc">
                Je connecte vos outils entre eux et j&apos;automatise les
                tâches répétitives. Devis, relances, synchronisations,
                exports — tout tourne sans que vous y pensiez.
              </p>
              <ul className="service-showcase-features">
                <li>Workflows automatisés sur mesure</li>
                <li>Intégrations entre vos outils existants</li>
                <li>Zéro intervention manuelle au quotidien</li>
              </ul>
            </div>
            <div className="service-showcase-visual">
              <AutomationMockup />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />


      {/* ===== TRANSPARENCE / TÉMOIGNAGES ===== */}
      <section data-reveal style={{ padding: '4rem 0 1rem' }}>
        <div className="container">
          <div style={{
            maxWidth: '760px',
            margin: '0 auto',
            background: 'var(--background)',
            border: '1px dashed var(--border)',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
          }}>
            <p style={{ color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 700 }}>
              Honnêteté
            </p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
              Pas encore de témoignages clients OptiPro
            </h2>
            <p style={{ color: 'var(--secondary)', lineHeight: 1.7, fontSize: '0.97rem', marginBottom: '0.75rem' }}>
              J&apos;ai lancé OptiPro à temps plein en avril 2026. Les premiers cas
              clients sont en cours et seront documentés ici dès qu&apos;ils seront
              livrés et validés par les clients concernés.
            </p>
            <p style={{ color: 'var(--secondary)', lineHeight: 1.7, fontSize: '0.97rem' }}>
              En attendant, mon parcours opérationnel — 10 ans, déploiement complet
              d&apos;un ERP, 7 M€ de portefeuille ADV, 8 500 références gérées,
              coordination quotidienne de 15 à 20 sous-traitants — est ma seule
              référence. Et c&apos;est exactement ce que je vous propose de mettre
              à votre service.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FONDATEUR ===== */}
      <section data-reveal style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'center',
            maxWidth: '760px',
            margin: '0 auto',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '2.5rem',
          }}>
            <div style={{ flexShrink: 0 }}>
              <Image
                src="/pierre-laurent.png"
                alt="Pierre Laurent, fondateur d'OptiPro"
                width={120}
                height={120}
                style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Votre interlocuteur
              </p>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                Pierre Laurent — Fondateur OptiPro
              </h2>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.7, fontSize: '0.97rem', marginBottom: '1rem' }}>
                10 ans à piloter des flux tendus en exploitation logistique : déploiement complet d&apos;un ERP chez Eddifis, 8 500 références gérées chez DBS, 7 M€ de portefeuille ADV piloté chez Factory, dépôt événementiel chez GL Events Live. J&apos;ai quitté l&apos;exploitation pour fonder OptiPro et appliquer ces 10 ans de terrain à l&apos;IA opérationnelle. Je sais ce que coûte une erreur sur le terrain.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Vous parlerez toujours avec moi directement — du diagnostic à la livraison. Pas de sous-traitance, pas de commercial.
              </p>
              <a
                href="https://www.linkedin.com/in/pierre-laurent-809410123"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600 }}
              >
                Voir le profil LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA AUDIT ===== */}
      <section>
        <div className="container">
          <AuditCta />
        </div>
      </section>

    </main>
  );
}
