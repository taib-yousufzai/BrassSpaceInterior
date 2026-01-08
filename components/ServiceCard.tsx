import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, image, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#daa520]/30 hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          <span className="text-[#b8860b] font-semibold group-hover:underline inline-flex items-center">
            Learn More 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
