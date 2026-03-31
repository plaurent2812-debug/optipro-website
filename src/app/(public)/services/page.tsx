import type { Metadata } from 'next';
import ServiceStep from '@/components/ui/ServiceStep';
import AuditCta from '@/components/ui/AuditCta';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Audit & développement sur mesure — Services',
  description:
    'Audit gratuit, analyse, création de sites web et applications sur mesure, automatisation — la démarche OptiPro en 4 étapes pour artisans et TPE.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services OptiPro — Audit, création et automatisation sur mesure',
    description:
      'Découvrez notre approche complète en 4 étapes pour transformer vos outils et process.',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: "Audit de l'existant",
      description:
        "Analyse complète de vos outils, process quotidiens et points de friction. Rapport détaillé avec recommandations priorisées.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: 'FR',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Audit gratuit et sans engagement',
      },
    },
    {
      '@type': 'Service',
      name: 'Analyse des blocages',
      description:
        "Identification des tâches chronophages, priorisation des blocages et plan d'action concret adapté à votre budget.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: 'FR',
    },
    {
      '@type': 'Service',
      name: 'Création sur mesure',
      description:
        'Conception et développement de sites web, applications web, tableaux de bord et espaces clients adaptés à votre métier.',
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: 'FR',
    },
    {
      '@type': 'Service',
      name: 'Automatisation',
      description:
        "Connexion de vos outils entre eux et automatisation des tâches répétitives : devis, relances, synchronisations, exports.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: 'FR',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte l'audit ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'audit est 100% gratuit et sans engagement. Il permet d'identifier vos points de friction et de définir un plan d'action concret.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure un projet de création ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée dépend de la complexité du projet. Un site vitrine prend généralement 2 à 4 semaines, une application web sur mesure de 1 à 3 mois. Chaque projet est cadré dès l'analyse.",
      },
    },
    {
      '@type': 'Question',
      name: 'Travaillez-vous uniquement à Vence ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, OptiPro accompagne des clients partout en France. Basé à Vence (06), Pierre travaille aussi bien en local que 100% à distance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels types de clients accompagnez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "OptiPro accompagne principalement les artisans, TPE et indépendants qui perdent du temps sur des tâches administratives ou qui ont besoin d'outils numériques adaptés à leur métier.",
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que je garde la main sur mes outils après le projet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, absolument. Chaque projet inclut une formation et un accompagnement. Vous êtes autonome sur vos outils. Pierre reste disponible pour le support et l'évolution.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.opti-pro.fr/services' },
        ],
      })}</script>
      {/* Hero */}
      <section style={{ padding: '3rem 0 4rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
            }}
          >
            Une démarche complète, adaptée à votre métier
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
            }}
          >
            Pas de solution toute faite. On part de votre réalité, on identifie
            ce qui bloque, et on construit ce qu&apos;il vous faut.
          </p>
        </div>
      </section>

      {/* Timeline détaillée */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div className="timeline">
            {services.map((s) => (
              <ServiceStep key={s.id} step={s} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Qui est Pierre */}
      <section style={{ padding: '3rem 0', background: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="pierre-section">
            <div className="pierre-avatar">👨‍💻</div>
            <div className="pierre-content">
              <h3>Pierre Laurent</h3>
              <p style={{ marginBottom: '0.75rem' }}>
                Fondateur d&apos;OptiPro, j&apos;accompagne artisans, TPE et
                indépendants dans leur transformation numérique. Mon approche :
                comprendre votre métier avant de proposer des solutions.
              </p>
              <p>
                Un interlocuteur unique du début à la fin. Pas de commercial,
                pas de sous-traitance — c&apos;est moi qui analyse, conçoit et
                développe vos outils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Audit */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <AuditCta />
        </div>
      </section>
    </main>
  );
}
