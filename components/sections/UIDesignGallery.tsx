"use client";

import { motion } from "framer-motion";

export default function UIDesignGallery() {
    const images = [
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507238692062-7140e6988849?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744094-24638ea0b3b4?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
    ];

    return (
        <section className="py-20 md:py-32 bg-[#F8F9FA] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Galeri</p>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 max-w-lg leading-tight">
                            Eksplorasi Desain UI
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-lg">
                            Lihat eksplorasi visual dan konsep terbaru kami yang dibuat oleh tim desain berbakat kami.
                        </p>
                    </div>
                    <div>
                        <a href="#" className="px-8 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 rounded-full font-medium transition-all shadow-sm">
                            Lihat Semua Karya
                        </a>
                    </div>
                </div>
            </div>

            {/* Scrolling or Static Gallery */}
            <div className="w-full relative px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x"
                >
                    {images.map((img, i) => (
                        <div key={i} className="min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-sm border border-gray-100 group relative">
                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10"></div>
                            <img src={img} alt={`UI Gallery ${i}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                    {/* Duplicate images for a fuller look if needed */}
                    {images.map((img, i) => (
                        <div key={`dup-${i}`} className="min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-sm border border-gray-100 group relative">
                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10"></div>
                            <img src={img} alt={`UI Gallery duplicate ${i}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
