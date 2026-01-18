import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { FadeInUp } from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { SITE_CONFIG } from '@/lib/constants';
import { Metadata } from 'next';

interface BlogPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return {
            title: 'Article Not Found | Brass Space',
            description: 'The requested article could not be found.',
        };
    }

    return {
        title: `${post.title} | Brass Space Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `${SITE_CONFIG.url}/blog/${post.slug}`,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import SchemaInjector from '@/components/SchemaInjector';

export default async function BlogDetailPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const structuredData = [
        articleSchema({
            title: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: new Date(post.date).toISOString(),
            dateModified: new Date(post.date).toISOString(),
            author: post.author
        }),
        breadcrumbSchema([
            { name: 'Home', item: SITE_CONFIG.url },
            { name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
            { name: post.title, item: `${SITE_CONFIG.url}/blog/${post.slug}` }
        ])
    ];

    const relatedPosts = BLOG_POSTS
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 2);

    return (
        <>
            <SchemaInjector schema={structuredData} />
            <PageHero
                title={post.title}
                subtitle={`${post.category} • ${post.date}`}
                backgroundImage={post.image}
            />

            <article className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <FadeInUp>
                            <div className="flex items-center gap-4 mb-8 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold">
                                        {post.author.charAt(0)}
                                    </div>
                                    <span className="font-medium text-gray-900">{post.author}</span>
                                </div>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>

                            <div
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                  prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                  prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:mb-6
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
                  prose-li:mb-2
                  prose-strong:text-gray-900 prose-strong:font-bold
                "
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex flex-wrap gap-4 items-center justify-between">
                                    <div className="flex gap-2">
                                        <span className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="text-gray-400 hover:text-amber-700 transition">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </button>
                                        <button className="text-gray-400 hover:text-amber-700 transition">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                                            <div className="relative h-48">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition duration-500"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="text-amber-700 text-sm font-semibold mb-2">{relatedPost.category}</div>
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-800 transition">{relatedPost.title}</h3>
                                                <div className="text-gray-500 text-sm">{relatedPost.date}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <CTABanner
                title="Want Expert Design Advice?"
                description="Book a free site visit and get a personalized consultation from our designers."
                buttonText="Book Free Site Visit"
                buttonHref="/book-site-visit"
            />
        </>
    );
}
