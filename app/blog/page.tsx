import PageHero from '@/components/PageHero';
import BlogCard from '@/components/BlogCard';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Design Blog"
        subtitle="Tips, trends, and inspiration for your interior design journey"
        backgroundImage="/images/living area/lr-13-1763103057-TbFcg.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
