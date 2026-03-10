export interface Addon {
    id: string;
    icon: string;
    name: string;
    description: string;
}

export const addons: Addon[] = [
    {
        id: 'optireponse',
        icon: '🤖',
        name: 'OptiRéponse',
        description: "Intelligence Artificielle de qualification de leads. Elle répond aux demandes entrantes et qualifie les besoins de vos futurs clients avant même que vous ne les rappeliez.",
    },
    {
        id: 'optirelance',
        icon: '💶',
        name: 'OptiRelance',
        description: "Système de recouvrement automatisé. Fini les impayés oubliés : OptiRelance suit vos factures et orchestre des relances douces mais fermes de manière 100% autonome.",
    },
    {
        id: 'opticlean',
        icon: '📄',
        name: 'OptiClean',
        description: "Reconnaissance de caractères (OCR) appliquée à vos factures fournisseurs. Scannez, le système extrait les données et prépare les paiements automatiquement.",
    },
];
