"use client";

import { useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  role: string;
  rating: number;
  text: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    role: "Homeowner",
    rating: 5,
    text: "Brass Space transformed our 3BHK into a beautiful, functional home. Their attention to detail and commitment to quality is outstanding. Highly recommend!"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    role: "Business Owner",
    rating: 5,
    text: "Excellent work on our office interior. The team was professional, delivered on time, and the quality exceeded our expectations. Great experience!"
  },
  {
    name: "Anita Verma",
    location: "Gurgaon",
    role: "Homeowner",
    rating: 5,
    text: "From design to execution, everything was perfect. The modular kitchen is both functional and stunning. Thank you Brass Space for making our dream home a reality!"
  },
  {
    name: "Vikram Singh",
    location: "Noida",
    role: "Property Developer",
    rating: 5,
    text: "Professional team with great design sense. They completed our commercial project within budget and timeline. Highly satisfied with the results!"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern - Black dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.5) 1.5px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#daa520] text-sm md:text-base font-semibold tracking-widest uppercase mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-[#daa520]">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#daa520] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#daa520] fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-8">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#daa520] to-[#b8860b] flex items-center justify-center text-white text-2xl font-bold">
                {currentTestimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                <p className="text-gray-400 text-sm">{currentTestimonial.role}, {currentTestimonial.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4"/>
                  </svg>
                  <span className="text-gray-400 text-xs">Google Review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-[#daa520] hover:bg-[#daa520] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#daa520]' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-[#daa520] hover:bg-[#daa520] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
