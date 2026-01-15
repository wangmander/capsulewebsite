"use client";

import { useEffect, useState } from "react";

// Helper to generate deterministic random numbers
const seededRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};

const Capsule = ({
    color,
    rotation,
    scale,
    className,
}: {
    color: string;
    rotation: number;
    scale: number;
    className?: string; // for positioning
}) => {
    const colorClasses: Record<string, string> = {
        red: "bg-red-500",
        blue: "bg-blue-600",
        green: "bg-green-500",
        yellow: "bg-yellow-400",
    };

    return (
        <div
            className={`absolute w-32 h-48 rounded-[3rem] shadow-xl flex flex-col overflow-hidden ${className}`}
            style={{
                transform: `rotate(${rotation}deg) scale(${scale})`,
            }}
        >
            {/* Top Half: Colored Cap (Solid, Glossy) */}
            <div className={`h-[45%] w-full ${colorClasses[color]} relative z-20`}>
                {/* Highlight on cap */}
                <div className="absolute top-2 left-4 w-16 h-8 bg-white/30 rounded-full blur-md" />
                <div className="absolute top-1 right-3 w-4 h-12 bg-white/40 rounded-full blur-sm" />

                {/* Rim/Seam shadow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20" />
            </div>

            {/* Bottom Half: Clear Plastic (Translucent) */}
            <div className="h-[55%] w-full bg-white/20 backdrop-blur-md relative border-x border-b border-white/30 rounded-b-[3rem] z-10 flex items-center justify-center">
                {/* Glass reflections */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                <div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                {/* Internal "Content" (Folded Paper Hint) */}
                <div className="w-20 h-20 bg-white/80 shadow-inner rotate-3 rounded-lg p-2 opacity-80 scale-90">
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-1" />
                    <div className="w-3/4 h-2 bg-gray-200 rounded-full mb-2" />
                    <div className="w-full h-10 bg-gray-100 rounded" />
                </div>
            </div>
        </div>
    );
};

export default function CapsuleBackground() {
    const [capsules, setCapsules] = useState<any[]>([]);

    useEffect(() => {
        // Generate a dense, static layout
        // We'll create a grid of packed capsules with some randomness to simulate a pile
        const newCapsules = [];
        const colors = ["red", "blue", "green", "yellow"];
        const rows = 8;
        const cols = 6;

        // Create layers for depth
        for (let layer = 0; layer < 3; layer++) {
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const seed = layer * 100 + r * 10 + c;

                    // Add jitter to position
                    const jitterX = (seededRandom(seed) - 0.5) * 40;
                    const jitterY = (seededRandom(seed + 1) - 0.5) * 40;

                    // Random rotation
                    const rotation = (seededRandom(seed + 2) - 0.5) * 120; // -60 to 60 deg

                    // Random color
                    const color = colors[Math.floor(seededRandom(seed + 3) * colors.length)];

                    // Scale based on layer (back layers smaller/darker?)
                    // Actually keep them similar size but use z-index ordering implicitly by DOM order
                    const scale = 0.85 + (seededRandom(seed + 4) * 0.2);

                    newCapsules.push({
                        color,
                        top: `${(r * 15) - 10 + (jitterY / 10)}%`, // Percent based positioning
                        left: `${(c * 20) - 10 + (jitterX / 10)}%`,
                        rotation,
                        scale,
                        id: seed
                    });
                }
            }
        }
        setCapsules(newCapsules);
    }, []);

    return (
        <div className="relative w-full h-full bg-gray-200 overflow-hidden">
            {/* Background depth gradient */}
            <div className="absolute inset-0 bg-neutral-300 z-0" />

            <div className="relative w-[120%] h-[120%] -top-[10%] -left-[10%]">
                {capsules.map((cap) => (
                    <Capsule
                        key={cap.id}
                        color={cap.color}
                        rotation={cap.rotation}
                        scale={cap.scale}
                        className="transition-transform duration-[2000ms]"
                    // We render them using inline styles for positions
                    />
                ))}
                {/* Render loop again explicitly to inject style props that can't be classNames easily */}
                {capsules.map((cap) => (
                    <div
                        key={`wrapper-${cap.id}`}
                        className="absolute"
                        style={{
                            top: cap.top,
                            left: cap.left,
                            zIndex: Math.floor(cap.scale * 10) // rough z-index sort
                        }}
                    >
                        <Capsule {...cap} />
                    </div>
                ))}
            </div>

            {/* Vignette/Glass Overlay for the "Window" feel */}
            <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-black/5 to-transparent shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
        </div>
    );
}
