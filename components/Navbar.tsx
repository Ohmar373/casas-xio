"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold">Casas XIO</Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu button */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-900" : "hover:bg-gray-700"
            }`}
        >
            {children}
        </Link>
    );
}   

