import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noindex = false
}: SEOHeadProps): Metadata {
  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
  const url = canonical || SITE_CONFIG.url;

  return {
    title: fullTitle,
    description,
    ...(noindex && { robots: 'noindex, nofollow' }),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_IN',
      type: ogType as any
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage]
    },
    alternates: {
      canonical: url
    }
  };
}
