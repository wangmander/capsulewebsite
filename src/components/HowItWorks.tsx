import { PenTool, DollarSign, Globe } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Describe it",
            description: "Any concept or business idea",
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Insert $1",
            description: "Pay per capsule. No subscriptions.",
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Website pops out",
            description: "Cloud-hosted, ready to share.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-display font-bold text-center mb-16 text-primary">How it works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                <div className="text-primary">{step.icon}</div>
                                {/* Badge for step number */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    {i + 1}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-1">{step.title}</h3>
                                <p className="text-sm text-secondary">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
