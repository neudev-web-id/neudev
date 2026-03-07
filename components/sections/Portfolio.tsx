"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Ecommerce Fashion Store",
        category: "Next.js + Stripe Payment",
        description: "Platform e-commerce premium dengan pengalaman belanja yang mulus dan integrasi pembayaran yang aman.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        link: "#",
        size: "large"
    },
    {
        id: 2,
        title: "Startup Landing Page",
        category: "Modern SaaS landing page",
        description: "Desain landing page yang dioptimalkan untuk konversi dengan animasi yang menarik.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        link: "#",
        size: "small"
    },
    {
        id: 3,
        title: "Company Profile",
        category: "Corporate Website",
        description: "Website company profile profesional yang meningkatkan kredibilitas dan kepercayaan.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        link: "#",
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
                        className="w-full md:w-1/2 h-[450px] md:h-full relative overflow-hidden rounded-3xl group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors duration-500 z-10"></div>
                        <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                        <div className="absolute top-6 left-6 z-20">
                            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 shadow-sm">{projects[0].category}</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col justify-end">
                            <h3 className="text-white text-3xl font-bold font-display mb-2 drop-shadow-md">{projects[0].title}</h3>
                            <p className="text-gray-200 text-sm md:text-base max-w-sm mb-6 drop-shadow-md">{projects[0].description}</p>
                            <div className="flex items-center gap-4">
                                <a href={projects[0].link} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                                    Link Demo <FaExternalLinkAlt className="text-xs" />
                                </a>
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
                                className="w-full h-[350px] md:h-1/2 relative overflow-hidden rounded-3xl group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/60 transition-colors duration-500 z-10"></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 shadow-sm">{project.category}</span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full">
                                    <h3 className="text-white text-2xl font-bold font-display mb-2 drop-shadow-md">{project.title}</h3>
                                    <p className="text-gray-200 text-sm max-w-md hidden sm:block mb-4 drop-shadow-md">{project.description}</p>
                                    <div>
                                        <a href={project.link} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white hover:text-gray-900 text-white backdrop-blur-md border border-white/30 rounded-full font-semibold transition-all">
                                            Link Demo <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                <div className="flex justify-center mt-12">
                    <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-transform hover:-translate-y-1 shadow-lg shadow-blue-600/20">
                        Lihat Semua Proyek <FaArrowRight className="text-sm" />
                    </a>
                </div>
            </div>
        </section>
    );
}
