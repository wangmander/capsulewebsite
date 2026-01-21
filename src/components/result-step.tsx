"use client"

import { Capsule } from "./capsule"
import { ExternalLink, Copy, Share2 } from "lucide-react"
import { useState } from "react"

interface ResultStepProps {
  url: string
  onReset: () => void
}

export function ResultStep({ url, onReset }: ResultStepProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${url}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareX = () => {
    const text = encodeURIComponent(
      `I made a website for $1! Check it out: https://${url}\n\nDispensed by capsuleweb.site`,
    )
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background via-background to-accent/30 relative overflow-hidden">
      {/* Decorative capsules */}
      <Capsule color="blue" size="lg" className="absolute top-16 left-[5%] hidden md:block" delay={0} />
      <Capsule color="red" size="md" className="absolute top-32 right-[10%] hidden md:block" delay={0.8} />
      <Capsule color="yellow" size="sm" className="absolute bottom-40 left-[8%] hidden md:block" delay={1.5} />
      <Capsule color="green" size="md" className="absolute bottom-24 right-[6%] hidden md:block" delay={0.4} />

      {/* Main content */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
          Your website just
          <br />
          popped out 🎉
        </h1>

        {/* URL display */}
        <div className="mt-8 px-6 py-4 bg-card rounded-2xl border-2 border-border shadow-lg">
          <span className="text-2xl md:text-3xl font-bold text-foreground font-mono">{url}</span>
        </div>

        {/* Open Website button */}
        <button
          onClick={() => window.open(`https://${url}`, "_blank")}
          className="mt-6 flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-2xl text-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
        >
          Open Website
          <ExternalLink className="w-5 h-5" />
        </button>

        {/* Viral Share Card */}
        <div className="mt-12 w-full max-w-md">
          <div className="relative bg-card rounded-3xl border-2 border-border shadow-2xl overflow-hidden p-6 md:p-8">
            {/* Website thumbnail mockup */}
            <div className="w-full h-40 md:h-48 bg-gradient-to-br from-secondary to-muted rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <div className="w-[90%] h-[85%] bg-card rounded-lg shadow-inner flex flex-col p-3 gap-2">
                <div className="h-3 w-1/3 bg-muted rounded" />
                <div className="flex-1 flex gap-2">
                  <div className="w-1/3 bg-muted rounded" />
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-3/4 bg-muted rounded" />
                    <div className="h-2 w-1/2 bg-muted rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card content */}
            <div className="text-center space-y-3">
              <p className="text-xl md:text-2xl font-bold text-foreground font-mono">{url}</p>
              <p className="text-2xl md:text-3xl font-extrabold text-foreground">I made a website for $1</p>
              <p className="text-sm text-muted-foreground font-medium">Dispensed by capsuleweb.site</p>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-foreground text-background rounded-full text-xs font-bold">
              $1
            </div>
          </div>
        </div>

        {/* Share actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button
            onClick={handleShareX}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Share2 className="w-4 h-4" />
            Share on X
          </button>
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-all"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>

        {/* Instagram tip */}
        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          Tip: Screenshot the card above and post it to your Instagram Story 👆
        </p>

        {/* Make another */}
        <button
          onClick={onReset}
          className="mt-10 text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 font-medium"
        >
          Dispense another website
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-muted-foreground">
        Dispensed by <span className="font-semibold">capsuleweb.site</span>
      </footer>
    </div>
  )
}
