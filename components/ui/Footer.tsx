import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#F8F9FA] pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex flex-row items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex flex-row items-center justify-center">
                                <span className="text-white font-bold font-display text-xl">N</span>
                            </div>
                            <span className="text-xl font-bold font-display text-gray-900">
                                Neudev
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 pr-4">
                            We are a premium digital agency that focuses on fast, high-quality UI/UX design and development for ambitious companies.
                        </p>
                        <div className="flex flex-row gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex flex-row items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex flex-row items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex flex-row items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex flex-row items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                                <FaDribbble />
                            </a>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-display font-semiboldt text-gray-900 mb-6 font-bold">About</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Our Team</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display font-semiboldt text-gray-900 mb-6 font-bold">Services</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Branding</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-semiboldt text-gray-900 mb-6 font-bold">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="text-gray-500 text-sm flex flex-col">
                                <span className="font-medium text-gray-900 mb-1">Phone</span>
                                +62 123 4567 890
                            </li>
                            <li className="text-gray-500 text-sm flex flex-col">
                                <span className="font-medium text-gray-900 mb-1">Email</span>
                                hello@neudev.com
                            </li>
                            <li className="text-gray-500 text-sm flex flex-col">
                                <span className="font-medium text-gray-900 mb-1">Location</span>
                                Konoha, Hidden Leaf Village.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Neudev. All rights reserved.
                    </p>
                    <div className="flex flex-row gap-6">
                        <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
