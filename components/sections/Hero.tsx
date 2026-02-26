"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Decorative Blob/Arc */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%] bg-gradient-to-b from-[#F8F9FA] to-white rounded-b-[50%] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10">

                {/* Floating Element Left (Graphic/Chart) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex absolute top-10 left-10 xl:left-20 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex-col gap-2 w-48"
                >
                    <div className="flex gap-2 mb-2 items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">C</div>
                        <div className="text-xs font-semibold text-gray-700">Project Stats</div>
                    </div>
                    <div className="flex items-end gap-2 h-16 border-b border-gray-100 pb-2">
                        <div className="w-4 bg-blue-500 rounded-t-sm h-[40%]"></div>
                        <div className="w-4 bg-blue-300 rounded-t-sm h-[70%]"></div>
                        <div className="w-4 bg-blue-600 rounded-t-sm h-[100%]"></div>
                        <div className="w-4 bg-gray-200 rounded-t-sm h-[30%]"></div>
                        <div className="w-4 bg-blue-400 rounded-t-sm h-[60%]"></div>
                    </div>
                    <div className="flex justify-between mt-1 px-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                </motion.div>

                {/* Floating Element Right (Avatars) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden lg:flex absolute top-20 right-10 xl:right-20 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex-col gap-3 w-56 items-center"
                >
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="user" /></div>
                        <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="user" /></div>
                        <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="user" /></div>
                        <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 text-xs font-bold">+1.2K</div>
                    </div>
                    <div className="text-xs text-gray-500 text-center font-medium">Trusted by thousands of amazing clients</div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Top rated agency 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-display text-gray-900 leading-tight tracking-tight mb-8">
                        The Beloved Design <br className="hidden md:block" /> Company in Konoha
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are dedicated to crafting exceptional digital experiences. From UI/UX design to full-scale web development, we bring your vision to life.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-transform hover:-translate-y-1 w-full sm:w-auto text-center shadow-lg shadow-blue-600/20">
                            Get in touch
                        </a>
                        <a href="#portfolio" className="px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 rounded-full font-semibold text-lg transition-transform hover:-translate-y-1 w-full sm:w-auto text-center shadow-sm">
                            See our work
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
