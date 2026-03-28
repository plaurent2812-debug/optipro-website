'use client';

export default function AnalyseMockup() {
  return (
    <div style={{
      background: '#0f172a',
      borderRadius: '16px',
      boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
      padding: '1.75rem',
      maxWidth: '420px',
      fontFamily: 'var(--font-body), sans-serif',
      color: 'white',
    }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-display), sans-serif' }}>Analyse des blocages</div>
        <div style={{ fontSize: '0.65rem', color: '#64748b', padding: '0.25rem 0.6rem', background: '#1e293b', borderRadius: '4px' }}>Mars 2026</div>
      </div>

      {/* Time lost metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {[
          { value: '12h', label: 'perdues/sem', color: '#ef4444' },
          { value: '3', label: 'outils inadaptés', color: '#f59e0b' },
          { value: '\u20AC2.4k', label: 'coût mensuel', color: '#f97316' },
        ].map((m) => (
          <div key={m.label} style={{ background: '#1e293b', borderRadius: '10px', padding: '0.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: m.color, fontFamily: 'var(--font-display), sans-serif' }}>{m.value}</div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '0.15rem' }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Bottleneck bars */}
      <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Temps perdu par t&acirc;che</div>
      {[
        { label: 'Création devis', pct: 85, time: '5h/sem' },
        { label: 'Suivi clients', pct: 60, time: '3h/sem' },
        { label: 'Relances impayés', pct: 45, time: '2.5h/sem' },
        { label: 'Exports compta', pct: 25, time: '1.5h/sem' },
      ].map((bar) => (
        <div key={bar.label} style={{ marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{bar.label}</span>
            <span style={{ fontSize: '0.75rem', color: '#f97316', fontWeight: 600 }}>{bar.time}</span>
          </div>
          <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${bar.pct}%`, background: `linear-gradient(90deg, #f97316, ${bar.pct > 70 ? '#ef4444' : '#fb923c'})`, borderRadius: '3px', transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)' }} />
          </div>
        </div>
      ))}

      {/* Action plan hint */}
      <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
        <div style={{ fontSize: '0.75rem', color: '#f97316', fontWeight: 600 }}>&rarr; Plan d&apos;action : 4 automatisations prioritaires</div>
      </div>
    </div>
  );
}
