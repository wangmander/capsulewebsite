"use client"

import type React from "react"

import { Capsule } from "./capsule"
import { cn } from "@/lib/utils"

interface VendingMachineProps {
  glowing?: boolean
  dispensing?: boolean
  children?: React.ReactNode
  className?: string
}

export function VendingMachine({ glowing, dispensing, children, className }: VendingMachineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Machine body */}
      <div className="relative w-[340px] md:w-[400px] h-[500px] md:h-[580px] bg-gradient-to-b from-zinc-100 to-zinc-200 rounded-3xl shadow-2xl border-4 border-zinc-300 overflow-hidden">
        {/* Top header bar */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center">
          <span className="text-white font-bold text-lg tracking-widest">CAPSULEWEB</span>
        </div>

        {/* Capsule chamber - glass dome */}
        <div
          className={cn(
            "absolute top-20 left-4 right-4 h-[280px] md:h-[320px] rounded-2xl bg-gradient-to-b from-sky-100/50 to-white/30 border-2 border-white/60 backdrop-blur-sm overflow-hidden transition-all duration-500",
            glowing && "animate-glow border-yellow-300/60",
          )}
        >
          {/* Inner glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

          {/* Floating capsules */}
          {!dispensing && (
            <>
              <Capsule color="red" size="md" className="absolute top-8 left-8" delay={0} />
              <Capsule color="blue" size="lg" className="absolute top-16 right-6" delay={0.5} />
              <Capsule color="green" size="sm" className="absolute top-32 left-16" delay={1} />
              <Capsule color="yellow" size="md" className="absolute bottom-16 right-12" delay={1.5} />
              <Capsule color="red" size="sm" className="absolute bottom-24 left-6" delay={0.8} />
              <Capsule color="blue" size="sm" className="absolute top-12 left-1/2" delay={1.2} />
            </>
          )}

          {/* Dispensing capsule */}
          {dispensing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Capsule color="blue" size="lg" className="animate-drop" animate={false} />
            </div>
          )}
        </div>

        {/* Coin slot area */}
        <div
          className={cn(
            "absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-8 bg-zinc-800 rounded-lg flex items-center justify-center transition-all duration-300",
            glowing && "ring-4 ring-yellow-400/50 bg-zinc-700",
          )}
        >
          <div className="w-12 h-1.5 bg-zinc-600 rounded-full" />
        </div>

        {/* Dispenser chute */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-zinc-800 rounded-t-2xl">
          <div className="absolute inset-2 bg-zinc-900 rounded-t-xl" />
        </div>
      </div>

      {/* Overlay content */}
      {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
    </div>
  )
}
