"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { usePathname } from "next/navigation";

const leftLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/add-destination" },
    { name: "My Bookings", href: "#" },
    { name: "Admin", href: "#" },
];

const rightLinks = [
    { name: "Profile", href: "#", icon: true },
    { name: "Login", href: "#" },
    { name: "Sign Up", href: "#" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [rightMenuOpen, setRightMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname == "/";

    return (
        <header
            className={`w-full z-50 ${isHome
                ? "absolute top-0 left-0 px-3 sm:px-5 py-3 text-white"
                : "relative bg-white"
                }`}
        >
            <div
                className="relative w-full bg-cover bg-center"
            >
                <div className="absolute inset-0" />

                <div className="relative mx-auto">
                    {/* Desktop strip (md and up) */}
                    <nav className="hidden md:flex h-14 items-center justify-between bg-white px-5 shadow-sm relative">
                        {/* Left */}
                        <div className="flex items-center gap-4 lg:gap-6 text-[14px] font-medium text-gray-800">
                            {leftLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`hover:text-sky-700 transition ${idx === 0
                                        ? "text-sky-600 border-b-2 border-sky-500 pb-[2px]"
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Center brand */}
                        <Link
                            href="#"
                            className="text-[34px] lg:text-[40px] leading-none font-semibold text-sky-600 tracking-tight"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Wanderlast
                        </Link>

                        {/* Right full links only on lg+ */}
                        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-gray-800">
                            <Link href="#" className="flex items-center gap-1 hover:text-sky-700 transition">
                                <User size={14} />
                                <span>Profile</span>
                            </Link>
                            <Link href="#" className="hover:text-sky-700 transition">
                                Login
                            </Link>
                            <Link href="#" className="hover:text-sky-700 transition">
                                Sign Up
                            </Link>
                        </div>

                        {/* Right hamburger only on md to lg */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setRightMenuOpen((v) => !v)}
                                className="p-2 text-gray-800"
                                aria-label="Toggle right menu"
                            >
                                {rightMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>

                        {/* Dropdown for md->lg right menu */}
                        {rightMenuOpen && (
                            <div className="absolute right-5 top-[58px] z-20 w-44 rounded-md border bg-white shadow-md p-2 lg:hidden">
                                {rightLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block rounded px-2 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-sky-700 transition"
                                        onClick={() => setRightMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </nav>

                    {/* Mobile */}
                    <nav className="md:hidden bg-white shadow-sm">
                        <div className="h-14 px-4 flex items-center justify-between">
                            <Link
                                href="#"
                                className="text-3xl font-semibold text-sky-600"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Wanderlast
                            </Link>

                            <button
                                onClick={() => setMobileOpen((v) => !v)}
                                className="p-2 text-gray-800"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>

                        {mobileOpen && (
                            <div className="border-t px-4 py-3 space-y-2 text-sm font-medium text-gray-800">
                                {[...leftLinks, ...rightLinks].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block py-1 hover:text-sky-700 transition"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}