# Illustrations Directory

Free, open-source illustrations for the Oregon Idea Lab website.

## 📁 Folder Structure

```
illustrations/
├── undraw/         # unDraw illustrations (MIT license)
├── humaaans/       # Humaaans people illustrations (CC BY 4.0)
├── scribbbles/     # Scribbbles hand-drawn illustrations
└── README.md       # This file
```

## 🎨 Illustration Resources

### 1. unDraw
**Source**: https://undraw.co/
**License**: MIT (Free for commercial & personal use)
**Style**: Modern, flat, SVG illustrations

**How to Use**:
1. Visit https://undraw.co/illustrations
2. Search for relevant illustrations (e.g., "voting", "community", "government")
3. Customize the primary color to match brand (blue #2563eb)
4. Download as SVG or PNG
5. Place in `illustrations/undraw/`

**Recommended Illustrations**:
- `undraw_voting.svg` - For democracy/voting content
- `undraw_community.svg` - For "Who We Are" section
- `undraw_people.svg` - For team/collaboration
- `undraw_solution_mindset.svg` - For problem-solving
- `undraw_in_progress.svg` - For ballot measures

### 2. Humaaans
**Source**: https://www.humaaans.com/
**License**: CC BY 4.0 (Free with attribution)
**Style**: Customizable human illustrations

**How to Use**:
1. Visit https://www.humaaans.com/
2. Use the Mix-and-match library to create custom people
3. Customize poses, skin tones, clothing, accessories
4. Download as PNG (transparent background)
5. Place in `illustrations/humaaans/`

**Recommended Uses**:
- Team member illustrations (instead of/alongside photos)
- Diverse Oregon citizens for hero section
- People in community meetings
- Petition signing illustrations

**Attribution**: Add to footer or credits page:
```
Illustrations by Pablo Stanley (humaaans.com)
```

### 3. Scribbbles
**Source**: https://www.scribbbles.design/
**License**: Free for personal and commercial use
**Style**: Hand-drawn, playful, colorful

**How to Use**:
1. Visit https://www.scribbbles.design/
2. Browse categories (Abstract, Business, Education, etc.)
3. Download PNG files
4. Place in `illustrations/scribbbles/`

**Recommended Categories**:
- **Government**: Capitol buildings, documents, voting
- **People**: Community groups, discussions
- **Abstract**: Geometric shapes for backgrounds

## 🖼️ File Naming Convention

Use descriptive, lowercase, hyphenated names:

```
✅ Good examples:
- undraw/voting-process-blue.svg
- humaaans/diverse-team-meeting.png
- scribbbles/oregon-capitol-abstract.png

❌ Bad examples:
- illustration1.svg
- IMG_001.png
- download (3).svg
```

## 💻 Using Illustrations in Code

### Method 1: Next.js Image Component

```tsx
import Image from 'next/image';

<Image
  src="/images/illustrations/undraw/voting-process.svg"
  alt="Illustration of voting process"
  width={600}
  height={400}
  className="mx-auto"
/>
```

### Method 2: Features Grid

```tsx
import FeaturesGrid from '@/components/sections/FeaturesGrid';

<FeaturesGrid
  title="Our Approach"
  features={[
    {
      title: 'Direct Democracy',
      description: 'Going straight to the people through initiatives',
      illustration: '/images/illustrations/undraw/voting-process.svg',
    },
  ]}
/>
```

### Method 3: Hero Background

```tsx
<div className="relative">
  <Image
    src="/images/illustrations/humaaans/team-collaboration.png"
    alt="Team working together"
    fill
    className="object-cover opacity-10"
  />
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</div>
```

## 🎨 Color Customization

### unDraw
- Primary color: #2563eb (Oregon Idea Lab blue)
- Can customize directly on undraw.co before downloading

### Humaaans
- Download and edit in design tools (Figma, Illustrator)
- Or use as-is with default colors

### Scribbbles
- Pre-colored illustrations
- Use as-is or edit in image editor

## 📐 Recommended Sizes

| Use Case | Recommended Size | Format |
|----------|-----------------|---------|
| Hero Illustrations | 800×600px | SVG/PNG |
| Feature Cards | 400×300px | SVG/PNG |
| Section Headers | 600×400px | SVG/PNG |
| Background Elements | 1200×800px | SVG/PNG |

## ♿ Accessibility

Always provide meaningful alt text:

```tsx
// ❌ Bad
<Image src="..." alt="illustration" />

// ✅ Good
<Image
  src="/images/illustrations/undraw/voting.svg"
  alt="Illustration showing citizens casting ballots at a voting booth"
/>
```

## 📋 Current Illustrations

### unDraw
(Download and add your illustrations here)

### Humaaans
(Download and add your illustrations here)

### Scribbbles
(Download and add your illustrations here)

## 💡 Pro Tips

1. **Consistency**: Use illustrations from the same library for cohesive design
2. **Color Harmony**: Match illustration colors to your brand palette
3. **File Size**: Optimize PNGs with TinyPNG, use SVG when possible
4. **Variety**: Mix illustration styles (people + abstract) for visual interest
5. **Whitespace**: Give illustrations breathing room in your layouts

## 🔗 Additional Resources

**More Free Illustration Sites**:
- **Open Doodles**: https://www.opendoodles.com/
- **Blush**: https://blush.design/
- **Storyset**: https://storyset.com/
- **Illustrations.co**: https://illlustrations.co/

**Design Tools**:
- **Figma** (free): https://figma.com
- **Canva** (free): https://canva.com
- **SVGOMG** (SVG optimizer): https://jakearchibald.github.io/svgomg/

## 📜 License Summary

- **unDraw**: MIT - Use freely, no attribution required
- **Humaaans**: CC BY 4.0 - Attribute to Pablo Stanley
- **Scribbbles**: Free for commercial use

Always verify current license terms on each website.

---

**Need Help?** See the main [COMPONENT_DOCS.md](../../COMPONENT_DOCS.md) for component usage examples.

Last updated: 2024
