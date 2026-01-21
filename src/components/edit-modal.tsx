"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { CapsuleWindow } from "./capsule-window"
import { cn } from "@/lib/utils"

interface EditModalProps {
  open: boolean
  onClose: () => void
}

export function EditModal({ open, onClose }: EditModalProps) {
  const [capsuleId, setCapsuleId] = useState("")
  const [edits, setEdits] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = () => {
    if (!capsuleId.trim() || !edits.trim()) {
      setError("Please fill out all required fields")
      return
    }
    setError(null)
    // Handle edit submission
    console.log("[v0] Edit submitted:", { capsuleId, edits })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop - static capsules background */}
      <div className="absolute inset-0" onClick={onClose}>
        <CapsuleWindow />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Modal */}
      <div className="relative w-[90%] max-w-[720px] bg-background rounded-3xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
        >
          <X className="w-7 h-7 text-foreground" strokeWidth={2.5} />
        </button>

        <div
          className="rounded-3xl p-6 lg:p-10"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Edit your site
          </h1>

          <p className="mt-3 text-base text-muted-foreground">Update your existing CapsuleWeb site for $1.</p>

          {/* Capsule ID input */}
          <div className="mt-6">
            <label className="block text-lg font-bold text-foreground mb-1">Capsulewebsite ID</label>
            <h2 className="text-sm text-muted-foreground mb-3">IDs are emailed at time of purchase</h2>
            <input
              type="text"
              value={capsuleId}
              onChange={(e) => {
                setCapsuleId(e.target.value)
                if (error) setError(null)
              }}
              placeholder="e.g., capsule_abc123xyz"
              className={cn(
                "w-full p-3 text-base bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all placeholder:text-muted-foreground/60",
                error && !capsuleId.trim() ? "border-red-500" : "border-border/50",
              )}
            />
          </div>

          {/* Edits description */}
          <div className="mt-5">
            <label className="block text-lg font-bold text-foreground mb-3">Describe your edits or additions</label>
            <textarea
              value={edits}
              onChange={(e) => {
                setEdits(e.target.value)
                if (error) setError(null)
              }}
              placeholder="Change the hero image, update contact info, add a new section about our services..."
              className={cn(
                "w-full h-40 p-4 text-base bg-white border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all placeholder:text-muted-foreground/60",
                error && !edits.trim() ? "border-red-500" : "border-border/50",
              )}
            />
            {error && <p className="mt-1.5 text-sm text-red-500 font-medium">{error}</p>}
          </div>

          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 bg-black text-[#f5c842] hover:bg-neutral-900 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Continue → Insert $1
            </button>
            <p className="mt-3 text-sm text-muted-foreground text-center">You'll get an updated link instantly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
