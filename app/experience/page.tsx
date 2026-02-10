'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const experiencePoints = [
  {
    number: '01',
    title: 'Personalization with Purpose',
    subtitle: 'It starts with your story.',
    description:
      'Your home should be a reflection of how you live. Whether you have architectural plans in hand, need help selecting a homesite, or are starting from scratch, we begin with a personal consultation to align on vision, lifestyle, and expectations.',
    image: '/exampleHome1.png',
  },
  {
    number: '02',
    title: 'Partnership at Every Step',
    subtitle: 'Expert guidance. Transparent communication.',
    description:
      "We walk with you through every phase of the process, providing thoughtful recommendations and clear next steps. From land acquisition and architectural coordination to selecting finishes and final walkthroughs, you'll never be left guessing.",
    image: '/exampleHome2.png',
  },
  {
    number: '03',
    title: 'Thoughtful Timelines',
    subtitle: 'Your time matters. Your trust matters more.',
    description:
      "We keep our project volumes manageable to ensure every home receives the attention it deserves. Our construction process is built around milestone updates, quality checks, and open communication.",
    image: '/exampleHome3.png',
  },
  {
    number: '04',
    title: 'Uncompromising Quality',
    subtitle: "Excellence isn't optional. It's our standard.",
    description:
      "Every Casas Xio home is built to exceed local building requirements and stands the test of time. Throughout construction, we conduct rigorous inspections to verify every detail.",
    image: '/exampleHome1.png',
  },
  {
    number: '05',
    title: 'Welcome Home',
    subtitle: "Your journey doesn't end at move-in.",
    description:
      "We stand behind our work long after the last box is unpacked. With post-construction support and a dedicated team always ready to help, we ensure your home remains exceptional.",
    image: '/exampleHome2.png',
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 bg-midnight overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
          <FadeIn>
            <p className="label text-slate mb-6">The Casas Xio Experience</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight">
              More Than a Process.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-6xl text-slate mb-10">
              A Partnership.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Creating a custom home is one of life's most personal investments. 
              At Casas Xio, we treat it that way—with care, transparency, and collaboration.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experience Points */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="space-y-32">
            {experiencePoints.map((point, index) => (
              <StaggerItem key={index}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-start gap-6">
                      <span className="font-serif text-7xl text-navy/20">
                        {point.number}
                      </span>
                      <div className="pt-3">
                        <h3 className="font-serif text-3xl text-midnight mb-2">
                          {point.title}
                        </h3>
                        <p className="text-navy font-medium mb-4">
                          {point.subtitle}
                        </p>
                        <p className="text-stone leading-relaxed text-lg">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <motion.div 
                    className={`relative aspect-4/3 overflow-hidden ${
                      index % 2 === 1 ? 'lg:col-start-1' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 border border-midnight/10" />
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Offerings */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="label text-navy mb-4">Beyond Custom Homes</p>
              <h2 className="font-serif text-4xl md:text-5xl text-midnight">
                Additional Services
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Renovations */}
            <FadeIn delay={0.1}>
              <div className="group p-10 bg-ivory border border-midnight/10 hover:border-navy/30 transition-colors duration-500">
                <div className="w-12 h-12 flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-midnight mb-4">
                  Renovations
                </h3>
                <p className="text-stone leading-relaxed">
                  Transform your existing space with expert renovations. From kitchen and bathroom 
                  remodels to whole-home makeovers, we bring the same attention to detail and 
                  craftsmanship to every project.
                </p>
              </div>
            </FadeIn>

            {/* Additions */}
            <FadeIn delay={0.2}>
              <div className="group p-10 bg-ivory border border-midnight/10 hover:border-navy/30 transition-colors duration-500">
                <div className="w-12 h-12 flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-midnight mb-4">
                  Additions
                </h3>
                <p className="text-stone leading-relaxed">
                  Growing family or need more space? We design and build seamless home additions 
                  that blend perfectly with your existing structure while adding the functionality 
                  you need.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Let's Build Something <span className="text-slate">Extraordinary</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Whether you're building from the ground up or reimagining your current space, 
              our team is here to guide you with expertise, integrity, and care.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-midnight text-sm font-medium tracking-widest uppercase hover:bg-ivory transition-colors duration-300"
            >
              Schedule Your Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
