import { CheckCircle2 } from "lucide-react";

export default function Features() {
    const features = [
        "One-page website",
        "Mobile-friendly",
        "Hosted instantly",
        "Shareable URL",
        "Responsive modern design",
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-display font-bold text-center mb-16 text-primary">What you get</h2>

                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col gap-4 items-start">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="text-xl md:text-2xl font-medium text-primary">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
