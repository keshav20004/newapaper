import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4 text-red-500">LiveHindustan</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Your trusted source for the latest news, updates, and in-depth analysis from India and around the world.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-red-500 transition"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-red-500 transition"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-red-500 transition"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-red-500 transition"><Youtube className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                            <li><Link href="/advertise" className="hover:text-white transition">Advertise</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/category/nation" className="hover:text-white transition">Nation</Link></li>
                            <li><Link href="/category/world" className="hover:text-white transition">World</Link></li>
                            <li><Link href="/category/sports" className="hover:text-white transition">Sports</Link></li>
                            <li><Link href="/category/tech" className="hover:text-white transition">Technology</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                        <p className="text-gray-400 text-sm mb-4">Get the latest news delivered to your inbox.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-medium">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} LiveHindustan Clone. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
