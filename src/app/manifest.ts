import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OptiPro — Conseil & développement sur mesure',
    short_name: 'OptiPro',
    description:
      'Audit, création de sites et web apps sur mesure, automatisation pour artisans, TPE et indépendants.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d1b40',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
