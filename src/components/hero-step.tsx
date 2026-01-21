"use client"

import type { FormData } from "@/app/page"
import { VendingMachine } from "./vending-machine"
import { Capsule } from "./capsule"
import { cn } from "@/lib/utils"

interface HeroStepProps {
  formData: FormData
  setFormData: (data: FormData) => void
  onContinue: () => void
}

const vibeOptions = ["Clean", "Bold", "Playful", "Luxe"]
const colorOptions = ["Light", "Dark", "Colorful"]

export function HeroStep({ formData, setFormData, onContinue }: HeroStepProps) {
  const canContinue = formData.description.trim().length > 0

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left side - Vending Machine */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-gradient-to-br from-background via-background to-accent/30">
        <div className="relative">
          <VendingMachine />

          {/* Floating capsules around machine */}
          <Capsule color="yellow" size="sm" className="absolute -top-8 -left-12 hidden lg:block" delay={2} />
          <Capsule color="green" size="md" className="absolute -bottom-4 -right-16 hidden lg:block" delay={0.3} />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center p-6 lg:p-16 xl:p-24">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] text-balance">
          Insert $1.
          <br />
          <span className="text-muted-foreground">Get a website.</span>
        </h1>

        {/* Main input */}
        <div className="mt-10 lg:mt-14">
          <label className="block text-2xl md:text-3xl font-semibold text-foreground mb-4">
            What's the site about?
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Bike repair shop in SF"
            className="w-full h-36 md:h-40 p-5 text-xl md:text-2xl bg-input border-2 border-border rounded-2xl resize-none focus:outline-none focus:ring-4 focus:ring-ring/30 focus:border-ring transition-all placeholder:text-muted-foreground/50"
          />
          <p className="mt-2 text-muted-foreground text-base">
            Examples: "Personal trainer", "Landing page for my startup idea"
          </p>
        </div>

        {/* Optional inputs */}
        <div className="mt-8 space-y-6 opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Optional — we'll fill the blanks
          </p>

          {/* Name input */}
          <div>
            <label className="block text-xl font-semibold text-foreground mb-2">Name?</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="My Business"
              className="w-full max-w-sm p-3 text-lg bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Vibe pills */}
          <div>
            <label className="block text-xl font-semibold text-foreground mb-3">Vibe?</label>
            <div className="flex flex-wrap gap-2">
              {vibeOptions.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setFormData({ ...formData, vibe: formData.vibe === vibe ? null : vibe })}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-base font-medium border-2 transition-all",
                    formData.vibe === vibe
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-border hover:border-foreground/50",
                  )}
                >
                  {vibe}
                </button>
              ))}
            </div>
          </div>

          {/* Color pills */}
          <div>
            <label className="block text-xl font-semibold text-foreground mb-3">Color?</label>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => setFormData({ ...formData, color: formData.color === color ? null : color })}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-base font-medium border-2 transition-all",
                    formData.color === color
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-border hover:border-foreground/50",
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onContinue}
          disabled={!canContinue}
          className={cn(
            "mt-10 lg:mt-14 w-full max-w-md py-5 px-8 rounded-2xl text-xl md:text-2xl font-bold transition-all transform",
            canContinue
              ? "bg-foreground text-background hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
              : "bg-muted text-muted-foreground cursor-not-allowed",
          )}
        >
          Continue → Insert $1
        </button>
      </div>
    </div>
  )
}
