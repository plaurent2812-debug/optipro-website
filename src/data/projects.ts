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
}

export const projects: Project[] = [
  {
    id: 'probalab',
    title: 'ProbaLab',
    client: 'ProbaLab.net',
    sector: 'Application SaaS & Paris Sportifs',
    context: 'Conception d\'une plateforme web spécialisée dans l\'analyse et le calcul de probabilités sportives (Football européen et NHL).',
    problem: 'Le client avait besoin d\'une plateforme technique capable de traiter des algorithmes de calcul complexes et de présenter des probabilités croisées par type de pari pour aider à la décision.',
    solution: 'Développement complet d\'une Web App intégrant des modèles de Machine Learning. Création d\'une infrastructure robuste avec un modèle d\'abonnement Freemium géré de bout en bout via des paiements Stripe.',
    results: [
      'Analyse et calcul de données en temps réel via Machine Learning',
      'Plateforme prête au "scale" pour la gestion de milliers de paris',
      'Parcours utilisateur d\'abonnement fluide intégré avec Stripe (Freemium)'
    ],
    tags: ['SaaS', 'Web App', 'Machine Learning', 'Stripe API'],
  }
];
