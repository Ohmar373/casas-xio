'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './animations';

interface Project {
  id: number;
  homeStyle: string;
  address: string;
  image: string;
  specs?: string;
}

const projects: Project[] = [
  {
    id: 1,
    homeStyle: 'Modern Family Estate',
    address: 'Palm Valley, McAllen',
    image: '/exampleHome1.png',
    specs: '4,200 sq ft · 4 Bed · 3.5 Bath',
  },
  {
    id: 2,
    homeStyle: 'Contemporary Luxury',
    address: 'Mission Hills, Mission',
    image: '/exampleHome2.png',
    specs: '3,800 sq ft · 3 Bed · 3 Bath',
  },
  {
    id: 3,
    homeStyle: 'Elegant Ranch Style',
    address: 'Chaparral, Edinburg',
    image: '/CasasXio.jpg',
    specs: '5,100 sq ft · 5 Bed · 4 Bath',
  },
  {
    id: 4,
    homeStyle: 'Premium Waterfront',
    address: 'Lakeside, Alamo',
    image: '/exampleHome3.png',
    specs: '4,600 sq ft · 4 Bed · 4.5 Bath',
  },
];

export default function Projects() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <FadeIn>
          <p className="label text-navy text-center mb-4">Portfolio</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl text-midnight text-center">
            Crafted With Precision
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-stone text-center max-w-2xl mx-auto text-lg">
            Every home tells a story of meticulous craftsmanship and thoughtful design
          </p>
        </FadeIn>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-8"
          style={{
            width: 'fit-content',
            animation: 'scroll 50s linear infinite',
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-[700px] group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[480px] w-full overflow-hidden bg-midnight/5">
                <Image
                  src={project.image}
                  alt={project.homeStyle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="700px"
                  priority={index < 4}
                  unoptimized
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/10 transition-colors duration-500" />
              </div>

              {/* Info below image */}
              <div className="mt-6 px-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-px bg-navy" />
                  <span className="text-xs tracking-widest uppercase text-stone">
                    {project.address}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight group-hover:text-navy transition-colors duration-300">
                  {project.homeStyle}
                </h3>
                {project.specs && (
                  <p className="mt-2 text-sm text-stone tracking-wide">
                    {project.specs}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
