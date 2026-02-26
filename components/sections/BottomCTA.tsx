"use client";

import { FaArrowRight } from "react-icons/fa";

export default function BottomCTA() {
    return (
        <section className="py-12 md:py-20 bg-white px-6 md:px-12">
            <div className="container mx-auto">
                <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-xl shadow-blue-600/20">

                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Work Together with Neudev
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl">
                            We help ambitious companies design, build, and launch exceptional digital products. Let's create something amazing together.
                        </p>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                        <a href="#contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 rounded-full font-bold text-lg transition-all flex items-center gap-3 shadow-lg">
                            Let's Talk
                            <FaArrowRight />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
