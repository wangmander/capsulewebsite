"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function FloatingForm() {
    return (
        <div className="w-[400px] max-w-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
            {/* Subtle noise/texture overlay if needed, keeping it clean for now */}

            <div className="space-y-2">
                <h1 className="text-5xl font-extrabold tracking-tight font-display text-primary leading-[1.1]">
                    Insert $1.<br />
                    Get a website.
                </h1>
                <p className="text-lg text-secondary font-medium">
                    A real website link in about a minute. No code.
                </p>
            </div>

            <form className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-primary ml-1">
                        What’s the site about?
                    </label>
                    <textarea
                        className="w-full h-32 rounded-2xl bg-white/50 border border-gray-200 p-4 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 resize-none shadow-inner"
                        placeholder="Bike repair shop in SF..."
                    />
                    <p className="text-xs text-gray-500 ml-1">
                        Tip: Include who it’s for, what you offer, and your goal.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Name?</label>
                        <input type="text" className="w-full rounded-xl bg-white/50 border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5" placeholder="Optional" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Vibe?</label>
                        <div className="flex gap-1">
                            {/* Simple select or pill substitute */}
                            <select className="w-full rounded-xl bg-white/50 border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-gray-600">
                                <option>Clean</option>
                                <option>Bold</option>
                                <option>Playful</option>
                                <option>Luxe</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="group relative w-full bg-black hover:bg-gray-900 text-white text-lg font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2">
                    Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span className="opacity-50 font-normal text-sm ml-1">Insert $1</span>
                </button>

                <p className="text-center text-xs text-gray-400 font-medium">
                    Everything else is optional. We’ll fill the blanks.
                </p>
            </form>
        </div>
    );
}
