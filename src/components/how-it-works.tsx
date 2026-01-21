"use client"

import { PenLine, DollarSign, Globe } from "lucide-react"

const steps = [
  {
    icon: PenLine,
    title: "Describe it",
    description: "One sentence is enough.",
  },
  {
    icon: DollarSign,
    title: "Insert $1",
    description: "Pay per capsule. No subscriptions.",
  },
  {
    icon: Globe,
    title: "Website pops out",
    description: "Get a live link you can share.",
  },
]

export function HowItWorks() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">How it works</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={scrollToForm}
              className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform"
            >
              {/* Step number with icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-lg">
                  <step.icon className="w-9 h-9 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
