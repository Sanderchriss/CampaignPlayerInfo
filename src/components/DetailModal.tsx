import { useEffect } from "react";
import type { Npc, Item, Town } from "../types";

export type DetailEntity = Npc | Item | Town;

interface DetailModalProps {
    entity: DetailEntity;
    onClose: () => void;
}

function isNpc(e: DetailEntity): e is Npc {
    return "race" in e;
}
function isItem(e: DetailEntity): e is Item {
    return "rarity" in e;
}

// Renders a picture + text popup for towns, NPCs, and items.
export default function DetailModal({ entity, onClose }: DetailModalProps) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    ✕
                </button>
                <div className="modal-image-wrap">
                    <img src={entity.image} alt={entity.name} onError={imgFallback} />
                </div>
                <h2>{entity.name}</h2>

                {isNpc(entity) && (
                    <>
                        <p className="modal-subtitle">
                            {entity.race} · {entity.occupation}
                        </p>
                        <p>{entity.description}</p>
                    </>
                )}

                {isItem(entity) && (
                    <>
                        <p className="modal-subtitle">
                            {entity.rarity} · {entity.attunement ? "requires attunement" : "no attunement"}
                        </p>
                        <p>{entity.description}</p>
                        {entity.bearer && <p className="modal-note">Last seen with: {entity.bearer}</p>}
                    </>
                )}

                {!isNpc(entity) && !isItem(entity) && (
                    <>
                        <p>{entity.description}</p>
                        <dl className="modal-stats">
                            <dt>Population</dt>
                            <dd>{entity.population}</dd>
                            <dt>Government</dt>
                            <dd>{entity.government}</dd>
                        </dl>
                        <h3>Points of interest</h3>
                        <ul>
                            {entity.pointsOfInterest.map((poi) => (
                                <li key={poi}>{poi}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

// Shows a friendly placeholder if the artwork file is missing.
function imgFallback(e: React.SyntheticEvent<HTMLImageElement>) {
    const el = e.currentTarget;
    el.src =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="#2b2440"/><text x="50%" y="50%" fill="#9d8fbf" font-family="serif" font-size="20" text-anchor="middle">No image yet</text></svg>`
        );
}