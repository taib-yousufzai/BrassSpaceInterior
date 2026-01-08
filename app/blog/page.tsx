import PageHero from '@/components/PageHero';
import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    slug: 'modular-kitchen-design-guide-2026',
    title: 'Complete Guide to Modular Kitchen Design in 2026',
    excerpt: 'Everything you need to know about planning, designing, and executing your dream modular kitchen. From layout selection to material choices.',
    image: '/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg',
    date: 'Jan 5, 2026',
    category: 'Kitchen Design',
    readTime: '8 min read'
  },
  {
    slug: 'interior-design-cost-per-sqft-delhi',
    title: 'Interior Design Cost Per Sq Ft in Delhi NCR - 2026 Updated',
    excerpt: 'Comprehensive breakdown of interior design costs, materials, and budget planning for your home renovation project.',
    image: '/images/bedroom/mbr-1-1763100371-xDVo0.jpg',
    date: 'Jan 3, 2026',
    category: 'Budget Planning',
    readTime: '10 min read'
  },
  {
    slug: 'small-apartment-interior-ideas',
    title: '10 Space-Saving Interior Ideas for Small Apartments',
    excerpt: 'Maximize your small apartment with these clever design solutions and storage ideas that make every square foot count.',
    image: '/images/space saving design/ssd-1-1760076250-uU5jK.jpg',
    date: 'Dec 28, 2025',
    category: 'Design Tips',
    readTime: '6 min read'
  },
  {
    slug: 'wardrobe-design-trends-2026',
    title: 'Top Wardrobe Design Trends for 2026',
    excerpt: 'Discover the latest wardrobe design trends including walk-in closets, smart storage solutions, and sustainable materials.',
    image: '/images/Walk In Wardrobe/w1-1696585849-K7Bgb.jpg',
    date: 'Dec 20, 2025',
    category: 'Design Trends',
    readTime: '7 min read'
  },
  {
    slug: 'home-office-design-productivity',
    title: 'Designing a Home Office for Maximum Productivity',
    excerpt: 'Create an inspiring and functional home office space with ergonomic furniture, proper lighting, and smart organization.',
    image: '/images/home office/ho-1-1763115252-l3GLN.jpg',
    date: 'Dec 15, 2025',
    category: 'Home Office',
    readTime: '9 min read'
  },
  {
    slug: 'living-room-color-schemes',
    title: 'Best Color Schemes for Modern Living Rooms',
    excerpt: 'Explore trending color palettes and combinations that can transform your living room into a stylish and inviting space.',
    image: '/images/living area/lr-1-1-1763103069-BpS4n.jpg',
    date: 'Dec 10, 2025',
    category: 'Color & Design',
    readTime: '5 min read'
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Design Blog"
        subtitle="Tips, trends, and inspiration for your interior design journey"
        backgroundImage="/images/living area/lr-13-1763103057-9PLx6.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
