"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function FastWork() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Text */}
                    <div className="w-full lg:w-5/12">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                            Fast Work is our focus
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                            We streamline processes and utilize the best tools to ensure your project is delivered on time, every time, without compromising on premium quality.
                        </p>
                        <a href="#services" className="inline-flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                            <span className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                <FaPlay className="text-sm ml-1" />
                            </span>
                            Watch how we work
                        </a>
                    </div>

                    {/* Right Visual (Kanban/Timeline Mockup) */}
                    <div className="w-full lg:w-7/12 relative">
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl bg-[#F8F9FA] p-8 md:p-12 border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center">

                            {/* Center Timeline line */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 -translate-x-1/2"></div>

                            {/* Flow boxes */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="absolute top-20 left-10 md:left-24 bg-blue-600 text-white p-4 rounded-xl shadow-lg w-48 text-sm font-medium z-10 flex items-center justify-between"
                            >
                                Start Project <span className="bg-white/20 px-2 py-1 rounded text-xs">Day 1</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="absolute top-48 right-10 md:right-24 bg-white border border-gray-100 p-4 rounded-xl shadow-xl shadow-gray-200/50 w-56 text-sm font-medium z-10 text-gray-800 flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">UI</div>
                                    <span>Design Phase</span>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-300 border border-white"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white border border-gray-100 px-6 py-4 rounded-full shadow-lg text-sm font-bold text-blue-600 z-10"
                            >
                                Delivery Ready
                            </motion.div>

                            {/* Connecting lines or dots on the timeline */}
                            <div className="absolute top-[108px] left-1/2 w-4 h-4 rounded-full bg-blue-600 -translate-x-1/2 ring-4 ring-white z-20"></div>
                            <div className="absolute top-[220px] left-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 z-20"></div>
                            <div className="absolute bottom-[108px] left-1/2 w-4 h-4 rounded-full bg-white border-4 border-green-500 -translate-x-1/2 z-20"></div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
