import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 pb-14 border-b border-gray-800">
                    <div className="max-w-xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            Wanderlust
                        </h1>

                        <p className="mt-5 text-sm sm:text-base leading-relaxed">
                            Your gateway to extraordinary travel experiences around
                            the world. Discover breathtaking destinations, curated
                            adventures, and unforgettable memories.
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full lg:max-w-md">
                        <h3 className="text-white mb-3 tracking-[3px] text-sm">
                            NEWSLETTER
                        </h3>

                        <p className="mb-5 text-sm leading-relaxed">
                            Subscribe for exclusive travel deals, destination guides,
                            and inspiration directly to your inbox.
                        </p>

                        <div className="flex items-center bg-white/5 border border-white/10 rounded-md overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent outline-none flex-1 px-4 py-3 text-sm text-white placeholder:text-gray-500"
                            />

                            <button className="bg-cyan-500 hover:bg-cyan-600 transition-all px-5 py-3 text-white text-lg cursor-pointer">
                                ↗
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white mb-5 tracking-[3px] text-sm">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition-all cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-white transition-all cursor-pointer">
                                Destinations
                            </li>

                            <li className="hover:text-white transition-all cursor-pointer">
                                My Bookings
                            </li>

                            <li className="hover:text-white transition-all cursor-pointer">
                                My Profile
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white mb-5 tracking-[3px] text-sm">
                            SUPPORT
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition-all cursor-pointer">
                                Help Center
                            </li>

                            <li className="hover:text-white transition-all cursor-pointer">
                                Terms of Service
                            </li>

                            <li className="hover:text-white transition-all cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-white transition-all cursor-pointer">
                                FAQs
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white mb-5 tracking-[3px] text-sm">
                            CONTACT
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>786 901 1622</li>
                            <li>info@wanderlust.com</li>
                            <li>New York, USA</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white mb-5 tracking-[3px] text-sm">
                            FOLLOW US
                        </h3>

                        <div className="flex gap-4 text-white">
                            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all cursor-pointer">
                                <FaXTwitter />
                            </button>

                            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all cursor-pointer">
                                <FaLinkedinIn />
                            </button>

                            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all cursor-pointer">
                                <FaInstagram />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-center md:text-left">
                        © 2026 Wanderlust. All rights reserved.
                    </p>

                    <p className="text-center md:text-right">
                        Designed for modern travelers worldwide.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;