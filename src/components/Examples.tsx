const examples = [
  {
    name: "SFMiniMozarts",
    url: "sfminimozarts.capsuleweb.site",
    description: "Local music studio",
    image: "/images/sfminimozarts.png",
  },
  {
    name: "Example 2",
    url: "example2.capsuleweb.site",
    description: "Coming soon",
    image: null,
  },
  {
    name: "Example 3",
    url: "example3.capsuleweb.site",
    description: "Coming soon",
    image: null,
  },
]

export function Examples() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">Examples</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <div
              key={example.url}
              className="group rounded-2xl bg-background border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Thumbnail preview */}
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                {example.image ? (
                  <img 
                    src={example.image || "/placeholder.svg"} 
                    alt={example.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Coming soon</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{example.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{example.description}</p>
                <p className="text-xs font-mono text-blue-600">{example.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
