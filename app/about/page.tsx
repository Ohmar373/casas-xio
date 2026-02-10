'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const values = [
    {
        title: "Excellence",
        description: "We pursue excellence in every detail, from design to construction, ensuring the highest quality."
    },
    {
        title: "Transparency",
        description: "Honesty and open communication guide all our interactions with clients and partners."
    },
    {
        title: "Craftsmanship",
        description: "Every home is built with meticulous care by skilled craftsmen who take pride in their work."
    },
    {
        title: "Partnership",
        description: "We believe great homes are built through genuine collaboration with our clients."
    },
];

export default function About() {
    return (
        <div className="bg-ivory">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-40 pb-28 bg-midnight overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>
                
                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
                    <FadeIn>
                        <p className="label text-slate mb-6">About Casas Xio</p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                            Our Story
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Discover the passion, vision, and values that drive us to create 
                            exceptional living spaces throughout the Rio Grande Valley.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Our History */}
            <section className="py-32 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeIn>
                            <div>
                                <p className="label text-navy mb-4">Our Heritage</p>
                                <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-8">
                                    Building With Purpose
                                </h2>
                                <div className="space-y-6 text-lg text-stone leading-relaxed">
                                    <p>
                                        Casas XIO was born from a simple yet powerful vision: to transform 
                                        the custom homebuilding experience in the Rio Grande Valley through 
                                        transparency, craftsmanship, and genuine partnership.
                                    </p>
                                    <p>
                                        We recognized that building a home is one of life's most significant 
                                        investments—both financially and emotionally. Our mission became clear: 
                                        create a process that's as rewarding as the finished home itself.
                                    </p>
                                    <p>
                                        Today, we continue to uphold these principles, treating every project 
                                        with the care and attention it deserves, and building lasting relationships 
                                        with the families we serve.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.2}>
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image
                                    src="/aboutUSPrudencia.jpg"
                                    alt="Casas XIO craftsmanship"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 border border-midnight/10" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-32 px-6 lg:px-8 bg-ivory">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <p className="label text-navy mb-4">What Guides Us</p>
                            <h2 className="font-serif text-4xl md:text-5xl text-midnight">
                                Our Core Values
                            </h2>
                        </div>
                    </FadeIn>
                    
                    <StaggerContainer className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <StaggerItem key={index}>
                                <div className="bg-white p-10 border border-midnight/10 hover:border-navy/30 transition-colors duration-500 group">
                                    <div className="flex items-start gap-6">
                                        <span className="font-serif text-5xl text-navy/30">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <h3 className="font-serif text-2xl text-midnight mb-3 group-hover:text-navy transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-stone leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-32 px-6 lg:px-8 bg-midnight">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="label text-slate mb-6">Our Promise</p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <blockquote className="font-serif text-3xl md:text-4xl text-white leading-relaxed mb-8">
                            "To create exceptional custom homes that enhance the quality of life 
                            for our clients, through thoughtful design, masterful craftsmanship, 
                            and an unwavering commitment to building trust."
                        </blockquote>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="w-12 h-px bg-slate mx-auto" />
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-6">
                            Ready to Build Your <span className="text-navy">Dream Home</span>?
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl text-stone mb-10 max-w-2xl mx-auto">
                            Let's start a conversation about bringing your vision to life.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-midnight text-white text-sm font-medium tracking-widest uppercase hover:bg-navy transition-colors duration-300"
                        >
                            Get in Touch
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
