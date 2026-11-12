import type { Npc } from "../types";

export const npcs: Npc[] = [
    {
        id: "berit",
        name: "Berit ",
        race: "Human",
        occupation: "Eventyrer, krovært, alenemor",
        description:
            "Cheerful, sharp-eared, and fiercely protective of her patrons. Mira remembers every face that has ever passed through her doors and trades gossip as readily as ale.",
        secrets: "Secretly runs messages for the smugglers' ring in Saltmarsh.",
        image: "./npc/berit.jpg",
        townId: "Veskog",
    },
    {
        id: "taraskild",
        name: "Tar-Askild",
        race: "Campestri",
        occupation: "Naturfagslærer, Gud?",
        description:
            "A grizzled veteran with a silver-covered eyepatch. She speaks plainly and expects the same. Requests help personally from those who prove themselves.",
        secrets: "Sold keep maps to a hooded buyer three weeks ago.",
        image: "./npc/campestris.jpg",
        townId: "soppskogen",
    },
    {
        id: "zvalda",
        name: "Kaptein Zvalda",
        race: "Tiefling",
        occupation: "Leder for Eventyrlauget",
        description:
            "Salt-crusted and superstitious. Last seen rowing toward the reef at dusk. His journal washes ashore in a sealed bottle.",
        secrets: "Alive, held beneath the waves by kelpie sisters.",
        image: "./npc/zvalda.jpg",
        townId: "tasburg",
    },
];