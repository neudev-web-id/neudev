"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Desain Website",
        description: "Pelajari lebih lanjut tentang proses desain website kami dan bagaimana kami menciptakan pengalaman yang luar biasa.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "Desain Website",
        description: "Menampilkan karya terbaik kami dalam membuat website fungsional yang indah.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 3,
        title: "Desain Website",
        description: "Temukan pendekatan kami terhadap pengembangan web modern.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop",
        size: "small"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Karya Kami</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">Proyek Sukses</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Jelajahi beberapa proyek terbaru dan paling sukses kami. Kami bangga memberikan keunggulan bagi klien kami.
                    </p>
                </div>

                {/* Portfolio Grid Layout matching the reference design */}
                <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px]">

                    {/* Left Large Project */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 h-[400px] md:h-full relative overflow-hidden rounded-3xl group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors duration-500 z-10"></div>
                        <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col justify-end">
                            <h3 className="text-white text-3xl font-bold font-display mb-2">{projects[0].title}</h3>
                            <p className="text-gray-200 text-sm md:text-base max-w-sm mb-6">{projects[0].description}</p>
                            <div className="flex items-center justify-between">
                                <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                    <FaArrowRight />
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Smaller Projects */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        {projects.slice(1).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * (index + 1) }}
                                className="w-full h-[300px] md:h-1/2 relative overflow-hidden rounded-3xl group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors duration-500 z-10"></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full">
                                    <h3 className="text-white text-2xl font-bold font-display mb-2">{project.title}</h3>
                                    <p className="text-gray-200 text-sm max-w-md hidden sm:block">{project.description}</p>
                                    <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                        <FaArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                <div className="flex justify-center mt-12">
                    <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-md">
                        Lihat Semua Proyek
                    </a>
                </div>
            </div>
        </section>
    );
}
