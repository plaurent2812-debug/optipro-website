import type { Metadata } from 'next';
import ProjectCard from '@/components/ui/ProjectCard';
import AuditCta from '@/components/ui/AuditCta';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio — Sites web et applications sur mesure',
  description:
    'Découvrez les projets réalisés par OptiPro — sites sur mesure, web apps et automatisations pour artisans et TPE. Exemples concrets avec résultats.',
  alternates: {
    canonical: '/realisations',
  },
  openGraph: {
    title: 'Réalisations OptiPro — Projets sur mesure',
    description:
      'Sites web, applications et automatisations : exemples concrets de projets réalisés pour artisans et TPE.',
  },
};

const realisationsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
        { '@type': 'ListItem', position: 2, name: 'Réalisations', item: 'https://www.opti-pro.fr/realisations' },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.opti-pro.fr/realisations#webpage',
      url: 'https://www.opti-pro.fr/realisations',
      name: 'Réalisations OptiPro — Projets pour artisans et TPE',
      isPartOf: { '@id': 'https://www.opti-pro.fr/#website' },
      about: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'ItemList',
      name: 'Réalisations OptiPro',
      description: "Projets de développement et conseil réalisés pour artisans, TPE et indépendants",
      url: 'https://www.opti-pro.fr/realisations',
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: p.url ?? `https://www.opti-pro.fr/realisations#${p.id}`,
      })),
    },
  ],
};

export default function RealisationsPage() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      <script type="application/ld+json">{JSON.stringify(realisationsJsonLd)}</script>
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
            Réalisations
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
            }}
          >
            Chaque projet part d&apos;un problème concret et aboutit à une
            solution sur mesure. Voici quelques exemples.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '0 0 3rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <AuditCta />
        </div>
      </section>
    </main>
  );
}
