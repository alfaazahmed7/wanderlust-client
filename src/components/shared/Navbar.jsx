"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import toast from "react-hot-toast";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [rightMenuOpen, setRightMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    const isActiveLink = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const getLinkClass = (href) =>
        `hover:text-sky-700 transition ${isActiveLink(href)
            ? "text-sky-600 border-b-2 border-sky-500 pb-[2px] cursor-pointer"
            : "text-gray-800 cursor-pointer"
        }`;

    const userData = authClient.useSession();
    const user = userData.data?.user;
    const isPending = userData.isPending;

    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success('You have successfully sign out');
    }

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
                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex h-14 items-center justify-between bg-white px-5 shadow-sm relative">

                        {/* LEFT LINKS (expanded) */}
                        <div className="flex items-center gap-4 lg:gap-6 text-[14px] font-medium">

                            <Link href="/" className={getLinkClass("/")}>
                                Home
                            </Link>

                            <Link href="/destinations" className={getLinkClass("/destinations")}>
                                Destinations
                            </Link>

                            <Link href="/my-bookings" className={getLinkClass("/my-bookings")}>
                                My-Bookings
                            </Link>

                            <Link href="/add-destination" className={getLinkClass("/add-destination")}>
                                Admin
                            </Link>
                        </div>

                        {/* LOGO */}
                        <Link
                            href="/"
                            className="text-[34px] lg:text-[40px] leading-none font-semibold text-sky-600 tracking-tight"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Wanderlast
                        </Link>

                        {/* RIGHT LINKS (expanded) */}
                        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium">

                            <Link
                                href="/profile"
                                className={`flex items-center gap-1 ${getLinkClass("/profile")}`}
                            >
                                <User size={14} />
                                <span>Profile</span>
                            </Link>

                            {isPending ?
                                <Spinner />
                                :
                                user ? (
                                    <div className="flex items-center gap-3">
                                        <Avatar className="ring-2 ring-primary/20">
                                            <Avatar.Image
                                                alt={user?.name}
                                                src={user?.image}
                                                referrerPolicy="no-referrer"
                                            />
                                            <Avatar.Fallback>
                                                {user?.name?.charAt(0)}
                                            </Avatar.Fallback>
                                        </Avatar>

                                        <button
                                            onClick={handleSignOut}
                                            className={`flex items-center gap-1 cursor-pointer ${getLinkClass("#")}`}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <Link href="/sign-in" className={`cursor-pointer ${getLinkClass("/sign-in")}`}>
                                            Login
                                        </Link>
                                    </div>
                                )}
                        </div>

                        {/* MOBILE RIGHT MENU BUTTON */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setRightMenuOpen((v) => !v)}
                                className="p-2 text-gray-800"
                                aria-label="Toggle right menu"
                            >
                                {rightMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>

                        {/* RIGHT DROPDOWN MENU */}
                        {rightMenuOpen && (
                            <div className="absolute right-5 top-[58px] z-20 w-44 rounded-md border bg-white shadow-md p-2 lg:hidden">

                                <Link
                                    href="/profile"
                                    className={`flex items-center gap-1 mb-3 ${getLinkClass("/profile")}`}
                                >
                                    <User size={14} />
                                    <span>Profile</span>
                                </Link>

                                {isPending ?
                                    <Spinner />
                                    :
                                    user ? (
                                        <div className="flex items-center gap-3">
                                            <Avatar className="ring-2 ring-primary/20">
                                                <Avatar.Image
                                                    alt={user?.name}
                                                    src={user?.image}
                                                    referrerPolicy="no-referrer"
                                                />
                                                <Avatar.Fallback>
                                                    {user?.name?.charAt(0)}
                                                </Avatar.Fallback>
                                            </Avatar>

                                            <button
                                                onClick={() => {
                                                    handleSignOut();
                                                    setMobileOpen(false);
                                                }}
                                                className={`flex items-center gap-1 ${getLinkClass("/#")}`}
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link
                                                href="/sign-in"
                                                className={`cursor-pointer ${getLinkClass("/sign-in")}`}
                                                onClick={() => setRightMenuOpen(false)}
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    )}
                            </div>
                        )}
                    </nav>

                    {/* MOBILE NAV */}
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

                                <Link
                                    href="/"
                                    className={`block py-1 transition ${isActiveLink("/")
                                        ? "text-sky-600 border-b-2 border-sky-500"
                                        : "text-gray-800 hover:text-sky-700"
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/destinations"
                                    className={`block py-1 transition ${isActiveLink("/destinations")
                                        ? "text-sky-600 border-b-2 border-sky-500"
                                        : "text-gray-800 hover:text-sky-700"
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Destinations
                                </Link>

                                <Link
                                    href="/my-bookings"
                                    className={`block py-1 transition ${isActiveLink("/add-destination")
                                        ? "text-sky-600 border-b-2 border-sky-500"
                                        : "text-gray-800 hover:text-sky-700"
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    My Bookings
                                </Link>

                                <Link
                                    href="/add-destination"
                                    className={`block py-1 transition ${isActiveLink("/admin")
                                        ? "text-sky-600 border-b-2 border-sky-500"
                                        : "text-gray-800 hover:text-sky-700"
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Admin
                                </Link>

                                <Link
                                    href="/profile"
                                    className={`flex items-center gap-1 ${getLinkClass("/profile")}`}
                                >
                                    <User size={14} />
                                    <span>Profile</span>
                                </Link>

                                {isPending ?
                                    <Spinner size="sm" />
                                    :
                                    user ? (
                                        <div className="flex items-center gap-3">
                                            <Avatar className="ring-2 ring-primary/20">
                                                <Avatar.Image
                                                    alt={user?.name}
                                                    src={user?.image}
                                                    referrerPolicy="no-referrer"
                                                />
                                                <Avatar.Fallback>
                                                    {user?.name?.charAt(0)}
                                                </Avatar.Fallback>
                                            </Avatar>

                                            <button
                                                onClick={() => {
                                                    handleSignOut();
                                                    setMobileOpen(false);
                                                }}
                                                className={`flex items-center gap-1 ${getLinkClass("/#")}`}
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link
                                                href="/sign-in"
                                                className={getLinkClass("/sign-in")}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    )}
                            </div>
                        )}
                    </nav>
                </div>
            </div >
        </header >
    );
}