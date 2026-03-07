"use client";

import { motion } from "framer-motion";

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Diskusi Kebutuhan",
            description: "Memahami visi, tujuan bisnis, dan kebutuhan spesifik Anda untuk proyek ini.",
            delay: 0.1
        },
        {
            number: "02",
            title: "Desain UI/UX",
            description: "Membuat wireframe dan desain antarmuka yang modern, fungsional, dan user-friendly.",
            delay: 0.2
        },
        {
            number: "03",
            title: "Development Website",
            description: "Membangun website dengan teknologi terbaru, memastikan performa dan keamanan optimal.",
            delay: 0.3
        },
        {
            number: "04",
            title: "Revisi & Launch",
            description: "Melakukan pengujian, revisi akhir, dan meluncurkan website ke server produksi.",
            delay: 0.4
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Proses Kerja</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Cara Kami Bekerja
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Proses yang terstruktur dan transparan untuk memastikan setiap proyek berjalan lancar dan sesuai harapan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay, duration: 0.5 }}
                            className="relative"
                        >
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-[2px] bg-gray-100 z-0">
                                    <div className="h-full bg-blue-600 w-0 transition-all duration-500"></div>
                                </div>
                            )}

                            <div className="bg-[#F8F9FA] p-8 rounded-3xl h-full border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative z-10 group bg-white">
                                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 border-4 border-white shadow-sm">
                                    <span className="text-2xl font-bold font-display text-blue-600 group-hover:text-white transition-colors duration-300">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                                <p className="text-gray-500 text-center text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
