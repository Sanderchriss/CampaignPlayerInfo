import { useEffect, useRef, useState } from "react";
import type { Town } from "../types";

interface MapViewProps {
    towns: Town[];
    onSelectTown: (town: Town) => void;
}

const MAP_IMAGE = "./Xohos.png";
const MAP_WIDTH = 2000;
const MAP_HEIGHT = 1200;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;

const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

export default function MapView({ towns, onSelectTown }: MapViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
    const drag = useRef({
        active: false,
        moved: false,
        startX: 0,
        startY: 0,
        originX: 0,
        originY: 0,
    });

    // Fit the whole map in the container on mount
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const scale = Math.min(
            el.clientWidth / MAP_WIDTH,
            el.clientHeight / MAP_HEIGHT
        );
        setView({
            scale,
            x: (el.clientWidth - MAP_WIDTH * scale) / 2,
            y: (el.clientHeight - MAP_HEIGHT * scale) / 2,
        });
    }, []);

    // Wheel zoom around the cursor (needs a non-passive listener)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            const rect = el.getBoundingClientRect();
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;

            setView((v) => {
                const scale = clamp(v.scale * factor, MIN_ZOOM, MAX_ZOOM);
                const mx = (px - v.x) / v.scale; // map point under cursor
                const my = (py - v.y) / v.scale;
                return { scale, x: px - mx * scale, y: py - my * scale };
            });
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    const onPointerDown = (e: React.PointerEvent) => {
        drag.current = {
            active: true,
            moved: false,
            startX: e.clientX,
            startY: e.clientY,
            originX: view.x,
            originY: view.y,
        };
    };

    const onPointerMove = (e: React.PointerEvent) => {
        const d = drag.current;
        if (!d.active) return;
        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;
        if (!d.moved && Math.hypot(dx, dy) > 4) {
            d.moved = true;
            // Capture only once it's a real drag, so pin clicks still work
            e.currentTarget.setPointerCapture(e.pointerId);
        }
        if (d.moved) {
            setView((v) => ({ ...v, x: d.originX + dx, y: d.originY + dy }));
        }
    };

    const onPointerUp = () => {
        drag.current.active = false;
    };

    return (
        <div
            ref={containerRef}
            className="map-container"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
        >
            <div
                className="map-world"
                style={{
                    width: MAP_WIDTH,
                    height: MAP_HEIGHT,
                    transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
                }}
            >
                <img src={MAP_IMAGE} alt="Map" draggable={false} />
                {towns.map((town) => (
                    <button
                        key={town.name}
                        type="button"
                        className="town-pin"
                        title={town.name}
                        style={{
                            left: `${town.position.x * 100}%`,
                            top: `${town.position.y * 100}%`,
                            // counter-scale so pins stay the same size when zooming
                            transform: `translate(-50%, -50%) scale(${1 / view.scale})`,
                        }}
                        onClick={() => {
                            if (!drag.current.moved) onSelectTown(town);
                        }}
                    >
                        <span className="town-pin-dot" />
                    </button>
                ))}
            </div>
        </div>
    );
}