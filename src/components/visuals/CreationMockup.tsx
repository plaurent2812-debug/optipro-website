'use client';

export default function CreationMockup() {
  return (
    <div style={{ maxWidth: '460px' }}>
      {/* Browser window */}
      <div style={{
        background: '#1e293b',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
      }}>
        {/* Chrome bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#0f172a', borderBottom: '1px solid #334155' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          <div style={{ flex: 1, background: '#1e293b', borderRadius: '6px', padding: '0.3rem 0.75rem', fontSize: '0.7rem', color: '#64748b', textAlign: 'center' }}>
            mon-entreprise.fr
          </div>
        </div>

        {/* Website preview */}
        <div style={{ background: '#ffffff', padding: '1.5rem' }}>
          {/* Nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a', fontFamily: 'var(--font-display), sans-serif' }}>MonEntreprise</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['Services', '\u00C0 propos', 'Contact'].map((l) => (
                <span key={l} style={{ fontSize: '0.7rem', color: '#64748b' }}>{l}</span>
              ))}
            </div>
          </div>

          {/* Hero */}
          <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '10px', padding: '1.5rem', marginBottom: '1rem', color: 'white' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2, fontFamily: 'var(--font-display), sans-serif' }}>Votre artisan<br />de confiance</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.4 }}>Plus de 15 ans d&apos;exp&eacute;rience &agrave; votre service</div>
            <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #f97316, #fb923c)', padding: '0.35rem 0.8rem', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 600 }}>Demander un devis</div>
          </div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
            {[
              { icon: '\uD83D\uDD27', label: 'R\u00E9novation' },
              { icon: '\uD83C\uDFE0', label: 'Construction' },
              { icon: '\u26A1', label: 'D\u00E9pannage' },
            ].map((f) => (
              <div key={f.label} style={{ background: '#f8fafc', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{f.icon}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#334155' }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device indicators below */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
        {[
          { icon: '\uD83D\uDCBB', label: 'Desktop' },
          { icon: '\uD83D\uDCF1', label: 'Mobile' },
          { icon: '\uD83D\uDCCA', label: 'SEO optimis\u00E9' },
        ].map((d) => (
          <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>{d.icon}</span>
            <span>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
