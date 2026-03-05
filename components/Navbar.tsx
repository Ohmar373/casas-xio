"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    const navIsLight = scrolled || mobileMenuOpen;

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    navIsLight
                        ? "bg-cream/95 backdrop-blur-xl border-b border-midnight/8 shadow-sm shadow-midnight/5"
                        : "bg-midnight/80 backdrop-blur-md"
                }`}
            >
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group z-10">
                            <div className="relative w-8 h-8 lg:w-9 lg:h-9 overflow-hidden rounded flex-shrink-0">
                                <Image
                                    src="/CasasXio.jpg"
                                    alt="Casas XIO"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className={`font-serif text-lg tracking-[0.12em] transition-colors duration-300 ${
                                navIsLight ? "text-midnight" : "text-white"
                            }`}>
                                CASAS <span className="font-normal">XIO</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <NavLink key={link.href} href={link.href} scrolled={scrolled}>
                                    {link.label}
                                </NavLink>
                            ))}
                            <Link
                                href="/contact"
                                className={`px-6 py-2.5 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 border ${
                                    scrolled
                                        ? "bg-midnight text-white border-midnight hover:bg-navy hover:border-navy hover:shadow-md hover:-translate-y-px"
                                        : "bg-transparent text-white border-white/40 hover:bg-white hover:text-midnight hover:border-white"
                                }`}
                            >
                                Start Your Build
                            </Link>
                        </div>

                        {/* Mobile hamburger — larger tap target */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <span className={`block w-5 h-px transition-all duration-300 origin-center ${
                                navIsLight ? "bg-midnight" : "bg-white"
                            } ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                            <span className={`block h-px transition-all duration-300 ${
                                navIsLight ? "bg-midnight" : "bg-white"
                            } ${mobileMenuOpen ? "w-0 opacity-0" : "w-5"}`} />
                            <span className={`block w-5 h-px transition-all duration-300 origin-center ${
                                navIsLight ? "bg-midnight" : "bg-white"
                            } ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Full-screen Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                        className="fixed inset-0 z-40 bg-cream lg:hidden flex flex-col"
                    >
                        {/* Links */}
                        <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-8">
                            <nav className="mb-10">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.1 + i * 0.07,
                                            duration: 0.4,
                                            ease: [0.25, 0.4, 0.25, 1],
                                        }}
                                    >
                                        <MobileNavLink href={link.href}>
                                            {link.label}
                                        </MobileNavLink>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full py-5 bg-midnight text-white text-center text-xs font-medium tracking-[0.12em] uppercase hover:bg-navy transition-colors duration-300"
                                >
                                    Start Your Build
                                </Link>
                            </motion.div>
                        </div>

                        {/* Footer strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="px-8 py-6 border-t border-midnight/10"
                        >
                            <p className="text-xs tracking-widest uppercase text-stone mb-0.5">Service Area</p>
                            <p className="text-sm text-midnight">Rio Grande Valley, Texas</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({
    href,
    children,
    scrolled,
}: {
    href: string;
    children: React.ReactNode;
    scrolled: boolean;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative text-xs tracking-[0.1em] uppercase transition-colors duration-300 group ${
                scrolled
                    ? isActive ? "text-midnight" : "text-stone hover:text-midnight"
                    : isActive ? "text-white" : "text-white/70 hover:text-white"
            }`}
        >
            {children}
            <span className={`absolute -bottom-1 left-0 w-full h-px transition-transform duration-300 origin-left ${
                scrolled ? "bg-navy" : "bg-white"
            } ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
        </Link>
    );
}

function MobileNavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center justify-between py-5 border-b border-midnight/10 group transition-colors ${
                isActive ? "text-midnight" : "text-stone hover:text-midnight"
            }`}
        >
            <span className="font-serif text-4xl">{children}</span>
            <svg
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 ${
                    isActive ? "text-navy" : "text-stone/40 group-hover:text-midnight"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </Link>
    );
}
