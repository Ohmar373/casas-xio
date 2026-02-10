'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Vision & Design',
    description:
      'We begin by understanding your aspirations, lifestyle, and aesthetic preferences. Our design team transforms your vision into detailed architectural plans with complete transparency on timeline and investment.',
    image: '/blueprints.jpg',
  },
  {
    number: '02',
    title: 'Crafted Construction',
    description:
      "With permits secured and engineering finalized, master craftsmen bring your home to life. We maintain the highest standards of quality while keeping you informed at every milestone.",
    image: '/folsomConstruction.jpg',
  },
  {
    number: '03',
    title: 'Seamless Delivery',
    description:
      "Rigorous inspections and a comprehensive walkthrough ensure every detail exceeds expectations. Our relationship continues well beyond move-in with dedicated support.",
    image: '/exampleHome3.png',
  },
];

export default function Approach() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ivory/50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <p className="label text-navy mb-4">Our Process</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-midnight leading-tight">
              A Refined Approach <br className="hidden md:block" />
              to Homebuilding
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-stone">
              Three deliberate phases designed to transform your vision into an 
              exceptional living space—with clarity, craftsmanship, and care at every step.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <StaggerContainer className="space-y-24">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-start gap-6">
                    <span className="font-serif text-6xl text-navy/30">
                      {step.number}
                    </span>
                    <div className="pt-2">
                      <h3 className="font-serif text-2xl md:text-3xl text-midnight mb-4">
                        {step.title}
                      </h3>
                      <p className="text-stone leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <motion.div 
                  className={`relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  {/* Subtle border accent */}
                  <div className="absolute inset-0 border border-midnight/10" />
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quote & CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-32 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-midnight max-w-3xl mx-auto leading-relaxed">
              "We don't just build homes—we craft legacies of trust, 
              transparency, and timeless design."
            </blockquote>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-midnight text-white text-sm font-medium tracking-widest uppercase hover:bg-navy transition-colors duration-300"
              >
                Begin Your Journey
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
