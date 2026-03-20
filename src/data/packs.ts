export interface Pack {
    id: string;
    level: string;
    name: string;
    tagline: string;
    price: string;
    priceNum: number;
    target: string;
    features: string[];
    highlighted?: boolean;
    highlightLabel?: string;
}

export const optiboardPacks: Pack[] = [
    {
        id: 'self-service',
        level: 'Self-service',
        name: 'Self-service',
        tagline: 'Le logiciel seul — automatisez votre admin sans aide',
        price: '59€',
        priceNum: 59,
        target: 'Artisan autonome · Telegram + IA + Pennylane',
        features: [
            'Bot Telegram + assistant IA',
            'Devis PDF générés en 2 min',
            'Sync automatique Pennylane',
            'Planning & suivi projets',
            'Export comptable FEC',
            'Essai gratuit 14 jours',
        ],
    },
    {
        id: 'accompagne',
        level: 'Accompagné',
        name: 'Accompagné',
        tagline: 'Logiciel + assistant dédié — on gère votre admin au quotidien',
        price: '299€',
        priceNum: 299,
        target: 'Artisan qui délègue · Gestion complète par Pierre',
        features: [
            'Tout le plan Self-service',
            'Captures frais & justificatifs',
            'Gestion admin quotidienne par Pierre',
            'Relances impayés automatiques',
            'Onboarding personnalisé',
            'Support prioritaire',
        ],
        highlighted: true,
        highlightLabel: 'RECOMMANDÉ',
    },
    {
        id: 'premium',
        level: 'Premium',
        name: 'Premium',
        tagline: 'Accompagnement complet avec reporting et suivi stratégique',
        price: '499€',
        priceNum: 499,
        target: 'Entreprise 3-10 salariés · Multi-utilisateurs',
        features: [
            'Tout le plan Accompagné',
            'Appel hebdomadaire avec Pierre',
            'Reporting mensuel détaillé',
            'Multi-utilisateurs avec rôles',
            'Traitement prioritaire',
        ],
    },
];
