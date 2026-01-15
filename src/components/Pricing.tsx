export default function Pricing() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-display font-bold mb-12 text-primary">Pricing</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                        <div className="text-5xl font-extrabold font-display mb-4 text-primary">$1</div>
                        <h3 className="text-lg font-bold mb-2 text-primary">Generate a website</h3>
                        <p className="text-sm text-secondary">Prompts → Complete website</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                        <div className="text-5xl font-extrabold font-display mb-4 text-primary">$1</div>
                        <h3 className="text-lg font-bold mb-2 text-primary">Make an edit</h3>
                        <p className="text-sm text-secondary">Prompt-based changes & updates</p>
                    </div>
                </div>

                <p className="mt-8 text-sm text-secondary font-medium">
                    No subscriptions, hidden fees, or recurring costs.
                </p>

                {/* Floating cheeky note */}
                <div className="mt-8 inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-500 shadow-sm rotate-1">
                    Beats paying $20/mo just to keep a site alive.
                </div>
            </div>
        </section>
    );
}
