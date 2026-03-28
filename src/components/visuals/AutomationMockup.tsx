'use client';

import { useState, useEffect, useCallback } from 'react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  delay: number;
}

const messages: Message[] = [
  { id: 1, type: 'user', content: '\uD83C\uDF99\uFE0F Terrasse 60m\u00B2 \u00E0 Bordeaux, client Dupont \u2014 carrelage ext\u00E9rieur, fourniture + pose', delay: 0 },
  { id: 2, type: 'bot', content: '\u23F3 G\u00E9n\u00E9ration du devis en cours...', delay: 1200 },
  { id: 3, type: 'bot', content: '\u2705 Devis #2026-089 g\u00E9n\u00E9r\u00E9\n\uD83D\uDCC4 Terrasse carrelage ext. 60m\u00B2\n\uD83D\uDCB0 6\u202F840\u20AC HT\n\uD83D\uDCCE PDF pr\u00EAt \u00E0 envoyer', delay: 3000 },
  { id: 4, type: 'user', content: 'Envoie au client \uD83D\uDC4D', delay: 5000 },
  { id: 5, type: 'bot', content: '\uD83D\uDCE4 Devis envoy\u00E9 \u00E0 client@email.fr\n\uD83D\uDD17 Synchro Pennylane \u2713\n\uD83D\uDCC5 Ajout\u00E9 au planning', delay: 6200 },
];

export default function AutomationMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = useCallback(() => {
    messages.forEach((msg) => {
      if (msg.type === 'bot') {
        setTimeout(() => setTyping(true), msg.delay - 800);
      }
      setTimeout(() => {
        setTyping(false);
        setVisibleMessages((prev) => [...prev, msg.id]);
      }, msg.delay);
    });
  }, []);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('automation-mockup');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, startAnimation]);

  return (
    <div id="automation-mockup" style={{
      background: '#0f172a',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
      maxWidth: '400px',
      fontFamily: 'var(--font-body), sans-serif',
    }}>
      {/* Header */}
      <div style={{
        background: '#1e293b',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid #334155',
      }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #f97316, #fb923c)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.9rem', fontWeight: 700, color: 'white',
        }}>OP</div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0' }}>OptiPro Bot</div>
          <div style={{ fontSize: '0.65rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            en ligne
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '1rem', minHeight: '280px', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {messages.map((msg) => (
          visibleMessages.includes(msg.id) && (
            <div
              key={msg.id}
              style={{
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                padding: '0.65rem 0.9rem',
                borderRadius: msg.type === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                background: msg.type === 'user' ? 'linear-gradient(135deg, #f97316, #fb923c)' : '#1e293b',
                color: msg.type === 'user' ? 'white' : '#e2e8f0',
                fontSize: '0.8rem',
                lineHeight: 1.5,
                whiteSpace: 'pre-line',
                animation: 'fadeUp 0.3s ease-out',
              }}
            >
              {msg.content}
            </div>
          )
        ))}

        {typing && (
          <div style={{
            alignSelf: 'flex-start',
            padding: '0.65rem 0.9rem',
            borderRadius: '12px 12px 12px 4px',
            background: '#1e293b',
            display: 'flex',
            gap: '4px',
          }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: '6px', height: '6px', borderRadius: '50%', background: '#64748b',
                  animation: `typingDot 1s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: '0.75rem 1rem',
        borderTop: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <div style={{ flex: 1, background: '#1e293b', borderRadius: '20px', padding: '0.5rem 1rem', fontSize: '0.75rem', color: '#475569' }}>
          Envoyer un message vocal ou texte...
        </div>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #f97316, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>{'\uD83C\uDF99\uFE0F'}</div>
      </div>
    </div>
  );
}
