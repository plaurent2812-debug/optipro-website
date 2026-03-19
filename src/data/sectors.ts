export interface Sector {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    challenges: string;
    solution: string;
}

export const sectors: Sector[] = [
    {
        id: 'plombier',
        icon: '🔧',
        title: 'Plombiers & Chauffagistes',
        subtitle: 'Installation, dépannage, chaudière, climatisation…',
        challenges: "Sur le chantier de 7h à 19h. Le soir, épuisé face à une pile de devis à faire et des factures en attente. Résultat : devis envoyés en retard, chantiers perdus, impayés qui traînent.",
        solution: "Vous envoyez un vocal depuis le chantier, vous recevez le devis complet par email. Facturation en 1 clic, relances automatiques des impayés. Vous reprenez vos soirées.",
    },
    {
        id: 'electricien',
        icon: '⚡',
        title: 'Électriciens',
        subtitle: 'Installation, mise aux normes, domotique, photovoltaïque…',
        challenges: "Des chantiers complexes, des attestations de conformité, des situations de travaux en plusieurs fois. La paperasse s'accumule et votre comptable attend des documents que vous n'avez pas le temps de préparer.",
        solution: "Factures de situation automatiques (30%, 60%, solde), export FEC mensuel pour votre comptable, paiement en ligne par carte. Zéro délai, zéro effort.",
    },
    {
        id: 'menuisier',
        icon: '🪵',
        title: 'Menuisiers & Charpentiers',
        subtitle: 'Pose fenêtres, portes, parquet, aménagement intérieur…',
        challenges: "Des projets sur mesure difficiles à chiffrer rapidement, des clients qui demandent plusieurs variantes, et des devis qui prennent des heures à rédiger correctement.",
        solution: "Multi-devis par projet avec variantes et options (plan Premium). Le client voit son devis, l'accepte et signe en ligne. Vous ne vous déplacez plus pour une signature.",
    },
    {
        id: 'peintre',
        icon: '🎨',
        title: 'Peintres & Décorateurs',
        subtitle: 'Peinture intérieure/extérieure, ravalement, revêtements…',
        challenges: "Des petits chantiers en série, une trésorerie qui fluctue, des clients qui payent quand ils veulent. La gestion des impayés est une perte de temps et d'énergie.",
        solution: "Relances automatiques J+15, J+30, J+45. En moyenne, nos artisans récupèrent 2 000 à 5 000€/mois de factures oubliées. Dashboard trésorerie en temps réel.",
    },
    {
        id: 'macon',
        icon: '🧱',
        title: 'Maçons & Carreleurs',
        subtitle: 'Gros œuvre, rénovation, extension, terrasse, dallage…',
        challenges: "Des chantiers longs, des factures de situation à émettre au bon moment, des tickets de caisse fournisseurs à classer pour le comptable. Un casse-tête administratif permanent.",
        solution: "Photos de tickets → OCR automatique → montants extraits et classés par projet pour calculer vos marges réelles. Export comptable FEC chaque mois, votre comptable adore.",
    },
    {
        id: 'multi-corps',
        icon: '🏗️',
        title: 'Entreprises Multi-corps',
        subtitle: 'Rénovation complète, entreprise générale, 3-10 salariés…',
        challenges: "Plusieurs équipes sur le terrain, des collaborateurs qui ont besoin d'accéder aux devis et chantiers, une gestion administrative qui mobilise une ressource à plein temps.",
        solution: "Multi-utilisateurs avec rôles (artisan voit ses chantiers, admin voit tout). Une vraie secrétaire spécialisée bâtiment pour 3x moins cher qu'une embauche.",
    },
];
