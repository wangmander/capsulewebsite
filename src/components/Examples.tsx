export default function Examples() {
    const examples = [
        {
            url: "bikeshop.capsuleweb.site",
            bg: "bg-blue-500",
            content: "Mike's Bikes",
            sub: "Custom frame building",
        },
        {
            url: "trainer.capsuleweb.site",
            bg: "bg-green-500",
            content: "Fit with Emma",
            sub: "Personal Training",
        },
        {
            url: "cafe.capsuleweb.site",
            bg: "bg-pink-500",
            content: "Java & Code",
            sub: "Tech coworking café",
        },
        {
            url: "marketplace.capsuleweb.site",
            bg: "bg-orange-500",
            content: "Handmade Gems",
            sub: "Artisan Marketplace",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-display font-bold text-center mb-16 text-primary">Examples</h2>

                {/* Simple horizontal scroll or grid. Let's do a grid that looks like cards. */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {examples.map((ex, i) => (
                        <div key={i} className="group relative aspect-[3/4] rounded-2xl bg-gray-50 border border-gray-100 p-2 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 cursor-default">
                            {/* Browser chrome */}
                            <div className="w-full h-8 bg-white rounded-t-xl border-b border-gray-100 flex items-center px-2 gap-1 mb-2">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>

                            {/* Content preview */}
                            <div className={`w-full h-[calc(100%-2.5rem)] rounded-xl ${ex.bg} bg-opacity-10 p-4 flex flex-col justify-end overflow-hidden relative`}>
                                <div className={`absolute inset-0 ${ex.bg} opacity-20`} />

                                {/* Mock content lines */}
                                <div className="w-12 h-12 rounded-lg bg-white/50 mb-4 backdrop-blur-sm" />

                                <div className="space-y-2 relative z-10">
                                    <div className="h-4 w-3/4 bg-white/80 rounded" />
                                    <div className="h-3 w-1/2 bg-white/60 rounded" />
                                </div>

                                {/* Mock Text overlay */}
                                <div className="absolute top-4 left-4 right-4">
                                    <h4 className="text-sm font-bold text-gray-900">{ex.content}</h4>
                                    <p className="text-xs text-gray-600">{ex.sub}</p>
                                    <p className="text-[10px] text-blue-500 mt-1">{ex.url}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
