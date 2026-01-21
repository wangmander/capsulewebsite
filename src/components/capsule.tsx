"use client"

import { cn } from "@/lib/utils"

interface CapsuleProps {
  color: "red" | "blue" | "green" | "yellow"
  size?: "sm" | "md" | "lg"
  className?: string
  animate?: boolean
  delay?: number
}

const colorClasses = {
  red: "from-red-400 via-red-500 to-red-600",
  blue: "from-blue-400 via-blue-500 to-blue-600",
  green: "from-emerald-400 via-emerald-500 to-emerald-600",
  yellow: "from-yellow-300 via-yellow-400 to-amber-500",
}

const sizeClasses = {
  sm: "w-12 h-16",
  md: "w-16 h-24",
  lg: "w-24 h-36",
}

export function Capsule({ color, size = "md", className, animate = true, delay = 0 }: CapsuleProps) {
  return (
    <div
      className={cn(
        "relative rounded-full bg-gradient-to-br shadow-lg",
        colorClasses[color],
        sizeClasses[size],
        animate && "animate-float",
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Glossy highlight */}
      <div className="absolute top-2 left-2 w-1/3 h-1/4 bg-white/50 rounded-full blur-sm" />
      <div className="absolute top-1 left-1.5 w-1/4 h-1/6 bg-white/70 rounded-full" />

      {/* Inner website hint */}
      <div className="absolute inset-3 flex items-center justify-center opacity-30">
        <div className="w-full h-full rounded bg-white/20 flex flex-col gap-0.5 p-1">
          <div className="h-1 w-full bg-white/40 rounded" />
          <div className="flex-1 flex gap-0.5">
            <div className="w-1/3 bg-white/30 rounded" />
            <div className="flex-1 bg-white/20 rounded" />
          </div>
        </div>
      </div>

      {/* Bottom shadow/reflection */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/10 rounded-full blur-sm" />
    </div>
  )
}
