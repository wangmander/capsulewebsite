// src/components/hero-section.tsx
"use client"

import { useState, useEffect } from "react"
import type { FormData } from "@/app/page"
import { CapsuleWindow } from "./capsule-window"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  formData: FormData
  setFormData: (data: FormData) => void
}

const vibeOptions = ["Clean", "Bold", "Playful", "Luxe"]
const colorOptions = ["Light", "Dark", "Colorful"]

const exampleTemplates = [
  {
    label: "Local service business",
    template: `Electrical work business
Top 3 things: Circuit breaker repairs, outlet installation, electrical panel upgrades
Goal: Phone calls and bookings
Trust: 15 years in business, 500+ 5-star reviews, licensed & insured
Contact: Austin, TX · (512) 555-0123`,
  },
  {
    label: "Resume",
    template: `Sarah Chen - Product Designer
Experience: 6 years designing apps at Spotify, Airbnb, and two startups
Skills: Figma, prototyping, user research, design systems, front-end CSS
Notable work: Led redesign of Spotify's playlist feature (2M+ daily users)
Education: BFA Design, Rhode Island School of Design
Contact: sarah@example.com · linkedin.com/in/sarahchen`,
  },
  {
    label: "Product / startup",
    template: `Who it's for: Small business owners who need invoicing
Top 3 things: Send invoices in seconds, automatic payment reminders, expense tracking
Goal: Free trial signups
Trust: 50,000+ businesses use us, 4.9 App Store rating
Contact: support@example.com`,
  },
  {
    label: "Event page",
    template: `AI Summit 2025 - San Francisco
Date: March 15, 2025 · 9am-6pm
Location: Moscone Center, San Francisco
What to expect: Keynotes from OpenAI & Google, hands-on workshops, networking happy hour
Tickets: Early bird $199 (regular $349) · Students free with ID
Sponsors: Google, Microsoft, a]16z`,
  },
  {
    label: "Restaurant / cafe",
    template: `Nonna's Kitchen - Authentic Italian
Menu highlights: Fresh handmade pasta daily, wood-fired Neapolitan pizza, tiramisu
Hours: Tue-Sun 5pm-10pm · Closed Mondays
Location: 247 Smith St, Brooklyn NY
Reservations: (718) 555-0456 · Walk-ins welcome at the bar
Awards: Zagat rated, Michelin Bib Gourmand 2024`,
  },
]

