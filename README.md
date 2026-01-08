# Brass Space Interior Solutions - Website

A fully functional, production-ready Next.js website for Brass Space Interior Solutions, featuring responsive design, SEO optimization, and conversion-focused UI.

## 🚀 Quick Deploy to GitHub & Vercel

### Option 1: Automated Script (Easiest)

**Windows:**
```bash
cd brass-space
deploy.bat
```

**Mac/Linux:**
```bash
cd brass-space
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual Commands

1. **Create repository on GitHub:** https://github.com/new
2. **Push your code:**
```bash
cd brass-space
git remote add origin https://github.com/YOUR_USERNAME/brass-space-website.git
git branch -M main
git push -u origin main
```
3. **Deploy on Vercel:** https://vercel.com → Import your repository → Deploy

📖 **Detailed guide:** See [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md) for step-by-step instructions.

## 🚀 Features

- **Multi-page Architecture**: Home, About, Services, Portfolio, Blog, Contact, FAQ, Book Site Visit, Get Quote
- **Server-Side Rendering (SSR)**: Fast loading and SEO-friendly
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Conversion Focused**: Multiple CTAs, lead forms, cost estimator
- **Accessibility**: WCAG-compliant components
- **Performance**: Optimized images, lazy loading, fast page loads

## 📦 Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🛠️ Installation

```bash
cd brass-space
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
brass-space/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog listing
│   ├── book-site-visit/   # Lead capture form
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── get-quote/         # Cost estimator
│   ├── portfolio/         # Portfolio listing & details
│   ├── services/          # Service pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # Reusable components
│   ├── Accordion.tsx
│   ├── BlogCard.tsx
│   ├── CTABanner.tsx
│   ├── FloatingCTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PageHero.tsx
│   ├── ProjectCard.tsx
│   ├── SchemaInjector.tsx
│   ├── SEOHead.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── lib/                   # Utilities
│   ├── constants.ts       # Site configuration
│   └── schema.ts          # JSON-LD schemas
└── public/                # Static assets
    └── images/            # Project images
```

## 🎨 Customization

### Update Site Configuration

Edit `lib/constants.ts` to update:
- Company name, contact info
- Services offered
- Cities served
- Budget ranges

### Add Images

Place your images in the `public/images/` directory and update image paths in components.

### Modify Colors

Update Tailwind colors in `tailwind.config.ts`:
- Primary: `amber-700`
- Secondary: `gray-900`

## 📄 Pages

1. **Home** (`/`) - Hero, services, projects, testimonials, blog preview
2. **About** (`/about`) - Company story, vision, mission, why choose us
3. **Services** (`/services/[slug]`) - Individual service pages with details
4. **Portfolio** (`/portfolio`) - Filterable project grid
5. **Project Detail** (`/portfolio/[id]`) - Individual project showcase
6. **Blog** (`/blog`) - Blog listing
7. **Book Site Visit** (`/book-site-visit`) - Lead capture form
8. **Get Quote** (`/get-quote`) - Cost estimator
9. **Contact** (`/contact`) - Contact form and info
10. **FAQ** (`/faq`) - Accordion-based FAQs

## 🔍 SEO Features

- Dynamic meta titles and descriptions
- Open Graph and Twitter Card tags
- JSON-LD structured data (Organization, Service, FAQ, Article)
- Sitemap.xml generation
- Robots.txt
- Semantic HTML
- Image alt texts

## 📱 Mobile Features

- Sticky header with mobile menu
- Bottom fixed CTA buttons
- WhatsApp floating action button
- Touch-friendly UI elements
- Responsive images

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other Platforms

```bash
npm run build
npm start
```

## 📊 Analytics Setup

Add Google Analytics 4 in `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

## 🔧 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 To-Do Before Launch

- [ ] Replace placeholder images with actual project photos
- [ ] Update contact information in `lib/constants.ts`
- [ ] Set up form submission backend (email/CRM integration)
- [ ] Add Google Maps embed in contact page
- [ ] Configure Google Analytics
- [ ] Set up Google Search Console
- [ ] Test all forms and CTAs
- [ ] Run Lighthouse audit
- [ ] Test on multiple devices
- [ ] Set up SSL certificate

## 🤝 Support

For support, email hello@brassspace.com or call +91-9876543210

## 📄 License

© 2026 Brass Space Interior Solutions. All rights reserved.
