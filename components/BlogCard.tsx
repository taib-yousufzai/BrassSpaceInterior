import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime?: string;
}

export default function BlogCard({ slug, title, excerpt, image, date, category, readTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#daa520]/30 hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span className="bg-[#daa520]/10 text-[#b8860b] px-3 py-1 rounded-full font-semibold group-hover:bg-[#daa520] group-hover:text-white transition-colors duration-300">
              {category}
            </span>
            <span className="ml-auto">{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          {readTime && (
            <p className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
