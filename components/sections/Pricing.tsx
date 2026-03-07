"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "120",
            description: "Company Profile Website",
            popular: false,
            features: [
                "Desain modern & responsif",
                "Up to 3 halaman",
                "Hosting & Domain 1 Tahun",
                "Basic SEO",
                "Revisi 1x"
            ],
            delay: 0.1
        },
        {
            name: "Business",
            price: "250",
            description: "Website + CMS",
            popular: true,
            features: [
                "Desain premium kustom",
                "Up to 10 halaman",
                "Content Management System",
                "Integrasi WhatsApp/Chat",
                "Hosting & Domain 1 Tahun",
                "Revisi 3x"
            ],
            delay: 0.2
        },
        {
            name: "Premium",
            price: "450",
            description: "Custom Website + SEO",
            popular: false,
            features: [
                "Desain eksklusif & animasi",
                "Unlimited halaman",
                "Advanced SEO Optimization",
                "Integrasi Payment Gateway",
                "Maintenance gratis 3 bulan",
                "Revisi Unlimited"
            ],
            delay: 0.3
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-[#F8F9FA] relative" id="pricing">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Investasi</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Paket Website
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Harga transparan tanpa biaya tersembunyi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: plan.delay, duration: 0.5 }}
                            className={`bg-white rounded-3xl p-8 relative transition-all duration-300 ${plan.popular ? 'border-2 border-blue-600 shadow-2xl scale-100 md:scale-105 z-10' : 'border border-gray-100 shadow-lg hover:shadow-xl'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                                        Paling Populer
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-gray-500 font-medium">$</span>
                                    <span className="text-5xl font-display font-bold text-gray-900">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="mb-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <FaCheck className="text-blue-500 mt-1 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30' : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'}`}>
                                Pilih Paket
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
