export default function TrustedBy() {
    const brands = [
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Google Meet", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" },
        { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Zoom_Communications_Logo.png" },
        // Adding text for Google Meet since the icon above is just the logo mark
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Dipercaya Oleh</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

                    <div className="flex items-center gap-2">
                        <img src={brands[0].logo} alt="Microsoft" className="h-6 object-contain" />
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={brands[1].logo} alt="Google Meet" className="h-6 object-contain" />
                        <span className="font-display font-bold text-gray-600 text-xl tracking-tight hidden sm:block">Google Meet</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={brands[2].logo} alt="Zoom" className="h-6 object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}
