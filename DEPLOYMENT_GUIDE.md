# 🚀 Deployment Guide - Creativstan

Complete guide to deploy your website to production with **creativstan.com**

---

## 📋 Pre-Deployment Checklist

### ✅ Content Updates
- [ ] Update `config/content.json` with your actual information
- [ ] Add your portfolio thumbnails to `public/thumbnails/`
- [ ] Update `config/portfolio.json` with your work and Canva links
- [ ] Replace WhatsApp number everywhere (currently: 6389071010)
- [ ] Update email address (currently: shardulipandey8090@gmail.com)

### ✅ Images & Assets
- [ ] Create favicon.ico (16x16, 32x32, 48x48)
- [ ] Create favicon-16x16.png
- [ ] Create apple-touch-icon.png (180x180)
- [ ] Create icon-192x192.png for PWA
- [ ] Create icon-512x512.png for PWA
- [ ] Create og-image.png (1200x630 for social sharing)
- [ ] Create logo.png for structured data

### ✅ Social Media
- [ ] Update Twitter handle in `app/layout.tsx` (line 56)
- [ ] Update social media URLs in `config/content.json`
- [ ] Test all social sharing (Facebook, Twitter, LinkedIn)

---

## 🌐 Domain Setup

### Step 1: Purchase Domain
You already have: **creativstan.com** ✅

### Step 2: DNS Configuration
Point your domain to Vercel:

**A Records:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🚢 Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

#### Step 1: Push to GitHub
```bash
cd "C:\Users\ariji\Desktop\creativstan website"
git init
git add .
git commit -m "Initial commit - Creativstan website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/creativstan.git
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
5. Click "Deploy"

#### Step 3: Add Custom Domain
1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `creativstan.com`
3. Add domain: `www.creativstan.com`
4. Vercel will provide DNS instructions
5. Wait for DNS propagation (5-60 minutes)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd "C:\Users\ariji\Desktop\creativstan website"

# Deploy
vercel

# Add custom domain
vercel domains add creativstan.com
```

---

## 🔧 Environment Variables (if needed)

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://creativstan.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6389071010
NEXT_PUBLIC_EMAIL=shardulipandey8090@gmail.com
```

---

## 📊 Post-Deployment SEO Setup

### 1. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://creativstan.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://creativstan.com/sitemap.xml`

### 2. Google Analytics (Optional)
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:

```typescript
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### 3. Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

---

## 🎯 Testing Before Go-Live

### Performance Testing
```bash
# Run Lighthouse
npm install -g lighthouse
lighthouse https://creativstan.com --view
```

### SEO Testing
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check meta tags with [Meta Tags](https://metatags.io/)
- [ ] Test mobile-friendly: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Check page speed: [PageSpeed Insights](https://pagespeed.web.dev/)

### Social Sharing
- [ ] Facebook: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Twitter: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] LinkedIn: Share post and check preview

### Functionality Testing
- [ ] All WhatsApp links work
- [ ] Email link works
- [ ] Portfolio Canva links open correctly
- [ ] All animations work
- [ ] Mobile navigation works
- [ ] Forms submit (if any)
- [ ] All sections scroll smoothly

---

## 🔒 Security

### SSL Certificate
✅ Vercel provides automatic SSL - no action needed!

### Security Headers (Optional)
Add to `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

---

## 📈 Monitoring

### Vercel Analytics
Already included! Check:
- Vercel Dashboard → Your Project → Analytics

### Track Performance
- Monitor Core Web Vitals
- Check loading speeds
- Watch error rates

---

## 🔄 Continuous Updates

### Workflow for Updates
```bash
# Make changes locally
# Test: npm run dev

# Commit changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel auto-deploys! ✨
```

### Update Portfolio
1. Add thumbnails to `public/thumbnails/`
2. Update `config/portfolio.json`
3. Commit and push
4. Auto-deploys in 1-2 minutes

### Update Content
1. Edit `config/content.json`
2. Commit and push
3. Changes live immediately

---

## 🎉 Go-Live Checklist

Final checks before announcing:

- [ ] Website loads at https://creativstan.com
- [ ] SSL certificate is active (🔒 in browser)
- [ ] All portfolio items have real thumbnails
- [ ] WhatsApp number is correct and tested
- [ ] Email is correct and tested
- [ ] All Canva links work
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] robots.txt is accessible
- [ ] Social sharing works correctly
- [ ] Mobile version looks perfect
- [ ] All animations work smoothly
- [ ] Performance score > 90

---

## 🆘 Troubleshooting

### Issue: Site not loading
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Wait 24-48 hours for full DNS propagation
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Images not showing
- Ensure images are in `public/` folder
- Check file paths are correct
- Verify image file names match config

### Issue: Slow loading
- Compress images with [TinyPNG](https://tinypng.com)
- Check Vercel Analytics for bottlenecks
- Enable caching in Vercel settings

### Issue: SEO not working
- Wait 2-4 weeks for Google indexing
- Submit sitemap again
- Check robots.txt allows crawling

---

## 📚 Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Google Search Console Help](https://support.google.com/webmasters)

---

## 🎊 Success!

Your website is now live at **https://creativstan.com** 🚀

Share it everywhere:
- Instagram Stories
- WhatsApp Status
- Business Cards
- Email Signature

---

**Need help?** Check the main README.md or contact support!

Good luck with your creative business! 🎨✨
