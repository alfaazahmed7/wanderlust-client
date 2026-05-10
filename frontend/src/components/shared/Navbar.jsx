"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { usePathname } from "next/navigation";

const leftLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Add-Destinations", href: "/add-destination" },
    { name: "Admin", href: "/admin" },
];

const rightLinks = [
    { name: "Profile", href: "/profile", icon: true },
    { name: "Login", href: "/login" },
    { name: "Sign Up", href: "/sign-up" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [rightMenuOpen, setRightMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    const isActiveLink = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const getLinkClass = (href) =>
        `hover:text-sky-700 transition ${isActiveLink(href)
            ? "text-sky-600 border-b-2 border-sky-500 pb-[2px]"
            : "text-gray-800"
        }`;

    return (
        <header
            className={`w-full z-50 ${isHome
                    ? "absolute top-0 left-0 px-3 sm:px-5 py-3 text-white"
                    : "relative bg-white"
                }`}
        >
            <div className="relative w-full bg-cover bg-center">
                <div className="absolute inset-0" />

                <div className="relative mx-auto">
                    <nav className="hidden md:flex h-14 items-center justify-between bg-white px-5 shadow-sm relative">
                        <div className="flex items-center gap-4 lg:gap-6 text-[14px] font-medium">
                            {leftLinks.map((link) => (
                                <Link key={link.name} href={link.href} className={getLinkClass(link.href)}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="#"
                            className="text-[34px] lg:text-[40px] leading-none font-semibold text-sky-600 tracking-tight"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Wanderlast
                        </Link>

                        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium">
                            {rightLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={link.icon ? `flex items-center gap-1 ${getLinkClass(link.href)}` : getLinkClass(link.href)}
                                >
                                    {link.icon && <User size={14} />}
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setRightMenuOpen((v) => !v)}
                                className="p-2 text-gray-800"
                                aria-label="Toggle right menu"
                            >
                                {rightMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>

                        {rightMenuOpen && (
                            <div className="absolute right-5 top-[58px] z-20 w-44 rounded-md border bg-white shadow-md p-2 lg:hidden">
                                {rightLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`block rounded px-2 py-2 text-sm font-medium transition ${isActiveLink(link.href)
                                                ? "text-sky-600 bg-sky-50"
                                                : "text-gray-800 hover:bg-gray-50 hover:text-sky-700"
                                            }`}
                                        onClick={() => setRightMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </nav>

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
                            <div className="border-t px-4 py-3 space-y-2 text-sm font-medium">
                                {[...leftLinks, ...rightLinks].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`block py-1 transition ${isActiveLink(link.href)
                                                ? "text-sky-600 border-b-2 border-sky-500"
                                                : "text-gray-800 hover:text-sky-700"
                                            }`}
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