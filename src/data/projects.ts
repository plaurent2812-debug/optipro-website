export interface Project {
  id: string;
  title: string;
  client: string;
  sector: string;
  context: string;
  problem: string;
  solution: string;
  results: string[];
  tags: string[];
  images?: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'probalab',
    title: 'ProbaLab',
    client: 'ProbaLab.net',
    sector: 'Sports Data Analytics',
    context: 'Un expert en paris sportifs (football/NHL) souhaitait un outil d\'analyse offrant des probabilités mathématiques sur des centaines de matchs par semaine, basé sur l\'historique et l\'analyse prédictive.',
    problem: 'Nécessité d\'un back-end lourd pour assimiler des datas complexes, les parser avec des algorithmes poussés, ainsi qu\'un front-end capable d\'afficher les probabilités aux utilisateurs en temps réel via un système freemium.',
    solution: 'Création d\'une Single Page Application avec Next.js et Supabase, incluant des requêtes complexes sur les APIs de résultats sportifs. Intégration d\'un système complet d\'authentification, rôles d\'utilisateurs, paiements Stripe pour la partie "Pro" du site. L\'application calcule instantanément le "value bet" sans jamais prendre ou héberger de transaction de pari, tout reste 100% informatif.',
    results: [
      'Génération automatique de probabilités sur plus de 15 championnats',
      'Plateforme prête au "scale" pour analyser des milliers de matchs et cotes chaque jour',
      'Parcours utilisateur d\'abonnement fluide intégré avec Stripe (Freemium)'
    ],
    tags: ['Machine Learning', 'Next.js', 'Supabase', 'Python', 'Stripe CRM'],
    images: ['/probalab-1.png', '/probalab-2.png', '/probalab-3.png'],
    url: 'https://probalab.net'
  }
];
