import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import { FadeInUp } from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import { SITE_CONFIG } from '@/lib/constants';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const normalizedId = id.trim().toLowerCase();
  const project = PORTFOLIO_PROJECTS.find(p => p.id.toLowerCase() === normalizedId);

  if (!project) {
    return {
      title: 'Project Not Found | Brass Space',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} - ${project.category} Design in ${project.location} | Brass Space`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Brass Space Interior Solutions`,
      description: project.description,
      url: `${SITE_CONFIG.url}/portfolio/${project.id}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Brass Space`,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

import { projectSchema, breadcrumbSchema } from '@/lib/schema';
import SchemaInjector from '@/components/SchemaInjector';

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const normalizedId = id.trim().toLowerCase();
  console.log(`[Portfolio] Hitting detail page for ID: "${id}" (normalized: "${normalizedId}")`);

  const project = PORTFOLIO_PROJECTS.find(p => p.id.toLowerCase() === normalizedId);

  if (!project) {
    console.error(`[Portfolio] Project not found for ID: "${id}". Available IDs:`, PORTFOLIO_PROJECTS.map(p => p.id).join(', '));
    notFound();
  }

  const structuredData = [
    projectSchema({
      title: project.title,
      description: project.description,
      image: project.thumbnail,
      datePublished: project.completionDate, // Ideally needs ISO format, but passing string is ok for now or needs conversion if schema is strict. Product schema doesn't strictly require datePublished but CreativeWork does.
      location: project.location,
      url: `${SITE_CONFIG.url}/portfolio/${project.id}`,
      testimonial: project.testimonial
    }),
    breadcrumbSchema([
      { name: 'Home', item: SITE_CONFIG.url },
      { name: 'Portfolio', item: `${SITE_CONFIG.url}/portfolio` },
      { name: project.title, item: `${SITE_CONFIG.url}/portfolio/${project.id}` }
    ])
  ];

  // Get related projects (same category, excluding current)
  const relatedProjects = PORTFOLIO_PROJECTS
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <SchemaInjector schema={structuredData} />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <FadeInUp>
              <div className="inline-block bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#daa520]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{project.budget}</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.description}
                </p>
              </FadeInUp>

              {/* Image Gallery */}
              <FadeInUp delay={0.1}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </FadeInUp>

              {/* Key Features */}
              <FadeInUp delay={0.2}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#daa520] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>

              {/* Materials */}
              {project.materials && project.materials.length > 0 && (
                <FadeInUp delay={0.3}>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Materials & Finishes</h3>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <ul className="space-y-3">
                      {project.materials.map((material, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <FadeInUp delay={0.4}>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Client Feedback</h3>
                  <div className="bg-gradient-to-br from-[#daa520]/10 to-[#b8860b]/10 rounded-xl p-8 border-l-4 border-[#daa520]">
                    <div className="flex gap-1 mb-4">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#daa520]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 italic mb-4">"{project.testimonial.text}"</p>
                    <p className="text-gray-900 font-semibold">— {project.testimonial.client}</p>
                  </div>
                </FadeInUp>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Project Info Card */}
                <FadeInUp delay={0.1}>
                  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white mb-6 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-[#daa520]">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Location</div>
                        <div className="font-semibold">{project.location}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Area</div>
                        <div className="font-semibold">{project.area}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Budget Range</div>
                        <div className="font-semibold">{project.budget}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Completion Date</div>
                        <div className="font-semibold">{project.completionDate}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Project Duration</div>
                        <div className="font-semibold">{project.duration}</div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>

                {/* CTA Card */}
                <FadeInUp delay={0.2}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Interested in a Similar Project?</h3>
                    <p className="text-gray-600 mb-6">Get a free consultation and personalized quote for your space.</p>
                    <div className="space-y-3">
                      <Link
                        href="/book-site-visit"
                        className="block w-full bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-6 py-3 rounded-full font-semibold text-center hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Book Free Site Visit
                      </Link>
                      <Link
                        href="/get-quote"
                        className="block w-full bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-center border-2 border-gray-300 hover:border-[#daa520] hover:text-[#b8860b] transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Related <span className="text-[#daa520]">Projects</span>
              </h2>
              <p className="text-xl text-gray-600">Explore more {project.category.toLowerCase()} projects</p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#daa520]/30 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#b8860b] to-[#cd9b1d] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {relatedProject.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-1 text-[#b8860b]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {relatedProject.location}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-block bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-3 rounded-full font-semibold hover:from-[#b8860b] hover:to-[#8b6914] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Ready to Transform Your Space?"
        description="Book a free site visit and get a personalized design consultation"
        buttonText="Book Free Site Visit"
        buttonHref="/book-site-visit"
      />
    </>
  );
}
