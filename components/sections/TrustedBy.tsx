export default function TrustedBy() {
    const technologies = [
        { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" }
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-50">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center w-full block">TEKNOLOGI YANG KAMI GUNAKAN</p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
                    {technologies.map((tech, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-3 group">
                            <img src={tech.logo} alt={tech.name} className="h-8 md:h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-display font-semibold text-gray-700 text-sm md:text-lg tracking-tight mt-2 md:mt-0">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
