import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/components/SEOHead';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = genMeta({
  title: "About Us - Brass Space Interior Solutions",
  description: "Learn about Brass Space's journey, vision, and commitment to delivering exceptional interior design solutions across Delhi NCR.",
  canonical: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Brass Space"
        subtitle="Crafting Spaces, Creating Experiences"
        backgroundImage="/images/living area/lr-11-1763103059-2KjqV.jpg"
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Brass Space Interior Solution has been at the forefront of innovative interior design. We combine traditional craftsmanship with modern aesthetics to create spaces that are both beautiful and functional.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of experienced designers and architects work closely with clients to understand their vision and bring it to life. We pride ourselves on attention to detail and our commitment to excellence in every project we undertake.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/living area/lr-12-1763103058-7JFKh.jpg"
                alt="Brass Space Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading interior design firm known for creating timeless, sophisticated spaces that enhance the way people live and work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional interior design solutions through innovative thinking, quality craftsmanship, transparent processes, and unwavering commitment to client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brass Space */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Brass Space</h2>
            <p className="text-xl text-gray-600">What sets us apart in the industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design Expertise</h3>
              <p className="text-gray-600">Award-winning designers with years of experience in residential and commercial projects</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
              <p className="text-gray-600">Premium materials sourced from trusted suppliers with quality certifications</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden costs. Detailed quotations with clear breakdowns of all expenses</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Committed to project timelines with regular updates and milestone tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{SITE_CONFIG.stats.projects}</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{SITE_CONFIG.stats.team}</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{SITE_CONFIG.stats.experience}</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{SITE_CONFIG.stats.cities}</div>
              <div className="text-lg opacity-90">Cities Present</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Create Something Beautiful Together"
        description="Schedule a free consultation and bring your vision to life"
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
        variant="secondary"
      />
    </>
  );
}
