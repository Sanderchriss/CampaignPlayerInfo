import type { SessionNote } from "../types";

export const sessions: SessionNote[] = [
    {
        id: "s1",
        sessionNumber: 1,
        date: "2026-10-14",
        title: "Smoke over the Mills",
        summary:
            "The party arrived in Oakhaven amid a mill fire. Mira offered rooms in exchange for investigating. Suspicious claw marks were found on the burnt beams. The party set out toward Greywatch.",
        playerNames: ["Aldric", "Fizzwick", "Sera"],
    },
    {
        id: "s2",
        sessionNumber: 2,
        date: "2026-10-28",
        title: "The Dark Pass",
        summary:
            "Ambushed by kobolds in the pass. Captain Vance hired the party to scout Deepvein Mine. Found Brine's sealed journal in the keep infirmary.",
        playerNames: ["Aldric", "Fizzwick", "Sera", "Thodin"],
    },
];