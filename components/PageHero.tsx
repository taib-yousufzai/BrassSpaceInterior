import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900" />
      )}
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
