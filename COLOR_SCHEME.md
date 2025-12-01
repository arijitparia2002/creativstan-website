# 🎨 Creativstan Color Scheme

## New Color Palette

Your website now uses a vibrant, modern color palette:

### Primary Colors

| Color | Hex Code | Usage | Tailwind Class |
|-------|----------|-------|----------------|
| **Navy** | `#264653` | Primary dark accent, backgrounds | `primary-navy` |
| **Teal** | `#2A9D8F` | Main brand color, CTAs, highlights | `primary-teal` |
| **Yellow** | `#E9C46A` | Accents, highlights | `primary-yellow` |
| **Orange** | `#F4A261` | Secondary accents | `primary-orange` |
| **Coral** | `#E76F51` | Tertiary accents | `primary-coral` |

### Dark Backgrounds

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Dark 900** | `#0E0E0E` | Main background |
| **Dark 800** | `#1A1A1A` | Card backgrounds |
| **Dark 700** | `#2A2A2A` | Elevated surfaces |

## Font

**Raleway** - Clean, modern, professional sans-serif font
- All weights from 300 to 900
- Used throughout the entire website
- Loaded via Google Fonts

## Color Usage Guide

### Buttons
- **Primary CTA**: `bg-primary-teal` with `hover:bg-primary-navy`
- **Secondary**: `bg-primary-orange` with `hover:bg-primary-coral`
- **WhatsApp**: `bg-green-600` (unchanged)

### Text
- **Headings**: `text-gradient-primary` (Teal → Yellow → Orange gradient)
- **Body**: `text-white` or `text-gray-300`
- **Accents**: `text-primary-teal`

### Borders & Glows
- **Glow effect**: `glow-teal` or `glow-teal-strong`
- **Borders**: `border-primary-teal` or `border-primary-navy`

### Backgrounds
- **Gradients**: `from-primary-teal via-primary-yellow to-primary-orange`
- **Cards**: `bg-dark-800`
- **Hover states**: `hover:bg-primary-teal/20` (with opacity)

## Examples

### Hero Section
- Background: Navy gradient with teal accents
- Title: Teal → Yellow → Orange gradient
- Buttons: Teal primary, Green WhatsApp

### Services Cards
- Background: Dark 800
- Border: Navy with teal on hover
- Icons: Teal
- Hover: Teal glow effect

### Portfolio
- Categories: Teal active, gray inactive
- Hover overlay: Navy gradient
- CTA button: Teal background

### Pricing Cards
- Gradients: Various teal/navy combinations
- Popular badge: Teal
- Buttons: Teal or white on wine background

## Customization

To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    navy: '#264653',    // Change this
    teal: '#2A9D8F',    // Change this
    yellow: '#E9C46A',  // Change this
    orange: '#F4A261',  // Change this
    coral: '#E76F51',   // Change this
  },
}
```

Then restart the dev server: `npm run dev`

## Accessibility

The new color palette maintains:
- ✅ WCAG AA contrast ratios
- ✅ Colorblind-friendly combinations
- ✅ Clear visual hierarchy
- ✅ Readable text on all backgrounds

---

Enjoy your fresh, modern color scheme! 🎨✨
