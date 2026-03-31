import { ImageResponse } from 'next/og';

export const alt = 'OptiPro - Conseil & développement sur mesure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            backgroundColor: '#ffffff',
            padding: '2rem 4rem',
            borderRadius: '2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '110px', fontWeight: '800', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.03em' }}>
                <span style={{ color: '#0d1b40' }}>Opti</span>
                <span style={{ color: '#e86d00' }}>Pro</span>
            </div>
        </div>
        
        <div
          style={{
            fontSize: '48px',
            color: '#1e293b',
            lineHeight: 1.4,
            textAlign: 'center',
            fontWeight: '600',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Conseil & développement sur mesure
        </div>
        <div
          style={{
            fontSize: '36px',
            color: '#64748b',
            marginTop: '20px',
            textAlign: 'center',
            fontWeight: '500',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          pour artisans, TPE et indépendants
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
