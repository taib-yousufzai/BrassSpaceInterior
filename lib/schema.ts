import { SITE_CONFIG } from './constants';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_CONFIG.name,
  "image": `${SITE_CONFIG.url}/logo.png`,
  "@id": SITE_CONFIG.url,
  "url": SITE_CONFIG.url,
  "telephone": SITE_CONFIG.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.address.street,
    "addressLocality": SITE_CONFIG.address.city,
    "addressRegion": SITE_CONFIG.address.state,
    "postalCode": SITE_CONFIG.address.zip,
    "addressCountry": "IN"
  },
  "priceRange": "₹₹₹",
  "sameAs": [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.linkedin
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": SITE_CONFIG.rating.value.toString(),
    "reviewCount": SITE_CONFIG.rating.count.toString()
  }
};

export const serviceSchema = (service: { title: string; description: string; slug: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.title,
  "provider": {
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.name
  },
  "description": service.description,
  "url": `${SITE_CONFIG.url}/services/${service.slug}`
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/logo.png`
    }
  }
});

export const breadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

export const projectSchema = (project: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  location: string;
  url: string;
  testimonial?: {
    text: string;
    client: string;
    rating: number;
  };
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "url": project.url,
    "brand": {
      "@type": "Brand",
      "name": SITE_CONFIG.name
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  if (project.testimonial) {
    schema.review = {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": project.testimonial.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": project.testimonial.client
      },
      "reviewBody": project.testimonial.text
    };
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": project.testimonial.rating,
      "reviewCount": "1"
    };
  }

  return schema;
};
