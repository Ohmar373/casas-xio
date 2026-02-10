'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const areas = [
  "McAllen",
  "Mission",
  "Edinburg",
  "Pharr",
  "Weslaco",
  "Harlingen",
  "Brownsville",
  "San Benito",
  "Los Fresnos",
  "Alamo",
  "San Juan",
  "Mercedes",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/80">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 overflow-hidden rounded">
                <Image
                  src="/CasasXio.jpg"
                  alt="Casas XIO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl text-white tracking-wide">
                  CASAS <span className="font-normal">XIO</span>
                </p>
                <p className="text-xs tracking-widest uppercase text-white/50 mt-1">
                  Custom Home Builders
                </p>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Crafting exceptional custom homes throughout the Rio Grande Valley 
              with precision, transparency, and timeless design.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm tracking-wider uppercase text-slate hover:text-white transition-colors duration-300 group"
            >
              Start a Conversation
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </div>

          {/* Areas Column */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-lg text-white mb-6">Service Areas</h3>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Rio Grande Valley, Texas
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {areas.map((area) => (
                <li 
                  key={area} 
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-slate group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 tracking-wide">
            © {new Date().getFullYear()} Casas XIO LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-white/40">
            <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
