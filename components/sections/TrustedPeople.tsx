"use client";

import { motion } from "framer-motion";

export default function TrustedPeople() {
    return (
        <section className="py-20 md:py-32 bg-[#F8F9FA] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Visual: Circular Overlapping Images */}
                    <div className="w-full lg:w-1/2 relative h-[450px] flex items-center justify-center">
                        {/* Main large center circle */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-[#F8F9FA] bg-gray-200 overflow-hidden shadow-xl z-20"
                        >
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" alt="Professional Woman" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Left smaller circle */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full border-[8px] border-[#F8F9FA] bg-gray-300 overflow-hidden shadow-lg z-10"
                        >
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" alt="Team Member" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Bottom smaller circle */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-10 right-20 md:right-32 w-28 h-28 md:w-32 md:h-32 rounded-full border-[6px] border-[#F8F9FA] bg-gray-400 overflow-hidden shadow-md z-30"
                        >
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="Team Member" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Blue Stats Circle */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-600 border-[8px] border-[#F8F9FA] shadow-xl z-40 flex flex-col items-center justify-center text-white"
                        >
                            <span className="font-display font-bold text-2xl md:text-3xl">200+</span>
                            <span className="text-xs md:text-sm font-medium text-blue-100">Karyawan</span>
                        </motion.div>
                    </div>

                    {/* Right Text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight max-w-lg mx-auto lg:mx-0">
                            Dipercaya 100% oleh banyak orang secara bertahap
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                            Tim kami yang terdiri dari lebih dari 200 ahli berdedikasi untuk memberikan kesuksesan. Kami membangun hubungan berdasarkan kepercayaan, transparansi, dan hasil yang luar biasa.
                        </p>
                        <a href="#about" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-colors inline-block shadow-lg shadow-blue-600/30">
                            Gabung Bersama Kami
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
