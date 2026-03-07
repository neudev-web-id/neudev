"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket, FaWrench } from "react-icons/fa";

export default function FastWork() {
    const services = [
        {
            icon: <FaCode className="text-3xl" />,
            title: "Website Development",
            description: "Website profesional untuk bisnis, startup, dan company profile.",
            delay: 0.1
        },
        {
            icon: <FaPaintBrush className="text-3xl" />,
            title: "UI/UX Design",
            description: "Desain interface modern yang fokus pada pengalaman pengguna.",
            delay: 0.2
        },
        {
            icon: <FaRocket className="text-3xl" />,
            title: "Landing Page",
            description: "Landing page yang dioptimalkan untuk marketing dan konversi.",
            delay: 0.3
        },
        {
            icon: <FaWrench className="text-3xl" />,
            title: "Website Maintenance",
            description: "Update, perbaikan bug, dan optimasi performa website.",
            delay: 0.4
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-[#F8F9FA] relative" id="services">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Layanan Utama</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Solusi Digital Terpadu
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Kami menyediakan layanan lengkap untuk membantu bisnis Anda tumbuh dan bersaing di era digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                                <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
