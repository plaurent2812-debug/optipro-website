import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/blog';
import styles from './blog-list.module.css';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'Blog — Conseils pour artisans et TPE | OptiPro',
  description:
    "Guides pratiques, retours d'expérience et conseils concrets pour les artisans et TPE qui veulent reprendre le contrôle de leur temps et de leurs outils.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog OptiPro — Ressources pour artisans et TPE',
    description:
      "Des guides pratiques pour artisans et TPE qui veulent reprendre le contrôle de leur temps.",
    url: 'https://www.opti-pro.fr/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog OptiPro',
    url: 'https://www.opti-pro.fr/blog',
    description:
      "Guides pratiques pour artisans et TPE — automatisation, productivité, site web, gestion.",
    publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
    inLanguage: 'fr-FR',
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.titre,
      description: a.description,
      datePublished: a.datePublication,
      url: `https://www.opti-pro.fr/blog/${a.slug}`,
      author: {
        '@type': 'Person',
        name: 'Pierre Laurent',
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.opti-pro.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.opti-pro.fr/blog',
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>

      <BlogListClient articles={articles} />
    </main>
  );
}
