interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  projectType?: string;
}

export default function TestimonialCard({ name, location, rating, text, projectType }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#daa520]/30 hover:-translate-y-2 group">
      <div className="flex items-center mb-4">
        <div className="flex text-[#daa520]">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${i < rating ? 'fill-current' : 'fill-gray-300'}`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic leading-relaxed">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900 group-hover:text-[#b8860b] transition-colors duration-300">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
        {projectType && (
          <p className="text-sm text-[#b8860b] mt-1 font-medium">{projectType}</p>
        )}
      </div>
    </div>
  );
}
