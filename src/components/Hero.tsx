"use client";

import CapsuleBackground from "./CapsuleBackground";
import FloatingForm from "./FloatingForm";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
            {/* Left (60-70%): Capsule Background */}
            <div className="w-full md:w-[65%] h-full relative bg-gray-50 overflow-hidden">
                <CapsuleBackground />
            </div>

            {/* Right (30-40%): Floating Form Panel */}
            <div className="w-full md:w-[35%] h-full relative z-10 pointer-events-none md:pointer-events-auto flex items-center justify-center md:justify-start">
                {/* On mobile, this overlays. On desktop, it sits to the right but visually floats */}
                <div className="absolute inset-0 md:relative w-full h-full pointer-events-auto flex items-center justify-center p-4">
                    <FloatingForm />
                </div>
            </div>
        </section>
    );
}
