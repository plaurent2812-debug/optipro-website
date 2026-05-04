'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AuditCta() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const target = ref.current;
      if (!target) return;

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

          gsap.set(target, {
            opacity: 0,
            y: reduced ? 0 : 40,
          });

          ScrollTrigger.create({
            trigger: target,
            start: 'top 75%',
            once: true,
            onEnter: () => {
              target.style.willChange = 'transform, opacity';
              gsap.to(target, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                onComplete: () => {
                  target.style.willChange = 'auto';
                },
              });
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="audit-cta"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      {/* Decorative corner accent */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'rgba(249, 115, 22, 0.08)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2>Commencez par un audit</h2>
        <p>
          On regarde ensemble vos outils et vos process. Vous repartez avec un
          diagnostic clair et des recommandations concrètes.
        </p>
        <p className="audit-cta-note">100% gratuit et sans engagement</p>
        <Button href="/contact" variant="primary">
          Démarrer mon audit gratuit
        </Button>
      </div>
    </div>
  );
}
