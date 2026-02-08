'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Family Estate',
    location: 'McAllen, TX',
    image: '/exampleHome1.png',
  },
  {
    id: 2,
    title: 'Contemporary Luxury Home',
    location: 'Mission, TX',
    image: '/exampleHome2.png',
  },
  {
    id: 3,
    title: 'Elegant Ranch Style',
    location: 'Edinburg, TX',
    image: '/CasasXio.jpg',
  },
  {
    id: 4,
    title: 'Premium Waterfront',
    location: 'Alamo, TX',
    image: '/exampleHome3.png',
  },
  {
    id: 5,
    title: 'Sophisticated Estate',
    location: 'San Juan, TX',
    image: '/exampleHome1.png',
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const maxScroll = container.scrollWidth - container.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Our Latest Projects
        </h2>

        {/* Horizontal scrolling container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollBehavior: 'auto' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg mb-4 transition-transform duration-300 group-hover:shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="320px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-blue-600">
                  {project.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
