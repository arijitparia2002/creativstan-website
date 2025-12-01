# 📸 How to Add Portfolio Items

This guide shows you how to add your designs to the portfolio section.

## 🎯 Quick Steps

### 1. Prepare Your Thumbnail
- Export your design from Canva as JPG (compressed)
- Recommended size: 800x1000px
- Keep file size under 200KB
- Name it descriptively (e.g., `diwali-poster.jpg`)

### 2. Add Thumbnail to Public Folder
Place your image in:
```
public/thumbnails/your-image-name.jpg
```

### 3. Get Your Canva Share Link
- Open your design in Canva
- Click "Share" button
- Choose "Template link" or "View only link"
- Copy the URL (it will look like: `https://www.canva.com/design/DAFxxxxx/view`)

### 4. Add to Config File
Open `config/portfolio.json` and add your item:

```json
{
  "id": 13,
  "category": "Posters",
  "title": "Diwali Festival Poster",
  "shortDesc": "Vibrant Diwali celebration design",
  "longDesc": "Beautiful Diwali poster featuring traditional diyas, rangoli patterns, and festive colors. Perfect for social media and print.",
  "thumbnail": "/thumbnails/diwali-poster.jpg",
  "canvaLink": "https://www.canva.com/design/YOUR-DESIGN-ID",
  "isVideo": false
}
```

### 5. Save and Refresh
The portfolio will automatically update! 🎉

---

## 📋 Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique number (increment from last) | `13` |
| `category` | Must match: Posters, Birthday Cards, Wedding Invites, Reels, Ads, or Branding | `"Posters"` |
| `title` | Short, catchy title | `"Diwali Poster"` |
| `shortDesc` | One-line description (shown on hover) | `"Vibrant festival design"` |
| `longDesc` | Detailed description (for future use) | `"Beautiful poster with..."` |
| `thumbnail` | Path to your image in public folder | `"/thumbnails/diwali-poster.jpg"` |
| `canvaLink` | Your Canva template/view link | `"https://www.canva.com/design/..."` |
| `isVideo` | `true` for reels, `false` for images | `false` |

---

## 🎨 Category Guidelines

### Posters
Festival posters, event promotions, announcements

### Birthday Cards
Birthday invitations, birthday social media posts

### Wedding Invites
All wedding ceremony invites (Haldi, Sangeet, Wedding, Reception)

### Reels
Instagram reels, short video templates, animated content

### Ads
Business advertisements, promotional banners, sale announcements

### Branding
Logos, brand identity kits, business cards, letterheads

---

## 💡 Pro Tips

### For Best Results:
1. **Consistent Quality**: Use similar compression levels for all thumbnails
2. **Aspect Ratios**: Try to maintain consistent ratios within categories
3. **File Naming**: Use lowercase with hyphens (e.g., `birthday-card-1.jpg`)
4. **Canva Links**: Test your link in incognito mode before adding

### Thumbnail Optimization:
```bash
# Use tools like:
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)
- ImageOptim (Mac)
```

### Example Workflow:
1. Design in Canva ✨
2. Export as JPG → Compress → Save to `public/thumbnails/` 📁
3. Get Canva share link 🔗
4. Add entry to `config/portfolio.json` 📝
5. Refresh website → See it live! 🎉

---

## 🚀 Quick Template

Copy this template and fill in your details:

```json
{
  "id": NEXT_NUMBER,
  "category": "CATEGORY_HERE",
  "title": "YOUR_TITLE",
  "shortDesc": "One line description",
  "longDesc": "Detailed description with more context about the design, colors, usage, etc.",
  "thumbnail": "/thumbnails/your-file-name.jpg",
  "canvaLink": "https://www.canva.com/design/YOUR-ID",
  "isVideo": false
}
```

---

## ❓ Common Issues

### Image not showing?
- Check file path matches exactly
- Ensure image is in `public/thumbnails/` folder
- Refresh the page (Ctrl+F5 / Cmd+Shift+R)

### Canva link not working?
- Make sure link is publicly accessible
- Use "Template link" or "Anyone with the link can view"
- Test in incognito/private browsing

### Category not filtering?
- Category name must exactly match one of: Posters, Birthday Cards, Wedding Invites, Reels, Ads, Branding
- Check for extra spaces or typos

---

## 📱 What Users See

When someone clicks your portfolio item:
1. Opens Canva in a new tab
2. They can view your design
3. If it's a template link, they can customize it
4. They may contact you via WhatsApp to order

---

## 🎯 Next Steps

After adding items:
1. Test on mobile and desktop
2. Check all Canva links work
3. Verify images load quickly
4. Update regularly with new work!

---

Need help? Check the main README.md or contact support!

Happy showcasing! 🎨✨
