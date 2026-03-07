"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonial() {
    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">

                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Testimoni Klien</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-16">
                    Apa Kata Mereka
                </h2>

                <div className="relative">
                    <FaQuoteLeft className="text-gray-100 absolute -top-8 -left-4 md:-top-12 md:-left-12 text-6xl md:text-8xl z-0" />

                    <div className="relative z-10 mb-8 flex flex-col items-center gap-4">
                        <div className="flex gap-1 text-yellow-400 text-xl">
                            <FaStar className="drop-shadow-sm" />
                            <FaStar className="drop-shadow-sm" />
                            <FaStar className="drop-shadow-sm" />
                            <FaStar className="drop-shadow-sm" />
                            <FaStar className="drop-shadow-sm" />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 w-max mx-auto shadow-sm">
                            <span className="font-semibold text-gray-700 text-sm">5.0 Kepuasan Klien</span>
                        </div>
                    </div>

                    <p className="text-2xl md:text-4xl font-display font-medium text-gray-900 leading-snug mb-12 relative z-10">
                        "Pelayanan sangat cepat dan komunikatif. Website yang dibuat sangat sesuai dengan kebutuhan bisnis kami dan langsung meningkatkan kredibilitas."
                    </p>

                    <div className="flex flex-col items-center gap-4 relative z-10">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-md">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Sarah Wijaya" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Sarah Wijaya</p>
                            <p className="text-sm text-gray-500">CEO, TechNova Solutions</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
