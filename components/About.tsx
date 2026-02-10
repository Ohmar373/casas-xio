'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '50+', label: 'Homes Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: 'RGV', label: 'Proudly Local' },
];

const values = [
  {
    title: 'Uncompromising Quality',
    description: 'Every material, every detail, every finish is selected with intention and executed with precision.',
  },
  {
    title: 'Transparent Partnership',
    description: 'Clear communication and honest timelines from first consultation to final walkthrough.',
  },
  {
    title: 'Timeless Design',
    description: 'Architecture that elevates daily living and appreciates in value over generations.',
  },
];

export default function About() {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Content */}
          <div>
            <FadeIn>
              <span className="label text-navy mb-4 block">About Casas XIO</span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="heading-lg text-midnight mb-8">
                Where Vision Meets
                <br />
                Craftsmanship
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="divider mb-8" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="body-lg text-charcoal mb-6">
                At Casas XIO, we believe a home should be more than shelter—it should be 
                a sanctuary. A reflection of who you are and the life you aspire to live.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-stone leading-relaxed mb-10">
                Founded in the Rio Grande Valley, we combine local expertise with 
                world-class standards to deliver custom homes that stand apart. From 
                the initial vision to the final key turn, our commitment to excellence 
                is unwavering.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Link href="/experience" className="btn-primary">
                  Our Approach
                </Link>
                <Link href="/contact" className="btn-outline">
                  Start a Conversation
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Image + Stats */}
          <div className="space-y-8">
            <FadeIn delay={0.3} direction="left">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/exampleHome1.png"
                  alt="Casas XIO luxury home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                {/* Subtle border overlay */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
              </div>
            </FadeIn>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-white p-6 border-l-2 border-navy">
                    <p className="font-serif text-3xl text-midnight mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-stone">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="label text-navy mb-4 block">Our Foundation</span>
              <h3 className="heading-md text-midnight">
                Principles That Guide Every Build
              </h3>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <div className="group p-8 bg-white border border-ivory hover:border-slate/30 transition-all duration-500">
                  <span className="font-serif text-5xl text-ivory group-hover:text-navy transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <h4 className="font-serif text-xl text-midnight mt-4 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-stone leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
