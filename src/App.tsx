import { useState } from "react";
import MapView from "./components/MapView";
import DetailModal, { type DetailEntity } from "./components/DetailModal";
import CardGrid from "./components/CardGrid";
import { towns } from "./data/towns";
import { worldHistory } from "./data/world";
import { npcs } from "./data/npcs";
import { items } from "./data/items";
import { sessions } from "./data/sessions";

type Tab = "map" | "towns" | "npcs" | "items" | "sessions";
type Selection = { entity: DetailEntity };

const TABS: { id: Tab; label: string }[] = [
    { id: "map", label: "Map" },
    { id: "towns", label: "Places" },
    { id: "npcs", label: "NPCs" },
    { id: "items", label: "Items" },
    { id: "sessions", label: "Session Notes" },
];

export default function App() {
    const [tab, setTab] = useState<Tab>("map");
    const [selection, setSelection] = useState<Selection | null>(null);

    return (
        <div className="app">
            <header className="header">
                <h1>Campaign Compendium</h1>
                <nav>
                    {TABS.map((t) => (
                        <button
                            key={t.id}
                            className={tab === t.id ? "tab active" : "tab"}
                            onClick={() => setTab(t.id)}
                        >
                            {t.label}
                        </button>
                    ))}
                </nav>
            </header>

            <main>
                {tab === "map" && (
                    <>
                        <MapView
                            towns={towns}
                            onSelectTown={(town) => setSelection({ entity: town })}
                        />
                        <p className="hint">Click a pin to read about the town.</p>
                        <section className="world-history">
                            <h2>Historien om Xohos</h2>
                            {worldHistory.map((entry) => (
                                <article key={entry.title} className="history-entry">
                                    <h3>{entry.title}</h3>
                                    <p>{entry.text}</p>
                                </article>
                            ))}
                        </section>
                    </>
                )}

                {tab === "towns" && (
                    <CardGrid
                        cards={towns.map((t) => ({
                            id: t.id,
                            name: t.name,
                            subtitle: t.population,
                            image: t.image,
                        }))}
                        onSelect={(id) => {
                            const town = towns.find((t) => t.id === id)!;
                            setSelection({ entity: town });
                        }}
                    />
                )}

                {tab === "npcs" && (
                    <CardGrid
                        cards={npcs.map((n) => ({
                            id: n.id,
                            name: n.name,
                            subtitle: `${n.race} · ${n.occupation}`,
                            image: n.image,
                        }))}
                        onSelect={(id) => {
                            const npc = npcs.find((n) => n.id === id)!;
                            setSelection({ entity: npc });
                        }}
                    />
                )}

                {tab === "items" && (
                    <CardGrid
                        cards={items.map((i) => ({
                            id: i.id,
                            name: i.name,
                            subtitle: i.rarity,
                            image: i.image,
                        }))}
                        onSelect={(id) => {
                            const item = items.find((i) => i.id === id)!;
                            setSelection({ entity: item });
                        }}
                    />
                )}

                {tab === "sessions" && (
                    <div className="session-list">
                        {[...sessions]
                            .sort((a, b) => b.sessionNumber - a.sessionNumber)
                            .map((s) => (
                                <article key={s.id} className="session">
                                    <h3>
                                        Session {s.sessionNumber}: {s.title}
                                    </h3>
                                    <p className="session-meta">
                                        {s.date} · {s.playerNames.join(", ")}
                                    </p>
                                    <p>{s.summary}</p>
                                </article>
                            ))}
                    </div>
                )}
            </main>

            {selection && (
                <DetailModal
                    entity={selection.entity}
                    onClose={() => setSelection(null)}
                />
            )}
        </div>
    );
}