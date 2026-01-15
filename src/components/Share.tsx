import { Share2 } from "lucide-react";

export default function Share() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-display font-bold mb-16 text-primary">Made to be shared.</h2>

                <div className="flex justify-center">
                    {/* Share Card Mock */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="h-40 bg-blue-500 relative flex items-center justify-center">
                            {/* Thumbnail preview - abstract */}
                            <div className="w-3/4 h-24 bg-white/20 rounded-lg flex gap-2 p-2">
                                <div className="w-1/3 bg-white/30 rounded" />
                                <div className="w-2/3 space-y-2">
                                    <div className="h-2 w-full bg-white/30 rounded" />
                                    <div className="h-2 w-1/2 bg-white/30 rounded" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 text-left">
                            <h3 className="text-xl font-bold text-primary mb-1">I made a website for $1</h3>
                            <p className="text-sm text-blue-500 font-medium mb-4">mysite.capsuleweb.site</p>

                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium border-t border-gray-100 pt-4">
                                <div className="w-4 h-4 rounded-full bg-red-500" />
                                Dispensed by capsuleweb.site
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
                        <Share2 className="w-4 h-4" /> Share now
                    </button>
                    <button className="px-6 py-3 bg-white border border-gray-200 text-primary rounded-full font-bold text-sm hover:bg-gray-50 transition-colors">
                        Copy link
                    </button>
                </div>
            </div>
        </section>
    );
}
