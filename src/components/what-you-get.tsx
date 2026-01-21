import { Check } from "lucide-react"

const features = ["One-page website", "Mobile-friendly", "Hosted instantly", "Shareable URL", "Edit anytime"]

export function WhatYouGet() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">What you get</h2>

        <div className="flex justify-center">
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-background" strokeWidth={2.5} />
                </div>
                <span className="text-xl text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
