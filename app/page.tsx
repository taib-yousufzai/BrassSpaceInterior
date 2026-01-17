import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import CTABanner from '@/components/CTABanner';
import FeaturedProjectsCarousel from '@/components/FeaturedProjectsCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { SERVICES } from '@/lib/constants';

export default function Home() {
  const blogPosts = [
    {
      slug: "modular-kitchen-design-guide-2026",
      title: "Complete Guide to Modular Kitchen Design in 2026",
      excerpt: "Everything you need to know about planning, designing, and executing your dream modular kitchen.",
      image: "/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg",
      date: "Jan 5, 2026",
      category: "Kitchen Design",
      readTime: "8 min read"
    },
    {
      slug: "interior-design-cost-per-sqft-delhi",
      title: "Interior Design Cost Per Sq Ft in Delhi NCR - 2026 Updated",
      excerpt: "Comprehensive breakdown of interior design costs, materials, and budget planning for your home.",
      image: "/images/bedroom/mbr-1-1763100371-xDVo0.jpg",
      date: "Jan 3, 2026",
      category: "Budget Planning",
      readTime: "10 min read"
    },
    {
      slug: "small-apartment-interior-ideas",
      title: "10 Space-Saving Interior Ideas for Small Apartments",
      excerpt: "Maximize your small apartment with these clever design solutions and storage ideas.",
      image: "/images/space saving design/ssd-1-1760076250-uU5jK.jpg",
      date: "Dec 28, 2025",
      category: "Design Tips",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <HeroSection
        title="Thoughtful Interiors. Built to Last."
        description="Residential & Commercial Interior Solutions"
        primaryCTA={{ text: "Book Free Site Visit", href: "/book-site-visit" }}
        secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
        backgroundImage="/images/living area/lr-1-1-1763103069-BpS4n.jpg"
      />

      {/* Trust Bar */}
      {/* Trust Bar */}
      <section className="bg-white py-20 relative overflow-hidden text-gray-800">
        <div className="absolute inset-0 dotted-bg-dark opacity-[0.03]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Google Rating Card */}
            <StaggerItem>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-[#daa520] transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 group-hover:from-[#daa520] group-hover:to-[#b8860b] flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#daa520] transition-colors duration-300">4.8 Google Rating</h3>
                <p className="text-gray-500 text-sm">150+ Reviews</p>
              </div>
            </StaggerItem>

            {/* Projects Card */}
            <StaggerItem>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-[#daa520] transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 group-hover:from-[#daa520] group-hover:to-[#b8860b] flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#daa520] transition-colors duration-300">150+ Projects</h3>
                <p className="text-gray-500 text-sm">Successfully Delivered</p>
              </div>
            </StaggerItem>

            {/* On-Time Delivery Card */}
            <StaggerItem>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-[#daa520] transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 group-hover:from-[#daa520] group-hover:to-[#b8860b] flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#daa520] transition-colors duration-300">On-Time Delivery</h3>
                <p className="text-gray-500 text-sm">100% Track Record</p>
              </div>
            </StaggerItem>

            {/* Transparent Pricing Card */}
            <StaggerItem>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-[#daa520] transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 group-hover:from-[#daa520] group-hover:to-[#b8860b] flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#daa520] transition-colors duration-300">Transparent Pricing</h3>
                <p className="text-gray-500 text-sm">No Hidden Costs</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg-dark opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#daa520] text-sm md:text-base font-semibold tracking-widest uppercase mb-4">OUR SERVICES</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Comprehensive Interior <span className="text-[#daa520]">Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From residential to commercial, we deliver exceptional interiors tailored to your needs
            </p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <FeaturedProjectsCarousel />

      {/* How It Works */}
      <section className="py-20 bg-white overflow-hidden relative border-t border-gray-50">
        <div className="absolute inset-0 dotted-bg-subtle opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#daa520] text-sm md:text-base font-semibold tracking-widest uppercase mb-2">OUR PROCESS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              How It <span className="text-[#daa520]">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion in three simple steps
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - positioned at number badge level */}
            <div className="hidden md:block absolute top-[72px] left-[15%] right-[15%] h-0.5 bg-[#b8860b]"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="relative group">
                {/* Number Badge - Smaller and more elegant */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-2xl font-bold">01</span>
                </div>

                {/* Icon Box */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#f5f1e8] flex items-center justify-center group-hover:bg-[#daa520]/20 transition-all duration-300 shadow-sm">
                    <svg className="w-8 h-8 text-[#b8860b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">Free Consultation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Book a site visit and discuss your vision, requirements, and budget with our design experts.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                {/* Number Badge */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-2xl font-bold">02</span>
                </div>

                {/* Icon Box */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#f5f1e8] flex items-center justify-center group-hover:bg-[#daa520]/20 transition-all duration-300 shadow-sm">
                    <svg className="w-8 h-8 text-[#b8860b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">Design & Planning</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get detailed 3D designs, material selections, and transparent pricing with timeline.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                {/* Number Badge */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-2xl font-bold">03</span>
                </div>

                {/* Icon Box */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#f5f1e8] flex items-center justify-center group-hover:bg-[#daa520]/20 transition-all duration-300 shadow-sm">
                    <svg className="w-8 h-8 text-[#b8860b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">Execution & Handover</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Professional execution with quality checks and timely handover of your dream space.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features - More compact and elegant */}
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 flex items-center justify-center group-hover:from-[#daa520] group-hover:to-[#b8860b] transition-all duration-300 shadow-sm">
                    <svg className="w-7 h-7 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 group-hover:text-[#b8860b] transition-colors duration-300">On-Time<br />Delivery</p>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 flex items-center justify-center group-hover:from-[#daa520] group-hover:to-[#b8860b] transition-all duration-300 shadow-sm">
                    <svg className="w-7 h-7 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 group-hover:text-[#b8860b] transition-colors duration-300">Quality<br />Assured</p>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 flex items-center justify-center group-hover:from-[#daa520] group-hover:to-[#b8860b] transition-all duration-300 shadow-sm">
                    <svg className="w-7 h-7 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 group-hover:text-[#b8860b] transition-colors duration-300">Transparent<br />Pricing</p>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 flex items-center justify-center group-hover:from-[#daa520] group-hover:to-[#b8860b] transition-all duration-300 shadow-sm">
                    <svg className="w-7 h-7 text-[#b8860b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 group-hover:text-[#b8860b] transition-colors duration-300">Post-Service<br />Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator CTA */}
      <section className="py-16 bg-white relative overflow-hidden border-y border-gray-50">
        <div className="absolute inset-0 dotted-bg-subtle opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our quick estimator to get an approximate cost for your interior project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/book-site-visit"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-900 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Free Consultation
            </a>
            <a
              href="/get-quote"
              className="inline-block bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Calculate Project Cost
            </a>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Blog Preview */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg-subtle opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Design tips, trends, and inspiration</p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard {...post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp delay={0.3} className="text-center mt-8">
            <a href="/blog" className="inline-block bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-3 rounded-full font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Read More Articles
            </a>
          </FadeInUp>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Space?"
        description="Book a free site visit and get a personalized design consultation"
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
      />
    </>
  );
}
