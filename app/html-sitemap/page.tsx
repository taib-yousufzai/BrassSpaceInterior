import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import { BLOG_POSTS } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'HTML Sitemap | Brass Space Interior Design',
  description: 'Complete directory of all pages, interior design services, portfolio projects, and articles on Brass Space.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/html-sitemap`,
  },
};

export default function HtmlSitemapPage() {
  const mainPages = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Blog', href: '/blog' },
    { title: 'Book Site Visit', href: '/book-site-visit' },
    { title: 'Get Quote', href: '/get-quote' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'FAQs', href: '/faq' },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          HTML Sitemap & Site Directory
        </h1>
        <p className="text-gray-600 mb-12">
          Explore all services, completed interior projects, and articles published across {SITE_CONFIG.name}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Pages */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-[#daa520] hover:underline font-medium text-sm md:text-base"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Interior Services
            </h2>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#daa520] hover:underline font-medium text-sm md:text-base"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Projects */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Portfolio Projects
            </h2>
            <ul className="space-y-2">
              {PORTFOLIO_PROJECTS.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="text-[#daa520] hover:underline font-medium text-sm md:text-base"
                  >
                    {project.title} ({project.category})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Articles */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Blog & Articles
            </h2>
            <ul className="space-y-2">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#daa520] hover:underline font-medium text-sm md:text-base"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
