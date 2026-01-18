"use client";

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import TrustedByMarquee from '@/components/TrustedByMarquee';
import { PORTFOLIO_PROJECTS, FEATURED_PROJECTS } from '@/lib/portfolio-data';
import { SITE_CONFIG } from '@/lib/constants';

export default function PortfolioPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    city: 'All',
    budget: 'All'
  });

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Wardrobe'];
  const cities = ['All', 'Delhi', 'Gurgaon', 'Noida', 'Ghaziabad', 'Faridabad'];
  const budgets = ['All', 'Under ₹5 Lakhs', '₹5-10 Lakhs', '₹10-20 Lakhs', '₹20-50 Lakhs', 'Above ₹50 Lakhs'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    if (filters.category !== 'All' && project.category !== filters.category) return false;
    if (filters.city !== 'All' && project.location !== filters.city) return false;
    if (filters.budget !== 'All' && project.budget !== filters.budget) return false;
    return true;
  });

  // Calculate statistics
  const totalProjects = PORTFOLIO_PROJECTS.length;
  const residentialCount = PORTFOLIO_PROJECTS.filter(p => p.category === 'Residential').length;
  const commercialCount = PORTFOLIO_PROJECTS.filter(p => p.category === 'Commercial').length;
  const kitchenCount = PORTFOLIO_PROJECTS.filter(p => p.category === 'Kitchen').length;

  return (
    <>
      <PageHero
        title="Signature Projects"
        subtitle="A curated showcase of our favorite transformations across Delhi NCR"
        backgroundImage="/images/living area/lr-1-1-1763103069-BpS4n.jpg"
      />

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Work in <span className="text-[#daa520]">Numbers</span>
            </h2>
            <p className="text-xl text-gray-400">Transforming spaces across Delhi NCR</p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-[#daa520] transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#daa520] mb-2">{SITE_CONFIG.stats.projects}</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-[#daa520] transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#daa520] mb-2">{SITE_CONFIG.stats.team}</div>
              <div className="text-gray-400 text-sm">Team Members</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-[#daa520] transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#daa520] mb-2">{SITE_CONFIG.stats.experience}</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-[#daa520] transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#daa520] mb-2">{SITE_CONFIG.stats.cities}</div>
              <div className="text-gray-400 text-sm">Cities Present</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-12">
            <p className="text-[#daa520] text-sm md:text-base font-semibold tracking-widest uppercase mb-4">FEATURED WORK</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Signature <span className="text-[#daa520]">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our most exceptional interior transformations
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {FEATURED_PROJECTS.map(project => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  image={project.thumbnail}
                  area={project.area}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trusted By / Our Clients Section */}
      <TrustedByMarquee />

      {/* All Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Project <span className="text-[#daa520]">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600">Explore a selected range of our high-quality interior solutions</p>
          </FadeInUp>

          {/* Filters */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#daa520] focus:border-[#daa520] transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <select
                  value={filters.city}
                  onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#daa520] focus:border-[#daa520] transition-all"
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget</label>
                <select
                  value={filters.budget}
                  onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#daa520] focus:border-[#daa520] transition-all"
                >
                  {budgets.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>

            {(filters.category !== 'All' || filters.city !== 'All' || filters.budget !== 'All') && (
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Showing {filteredProjects.length} of {totalProjects} projects
                </div>
                <button
                  onClick={() => setFilters({ category: 'All', city: 'All', budget: 'All' })}
                  className="text-sm text-[#b8860b] hover:text-[#daa520] font-semibold transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <StaggerItem key={project.id}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    category={project.category}
                    location={project.location}
                    image={project.thumbnail}
                    area={project.area}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg mb-4">No projects found matching your filters.</p>
              <button
                onClick={() => setFilters({ category: 'All', city: 'All', budget: 'All' })}
                className="inline-block bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-6 py-3 rounded-full font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our <span className="text-[#daa520]">Story</span>
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Founded in 2010, Brass Space Interior Solution has been at the forefront of innovative interior design. We combine traditional craftsmanship with modern aesthetics to create spaces that are both beautiful and functional.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Our team of experienced designers and architects work closely with clients to understand their vision and bring it to life. We pride ourselves on attention to detail and our commitment to excellence in every project we undertake.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/living area/lr-12-1763103058-7JFKh.jpg"
                  alt="Brass Space Team"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Meet Our <span className="text-[#daa520]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experts behind our innovative designs and successful projects
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Brajesh Kumar Sharma", role: "Director", image: "/images/ourteam/Brajesh.jpeg" },
              { name: "Sumit Singh", role: "General Manager" },
              { name: "Munnalal Gautam", role: "Project Manager", image: "/images/ourteam/Munnalal.jpeg" },
              { name: "Mohit Verma", role: "Interior Architect", image: "/images/ourteam/Mohit.jpeg" }
            ].map((member, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-[#daa520]/10 group-hover:to-[#b8860b]/10 transition-colors relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <svg className="w-10 h-10 text-gray-400 group-hover:text-[#b8860b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#daa520] transition-colors">{member.name}</h3>
                  <p className="text-gray-500 font-medium">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 dotted-bg-white opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert interior design services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/book-site-visit"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Book Free Consultation
            </a>
            <a
              href="/get-quote"
              className="inline-block bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Project Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
