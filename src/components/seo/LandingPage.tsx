import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AuditCta from '@/components/ui/AuditCta';

export interface LandingPageProps {
  // Hero
  badge: string;
  h1: string;
  intro: string;
  // Pain points (problèmes du métier ciblé)
  painSection: {
    title: string; // formulé en question si possible
    points: string[];
  };
  // Offre principale mise en avant (depuis offerCategories)
  featuredOffer?: {
    name: string;
    price: string;
    delay?: string;
    description: string;
    features: string[];
  };
  // Process / méthode
  process: Array<{ step: string; title: string; description: string }>;
  // FAQ (importante pour GEO/AI citations)
  faq: Array<{ question: string; answer: string }>;
  // Local context (mentions de villes/zone)
  localMentions?: string[];
  // Section spécifique métier — différenciation E-E-A-T (anti-near-duplicate)
  industryContext?: {
    title: string;
    intro: string;
    keyFacts: Array<{ stat: string; label: string; source?: string }>;
    miniCases?: Array<{ situation: string; result: string }>;
    insight?: string;
  };
  // Schema additionnel (BreadcrumbList + Service custom)
  jsonLd: object;
}

export default function LandingPage({
  badge,
  h1,
  intro,
  painSection,
  featuredOffer,
  process,
  faq,
  localMentions,
  industryContext,
  jsonLd,
}: LandingPageProps) {
  return (
    <main style={{ paddingTop: '5rem' }}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* ===== HERO ===== */}
      <section style={{ padding: '3rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(249, 115, 22, 0.08)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              borderRadius: '999px',
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
            }}
          >
            {badge}
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {h1}
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            {intro}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">
              Premier appel — gratuit
            </Button>
            <a
              href="tel:+33670259333"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.4rem',
                color: 'var(--primary)',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid var(--border)',
                borderRadius: '8px',
              }}
            >
              📞 06 70 25 93 33
            </a>
          </div>
          {localMentions && localMentions.length > 0 && (
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '1.5rem' }}>
              Interventions à {localMentions.join(', ')}
            </p>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PAIN POINTS ===== */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '2rem',
              lineHeight: 1.25,
            }}
          >
            {painSection.title}
          </h2>
          <ul style={{ display: 'grid', gap: '1rem', listStyle: 'none', padding: 0 }}>
            {painSection.points.map((point, i) => (
              <li
                key={i}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: 'var(--secondary)',
                  fontSize: '0.97rem',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: 'var(--danger)', flexShrink: 0, fontSize: '1.1rem' }}>✕</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== OFFRE MISE EN AVANT ===== */}
      {featuredOffer && (
        <section style={{ padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '16px',
                padding: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    Offre recommandée
                  </p>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>
                    {featuredOffer.name}
                  </h2>
                  {featuredOffer.delay && (
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Livré en {featuredOffer.delay}</p>
                  )}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>
                  {featuredOffer.price}
                </div>
              </div>
              <p style={{ color: 'var(--secondary)', fontSize: '0.97rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {featuredOffer.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {featuredOffer.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'var(--secondary)', fontSize: '0.93rem' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
              >
                Voir toutes les offres →
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="section-divider" />

      {/* ===== INDUSTRY CONTEXT ===== Section différenciatrice par métier (anti near-duplicate) */}
      {industryContext && (
        <>
          <section style={{ padding: '4rem 0', background: 'var(--surface-subtle, #fafafa)' }}>
            <div className="container" style={{ maxWidth: '820px' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.25,
                }}
              >
                {industryContext.title}
              </h2>
              <p
                style={{
                  color: 'var(--secondary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                {industryContext.intro}
              </p>

              {/* Stats clés sectorielles */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                }}
              >
                {industryContext.keyFacts.map((fact, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.4rem' }}>
                      {fact.stat}
                    </div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      {fact.label}
                    </div>
                    {fact.source && (
                      <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Source : {fact.source}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mini cas concrets */}
              {industryContext.miniCases && industryContext.miniCases.length > 0 && (
                <>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>
                    Situations rencontrées sur le terrain
                  </h3>
                  <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                    {industryContext.miniCases.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderLeft: '3px solid var(--accent)',
                          borderRadius: '8px',
                          padding: '1.1rem 1.25rem',
                        }}
                      >
                        <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                          <strong style={{ color: 'var(--primary)' }}>Situation :</strong> {c.situation}
                        </p>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                          <strong style={{ color: 'var(--accent)' }}>→ Résultat :</strong> {c.result}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Insight final */}
              {industryContext.insight && (
                <div
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    fontStyle: 'italic',
                    color: 'var(--secondary)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                >
                  💡 {industryContext.insight}
                </div>
              )}
            </div>
          </section>
          <div className="section-divider" />
        </>
      )}

      {/* ===== PROCESS ===== */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '2.5rem',
              textAlign: 'center',
              lineHeight: 1.25,
            }}
          >
            Comment se déroule un projet ?
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {process.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(249, 115, 22, 0.1)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FAQ ===== */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            Questions fréquentes
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {faq.map((item, i) => (
              <details
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                }}
              >
                <summary
                  style={{
                    color: 'var(--primary)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    listStyle: 'none',
                  }}
                >
                  {item.question}
                </summary>
                <p
                  style={{
                    color: 'var(--secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    marginTop: '0.75rem',
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FONDATEUR ===== */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '2rem',
              alignItems: 'center',
              maxWidth: '720px',
              margin: '0 auto',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <Image
              src="/pierre-laurent.png"
              alt="Pierre Laurent, fondateur d'OptiPro"
              width={100}
              height={100}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Votre interlocuteur
              </p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                Pierre Laurent — Fondateur OptiPro
              </h3>
              <p style={{ color: 'var(--secondary)', fontSize: '0.93rem', lineHeight: 1.6 }}>
                10 ans d&apos;expérience auprès d&apos;artisans et TPE. Un interlocuteur unique du diagnostic à la livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <AuditCta />
        </div>
      </section>
    </main>
  );
}
