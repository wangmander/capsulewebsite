"use client"

import { VendingMachine } from "./vending-machine"
import { Capsule } from "./capsule"
import { ArrowLeft } from "lucide-react"

interface PaymentStepProps {
  onPay: () => void
  onBack: () => void
}

export function PaymentStep({ onPay, onBack }: PaymentStepProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-accent/30 relative overflow-hidden">
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </button>

      {/* Decorative floating capsules */}
      <Capsule color="red" size="lg" className="absolute top-20 left-[10%] hidden md:block" delay={0} />
      <Capsule color="green" size="md" className="absolute bottom-32 left-[5%] hidden md:block" delay={1.2} />
      <Capsule color="yellow" size="sm" className="absolute top-40 right-[8%] hidden md:block" delay={0.5} />
      <Capsule color="blue" size="md" className="absolute bottom-20 right-[12%] hidden md:block" delay={1.8} />

      {/* Center content */}
      <div className="flex flex-col items-center text-center">
        {/* Zoomed machine */}
        <div className="transform scale-90 md:scale-100 lg:scale-110 transition-transform">
          <VendingMachine glowing />
        </div>

        {/* Payment content overlay */}
        <div className="mt-8 md:mt-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground text-balance">
            Insert $1 to dispense
            <br />
            your website
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
            One capsule. One website. No subscriptions.
          </p>

          {/* Insert $1 button - styled like a coin */}
          <button onClick={onPay} className="mt-8 relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 shadow-2xl flex items-center justify-center transform group-hover:scale-105 group-active:scale-95 transition-all border-4 border-amber-600/50">
              {/* Coin shine */}
              <div className="absolute top-3 left-6 w-1/3 h-1/4 bg-white/40 rounded-full blur-sm" />
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-black text-amber-900">$1</span>
                <span className="block text-xs md:text-sm font-bold text-amber-800 uppercase tracking-wider">
                  Insert
                </span>
              </div>
            </div>
            {/* Coin shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-4 bg-black/20 rounded-full blur-md group-hover:w-28 md:group-hover:w-36 transition-all" />
          </button>
        </div>
      </div>
    </div>
  )
}
