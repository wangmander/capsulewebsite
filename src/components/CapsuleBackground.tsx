"use client";

import { motion } from "framer-motion";

const Capsule = ({ color, delay, top, left, rotate }: { color: string; delay: number; top: string; left: string; rotate: number }) => {
    const colorMap: Record<string, string> = {
        red: "bg-red-500/80 border-red-400/50",
        blue: "bg-blue-500/80 border-blue-400/50",
        green: "bg-green-500/80 border-green-400/50",
        yellow: "bg-yellow-500/80 border-yellow-400/50",
    };

    return (
        <motion.div
            initial={{ y: 0, rotate: rotate }}
            animate={{ y: [0, -20, 0], rotate: [rotate, rotate + 5, rotate] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={`absolute w-32 h-48 rounded-[4rem] backdrop-blur-sm border-2 shadow-2xl ${colorMap[color]} flex items-center justify-center overflow-hidden z-0`}
            style={{ top, left }}
        >
            {/* Glossy highlight */}
            <div className="absolute top-4 left-4 w-20 h-10 bg-white/20 rounded-full blur-xl" />
            <div className="absolute top-2 right-4 w-4 h-16 bg-white/30 rounded-full blur-md" />

            {/* Internal "website hint" */}
            <div className="w-24 h-32 bg-white/90 rounded-xl opacity-50 flex flex-col gap-2 p-2">
                <div className="w-full h-2 bg-gray-300 rounded-full" />
                <div className="w-2/3 h-2 bg-gray-300 rounded-full" />
                <div className="w-full h-20 bg-gray-200 rounded mt-2" />
            </div>

            {/* Cap line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/10" />
        </motion.div>
    );
};

export default function CapsuleBackground() {
    const capsules = [
        { color: "red", delay: 0, top: "10%", left: "10%", rotate: -15 },
        { color: "blue", delay: 1, top: "20%", left: "30%", rotate: 10 },
        { color: "green", delay: 2, top: "50%", left: "15%", rotate: -5 },
        { color: "yellow", delay: 0.5, top: "60%", left: "50%", rotate: 20 },
        { color: "red", delay: 1.5, top: "15%", left: "60%", rotate: 5 },
        { color: "blue", delay: 2.5, top: "80%", left: "20%", rotate: -10 },
        { color: "green", delay: 0.8, top: "40%", left: "70%", rotate: 15 },
        { color: "yellow", delay: 1.2, top: "75%", left: "60%", rotate: -20 },
        // More background depth capsules
        { color: "blue", delay: 3, top: "-5%", left: "40%", rotate: 45 },
        { color: "red", delay: 2, top: "85%", left: "5%", rotate: -30 },
        { color: "green", delay: 1.5, top: "90%", left: "80%", rotate: 0 },
    ];

    return (
        <div className="relative w-full h-full bg-gray-100 overflow-hidden perspective-1000">
            {/* Gradients/Lighting for vending machine feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 z-0" />

            {/* Capsules */}
            {capsules.map((cap, i) => (
                <Capsule key={i} {...cap} />
            ))}

            {/* Glass overlay for the "Window" effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
        </div>
    );
}
