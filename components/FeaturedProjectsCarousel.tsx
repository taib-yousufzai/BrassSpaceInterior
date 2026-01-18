"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  image: string;
  thumbnails: string[];
}

const projects: Project[] = [
  {
    id: "modern-2bhk-gurgaon",
    title: "Modern 2BHK Apartment",
    category: "Residential",
    location: "Gurgaon",
    area: "1,200 sq ft",
    image: "/images/bedroom/mbr-1-1763100371-xDVo0.jpg",
    thumbnails: [
      "/images/bedroom/mbr-1-1763100371-xDVo0.jpg",
      "/images/bedroom/mbr-11-1763111543-e5Ily.jpg",
      "/images/living area/lr-11-1763103059-2KjqV.jpg"
    ]
  },
  {
    id: "luxury-island-kitchen",
    title: "Luxury Island Kitchen",
    category: "Kitchen",
    location: "Delhi",
    area: "250 sq ft",
    image: "/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg",
    thumbnails: [
      "/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg",
      "/images/Island Kitchen/ki-1-1763112227-Ov8Uo.jpg",
      "/images/Island Kitchen/ki-11-1763112216-Uy3Uw.jpg"
    ]
  },
  {
    id: "corporate-office-noida",
    title: "Corporate Office Interior",
    category: "Commercial",
    location: "Noida",
    area: "3,000 sq ft",
    image: "/images/home office/ho-1-1763115252-l3GLN.jpg",
    thumbnails: [
      "/images/home office/ho-1-1763115252-l3GLN.jpg",
      "/images/home office/ho-11-1763110382-NscOp.jpg",
      "/images/home office/ho-12-1763110381-RVOcI.jpg"
    ]
  },
  {
    id: "master-bedroom",
    title: "Elegant Master Bedroom",
    category: "Residential",
    location: "Gurgaon",
    area: "300 sq ft",
    image: "/images/bedroom/mbr-11-1763111543-e5Ily.jpg",
    thumbnails: [
      "/images/bedroom/mbr-11-1763111543-e5Ily.jpg",
      "/images/bedroom/mbr-1-1763100371-xDVo0.jpg",
      "/images/bedroom/mbr-12-1763111542-Qw9Xy.jpg"
    ]
  }
];

export default function FeaturedProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const currentProject = projects[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setSelectedThumbnail(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setSelectedThumbnail(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg-white opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-[#daa520] text-sm md:text-base font-semibold tracking-widest uppercase mb-2">HIGHLIGHTS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
              Signature <span className="text-[#daa520]">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Curated collection of our finest transformations</p>
          </div>
          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#daa520] text-[#daa520] rounded-full font-semibold hover:bg-[#daa520] hover:text-white transition-all duration-300"
          >
            View Full Gallery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main Featured Project */}
          <div className="relative group">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={currentProject.thumbnails[selectedThumbnail]}
                alt={currentProject.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                {currentProject.category}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{currentProject.title}</h3>
              <div className="flex flex-col gap-3 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#daa520]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{currentProject.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className="text-lg">{currentProject.area}</span>
                </div>
              </div>
              <Link
                href={`/portfolio/${currentProject.id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-4 rounded-full font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Project Details
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center gap-4 pt-6">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#b8860b] hover:bg-[#b8860b] hover:text-white transition-all duration-300"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSelectedThumbnail(0);
                    }}
                    className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#b8860b]' : 'w-8 bg-gray-300'
                      }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#b8860b] hover:bg-[#b8860b] hover:text-white transition-all duration-300"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {currentProject.thumbnails.map((thumbnail, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedThumbnail(index)}
                  className={`relative h-32 rounded-2xl overflow-hidden transition-all duration-300 ${index === selectedThumbnail
                    ? 'border-2 border-[#b8860b] shadow-lg'
                    : 'border-2 border-transparent hover:border-[#b8860b]'
                    }`}
                >
                  <Image
                    src={thumbnail}
                    alt={`${currentProject.title} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
