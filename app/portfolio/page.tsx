"use client";

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import { generateMetadata as genMeta } from '@/components/SEOHead';

const projects = [
  { id: 'modern-2bhk-gurgaon', title: 'Modern 2BHK Apartment', category: 'Residential', location: 'Gurgaon', area: '1200 sq ft', budget: '₹10-20 Lakhs', image: '/images/bedroom/mbr-1-1763100371-xDVo0.jpg' },
  { id: 'luxury-island-kitchen', title: 'Luxury Island Kitchen', category: 'Kitchen', location: 'Delhi', area: '250 sq ft', budget: '₹5-10 Lakhs', image: '/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg' },
  { id: 'corporate-office-noida', title: 'Corporate Office Interior', category: 'Commercial', location: 'Noida', area: '3000 sq ft', budget: 'Above ₹50 Lakhs', image: '/images/home office/ho-1-1763115252-l3GLN.jpg' },
  { id: 'walk-in-wardrobe', title: 'Luxury Walk-in Wardrobe', category: 'Wardrobe', location: 'Gurgaon', area: '120 sq ft', budget: '₹5-10 Lakhs', image: '/images/Walk In Wardrobe/w1-1696585849-K7Bgb.jpg' },
  { id: 'living-room-renovation', title: 'Contemporary Living Room', category: 'Residential', location: 'Delhi', area: '400 sq ft', budget: '₹5-10 Lakhs', image: '/images/living area/lr-11-1763103059-2KjqV.jpg' },
  { id: 'parallel-kitchen', title: 'Modern Parallel Kitchen', category: 'Kitchen', location: 'Noida', area: '180 sq ft', budget: '₹5-10 Lakhs', image: '/images/Parallel Kitchen/ki-13-1763112292-8zKJS.jpg' },
  { id: 'master-bedroom', title: 'Elegant Master Bedroom', category: 'Residential', location: 'Gurgaon', area: '300 sq ft', budget: '₹5-10 Lakhs', image: '/images/bedroom/mbr-11-1763111543-e5Ily.jpg' },
  { id: 'dining-area', title: 'Modern Dining Space', category: 'Residential', location: 'Delhi', area: '200 sq ft', budget: 'Under ₹5 Lakhs', image: '/images/dining area/dr-11-1763110871-9W8lQ.jpg' },
  { id: 'home-office', title: 'Productive Home Office', category: 'Commercial', location: 'Gurgaon', area: '150 sq ft', budget: 'Under ₹5 Lakhs', image: '/images/home office/ho-11-1763110382-NscOp.jpg' }
];

export default function PortfolioPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    city: 'All',
    budget: 'All'
  });

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Wardrobe'];
  const cities = ['All', 'Delhi', 'Gurgaon', 'Noida', 'Ghaziabad', 'Faridabad'];
  const budgets = ['All', 'Under ₹5 Lakhs', '₹5-10 Lakhs', '₹10-20 Lakhs', '₹20-50 Lakhs', 'Above ₹50 Lakhs'];

  const filteredProjects = projects.filter(project => {
    if (filters.category !== 'All' && project.category !== filters.category) return false;
    if (filters.city !== 'All' && project.location !== filters.city) return false;
    if (filters.budget !== 'All' && project.budget !== filters.budget) return false;
    return true;
  });

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Explore our completed projects across Delhi NCR"
        backgroundImage="/images/living area/lr-1-1-1763103069-BpS4n.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                >
                  {budgets.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found matching your filters.</p>
              <button
                onClick={() => setFilters({ category: 'All', city: 'All', budget: 'All' })}
                className="mt-4 text-amber-700 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
