# Images Directory

This directory contains all images used throughout the Oregon Idea Lab website.

## 📁 Folder Structure

```
public/images/
├── hero/           # Hero section background images
├── team/           # Team member photos
├── issues/         # Images related to key issues
├── gallery/        # General photo gallery
└── README.md       # This file
```

## 🖼️ Image Guidelines

### Recommended Formats
- **Photos**: `.jpg` or `.webp` (best compression)
- **Graphics/Icons**: `.png` or `.svg` (transparent backgrounds)
- **Logos**: `.svg` (scalable)

### Recommended Sizes

**Hero Images**:
- **Desktop**: 1920x1080px (16:9 ratio)
- **Mobile**: 1080x1920px (9:16 ratio)
- **File size**: < 500KB (optimize with TinyPNG or Squoosh)

**Team Photos**:
- **Dimensions**: 800x800px (square)
- **File size**: < 200KB

**Issue/Section Images**:
- **Dimensions**: 1200x800px (3:2 ratio)
- **File size**: < 300KB

**Gallery Images**:
- **Dimensions**: 1200x800px or 1600x1200px
- **File size**: < 400KB

### Optimization Tips

1. **Compress images** before uploading:
   - Use [TinyPNG](https://tinypng.com/) for JPG/PNG
   - Use [Squoosh](https://squoosh.app/) for WebP conversion
   - Use [SVGOMG](https://jakearchibald.github.io/svgomg/) for SVG optimization

2. **Use descriptive filenames**:
   - ✅ Good: `portland-city-hall.jpg`
   - ❌ Bad: `IMG_1234.jpg`

3. **Include alt text** in your code:
   ```tsx
   <Image
     src="/images/hero/portland-city-hall.jpg"
     alt="Portland City Hall building"
     width={1920}
     height={1080}
   />
   ```

## 🚀 Adding Images to the Website

### Method 1: Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';

<Image
  src="/images/hero/background.jpg"
  alt="Description of image"
  width={1920}
  height={1080}
  priority // Use for above-the-fold images
  className="rounded-lg"
/>
```

### Method 2: Background Image (Hero Sections)

```tsx
<Hero
  title="Your title"
  subtitle="Your subtitle"
  backgroundImage="/images/hero/oregon-capitol.jpg"
/>
```

### Method 3: Two-Column Section with Image

```tsx
<TwoColumnSection
  title="About Our Work"
  imageSrc="/images/issues/community-meeting.jpg"
  imageAlt="Community members at a town hall meeting"
  content={<p>Your content here</p>}
/>
```

## 📋 Current Images

### Hero Images
Place hero/banner images here:
- `hero/` - Main page hero backgrounds

### Team Photos
Place team member photos here:
- `team/` - Individual headshots

### Issue Images
Place issue-related images here:
- `issues/` - Photos related to key Oregon issues

### Gallery
Place general gallery images here:
- `gallery/` - Miscellaneous photos

## 🎨 Naming Conventions

Use lowercase, hyphenated names:

```
✅ Good examples:
- oregon-capitol-building.jpg
- team-member-john-doe.jpg
- housing-development-portland.jpg
- ballot-initiative-signing.jpg

❌ Bad examples:
- IMG_1234.jpg
- photo.jpg
- image (1).png
- TEAM PHOTO.JPG
```

## 🔍 SEO Considerations

1. **Descriptive filenames**: Help search engines understand image content
2. **Alt text**: Always provide meaningful alt text
3. **Proper dimensions**: Serve appropriately sized images
4. **Lazy loading**: Next.js handles this automatically
5. **File size**: Keep images under recommended limits

## 💡 Tips

- **Backup originals**: Keep high-res originals separate
- **Batch process**: Use tools like ImageMagick for bulk optimization
- **Test on mobile**: Ensure images look good on small screens
- **Check load times**: Use Lighthouse to monitor performance

## 📞 Need Help?

See the main [README.md](../../README.md) for more information about using images in the codebase.

---

Last updated: 2024
