"use client"

export function Pricing() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">Pricing</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Generate card */}
          <button
            onClick={scrollToForm}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 shadow-lg hover:scale-105 transition-transform cursor-pointer text-left"
          >
            <div className="text-5xl font-extrabold text-foreground mb-2">$1</div>
            <div className="text-xl font-semibold text-foreground mb-4">Generate a website</div>
            <p className="text-muted-foreground">Describe it, pay, get a live link.</p>
          </button>

          {/* Edit card */}
          <button
            onClick={scrollToForm}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 shadow-lg hover:scale-105 transition-transform cursor-pointer text-left"
          >
            <div className="text-5xl font-extrabold text-foreground mb-2">$1</div>
            <div className="text-xl font-semibold text-foreground mb-4">Make an edit</div>
            <p className="text-muted-foreground">Describe the change, get an updated link.</p>
          </button>
        </div>

        <p className="mt-8 text-center text-muted-foreground">No subscriptions. Pay when you need a new capsule.</p>
      </div>
    </section>
  )
}
