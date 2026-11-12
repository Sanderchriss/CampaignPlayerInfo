import type { Town } from "../types";

export const towns: Town[] = [
    {
        id: "tasburg",
        name: "Tasburg",
        description:
            "A prosperous logging town on the banks of the Silverflow river. Oakhaven's mills supply timber to half the coast, and its tavern, The Split Barrel, is the best place to hear rumours for a hundred miles.",
        population: "2,400 (mostly humans and halflings)",
        government: "Town council led by Speaker Bram Alden",
        pointsOfInterest: [
            "The Split Barrel (tavern)",
            "Old Mill Market",
            " Shrine of the Green Mother",
        ],
        image: "./town/tasburgscene.png",
        position: { x: 10.32, y: 10.44 },
    },
    {
        id: "greywatch",
        name: "Greywatch Keep",
        description:
            "A weathered fortress guarding the mountain pass. The garrison is underpaid, the walls are cracking, and something has been picking off scouts near the old mine.",
        population: "350 soldiers and staff",
        government: "Military rule under Captain Isolde Vance",
        pointsOfInterest: [
            "The Broken Tower",
            "Deepvein Mine (sealed)",
            "The Mess Hall",
        ],
        image: "images/towns/greywatch.jpg",
        position: { x: 0.71, y: 0.22 },
    },
    {
        id: "saltmarsh",
        name: "Saltmarsh",
        description:
            "A fog-wrapped fishing port where the lighthouse has been dark for a month and the fisherfolk whisper about lights beneath the waves.",
        population: "1,100",
        government: "Harbormaster's council",
        pointsOfInterest: [
            "The Dark Lantern (lighthouse)",
            "Fishwife's Wharf",
            "Temple of Umberlee",
        ],
        image: "images/towns/saltmarsh.jpg",
        position: { x: 0.58, y: 0.78 },
    },
];