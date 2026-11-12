import type { Item } from "../types";

export const items: Item[] = [
    {
        id: "lantern",
        name: "Brine's Storm Lantern",
        rarity: "rare",
        description:
            "A brass lantern that burns without oil. Its light reveals creatures hidden by illusion or invisibility within 30 feet, but it dims to embers whenever its bearer lies.",
        attunement: true,
        image: "./item/kniv.jpg",
        bearer: "Old Brine (missing)",
    },
    {
        id: "axe",
        name: "Widowmaker's Axe",
        rarity: "uncommon",
        description:
            "A woodcutter's greataxe from the Oakhaven mills. On a critical hit against a plant creature, the axe deals an extra 2d6 slashing damage.",
        attunement: false,
        image: "images/items/axe.jpg",
        bearer: "wip",
    },
    {
        id: "compass",
        name: "Compass of the Drowned",
        rarity: "very rare",
        description:
            "Its needle always points to the nearest submerged corpse. Faintly weeps salt water at dawn.",
        attunement: true,
        image: "images/items/compass.jpg",
        bearer: "wip",
    },
];