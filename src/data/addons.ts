export interface Addon {
    id: string;
    icon: string;
    name: string;
    description: string;
}

// Les fonctionnalités avancées sont désormais intégrées dans les plans Confort et Premium.
// Ce fichier est conservé pour compatibilité avec les tests existants.
export const addons: Addon[] = [];
