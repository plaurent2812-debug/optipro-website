'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './HeroAnimation.module.css';

gsap.registerPlugin(useGSAP);

const METRICS = [
  { className: 'metricFillOrange' as const, value: 72 },
  { className: 'metricFillGreen' as const, value: 89 },
  { className: 'metricFillBlue' as const, value: 64 },
];

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scoreNumberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

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

          // ----- Metric bars: 0 -> target % -----
          const fills = root.querySelectorAll<HTMLElement>(
            '[data-metric-fill]',
          );

          if (reduced) {
            fills.forEach((el) => {
              const target = el.dataset.target ?? '0';
              gsap.set(el, { width: `${target}%` });
            });
          } else {
            fills.forEach((el) => {
              gsap.set(el, { width: '0%', willChange: 'width' });
            });
            gsap.to(fills, {
              width: (i, target: HTMLElement) =>
                `${target.dataset.target ?? '0'}%`,
              duration: 1.2,
              ease: 'power2.out',
              stagger: 0.2,
              delay: 0.5,
              onComplete: () => {
                fills.forEach((el) => {
                  el.style.willChange = 'auto';
                });
              },
            });
          }

          // ----- Score counter 0 -> 87 -----
          const scoreEl = scoreNumberRef.current;
          if (scoreEl) {
            if (reduced) {
              scoreEl.textContent = '87';
            } else {
              const counter = { value: 0 };
              scoreEl.textContent = '0';
              gsap.to(counter, {
                value: 87,
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.8,
                onUpdate: () => {
                  scoreEl.textContent = String(Math.round(counter.value));
                },
              });
            }
          }

          // ----- Live indicator pulse -----
          const liveDot = root.querySelector<HTMLElement>('[data-live-dot]');
          if (liveDot && !reduced) {
            gsap.to(liveDot, {
              opacity: 0.3,
              scale: 0.85,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              transformOrigin: 'center',
            });
          }

          // ----- Particles drift loop -----
          const particles = root.querySelectorAll<HTMLElement>(
            '[data-particle]',
          );
          if (!reduced) {
            particles.forEach((p, i) => {
              const dx = gsap.utils.random(-30, 50);
              const dy = gsap.utils.random(-180, -120);
              const duration = gsap.utils.random(6, 10);

              gsap.fromTo(
                p,
                { x: 0, y: 0, opacity: 0 },
                {
                  x: dx,
                  y: dy,
                  opacity: 0,
                  duration,
                  delay: i * 0.6,
                  repeat: -1,
                  ease: 'none',
                  keyframes: {
                    opacity: [
                      { value: 0, offset: 0 },
                      { value: 0.8, offset: 0.1 },
                      { value: 0.8, offset: 0.9 },
                      { value: 0, offset: 1 },
                    ],
                  },
                },
              );
            });
          }

          // ----- Outer orbit slow rotation -----
          const orbit3 = root.querySelector<HTMLElement>('[data-orbit-outer]');
          if (orbit3 && !reduced) {
            gsap.to(orbit3, {
              rotation: 360,
              duration: 30,
              repeat: -1,
              ease: 'none',
              transformOrigin: 'center center',
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <div className={styles.heroAnimation} aria-hidden="true" ref={containerRef}>
      {/* Orbital layer */}
      <div className={styles.orbitalLayer}>
        <div className={styles.orbit1} />
        <div className={styles.orbit2} />
        <div className={styles.orbit3} data-orbit-outer />

        {/* Pulse lines */}
        <div className={styles.pulseTop} />
        <div className={styles.pulseRight} />
        <div className={styles.pulseBottom} />
        <div className={styles.pulseLeft} />

        {/* Nodes */}
        <div className={styles.nodeTop}>
          &#9881;
          <span className={styles.nodeLabelTop}>Outils</span>
        </div>
        <div className={styles.nodeRight}>
          &#128202;
          <span className={styles.nodeLabelRight}>Données</span>
        </div>
        <div className={styles.nodeBottom}>
          &#9889;
          <span className={styles.nodeLabelBottom}>Auto</span>
        </div>
        <div className={styles.nodeLeft}>
          &#128274;
          <span className={styles.nodeLabelLeft}>Process</span>
        </div>
      </div>

      {/* Dashboard */}
      <div className={styles.dashboard}>
        <div className={styles.dashHeader}>
          <div className={styles.dashTitle}>Audit OptiPro</div>
          <div className={styles.dashLive}>
            <div className={styles.dashLiveDot} data-live-dot />
            Live
          </div>
        </div>

        <div className={styles.chart}>
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
          <div className={styles.bar4} />
          <div className={styles.bar5} />
          <div className={styles.bar6} />
          <div className={styles.bar7} />
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <div className={styles.metricIconOrange}>&#128295;</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Outils</div>
              <div className={styles.metricBar}>
                <div
                  className={styles.metricFillOrange}
                  data-metric-fill
                  data-target={String(METRICS[0].value)}
                />
              </div>
            </div>
            <div className={styles.metricValueOrange}>{METRICS[0].value}%</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricIconGreen}>&#128200;</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Processus</div>
              <div className={styles.metricBar}>
                <div
                  className={styles.metricFillGreen}
                  data-metric-fill
                  data-target={String(METRICS[1].value)}
                />
              </div>
            </div>
            <div className={styles.metricValueGreen}>{METRICS[1].value}%</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricIconBlue}>&#9889;</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Automatisation</div>
              <div className={styles.metricBar}>
                <div
                  className={styles.metricFillBlue}
                  data-metric-fill
                  data-target={String(METRICS[2].value)}
                />
              </div>
            </div>
            <div className={styles.metricValueBlue}>{METRICS[2].value}%</div>
          </div>
        </div>

        <div className={styles.score}>
          <div className={styles.scoreCircle}>
            <span ref={scoreNumberRef}>87</span>
          </div>
          <div className={styles.scoreText}>
            <span className={styles.scoreTextStrong}>Score Optimisation</span>
            Excellente performance
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className={styles.particle1} data-particle />
      <div className={styles.particle2} data-particle />
      <div className={styles.particle3} data-particle />
      <div className={styles.particle4} data-particle />

      {/* Scanline */}
      <div className={styles.scanline} />
    </div>
  );
}
