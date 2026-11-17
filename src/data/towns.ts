import type { Town } from "../types";

export const towns: Town[] = [
    {
        id: "tasburg",
        name: "Hovedstaden Tasburg",
        description:
            "Tasburg er Xohos største og mest befolkede by, med Krassslottet i midten som byens perle. Der bor Loxodonen Kong Brodar, kongen av Xohos.",
        population: "~ 80 000",
        government: "Monarki, av Kong Brodar",
        pointsOfInterest: [
            "The Split Barrel (tavern)",
            "Old Mill Market",
            " Shrine of the Green Mother",
        ],
        image: "./town/tasburgscene.png",
        position: { x: 0.61, y: 0.64 },
    },
    {
        id: "abral",
        name: "Abral",
        description:
            "Abral er et av de eldste befolkede områdene i Xohos, noe som kan synes på de mange ruinene man kan finne rundt i landet. Deler av landet har med de siste hundre årene blitt overgrodd av sump, men arkeologer finner hele tiden nye ruiner og bosettinger dypt i jungelen. Landet styres av 6 hus som møtes ofte for å styre landet i et slag Føydalisme. Det er ofte politiske intriger og drama, men har hatt en fredsavtale siden en borgerkrig for 600 år siden, der Hus Åbla og Hus Rult bestemte seg for å forsøke et kupp mot de andre husene. Alle kan bli medlem av husene etter å ha vist seg nyttig for de, og frilansere er alltid velkommen til å gjøre oppdrag for de.",
        population: "~10 000",
        government: "Føydalisme mellom de 6 husene",
        pointsOfInterest: [
            "Hus Åbla",
            "Hus Rult",
            "Hus Kord",
            "Hus Leif",
            "Hus Prenn",
            "Hus Quen",
        ],
        image: "./town/abral.jpg",
        position: { x: 0.41, y: 0.06 },
    },
    {
        id: "nung",
        name: "Nung",
        description:
            "Der magi hadde sin begynnelse på kontinentet, og bygget rundt trolldomsskolen. Idag ligger trolldomsskolen Frøns-Instittutet i sentrum, og tiltrekker tusenvis av unge magikere hvert år",
        population: "~40 000",
        government: "Teknokrati",
        pointsOfInterest: [
            "Frøns instituttet",
            "Savras Tempel",
            "Det sorte tårn",
        ],
        image: "./town/nung.jpg",
        position: { x: 0.28, y: 0.54 },
    },
    {
        id: "odberg",
        name: "Odberg",
        description:
            "Et utkantsstrøk der mesteparten av Xohos' agrikultur skjer. Endeløse åkre, et hav av kuer, og bønder så langt øyet ser.",
        population: "~400",
        government: "Ordfører",
        pointsOfInterest: [
            "wip",
            "wip",
            "wip",
        ],
        image: "./town/odberg.jpg",
        position: { x: 0.60, y: 0.84 },
    },
    {
        id: "poyos",
        name: "Poyos",
        description:
            "En liten utpostbygd ved Falkerhavet. Omgitt av klipper mot havet, og en tett skog rundt bygda, får Poyos få besøkende utenom de tilreisende handelsmennene. Bygda består av små laftede hus med halm på taket,  med et par større gårder her og der. I midten av bygda står en bronsestatue av “Helten”, en Poyos-født helt som ingen riktig husker hva gjorde eller hva het, men er bygdas stolthet uansett.",
        population: "~1200, Består nesten utelukkende av dverger, gnomer og halfling",
        government: "",
        pointsOfInterest: [
            "Den salte Sjøulk",
            "Halvards Goodies",
            "Fyrtårnet",
        ],
        image: "./town/poyos.jpg",
        position: { x: 0.83, y: 0.80 },
    },
    {
        id: "pria",
        name: "Pria",
        description:
            "Bygget på en gammel garnisone fra oldtiden. Den er idag et strategisk knutepunkt for reisende med sine mange reiseveier. Man kan reise dit med kjerre til lands, elvebåt til vanns, eller ned i underdark via åpningen der. Det har gjort det til et farlig sted hvor mange kriminelle driver sine tvilsomme bedrifter.",
        population: "~2500 offisielt, uoffisielt sikkert flere",
        government: "Greve, men gjengene styrer i virkeligheten",
        pointsOfInterest: [
            "Garnisonen",
            "Underdark",
            "Elvebåten",
        ],
        image: "./town/pria.jpg",
        position: { x: 0.67, y: 0.24 },
    },
    {
        id: "sporan",
        name: "Sporan",
        description:
            "Sporan er landsbyen tiden glemte. Det er et knutepunkt for handel rundt på kontinentet, og bringer med seg mange interessante varer og personer.",
        population: "~400",
        government: "Ordfører",
        pointsOfInterest: [
            "Hai-Kroa",
            "Skogstempelet",
            "Spøkelseshuset",
        ],
        image: "./town/sporan.jpg",
        position: { x: 0.72, y: 0.4 },
    },
    {
        id: "tugan",
        name: "Tugan",
        description:
            "Den nordligste byen i Xohos. Driver mest med gruvedrift og mineralutvinning.",
        population: "~2000",
        government: "Gruve-eier",
        pointsOfInterest: [
            "Tugan gruve",
            "Fjars' smie",
            "Otrava vulkanen",
        ],
        image: "./town/tugan.jpg",
        position: { x: 0.76, y: 0.1 },
    },
    {
        id: "veskog",
        name: "Veskog",
        description:
            "Veskog er en liten tømmerbygd midt i den store Velde-skogen. Deres tette tilknyttning til skogen har gjort at de lever av og vokser med naturen.",
        population: "~1200",
        government: "Tømmerer",
        pointsOfInterest: [
            "Veskog sagbruk",
            "wip",
            "wip",
        ],
        image: "./town/veskog.jpg",
        position: { x: 0.33, y: 0.38 },
    },
    {
        id: "vlada",
        name: "Vlada",
        description:
            "Vlada ligger i det kalde og øde høyfjellet, midt i Xohos. Byen er fanget i en evig vinter, noe som har satt spor i lokalbefolkningen. Vlada ble bygget som et resultat av feilet forsøk på å skape Dragesepteret. En trylleformel gikk galt, og en rift i tid-rom kontinuet ble resultatet. Et hull til Is-planet står åpent, og på 2000 år har ingen klart å lukke det. Det er derfor Vlada er dekket i is og snø. For å beskytte mot farene som jevnlig prøver å komme seg igjennom portalen, satte de ned en garnisone for å beskytte vår verden. Det er denne garnisonen som idag er kjent som Vlada. I løpet av flere 1000 år har befolkningen og byen økt til en av kontinentets største byer. Det viktige oppdraget er derimot fremdeles førsteprioritet hos etterkommerne, og alle borgere må tjenestegjøre 10% av livet sitt. Resultatet av denne plikten i et ugjestmildt miljø er et skarpt og direkte folk, uten så mye humor. Byggene er lagd praktiske i stein og tømmer og uten så mye estetikk. Inne i hoved-domen der riften ligger, er det også en adult red dragon, med navn Mizut. Å kunne bruke ildkrefter er en sterk fordel, og alle innbyggere ser opp til Mizut for hans ild og styrke.",
        population: "~30 000",
        government: "Ordfører",
        pointsOfInterest: [
            "Hoved-domen",
            "Smia 'Folkets vakt'",
            "Kossuths kirke",
        ],
        image: "./town/vlada.jpg",
        position: { x: 0.53, y: 0.32 },
    },
    {
        id: "soppskogen",
        name: "Soppskogen",
        description:
            "Gjemt med gammel magi, soppskogen er hjemmet til Campestriene. Kun inviterte kan finne det, og beveger seg ulike steder i vår verden.",
        population: "Ukjent",
        government: "Soppkongen",
        pointsOfInterest: [
            "Soppskogen skole",
            "ukjent",
            "ukjent",
        ],
        image: "./town/soppskogen.jpg",
        position: { x: 0.7, y: 0.44 },
    },
];