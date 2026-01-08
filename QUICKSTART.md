# Quick Start Guide - Brass Space Website

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd brass-space
npm install
```

### Step 2: Update Your Information

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Brass Space Interior Solutions",
  phone: "+91-YOUR-PHONE-NUMBER",      // ← Update this
  email: "your@email.com",              // ← Update this
  whatsapp: "+91YOUR-WHATSAPP",         // ← Update this
  address: {
    street: "Your Street Address",      // ← Update this
    city: "Your City",                  // ← Update this
    state: "Your State",                // ← Update this
    zip: "110001",                      // ← Update this
  },
  social: {
    facebook: "https://facebook.com/yourpage",    // ← Update this
    instagram: "https://instagram.com/yourpage",  // ← Update this
    linkedin: "https://linkedin.com/company/yourpage" // ← Update this
  }
};
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Customize Content

#### Homepage (`app/page.tsx`)
- Update hero text
- Modify trust bar statistics
- Add/remove featured projects
- Update testimonials

#### About Page (`app/about/page.tsx`)
- Update company story
- Modify vision & mission
- Update statistics

#### Services (`lib/constants.ts`)
- Add/remove services
- Update service descriptions
- Change service images

### Step 5: Add Your Images

Replace placeholder images in `public/images/` with your actual project photos.

Recommended image sizes:
- Hero images: 1920x1080px
- Project cards: 800x600px
- Service cards: 800x600px
- Blog images: 1200x630px

### Step 6: Test Everything

```bash
# Build for production
npm run build

# Test production build
npm start
```

Visit all pages and test:
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] CTAs work (phone, WhatsApp, forms)

### Step 7: Deploy

**Easiest: Deploy to Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live in minutes!

## 📝 Common Customizations

### Change Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#b45309',  // Change amber-700
      secondary: '#111827', // Change gray-900
    }
  }
}
```

### Add a New Page

1. Create file: `app/your-page/page.tsx`
2. Add to navigation: `components/Header.tsx`
3. Add to sitemap: `app/sitemap.ts`

### Modify Forms

Forms are in:
- `app/book-site-visit/page.tsx` - Site visit booking
- `app/contact/page.tsx` - Contact form
- `app/get-quote/page.tsx` - Cost estimator

### Add Blog Posts

Create new blog post files in `app/blog/[slug]/page.tsx` or use a CMS like:
- Sanity.io
- Contentful
- Strapi

## 🔧 Configuration Files

### `next.config.js`
- Image domains
- Redirects
- Headers
- Environment variables

### `tailwind.config.ts`
- Colors
- Fonts
- Breakpoints
- Custom utilities

### `lib/constants.ts`
- Site configuration
- Services
- Cities
- Budget ranges

## 📱 Mobile Testing

Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)

Use Chrome DevTools device emulation for quick testing.

## 🎨 Design System

### Colors
- Primary: Amber-700 (#b45309)
- Secondary: Gray-900 (#111827)
- Accent: Amber-50 (#fffbeb)

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold
- Body: Regular

### Spacing
- Container: max-w-7xl
- Section padding: py-16
- Component gap: gap-8

## 🐛 Troubleshooting

### Images not showing
- Check file paths are correct
- Ensure images are in `public/images/`
- Verify Next.js Image component syntax

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🆘 Need Help?

1. Check the README.md for detailed documentation
2. Review DEPLOYMENT.md for deployment guides
3. Search Next.js documentation
4. Ask in Next.js Discord community

## ✅ Pre-Launch Checklist

- [ ] Updated contact information
- [ ] Replaced placeholder images
- [ ] Tested all forms
- [ ] Verified mobile responsive
- [ ] Checked all links
- [ ] Optimized images
- [ ] Set up analytics
- [ ] Configured SEO
- [ ] Tested on multiple browsers
- [ ] Reviewed all content

## 🎉 You're Ready!

Your website is now ready to launch. Deploy to Vercel, Netlify, or your preferred hosting platform.

**Good luck with your interior design business!** 🏠✨
