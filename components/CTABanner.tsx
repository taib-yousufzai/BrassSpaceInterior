import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'secondary';
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'primary'
}: CTABannerProps) {
  const bgColor = variant === 'primary' ? 'bg-gradient-to-r from-[#b8860b] to-[#8b6914]' : 'bg-gradient-to-br from-[#2c2416] to-[#1a1410]';
  
  return (
    <section className={`${bgColor} text-white py-16 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">{title}</h2>
        {description && (
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
        )}
        <Link
          href={buttonHref}
          className="inline-block bg-white text-[#b8860b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#f5f1e8] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
