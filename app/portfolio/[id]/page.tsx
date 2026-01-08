import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';

const projectsData: Record<string, any> = {
  'modern-2bhk-gurgaon': {
    title: 'Modern 2BHK Apartment',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    area: '1200 sq ft',
    timeline: '45 days',
    budget: '₹15 Lakhs',
    images: [
      '/images/bedroom/mbr-1-1763100371-xDVo0.jpg',
      '/images/living area/lr-11-1763103059-2KjqV.jpg',
      '/images/dining area/dr-11-1763110871-9W8lQ.jpg'
    ],
    description: 'A complete transformation of a 2BHK apartment featuring contemporary design, smart storage solutions, and a neutral color palette with brass accents. The project included a modular kitchen, master bedroom with walk-in wardrobe, guest bedroom, living and dining areas.',
    challenges: 'Limited space required creative storage solutions and multi-functional furniture.',
    solution: 'We implemented space-saving designs, built-in storage, and a cohesive color scheme to create an illusion of spaciousness.',
    testimonial: {
      name: 'Priya Sharma',
      location: 'Gurgaon',
      rating: 5,
      text: 'Brass Space transformed our home beautifully. The team was professional, on-time, and the quality exceeded our expectations. Highly recommended!',
      projectType: '2BHK Residential Interior'
    }
  },
  'luxury-island-kitchen': {
    title: 'Luxury Island Kitchen',
    category: 'Kitchen',
    location: 'Delhi',
    area: '250 sq ft',
    timeline: '25 days',
    budget: '₹8 Lakhs',
    images: [
      '/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg',
      '/images/Island Kitchen/ki-30-1758276755-R9AB1.jpg'
    ],
    description: 'A stunning island kitchen design featuring premium materials, integrated appliances, and ample storage. The kitchen includes a breakfast counter, wine storage, and state-of-the-art lighting.',
    challenges: 'Integrating modern appliances while maintaining aesthetic appeal.',
    solution: 'Custom cabinetry with concealed appliance storage and seamless integration.',
    testimonial: {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Excellent work on our modular kitchen. The design is both functional and stunning. Great attention to detail and transparent pricing.',
      projectType: 'Island Kitchen'
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={`${project.category} Project in ${project.location}`}
        backgroundImage={project.images[0]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Project Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">{project.area}</div>
              <div className="text-gray-600">Area</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">{project.timeline}</div>
              <div className="text-gray-600">Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">{project.budget}</div>
              <div className="text-gray-600">Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700">{project.category}</div>
              <div className="text-gray-600">Type</div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Project Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-700 text-lg mb-8">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Challenges</h3>
                <p className="text-gray-700">{project.challenges}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Client Feedback</h2>
              <TestimonialCard {...project.testimonial} />
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Love This Design?"
        description="Let's create something similar for your space"
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
      />
    </>
  );
}
