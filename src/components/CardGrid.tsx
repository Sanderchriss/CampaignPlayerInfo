interface Card {
    id: string;
    name: string;
    subtitle: string;
    image: string;
}

interface CardGridProps {
    cards: Card[];
    onSelect: (id: string) => void;
}

// Clickable grid of picture cards; opens the DetailModal on click.
export default function CardGrid({ cards, onSelect }: CardGridProps) {
    return (
        <div className="card-grid">
            {cards.map((c) => (
                <button key={c.id} className="card" onClick={() => onSelect(c.id)}>
                    <div className="card-image-wrap">
                        <img src={c.image} alt={c.name} loading="lazy" />
                    </div>
                    <div className="card-text">
                        <h3>{c.name}</h3>
                        <p>{c.subtitle}</p>
                    </div>
                </button>
            ))}
        </div>
    );
}