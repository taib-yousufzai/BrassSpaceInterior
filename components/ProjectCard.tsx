import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  area?: string;
}

export default function ProjectCard({ id, title, category, location, image, area }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${id}`} className="group block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#daa520]/30 hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#b8860b] to-[#cd9b1d] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300">
            {category}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <span className="flex items-center group-hover:text-[#b8860b] transition-colors duration-300">
              <svg className="w-4 h-4 mr-1 text-[#b8860b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {location}
            </span>
            {area && (
              <span className="flex items-center group-hover:text-[#b8860b] transition-colors duration-300">
                <svg className="w-4 h-4 mr-1 text-[#b8860b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {area}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
