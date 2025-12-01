# 🎨 Creativstan - Portfolio Website

A stunning, modern, animated portfolio and service showcase website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Wine Color Theme](https://via.placeholder.com/1200x400/b83d5b/ffffff?text=Creativstan)

## ✨ Features

- **Modern Wine Color Theme** - Elegant burgundy/wine color palette
- **Smooth Animations** - Powered by Framer Motion for beautiful interactions
- **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- **WhatsApp Integration** - Direct messaging for client inquiries
- **SEO Optimized** - Built with Next.js for best SEO practices
- **Fast Performance** - Optimized for speed and performance
- **Interactive Components** - Hover effects, carousels, lightboxes, and more
- **JSON-Based Portfolio** - Easy portfolio management with no backend needed
- **Canva Integration** - Direct links to view/edit designs in Canva

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. The project is already set up in your directory
2. Install dependencies (if not already done):
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## 📱 Customization Guide

### 0. Add Your Portfolio Items

**The easiest way to add your work!**

1. Add thumbnail images to `public/thumbnails/`
2. Get your Canva share links
3. Edit `config/portfolio.json` to add your items

**👉 See detailed guide: [HOW_TO_ADD_PORTFOLIO.md](HOW_TO_ADD_PORTFOLIO.md)**

Example portfolio entry:
```json
{
  "id": 1,
  "category": "Posters",
  "title": "Festival Poster",
  "shortDesc": "Vibrant festival design",
  "longDesc": "Detailed description...",
  "thumbnail": "/thumbnails/festival-poster.jpg",
  "canvaLink": "https://www.canva.com/design/YOUR-ID",
  "isVideo": false
}
```

### 1. Update Your WhatsApp Number

Replace `919876543210` with your actual WhatsApp number throughout the project:

**Files to update:**
- `components/Hero.tsx`
- `components/Services.tsx`
- `components/Pricing.tsx`
- `components/Contact.tsx`
- `components/Navbar.tsx`
- `components/FloatingWhatsApp.tsx`

**Format:** Use international format without + sign (e.g., 919876543210 for India)

### 2. Add Your Content

#### Portfolio Images
Replace placeholder images in `components/Portfolio.tsx`:
- Add your images to the `public` folder
- Update the `portfolioItems` array with your actual work

#### About Section
Update `components/About.tsx`:
- Replace the placeholder icon with your photo
- Edit the description text
- Update the name from "Arijit" to yours

#### Services
Modify `components/Services.tsx`:
- Edit service names, descriptions, and prices
- Add/remove services as needed

#### Testimonials
Update `components/Testimonials.tsx`:
- Replace with real client testimonials
- Add actual client names and roles

### 3. Update Contact Information

In `components/Contact.tsx`:
- Update email address
- Add your social media links (Instagram, Facebook, etc.)
- Modify working hours

### 4. Customize Colors

The wine color theme is defined in `tailwind.config.js`:

```javascript
colors: {
  wine: {
    50: '#fdf4f5',
    100: '#fbe8eb',
    // ... more shades
    950: '#3e101a',
  },
}
```

You can adjust these values to match your preferred shade of wine/burgundy.

### 5. Add Your Video Background (Optional)

In `components/Hero.tsx`, replace the gradient background with your video:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/path-to-your-video.mp4" type="video/mp4" />
</video>
```

## 🎯 Key Sections

1. **Hero** - Full-screen landing with animated title
2. **About** - Introduction and key features
3. **Services** - Service cards with hover effects
4. **Portfolio** - Masonry grid with category filters
5. **Pricing** - Transparent pricing cards
6. **Why Choose Us** - Feature highlights
7. **Testimonials** - Client reviews carousel
8. **Contact** - WhatsApp and email integration
9. **Footer** - Quick links and social media

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Poppins, Inter, Bebas Neue

## 📦 Project Structure

```
creativstan-website/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── public/             # Static assets
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json
```

## 🎨 Design Features

### Animations
- Smooth scroll animations
- Hover effects on cards
- Floating particles
- Carousel transitions
- Page load animations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile navigation menu
- Adaptive layouts

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 📝 Environment Variables (Optional)

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_EMAIL=creativstan@example.com
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

## 📄 License

This project is open source and available for personal and commercial use.

## 💡 Tips

1. **Optimize Images:** Use next/image for automatic optimization
2. **Add Analytics:** Integrate Google Analytics or Vercel Analytics
3. **SEO:** Update metadata in `app/layout.tsx`
4. **Performance:** Use Lighthouse to test performance
5. **Testing:** Test on multiple devices and browsers

## 🎉 Features to Add (Optional)

- [ ] Blog section
- [ ] Admin dashboard
- [ ] Payment integration
- [ ] Client portal
- [ ] Booking system
- [ ] Multi-language support

## 📞 Support

For questions or issues:
- WhatsApp: [Your Number]
- Email: [Your Email]

---

**Made with ❤️ and creativity**

Happy Customizing! 🎨✨
