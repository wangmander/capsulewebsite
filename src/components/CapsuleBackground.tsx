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
        purple: "bg-purple-600",
        orange: "bg-orange-500",
    };

    return (
        <div
            className={`absolute w-[14rem] h-[16rem] rounded-[50%] shadow-xl flex flex-col overflow-hidden ${className}`}
            style={{
                transform: `rotate(${rotation}deg) scale(${scale})`,
            }}
        >
            {/* Top Half: Colored Cap (Solid, Glossy) - Taller cap for toy feel */}
            <div className={`h-[50%] w-full ${colorClasses[color]} relative z-20`}>
                {/* Bright top highlight */}
                <div className="absolute top-4 left-8 w-24 h-12 bg-white/20 rounded-full blur-xl" />
                <div className="absolute top-2 right-6 w-6 h-12 bg-white/30 rounded-full blur-md" />

                {/* Rim/Seam shadow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10" />
            </div>

            {/* Bottom Half: Clear Plastic (Translucent) */}
            <div className="h-[50%] w-full bg-white/30 backdrop-blur-md relative border-x border-b border-white/40 rounded-b-[7rem] z-10 flex items-center justify-center">
                {/* Glass reflections */}
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-full blur-2xl" />
                <div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />

                {/* Internal "Content" (Folded Paper Hint) */}
                <div className="w-24 h-24 bg-white/90 shadow-sm rotate-6 rounded-lg p-3 opacity-60 scale-90 blur-[0.5px]">
                    <div className="w-full h-3 bg-gray-200 rounded-full mb-2" />
                    <div className="w-2/3 h-3 bg-gray-200 rounded-full mb-3" />
                    <div className="w-full h-12 bg-gray-100 rounded" />
                </div>
            </div>
        </div>
    );
};

export default function CapsuleBackground() {
    const [capsules, setCapsules] = useState<any[]>([]);

    useEffect(() => {
        // Generate a single-layer, large capsule layout
        // Use a shifted grid (hexagonal-ish packing) to minimize gaps without depth
        const newCapsules = [];
        const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
        // Fewer rows/cols because items are huge
        const rows = 5;
        const cols = 5;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const seed = r * 10 + c;

                // Shift every other row for tighter packing
                const xOffset = r % 2 === 0 ? 0 : 10;

                // Add randomness to position to break the perfect grid
                const jitterX = (seededRandom(seed) - 0.5) * 15;
                const jitterY = (seededRandom(seed + 1) - 0.5) * 15;

                // Rotation: full random 360 to feel tumbled
                const rotation = (seededRandom(seed + 2) * 360);

                // Random color
                const color = colors[Math.floor(seededRandom(seed + 3) * colors.length)];

                // Subtle scale variation
                const scale = 0.95 + (seededRandom(seed + 4) * 0.1);

                newCapsules.push({
                    color,
                    // Positioning logic:
                    // r * 18 -> spaced vertically
                    // c * 20 -> spaced horizontally
                    // offsets to center the grid slightly off-screen to cover edges
                    top: `${(r * 18) - 15 + (jitterY)}%`,
                    left: `${(c * 22) - 15 + xOffset + (jitterX)}%`,
                    rotation,
                    scale,
                    id: seed
                });
            }
        }
        setCapsules(newCapsules);
    }, []);

    return (
        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
            {/* Simple flat background */}
            <div className="absolute inset-0 bg-gray-50 z-0" />

            {/* Container for capsules - slightly oversized to allow bleeding off edges */}
            <div className="relative w-[110%] h-[110%] -top-[5%] -left-[5%]">
                {capsules.map((cap) => (
                    <div
                        key={`wrapper-${cap.id}`}
                        className="absolute"
                        style={{
                            top: cap.top,
                            left: cap.left,
                            zIndex: 1 // Single layer, but DOM order gives slight overlap handling
                        }}
                    >
                        <Capsule
                            color={cap.color}
                            rotation={cap.rotation}
                            scale={cap.scale}
                        />
                    </div>
                ))}
            </div>

            {/* Subtle top-down light to marry them to the scene, but Keep it bright */}
            <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-b from-white/10 to-gray-500/5 mix-blend-overlay" />
        </div>
    );
}
