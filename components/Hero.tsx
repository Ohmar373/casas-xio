'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/droneFootage.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="label text-ivory tracking-[0.2em]">
              Luxury Custom Homes
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="heading-xl text-white max-w-4xl mx-auto drop-shadow-lg"
          >
            Crafted for Those Who
            <br />
            <span className="text-slate">Demand Excellence</span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="divider" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="body-lg text-ivory/90 max-w-2xl mx-auto drop-shadow-md"
          >
            Building exceptional homes in the Rio Grande Valley with unwavering 
            commitment to quality, transparency, and timeless design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="btn-primary bg-white text-midnight hover:bg-ivory"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/experience"
              className="btn-primary bg-white text-midnight hover:bg-ivory"
            >
              Explore Our Process
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
