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

export default function Examples() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Examples</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <div
              key={example.url}
              className="rounded-2xl bg-white border shadow-md overflow-hidden"
            >
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                {example.image ? (
                  <img src={example.image} alt={example.name} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-slate-400 text-sm">Coming soon</span>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{example.name}</h3>
                <p className="text-sm text-slate-500">{example.description}</p>
                <p className="text-xs font-mono text-blue-600">{example.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
