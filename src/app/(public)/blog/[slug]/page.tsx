import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/blog';
import styles from './article.module.css';
import ArticleClient from './ArticleClient';

const SITE_URL = 'https://www.opti-pro.fr';

/**
 * SSG : génération statique de toutes les routes au build.
 */
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * Metadata dynamique par article.
 */
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article introuvable',
    };
  }

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: article.titre,
    description: article.description,
    keywords: article.motsCles,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.titre,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.datePublication,
      authors: ['Pierre Laurent'],
      tags: article.motsCles,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.titre,
      description: article.description,
    },
  };
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.slug, 3);
  const url = `${SITE_URL}/blog/${article.slug}`;

  // JSON-LD Article (BlogPosting)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.titre,
    description: article.description,
    url,
    datePublished: article.datePublication,
    dateModified: article.dateMaj || article.datePublication,
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/a-propos#pierre-laurent`,
      name: 'Pierre Laurent',
      url: `${SITE_URL}/a-propos`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: article.image
      ? `${SITE_URL}${article.image.startsWith('/') ? '' : '/'}${article.image}`
      : `${SITE_URL}/og-image.jpg`,
    keywords: article.motsCles.join(', '),
    inLanguage: 'fr-FR',
  };

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.titre,
        item: url,
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>

      <ArticleClient article={article} relatedArticles={related} />
    </main>
  );
}
