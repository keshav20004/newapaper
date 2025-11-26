"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentDate = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Nation", href: "/category/nation" },
        { name: "World", href: "/category/world" },
        { name: "Cricket", href: "/category/cricket" },
        { name: "Tech", href: "/category/tech" },
        { name: "Entertainment", href: "/category/entertainment" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-red-700 text-white text-xs py-1 px-4 hidden md:flex justify-between items-center">
                <span>{currentDate}</span>
                <div className="flex gap-4">
                    <span>Hindi News</span>
                    <span>E-Paper</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-bold text-red-700">
                    LiveHindustan<span className="text-gray-700 text-sm ml-1">Clone</span>
                </Link>

                {/* Desktop Nav & Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex gap-6 font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-red-700 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4 text-gray-600">
                        <Search className="w-5 h-5 cursor-pointer hover:text-red-700" />
                        <Bell className="w-5 h-5 cursor-pointer hover:text-red-700" />
                        <button className="bg-red-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-red-800 transition">
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <nav className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-red-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-3">
                            <button className="bg-red-700 text-white w-full py-2 rounded-md font-semibold">
                                Sign In
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
