"use client"

import { Share2, Camera, Link2, X } from "lucide-react"
import { CapsuleWindow } from "./capsule-window"

interface ShareModalProps {
  open: boolean
  onClose: () => void
  siteName: string
}

export function ShareModal({ open, onClose, siteName }: ShareModalProps) {
  const siteUrl = `${siteName.toLowerCase().replace(/\s+/g, "")}.capsuleweb.site`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${siteUrl}`)
  }

  const handleShareX = () => {
    const text = encodeURIComponent(`I made a website for $1\n\nhttps://${siteUrl}\n\nMade on www.capsuleweb.site`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop - static capsules background */}
      <div className="absolute inset-0" onClick={onClose}>
        <CapsuleWindow />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Modal - 9:16 ratio for Instagram */}
      <div className="relative w-[400px] h-[711px] max-h-[95vh] bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
        >
          <X className="w-7 h-7 text-foreground" strokeWidth={2.5} />
        </button>

        {/* Website Preview - generated site thumbnail */}
        <div className="relative h-[45%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Mock generated website preview - local service business style */}
            <div className="p-6">
              {/* Nav */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-amber-700/60" />
                  <div className="h-2.5 w-24 bg-amber-900/40 rounded" />
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-12 bg-amber-900/30 rounded" />
                  <div className="h-2 w-12 bg-amber-900/30 rounded" />
                  <div className="h-2 w-12 bg-amber-900/30 rounded" />
                </div>
              </div>
              
              {/* Hero section */}
              <div className="flex gap-5 mt-8">
                <div className="flex-1">
                  <div className="h-2 w-24 bg-amber-600/40 rounded mb-3" />
                  <div className="h-5 w-full bg-amber-900/50 rounded mb-2" />
                  <div className="h-5 w-3/4 bg-amber-700/40 rounded mb-4" />
                  <div className="h-2.5 w-full bg-amber-800/25 rounded mb-2" />
                  <div className="h-2.5 w-5/6 bg-amber-800/20 rounded mb-2" />
                  <div className="h-2.5 w-4/6 bg-amber-800/20 rounded mb-6" />
                  <div className="flex gap-3">
                    <div className="h-8 w-28 bg-amber-700/60 rounded-full" />
                    <div className="h-8 w-24 bg-amber-200/60 rounded-full border border-amber-400/40" />
                  </div>
                </div>
                <div className="w-36 h-36 bg-amber-200/60 rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200" />

        {/* Share Card Content */}
        <div className="flex-1 flex flex-col px-6 pt-5 pb-6">
          <p className="text-2xl font-bold text-foreground mb-1">I made a website for $1</p>
          <p className="text-lg font-mono text-blue-600 mb-3">{siteUrl}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-sm text-muted-foreground self-start mb-2">
            <div className="w-3 h-4 rounded-full bg-gradient-to-b from-red-400 to-red-600" />
            Made on www.capsuleweb.site
          </div>

          {/* Share buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <button 
              onClick={handleShareX}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              <Share2 className="w-5 h-5" />
              Share on X
            </button>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-slate-100 text-foreground font-medium hover:bg-slate-200 transition-colors text-sm">
                <Camera className="w-4 h-4" />
                Screenshot for Instagram
              </button>
              <button 
                onClick={handleCopyLink}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-slate-100 text-foreground font-medium hover:bg-slate-200 transition-colors text-sm"
              >
                <Link2 className="w-4 h-4" />
                Copy link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
