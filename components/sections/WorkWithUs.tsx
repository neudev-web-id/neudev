import { FaArrowRight } from "react-icons/fa";

export default function WorkWithUs() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="bg-[#F8F9FA] rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative shadow-sm border border-gray-100">

                    {/* Left Solid Blue Side */}
                    <div className="bg-blue-600 text-white p-12 md:p-16 flex flex-col w-full md:w-5/12 relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

                        <p className="text-blue-200 font-medium mb-4 z-10 uppercase tracking-wider text-sm">Bergabung dengan Agensi Kami</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 z-10 mt-auto pt-20">
                            Bekerja<br />Bersama Kami
                        </h2>

                        {/* Woman portrait simulated with a stock image in bottom right of this blue box */}
                        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 z-0 flex items-end justify-end">
                            {/* Using a placeholder for the portrait image */}
                            <div className="w-full h-full bg-cover bg-bottom rounded-tl-3xl border-l-[8px] border-t-[8px] border-blue-600" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop')" }}></div>
                        </div>
                    </div>

                    {/* Right White Side */}
                    <div className="bg-white p-12 md:p-16 flex flex-col justify-center w-full md:w-7/12">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Mitra Terpercaya</h3>
                        <p className="text-gray-500 mb-12 max-w-md text-lg leading-relaxed">
                            Kami memberikan solusi desain terbaik untuk membantu bisnis Anda tumbuh dan menonjol di pasar yang ramai. Bermitralah dengan kami untuk pencapaian luar biasa.
                        </p>

                        <div className="grid grid-cols-2 gap-8 items-center border-t border-gray-100 pt-10">
                            <div>
                                <p className="text-4xl font-bold font-display text-blue-600 mb-2">200+</p>
                                <p className="text-gray-500 font-medium">Pesaing</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div>
                                    <p className="text-4xl font-bold font-display text-blue-600 mb-2">1,230</p>
                                    <p className="text-gray-500 font-medium">Pelanggan</p>
                                </div>
                                <a href="#contact" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                                    <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
