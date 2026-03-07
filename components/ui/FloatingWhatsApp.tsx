"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/1234567890" // Placeholder WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Hubungi Kami via WhatsApp
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
            </span>
        </a>
    );
}
