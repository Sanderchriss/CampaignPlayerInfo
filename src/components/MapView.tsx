import { useEffect, useRef, useState } from "react";
import type { Town } from "../types";

interface MapViewProps {
    towns: Town[];
    onSelectTown: (town: Town) => void;
}

const MAP_IMAGE = "./Xohos.png";
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;

const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

export default function MapView({ towns, onSelectTown }: MapViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    // Real pixel size of the image, read on load. Pins are positioned as
    // fractions of THIS size, so changing a coordinate always moves the pin.
    const [dims, setDims] = useState({ width: 0, height: 0 });
    const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
    const drag = useRef({
        active: false,
        moved: false,
        startX: 0,
        startY: 0,
        originX: 0,
        originY: 0,
    });

    // Scale the image so it completely FILLS the container (like object-fit: cover).
    const fit = (width: number, height: number) => {
        const el = containerRef.current;
        if (!el || !width) return;
        const scale = Math.max(
            el.clientWidth / width,
            el.clientHeight / height
        );
        setView({
            scale,
            x: (el.clientWidth - width * scale) / 2,
            y: (el.clientHeight - height * scale) / 2,
        });
    };

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        setDims({ width: img.naturalWidth, height: img.naturalHeight });
        fit(img.naturalWidth, img.naturalHeight);
    };

    // Refit when the window resizes
    useEffect(() => {
        const onResize = () => fit(dims.width, dims.height);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [dims]);

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
                    width: dims.width,
                    height: dims.height,
                    transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
                }}
            >
                <img src={MAP_IMAGE} alt="Map" draggable={false} onLoad={onImageLoad} />
                {towns.map((town) => (
                    <button
                        key={town.id}
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