'use client';

import { useState, useEffect, useRef } from 'react';

export default function AuditMockup() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 25px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)',
      padding: '2rem',
      maxWidth: '420px',
      fontFamily: 'var(--font-body), sans-serif',
      position: 'relative',
      overflow: 'hidden',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #f1f5f9' }}>
        <div>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 600 }}>Rapport d&apos;audit</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-display), sans-serif' }}>Boulangerie Martin</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>OptiPro</div>
      </div>

      {/* Score */}
      <div style={{ background: '#fef3c7', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: 800, flexShrink: 0 }}>4.2</div>
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#92400e' }}>Score d&apos;efficacit&eacute;</div>
          <div style={{ fontSize: '0.7rem', color: '#a16207' }}>3 points de friction majeurs identifi&eacute;s</div>
        </div>
      </div>

      {/* Findings */}
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Points de friction</div>
      {[
        { status: 'critical', label: 'Devis manuels sur Word — 45min/devis', color: '#ef4444' },
        { status: 'warning', label: 'Suivi clients sur tableur Excel', color: '#f59e0b' },
        { status: 'warning', label: 'Aucune relance automatique', color: '#f59e0b' },
        { status: 'ok', label: 'Comptabilité externalisée', color: '#10b981' },
      ].map((item, index) => (
        <div key={item.label} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.5rem 0',
          borderBottom: '1px solid #f1f5f9',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
          transition: `opacity 0.4s ease ${0.3 + index * 0.1}s, transform 0.4s ease ${0.3 + index * 0.1}s`,
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
          <span style={{ fontSize: '0.85rem', color: '#334155' }}>{item.label}</span>
        </div>
      ))}

      {/* Recommendation preview */}
      <div style={{
        marginTop: '1.25rem',
        padding: '1rem',
        background: '#f0fdf4',
        borderRadius: '10px',
        border: '1px solid #bbf7d0',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease 0.8s, transform 0.5s ease 0.8s',
      }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', marginBottom: '0.35rem' }}>Recommandation prioritaire</div>
        <div style={{ fontSize: '0.8rem', color: '#15803d', lineHeight: 1.5 }}>Automatiser la g&eacute;n&eacute;ration de devis &rarr; gain estim&eacute; : 8h/semaine</div>
      </div>

      {/* Subtle watermark */}
      <div style={{ position: 'absolute', bottom: '8px', right: '12px', fontSize: '0.6rem', color: '#e2e8f0' }}>optipro.fr</div>
    </div>
  );
}
