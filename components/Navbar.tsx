"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-ivory backdrop-blur-md shadow-sm' 
                    : 'bg-midnight/80 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded">
                            <Image
                                src="/CasasXio.jpg"
                                alt="Casas XIO"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
                            scrolled ? 'text-midnight' : 'text-white'
                        }`}>
                            CASAS <span className="font-normal">XIO</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <NavLink href="/" scrolled={scrolled}>Home</NavLink>
                        <NavLink href="/experience" scrolled={scrolled}>Experience</NavLink>
                        <NavLink href="/about" scrolled={scrolled}>About</NavLink>
                        <Link
                            href="/contact"
                            className={`px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                                scrolled
                                    ? 'bg-midnight text-white hover:bg-navy'
                                    : 'bg-white text-midnight hover:bg-ivory'
                            }`}
                        >
                            Start Your Build
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 transition-colors ${
                            scrolled ? 'text-midnight' : 'text-white'
                        }`}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 transition-all duration-300 ${
                                scrolled ? 'bg-midnight' : 'bg-white'
                            } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 transition-all duration-300 ${
                                scrolled ? 'bg-midnight' : 'bg-white'
                            } ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 transition-all duration-300 ${
                                scrolled ? 'bg-midnight' : 'bg-white'
                            } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        className="lg:hidden bg-white border-t border-ivory overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-1">
                            <MobileNavLink href="/">Home</MobileNavLink>
                            <MobileNavLink href="/experience">Experience</MobileNavLink>
                            <MobileNavLink href="/about">About</MobileNavLink>
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="block w-full py-4 bg-midnight text-white text-center text-sm font-medium tracking-wider uppercase hover:bg-navy transition-colors"
                                >
                                    Start Your Build
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

function NavLink({ 
    href, 
    children, 
    scrolled 
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
            className={`relative text-sm tracking-wider uppercase transition-colors duration-300 group ${
                scrolled 
                    ? isActive ? 'text-midnight' : 'text-stone hover:text-midnight'
                    : isActive ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
        >
            {children}
            <span className={`absolute -bottom-1 left-0 w-full h-px transition-transform duration-300 origin-left ${
                scrolled ? 'bg-navy' : 'bg-white'
            } ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
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
            className={`block py-3 text-lg font-serif transition-colors ${
                isActive 
                    ? 'text-midnight' 
                    : 'text-stone hover:text-midnight'
            }`}
        >
            {children}
        </Link>
    );
}   