export default function HeroSection({ formData, setFormData }: HeroSectionProps) {
  const [error, setError] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string>("Local service business")
  const [loading, setLoading] = useState(false)

  const handleDescriptionChange = (value: string) => {
    if (error) setError(null)
    setFormData({ ...formData, description: value })
    if (value !== exampleTemplates.find((t) => t.label === selectedTemplate)?.template) {
      setSelectedTemplate("")
    }
  }

  const handleExampleClick = (label: string, template: string) => {
    setFormData({ ...formData, description: template })
    setSelectedTemplate(label)
    if (error) setError(null)
  }

  useEffect(() => {
    if (!formData.description) {
      const defaultTemplate = exampleTemplates[0]
      setFormData({ ...formData, description: defaultTemplate.template })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async () => {
    if (!formData.description.trim() || !formData.name.trim() || !formData.email.trim()) {
      setError("Please fill out all required fields")
      return
    }

    setError(null)
    setLoading(true)

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Checkout failed")
      if (!json?.checkoutUrl) throw new Error("Missing checkoutUrl")

      window.location.href = json.checkoutUrl
    } catch (e: any) {
      setError(e?.message || "Something went wrong")
      setLoading(false)
    }
  }

  return (
    <section className="min-h-[150vh] lg:min-h-[120vh] lg:max-h-[1800px] w-full relative overflow-visible max-w-[1800px] mx-auto pb-32">
      <div className="absolute inset-0 h-[150vh] lg:h-[120vh]">
        <CapsuleWindow />
      </div>

      <div className="relative lg:absolute px-6 lg:px-4 lg:left-1/2 lg:-translate-x-1/2 pt-24 lg:pt-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[720px] max-w-full lg:max-w-[720px] z-50 pb-8">
        <div
          className="rounded-3xl p-6 lg:p-10"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.6),
              0 8px 40px rgba(0, 0, 0, 0.12),
              0 30px 80px rgba(0, 0, 0, 0.08)
            `,
          }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Insert $1. Get a website.
          </h1>

          <p className="mt-3 text-base text-muted-foreground">A real website link in about a minute. No code.</p>

          <div className="mt-6">
            <div className="flex items-baseline gap-2 mb-3">
              <label className="text-lg font-bold text-foreground">What's the site about?</label>
              <h2 className="text-sm text-muted-foreground">Select a category and fill it out</h2>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {exampleTemplates.map((example) => (
                <button
                  key={example.label}
                  onClick={() => handleExampleClick(example.label, example.template)}
                  className={cn(
                    "px-2.5 py-1 text-xs rounded-full transition-colors border",
                    selectedTemplate === example.label
                      ? "border-foreground bg-transparent text-foreground font-medium"
                      : "border-transparent bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  type="button"
                >
                  {example.label}
                </button>
              ))}
            </div>

            <textarea
              value={formData.description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              placeholder="Bike repair shop in SF"
              className={cn(
                "w-full h-40 p-4 text-base bg-white border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all placeholder:text-muted-foreground/60",
                error ? "border-red-500" : "border-border/50"
              )}
            />
            {error && <p className="mt-1.5 text-sm text-red-500 font-medium">{error}</p>}
          </div>

          <div className="mt-5">
            <label className="block text-base font-bold text-foreground mb-2">Website name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                if (error) setError(null)
              }}
              placeholder="Pam"
              className={cn(
                "w-full p-3 text-base bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all placeholder:text-muted-foreground/60",
                error && !formData.name.trim() ? "border-red-500" : "border-border/50"
              )}
            />
          </div>

          <div className="mt-5">
            <label className="block text-base font-bold text-foreground mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (error) setError(null)
              }}
              placeholder="you@example.com"
              className={cn(
                "w-full p-3 text-base bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all placeholder:text-muted-foreground/60",
                error && !formData.email.trim() ? "border-red-500" : "border-border/50"
              )}
            />
          </div>

          <div className="mt-5 flex flex-col lg:flex-row lg:gap-8">
            <div className="flex-1">
              <label className="block text-base font-bold text-foreground mb-2">
                Vibe? <span className="font-normal text-sm text-muted-foreground">Optional</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {vibeOptions.map((vibe) => (
                  <button
                    key={vibe}
                    onClick={() => setFormData({ ...formData, vibe: formData.vibe === vibe ? null : vibe })}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium border transition-all",
                      formData.vibe === vibe
                        ? "bg-foreground text-background border-foreground"
                        : "bg-white text-foreground border-border/60 hover:border-foreground/40"
                    )}
                    type="button"
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-5 lg:mt-0">
              <label className="block text-base font-bold text-foreground mb-2">
                Color? <span className="font-normal text-sm text-muted-foreground">Optional</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => setFormData({ ...formData, color: formData.color === color ? null : color })}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium border transition-all",
                      formData.color === color
                        ? "bg-foreground text-background border-foreground"
                        : "bg-white text-foreground border-border/60 hover:border-foreground/40"
                    )}
                    type="button"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={cn(
                "w-full px-6 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98]",
                loading
                  ? "bg-neutral-900 text-[#f5c842] opacity-80 cursor-not-allowed"
                  : "bg-black text-[#f5c842] hover:bg-neutral-900"
              )}
              type="button"
            >
              {loading ? "Redirecting…" : "Continue → Insert $1"}
            </button>
            <p className="mt-3 text-sm text-muted-foreground text-center">
              You'll get a shareable link instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
