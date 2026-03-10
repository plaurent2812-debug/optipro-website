export interface Sector {
    id: string;
    title: string;
    subtitle: string;
    challenges: string;
    solution: string;
}

export const sectors: Sector[] = [
    {
        id: 'artisans',
        title: 'Artisans BTP',
        subtitle: 'Plombier, Électricien, Menuisier, Rénovation...',
        challenges: "Vous êtes sur les chantiers toute la journée. Le soir, vous êtes épuisé et l'administratif s'accumule. Devis en retard = chantiers perdus. Factures non faites = trésorerie à sec.",
        solution: "OptiPro prend le relais. Nous préparons vos devis sur vos indications, nous transformons vos bons de travaux en factures immédiates, et nous relançons les impayés. Vous ne perdez plus d'argent.",
    },
    {
        id: 'tpe',
        title: 'TPE & Évènementiel',
        subtitle: "Logistique, Organisation d'événements, Services...",
        challenges: "Des projets complexes avec multiples prestataires. Suivre la rentabilité réelle de chaque événement est un cauchemar administratif. La facturation est un flux tendu.",
        solution: "OptiPro structure votre back-office. Nous mettons en place des tableaux de bord par projet pour que vous sachiez exactement ce que vous gagnez. Nous gérons le flux facturation/fournisseurs pour fluidifier votre activité.",
    },
    {
        id: 'freelances',
        title: 'Indépendants & Freelances',
        subtitle: 'Immobilier, Consultants, Coachs, Photographes...',
        challenges: "Votre valeur ajoutée est sur le terrain ou en conseil, pas dans Excel. L'administratif est une charge mentale qui vous empêche de développer votre business sereinement.",
        solution: "OptiPro devient votre assistant administratif externalisé. Nous classons, nous facturons, nous préparons tout pour votre comptable. Vous gagnez en sérénité et en temps commercial.",
    },
];
