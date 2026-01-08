import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import Accordion from '@/components/Accordion';
import CTABanner from '@/components/CTABanner';
import { SERVICES } from '@/lib/constants';
import { generateMetadata as genMeta } from '@/components/SEOHead';
import SchemaInjector from '@/components/SchemaInjector';
import { serviceSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return {};

  return genMeta({
    title: service.title,
    description: service.description,
    canonical: `/services/${service.slug}`
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const serviceDetails: Record<string, any> = {
    'residential-interiors': {
      benefits: [
        'Personalized design consultation',
        'Complete space planning and layout',
        '3D visualization and walkthroughs',
        'Premium material selection',
        'Furniture and decor sourcing',
        'Project management and execution',
        'Post-installation support'
      ],
      process: [
        { step: 'Initial Consultation', description: 'Free site visit and requirement discussion' },
        { step: 'Concept Development', description: '3D designs and mood boards' },
        { step: 'Material Selection', description: 'Choose finishes, colors, and materials' },
        { step: 'Quotation Approval', description: 'Transparent pricing breakdown' },
        { step: 'Execution', description: 'Professional installation and quality checks' },
        { step: 'Handover', description: 'Final walkthrough and documentation' }
      ],
      faqs: [
        { question: 'What is included in residential interior design?', answer: 'Our residential interior design includes complete space planning, 3D designs, material selection, furniture sourcing, execution, and project management from start to finish.' },
        { question: 'How long does a typical residential project take?', answer: 'A typical 2-3 BHK residential project takes 45-60 days from design approval to completion, depending on the scope of work.' },
        { question: 'Do you provide warranty on your work?', answer: 'Yes, we provide a 1-year warranty on all workmanship and installation. Material warranties are as per manufacturer terms.' },
        { question: 'Can I make changes during execution?', answer: 'Minor changes can be accommodated. Major changes may affect timeline and cost, which will be communicated transparently.' }
      ],
      relatedProjects: [
        { id: 'modern-2bhk', title: 'Modern 2BHK Apartment', category: 'Residential', location: 'Gurgaon', area: '1200 sq ft', image: '/images/bedroom/mbr-1-1763100371-xDVo0.jpg' },
        { id: 'luxury-villa', title: 'Luxury Villa Interior', category: 'Residential', location: 'Delhi', area: '3500 sq ft', image: '/images/living area/lr-1-1-1763103069-BpS4n.jpg' }
      ]
    },
    'commercial-interiors': {
      benefits: [
        'Brand-aligned design concepts',
        'Space optimization for productivity',
        'Ergonomic furniture solutions',
        'Technology integration',
        'Compliance with safety standards',
        'Scalable design solutions',
        'Minimal business disruption'
      ],
      process: [
        { step: 'Requirement Analysis', description: 'Understanding business needs and brand identity' },
        { step: 'Space Planning', description: 'Optimal layout for workflow and collaboration' },
        { step: 'Design Presentation', description: '3D renders and material boards' },
        { step: 'Approval & Contracting', description: 'Detailed quotation and timeline' },
        { step: 'Phased Execution', description: 'Minimal disruption to operations' },
        { step: 'Final Setup', description: 'Furniture installation and handover' }
      ],
      faqs: [
        { question: 'Do you handle office relocations?', answer: 'Yes, we provide complete office relocation services including design, execution, and furniture installation.' },
        { question: 'Can you work outside business hours?', answer: 'Yes, we can schedule work during evenings and weekends to minimize disruption to your business operations.' },
        { question: 'Do you provide furniture?', answer: 'Yes, we source and supply all furniture, fixtures, and equipment as part of our turnkey solutions.' }
      ],
      relatedProjects: [
        { id: 'corporate-office', title: 'Corporate Office Design', category: 'Commercial', location: 'Noida', area: '3000 sq ft', image: '/images/home office/ho-1-1763115252-l3GLN.jpg' }
      ]
    },
    'modular-kitchens': {
      benefits: [
        'Customized layouts (L, U, Island, Parallel)',
        'Premium hardware and fittings',
        'Soft-close mechanisms',
        'Water-resistant materials',
        'Optimized storage solutions',
        'Integrated appliances',
        'Easy maintenance'
      ],
      process: [
        { step: 'Kitchen Assessment', description: 'Site measurement and requirement discussion' },
        { step: 'Layout Design', description: 'Optimal kitchen triangle and workflow' },
        { step: 'Material Selection', description: 'Cabinets, countertops, and finishes' },
        { step: 'Manufacturing', description: 'Precision factory manufacturing' },
        { step: 'Installation', description: 'Professional fitting and alignment' },
        { step: 'Final Touches', description: 'Appliance integration and testing' }
      ],
      faqs: [
        { question: 'What materials do you use for kitchen cabinets?', answer: 'We use marine-grade plywood, HDHMR, and premium laminates/acrylics for durability and aesthetics.' },
        { question: 'How long does kitchen installation take?', answer: 'Manufacturing takes 15-20 days, and installation is completed in 3-5 days.' },
        { question: 'Do you provide appliances?', answer: 'We can source and integrate appliances, or work with your preferred brands and models.' },
        { question: 'What is the warranty period?', answer: 'We provide 1-year warranty on installation and workmanship. Hardware warranties are as per manufacturer.' }
      ],
      relatedProjects: [
        { id: 'island-kitchen', title: 'Luxury Island Kitchen', category: 'Kitchen', location: 'Delhi', area: '250 sq ft', image: '/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg' },
        { id: 'parallel-kitchen', title: 'Modern Parallel Kitchen', category: 'Kitchen', location: 'Gurgaon', area: '180 sq ft', image: '/images/Parallel Kitchen/ki-13-1763112292-8zKJS.jpg' }
      ]
    },
    'wardrobes-storage': {
      benefits: [
        'Customized storage solutions',
        'Space-efficient designs',
        'Sliding and hinged door options',
        'Internal organizers and accessories',
        'Premium finishes and materials',
        'Soft-close mechanisms',
        'Walk-in wardrobe designs'
      ],
      process: [
        { step: 'Space Analysis', description: 'Measurement and storage requirement assessment' },
        { step: 'Design Proposal', description: 'Internal layout and exterior finish options' },
        { step: 'Customization', description: 'Accessories, lighting, and special features' },
        { step: 'Manufacturing', description: 'Precision factory production' },
        { step: 'Installation', description: 'Professional fitting and alignment' },
        { step: 'Organization', description: 'Setup with organizers and accessories' }
      ],
      faqs: [
        { question: 'What types of wardrobes do you offer?', answer: 'We design sliding door wardrobes, hinged wardrobes, walk-in closets, and loft storage solutions.' },
        { question: 'Can you design wardrobes for small spaces?', answer: 'Yes, we specialize in space-saving designs with optimal storage for compact bedrooms.' },
        { question: 'What materials are used?', answer: 'We use marine plywood, HDHMR, and premium laminates with quality hardware from Hettich, Ebco, or Hafele.' }
      ],
      relatedProjects: [
        { id: 'walk-in-wardrobe', title: 'Luxury Walk-in Wardrobe', category: 'Wardrobe', location: 'Gurgaon', area: '120 sq ft', image: '/images/Walk In Wardrobe/w1-1696585849-K7Bgb.jpg' },
        { id: 'sliding-wardrobe', title: 'Modern Sliding Wardrobe', category: 'Wardrobe', location: 'Noida', area: '80 sq ft', image: '/images/Sliding Door Wardrobe/wr-1-1760438367-YXg4y.jpg' }
      ]
    },
    'renovation-execution': {
      benefits: [
        'Complete project management',
        'Structural modifications',
        'Electrical and plumbing work',
        'False ceiling and lighting',
        'Flooring and wall treatments',
        'Painting and finishing',
        'Furniture and decor'
      ],
      process: [
        { step: 'Site Inspection', description: 'Detailed assessment of existing conditions' },
        { step: 'Renovation Plan', description: 'Scope of work and design proposal' },
        { step: 'Approvals', description: 'Quotation, timeline, and contract' },
        { step: 'Demolition', description: 'Safe removal of existing elements' },
        { step: 'Execution', description: 'Civil, electrical, plumbing, and finishing work' },
        { step: 'Final Setup', description: 'Furniture, decor, and handover' }
      ],
      faqs: [
        { question: 'Do you handle structural changes?', answer: 'Yes, we handle structural modifications with proper engineering consultation and approvals.' },
        { question: 'How do you manage debris and waste?', answer: 'We ensure proper waste management and site cleanliness throughout the project.' },
        { question: 'Can we stay in the house during renovation?', answer: 'For minor renovations, yes. For major work, we recommend temporary relocation for safety and faster completion.' }
      ],
      relatedProjects: [
        { id: 'complete-renovation', title: 'Complete Home Renovation', category: 'Renovation', location: 'Delhi', area: '1800 sq ft', image: '/images/living area/lr-11-1763103059-2KjqV.jpg' }
      ]
    }
  };

  const details = serviceDetails[service.slug];
  const schema = serviceSchema({ title: service.title, description: service.description, slug: service.slug });

  return (
    <>
      <SchemaInjector schema={schema} />
      
      <PageHero
        title={service.title}
        subtitle={service.description}
        backgroundImage={service.image}
      />

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {details.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-700 text-xl">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            {details.process.map((item: any, index: number) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {details.relatedProjects && details.relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {details.relatedProjects.map((project: any) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion items={details.faqs} />
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        description="Book a free consultation and let's discuss your project"
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
      />
    </>
  );
}
