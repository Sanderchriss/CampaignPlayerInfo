export interface LatLng {
    x: number; // 0..1 fraction of map width
    y: number; // 0..1 fraction of map height
}

export interface Town {
    id: string;
    name: string;
    description: string;
    population: string;
    government: string;
    pointsOfInterest: string[];
    image: string; // path under public/images/
    position: LatLng;
}

export interface Npc {
    id: string;
    name: string;
    race: string;
    occupation: string;
    description: string;
    secrets: string; // DM eyes only - remove before publishing if needed
    image: string;
    townId?: string;
}

export interface Item {
    id: string;
    name: string;
    rarity: "common" | "uncommon" | "rare" | "very rare" | "legendary";
    description: string;
    attunement: boolean;
    image: string;
    bearer?: string;
}

export interface SessionNote {
    id: string;
    sessionNumber: number;
    date: string;
    title: string;
    summary: string;
    playerNames: string[];
}