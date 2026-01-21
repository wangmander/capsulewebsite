"use client"

import { useEffect, useState } from "react"
import { VendingMachine } from "./vending-machine"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface DispensingStepProps {
  onComplete: () => void
}

const steps = ["Designing layout", "Writing copy", "Publishing"]

export function DispensingStep({ onComplete }: DispensingStepProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => {
        if (prev.length < steps.length) {
          return [...prev, prev.length]
        }
        return prev
      })

      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 1200)

    // Complete after all steps
    const timeout = setTimeout(() => {
      onComplete()
    }, 4500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-accent/30">
      <div className="flex flex-col items-center text-center">
        {/* Machine with dispensing animation */}
        <div className="transform scale-75 md:scale-90 lg:scale-100">
          <VendingMachine dispensing glowing />
        </div>

        {/* Progress content */}
        <div className="mt-8 md:mt-12 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Dispensing your website…</h2>

          {/* Progress indicators */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {steps.map((step, index) => (
              <div
                key={step}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500",
                  completed.includes(index)
                    ? "bg-emerald-100 text-emerald-700"
                    : currentStep === index
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground",
                )}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {completed.includes(index) ? (
                    <Check className="w-5 h-5 text-emerald-600" />
                  ) : currentStep === index ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-current opacity-50" />
                  )}
                </div>
                <span className="text-lg md:text-xl font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
