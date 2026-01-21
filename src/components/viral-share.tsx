import { Share2, Camera, Link2 } from "lucide-react"

export function ViralShare() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">Made to be shared.</h2>

        {/* Share card mock */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200 shadow-2xl overflow-hidden">
            {/* Card preview area */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative">
              {/* Mock website thumbnail */}
              <div className="absolute inset-4 bg-white/20 rounded-lg flex flex-col gap-2 p-3">
                <div className="h-2 w-3/4 bg-white/40 rounded" />
                <div className="h-2 w-1/2 bg-white/30 rounded" />
                <div className="flex-1 flex gap-2 mt-2">
                  <div className="w-1/3 bg-white/25 rounded" />
                  <div className="flex-1 bg-white/20 rounded" />
                </div>
              </div>
            </div>

            {/* Card content */}
            <div className="p-6">
              <p className="text-2xl font-bold text-foreground mb-2">I made a website for $1</p>
              <p className="text-xl font-mono text-blue-600 mb-4">mysite.capsuleweb.site</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-sm text-muted-foreground">
                <div className="w-3 h-4 rounded-full bg-gradient-to-b from-red-400 to-red-600" />
                Dispensed by capsuleweb.site
              </div>
            </div>
          </div>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
            <Share2 className="w-5 h-5" />
            Share on X
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-foreground font-medium hover:bg-slate-200 transition-colors">
            <Camera className="w-5 h-5" />
            Screenshot for Instagram
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-foreground font-medium hover:bg-slate-200 transition-colors">
            <Link2 className="w-5 h-5" />
            Copy link
          </button>
        </div>
      </div>
    </section>
  )
}
