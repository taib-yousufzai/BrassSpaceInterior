import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          {overlay && <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />}
        </>
      )}

      <div className="relative z-10 container mx-auto px-6 text-center pt-32">
        {subtitle && (
          <p className="text-gray-300 text-sm md:text-base mb-6 font-medium tracking-wider uppercase flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#daa520]"></span>
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          {title.split('.')[0]}.{' '}
          <span className="bg-gradient-to-r from-[#daa520] to-[#b8860b] bg-clip-text text-transparent">
            {title.split('.')[1]}.
          </span>
        </h1>

        {description && (
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">{description}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {primaryCTA && (
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {primaryCTA.text}
            </Link>
          )}
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {secondaryCTA.text}
            </Link>
          )}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#daa520] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Projects Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#daa520] mb-2 flex items-center justify-center gap-1 group-hover:scale-110 transition-transform duration-300">
              4.8<span className="text-2xl">★</span>
            </div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Google Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#daa520] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">On-time Delivery</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#daa520] mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
            <div className="text-3xl md:text-4xl font-bold text-[#daa520] mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Cities Present</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
