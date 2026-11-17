import type { Npc } from "../types";

export const npcs: Npc[] = [
    {
        id: "berit",
        name: "Berit ",
        race: "Human",
        occupation: "Eventyrer, krovært, alenemor",
        description:
            "En mor som bestemte seg å bli eventyrer etter en tøff skillsmisse. Er nå ansvarlig for Hjerterom med daglig drift av kroa.",
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
            "En naturfagslærer i soppskogen. Etter en mulig kommunikasjonsfeil har Arvid bestemt at dette kan være hans gud, tarrasquen.",
        secrets: "Sold keep maps to a hooded buyer three weeks ago.",
        image: "./npc/campestris.jpg",
        townId: "soppskogen",
    },
    {
        id: "tarvin",
        name: "Kaptein Tarvin",
        race: "Minotaur",
        occupation: "Tidligere skipskaptein",
        description:
            "Opprinnelig fra Vlada, Kaptein Tarvin er en lav minotaur (fremdeles høyere enn folk flest) med et tatoverte horn og arr i ansiktet. Han er naturlig ledende og liker å ha alt på stell. Han har ikke lenger sitt skip, Den blå svane, og hjelper derfor Zvalda koordinere eventyrlauget med oppdrag i Vlada samtidig som han hjelper broren sin, Teivin drive familiens smie.",
        secrets: "Alive, held beneath the waves by kelpie sisters.",
        image: "./npc/tarvin.jpg",
        townId: "vlada",
    },
    {
        id: "olesya",
        name: "Olesya",
        race: "Half-elf",
        occupation: "Den siste gyldne akkorden",
        description:
            "Hun har brunt langt hår som går ned ene siden av skulderen, og har ofte en håndtromme med seg. Det siste medlemmet av Den Gylne akkord. Kvinnen avbildet i Virells medaljong, og Kvan'dars kone. Hun er sanger i Sporan, hvor hun lever sine dager ved å ikke tiltrekke seg mye oppmerksomhet. ",
        secrets: "Alive, held beneath the waves by kelpie sisters.",
        image: "./npc/olesya.jpg",
        townId: "sporan",
    },
    {
        id: "farlan",
        name: "Læremester Farlan",
        race: "Orc",
        occupation: "Legendarisk eventyrer, kongelig livvakt, læremester, nå i eksil",
        description:
            "Han var en legendarisk eventyrer, kjent for å ha bekjempet ondskap og monstre på egenhånd. Etter han ble for gammel for eventyr ble han valgt ut som Kong Brodars personlige livvakt. Han var det helt til snikmorderen drepte Brodars familie, hvor han gikk av i skam. I Veskog fant han gleden i å beskytte innbyggerne fra skogens farer, og et enkelt liv. Han ble et naturlig valg da Garin ble profetert som 'Den utvalgte' som skulle bringe fred til kontinentet i en tid med uro. Han trente opp Garin fra han var cirka 6 år, og lærte han alt han kunne i håp om at Garin skulle bli den beste krigeren. All tiden sammen gjorde at de vokste tett på, som adoptert far-sønn. Garin hadde derimot et mørke i seg, og en kaotisk energi Farlan ikke visste hvordan å fostre og kontrollere. Dette mørket resulterte i flere dystre episoder. Da Garin var 21 fikk Farlan et syn i framtiden der Garin var en mørk trollmann med Xohos brennende, og barn døde. I et svakt øyeblikk av ren desperasjon forsøkte Farlan å knivstikke Garin, og de to sloss. Resultatet var en Farlan som er døden nær, og Garin stikker av. Drevet av skammen sin går Farlan i eksil i en hytte i fjellene. Der tilbringer han dagene sine i dyp skam og ergrelse.",
        secrets: "Alive, held beneath the waves by kelpie sisters.",
        image: "./npc/farlan.jpg",
        townId: "veskog",
    },
    {
        id: "zvalda",
        name: "Kaptein Zvalda",
        race: "Tiefling",
        occupation: "Leder for Eventyrlauget",
        description:
            "Leder for eventyrlauget.Hun finner oppdrag, og fordeler de til grupper hun mener er en god match. \n" +
            "\n" +
            "Hun har lilla hud og et knust horn. Rundt 155 høy, men med en plate armour og to hamre som gjør den lille skikkelsen skremmende.",
        secrets: "Alive, held beneath the waves by kelpie sisters.",
        image: "./npc/zvalda.jpg",
        townId: "tasburg",
    },
];