import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services | Brass Space Interior Solutions',
  description: 'Explore our comprehensive interior design services including residential, commercial, modular kitchens, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Interior Solutions Tailored to Your Needs"
        backgroundImage="/images/living area/lr-1-1-1763103069-BpS4n.jpg"
      />

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#daa520] text-sm md:text-base font-semibold tracking-widest uppercase mb-4">WHAT WE DO</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Transforming Spaces, <span className="text-[#daa520]">Elevating Lifestyles</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of interior design and execution services to bring your vision to life.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  href={`/services/${service.slug}`}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section - Simplified version for the services page */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Brass Space?</h2>
            <p className="text-lg text-gray-600">
              We combine creativity with technical expertise to deliver spaces that are beautiful, functional, and durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5f1e8] rounded-full flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalized Design</h3>
              <p className="text-gray-600">Every design is customized to your specific lifestyle, preferences, and budget.</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5f1e8] rounded-full flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">On-Time Delivery</h3>
              <p className="text-gray-600">We follow strict timelines and project management processes to ensure timely handover.</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#f5f1e8] rounded-full flex items-center justify-center">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">We use only the best materials and skilled craftsmen to ensure lasting quality.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Project?"
        description="Book a free consultation today and let's create something extraordinary together."
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
      />
    </>
  );
}
