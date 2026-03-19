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
        id: 'starter',
        level: 'Starter',
        name: 'Starter',
        tagline: "Zéro paperasse pour l\u2019artisan solo",
        price: '299€',
        priceNum: 299,
        target: 'Artisan solo · 5-10 chantiers/mois',
        features: [
            'Devis et factures illimités',
            'Gestion clients et projets',
            'Planning et rappels automatiques',
            'Notifications en temps réel',
            'Export comptable CSV',
            'Paiement en ligne (Stripe)',
        ],
    },
    {
        id: 'confort',
        level: 'Confort',
        name: 'Confort',
        tagline: 'Zéro impayé, zéro stress',
        price: '399€',
        priceNum: 399,
        target: 'Artisan établi · 10-20 chantiers/mois',
        features: [
            'Tout le plan Starter',
            'Relances automatiques impayés (J+15, J+30, J+45)',
            'Portail client (signature en ligne, suivi chantier)',
            'Justificatifs photo OCR (tickets, factures fournisseur)',
        ],
        highlighted: true,
        highlightLabel: 'LE PLUS CHOISI',
    },
    {
        id: 'premium',
        level: 'Premium',
        name: 'Premium',
        tagline: 'Devis en 30 secondes par vocal',
        price: '549€',
        priceNum: 549,
        target: 'Entreprise 3-10 salariés',
        features: [
            'Tout le plan Confort',
            'Assistant IA : devis en 30s par vocal ou texte',
            'Multi-devis par projet (variantes, options)',
            'Export comptable avancé (FEC — Pennylane, Indy…)',
            'Multi-utilisateurs avec rôles',
        ],
    },
];
