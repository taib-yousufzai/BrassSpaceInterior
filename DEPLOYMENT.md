# Deployment Guide - Brass Space Website

## Quick Start: Deploy to GitHub & Vercel

### Step 1: Push to GitHub

Your code is already committed locally. Now push it to GitHub:

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `brass-space-website` (or your preferred name)
   - Keep it Private or Public (your choice)
   - DO NOT initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code to GitHub**
   ```bash
   cd brass-space
   git remote add origin https://github.com/YOUR_USERNAME/brass-space-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Verify on GitHub**
   - Refresh your GitHub repository page
   - You should see all your files uploaded

### Step 2: Deploy to Vercel (Recommended - Free & Easy)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your `brass-space-website` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)
   - Click "Deploy"

4. **Wait for Deployment** (2-3 minutes)
   - Vercel will build and deploy your site
   - You'll get a live URL like: `https://brass-space-website.vercel.app`

5. **Add Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `brassspace.com`)
   - Follow DNS configuration instructions
   - SSL certificate is automatic

### Step 3: Configure Environment Variables (If Needed)

In Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add any required variables:
  ```
  NEXT_PUBLIC_SITE_URL=https://yourdomain.com
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
  ```

### Step 4: Enable Automatic Deployments

Already enabled! Every time you push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```
Vercel will automatically rebuild and deploy your site.

---

## Pre-Deployment Checklist

### 1. Update Configuration
- [ ] Update `lib/constants.ts` with actual contact information
- [ ] Replace placeholder phone numbers and email addresses
- [ ] Update social media links
- [ ] Verify address details

### 2. Content Review
- [ ] Review all page content for accuracy
- [ ] Check all image paths are correct
- [ ] Verify all internal links work
- [ ] Test all forms (Book Site Visit, Contact, Get Quote)

### 3. SEO Setup
- [ ] Update meta descriptions for all pages
- [ ] Verify Open Graph images exist
- [ ] Test structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console

### 4. Performance Optimization
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Optimize images (use WebP/AVIF format)
- [ ] Enable image lazy loading
- [ ] Minimize JavaScript bundles

### 5. Analytics & Tracking
- [ ] Set up Google Analytics 4
- [ ] Configure Google Tag Manager
- [ ] Set up conversion tracking
- [ ] Add Facebook Pixel (if using Facebook Ads)

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd brass-space
vercel
```

4. **Production Deployment**
```bash
vercel --prod
```

**Advantages:**
- Automatic SSL
- Global CDN
- Automatic deployments from Git
- Zero configuration
- Free for personal/small projects

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

### Option 3: Traditional Hosting (cPanel, etc.)

1. **Build the project**
```bash
npm run build
```

2. **Export static files** (if needed)
```bash
npm run build
```

3. **Upload files**
- Upload the `.next` folder
- Upload `public` folder
- Upload `package.json` and `package-lock.json`
- Upload `next.config.js`

4. **Install dependencies on server**
```bash
npm install --production
```

5. **Start the application**
```bash
npm start
```

## Environment Variables

Create `.env.production` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_EMAIL=hello@yourdomain.com
NEXT_PUBLIC_WHATSAPP=+91XXXXXXXXXX
```

## Post-Deployment Tasks

### 1. DNS Configuration
- Point your domain to deployment platform
- Wait for DNS propagation (24-48 hours)
- Verify SSL certificate is active

### 2. Google Search Console
- Add and verify your property
- Submit sitemap: `https://yourdomain.com/sitemap.xml`
- Monitor indexing status

### 3. Google Analytics
- Verify tracking code is firing
- Set up goals for:
  - Form submissions
  - Phone clicks
  - WhatsApp clicks
  - Page views

### 4. Testing
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Test all forms submit correctly
- [ ] Verify all CTAs work
- [ ] Check page load speed
- [ ] Test WhatsApp and phone links

### 5. Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Monitor Core Web Vitals

## Form Integration

### Option 1: Email Service (Recommended for MVP)

Use a service like:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **SendGrid**: https://sendgrid.com

### Option 2: Custom Backend

Create API routes in `app/api/`:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using nodemailer or SendGrid
  // Store in database
  return Response.json({ success: true });
}
```

### Option 3: CRM Integration

Integrate with:
- **HubSpot**
- **Salesforce**
- **Zoho CRM**

## Performance Optimization

### Image Optimization

1. **Use Next.js Image component** (already implemented)
2. **Convert images to WebP/AVIF**
```bash
npm install sharp
```

3. **Lazy load images** (already implemented)

### Code Splitting

Next.js automatically code-splits. To optimize further:

```typescript
// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### Caching

Configure caching headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

## Security

### 1. Environment Variables
- Never commit `.env` files
- Use platform-specific environment variable management

### 2. Form Protection
- Implement reCAPTCHA v3
- Add rate limiting
- Validate all inputs server-side

### 3. Headers
Add security headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
}
```

## Backup & Maintenance

### Regular Tasks
- [ ] Weekly: Check analytics and form submissions
- [ ] Monthly: Update dependencies (`npm update`)
- [ ] Monthly: Review and update content
- [ ] Quarterly: Performance audit
- [ ] Quarterly: Security audit

### Backup Strategy
- Use Git for code versioning
- Backup database regularly (if using one)
- Keep copies of environment variables
- Document any custom configurations

## Support & Troubleshooting

### Common Issues

**Issue: Images not loading**
- Check image paths are correct
- Verify images exist in `public/images/`
- Check Next.js Image configuration

**Issue: Forms not submitting**
- Check console for errors
- Verify API endpoints
- Test email service configuration

**Issue: Slow page load**
- Run Lighthouse audit
- Optimize images
- Check bundle size
- Enable caching

### Getting Help
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

## Cost Estimates

### Hosting (Monthly)
- **Vercel Free**: $0 (100GB bandwidth, unlimited sites)
- **Vercel Pro**: $20/month (1TB bandwidth)
- **Netlify Free**: $0 (100GB bandwidth)
- **Traditional VPS**: $5-50/month

### Additional Services
- **Domain**: $10-15/year
- **Email Service**: $0-50/month
- **Analytics**: Free (Google Analytics)
- **Form Service**: $0-20/month

## Launch Checklist

- [ ] All content reviewed and approved
- [ ] Contact information updated
- [ ] Forms tested and working
- [ ] Analytics configured
- [ ] SEO optimized
- [ ] Mobile responsive verified
- [ ] Cross-browser tested
- [ ] SSL certificate active
- [ ] Sitemap submitted
- [ ] Social media links verified
- [ ] Performance optimized (Lighthouse 90+)
- [ ] Backup strategy in place
- [ ] Monitoring configured

## Next Steps After Launch

1. **Week 1**: Monitor analytics, fix any issues
2. **Week 2**: Start content marketing (blog posts)
3. **Month 1**: Review conversion rates, optimize CTAs
4. **Month 2**: A/B test different page elements
5. **Ongoing**: Regular content updates, SEO optimization

---

**Need Help?** Contact the development team or refer to the README.md for technical details.
