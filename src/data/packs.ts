export interface Pack {
    id: string;
    level: string;
    name: string;
    tagline: string;
    price: string;
    setupFee: string;
    features: string[];
    highlighted?: boolean;
    highlightLabel?: string;
}

export interface ServicePack {
    id: string;
    name: string;
    price: string;
    description: string;
    highlights: string[];
    features: string[];
    hours: string;
    highlighted?: boolean;
    highlightLabel?: string;
    contactParam: string;
}

export const optiboardPacks: Pack[] = [
    {
        id: 'optipilot',
        level: 'Niveau 1',
        name: 'OptiPilot 80',
        tagline: 'Visibilité & Contrôle',
        price: '250€',
        setupFee: '200€',
        features: [
            'Trésorerie en temps réel',
            'Suivi du CA encaissé',
            'Agenda chantiers centralisé',
        ],
    },
    {
        id: 'optiexpert',
        level: 'Niveau 2',
        name: 'OptiExpert 90',
        tagline: 'Sérénité & Rentabilité',
        price: '550€',
        setupFee: '350€',
        features: [
            'Tout ce qui est dans OptiPilot',
            'Alertes automatisées de retards',
            'Calcul automatique de la marge réelle par chantier',
        ],
        highlighted: true,
        highlightLabel: 'LE PLUS CHOISI',
    },
    {
        id: 'optiintegral',
        level: 'Niveau 3',
        name: 'OptiIntégral 100',
        tagline: 'Performance Totale',
        price: '950€',
        setupFee: '500€',
        features: [
            'Tout ce qui est dans OptiExpert',
            'Automatisation totale des flux',
            'Modèles prédictifs financiers (IA)',
        ],
    },
];

export const servicePacks: ServicePack[] = [
    {
        id: 'essentiel',
        name: 'Pack Essentiel',
        price: '199 €',
        description: "Pour freelances et entrepreneurs individuels. L'essentiel pour garder une gestion saine sans y passer vos soirées.",
        highlights: ['Partenaire joignable', 'Réflexion sur vos process'],
        features: [
            '1 session closing mensuelle',
            '1 vague de relances simples',
            'Préparation dossier comptable',
        ],
        hours: '3-4h / mois',
        contactParam: 'essentiel',
    },
    {
        id: 'confort',
        name: 'Pack Confort',
        price: '449 €',
        description: "Pour TPE et professionnels actifs. Un pilotage régulier pour fluidifier votre facturation et vos encaissements.",
        highlights: ['Anticipation trésorerie', 'Réflexion continue process'],
        features: [
            'Point hebdo (30-45min)',
            'Suivi continu devis/factures',
            'Relances régulières',
            'Tableau de bord simple',
        ],
        hours: '8-10h / mois',
        highlighted: true,
        highlightLabel: 'Recommandé',
        contactParam: 'confort',
    },
    {
        id: 'serenite',
        name: 'Pack Sérénité',
        price: '899 €',
        description: "Pour PME et entreprises structurées. Une délégation complète de votre back-office pour vous concentrer sur votre croissance.",
        highlights: ['Anticipation projets complets'],
        features: [
            'Back-office complet',
            'Lien direct expert-comptable',
            'Suivi par projet / chantier',
            'Point pilotage bi-mensuel',
        ],
        hours: '16-20h / mois',
        contactParam: 'serenite',
    },
];
