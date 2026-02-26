"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#blog" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold font-display text-xl">N</span>
                    </div>
                    <span className="text-xl font-bold font-display text-gray-900">
                        Neudev
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 rounded-full font-medium text-sm transition-all shadow-sm flex flex-row items-center gap-2"
                    >
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 px-6 py-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-blue-600 font-medium text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-6 py-3 bg-blue-600 text-white text-center rounded-full font-medium text-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
