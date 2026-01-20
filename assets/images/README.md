# Image Assets Guide

## Recommended Images

To enhance the website, consider adding the following images to this folder:

### 1. Hero Background (hero-bg.jpg)
- **Size**: 1920x1080px minimum
- **Format**: JPG (optimized)
- **Content**: Professional event/activation scene, corporate gathering, or abstract brand imagery
- **Tone**: Professional, energetic, inspiring

### 2. Partner Logos
- **Format**: PNG with transparent background
- **Size**: 300x300px (square)
- **Files needed**:
  - `save-the-children-logo.png`
  - `neat-microcredit-logo.png`

### 3. Service Icons (Optional)
If you want custom icons instead of Font Awesome:
- **Format**: SVG or PNG
- **Size**: 128x128px
- **Files**: Various icons representing each service

### 4. Favicon
- **File**: `favicon.ico`
- **Size**: 32x32px, 16x16px (multi-size ICO)
- Add to HTML: `<link rel="icon" href="assets/images/favicon.ico">`

## Image Optimization Tips

1. **Compress all images**: Use tools like TinyPNG or ImageOptim
2. **Use WebP format**: For better compression (with JPG fallback)
3. **Lazy loading**: Already supported in the JavaScript
4. **Responsive images**: Use srcset for different screen sizes

## Example: Adding Hero Background

Once you have your hero image, update `styles.css`:

```css
.hero {
    background-image: 
        linear-gradient(135deg, rgba(10, 17, 40, 0.9) 0%, rgba(28, 37, 65, 0.9) 100%),
        url('../assets/images/hero-bg.jpg');
}
```

## Example: Adding Partner Logos

Update the partner cards in `index.html`:

```html
<div class="partner-card">
    <div class="partner-logo">
        <img src="assets/images/save-the-children-logo.png" alt="Save the Children International">
    </div>
    <h3>Save the Children International</h3>
</div>
```

## Stock Photo Resources

If you need placeholder images:
- **Unsplash**: https://unsplash.com/ (free, high-quality)
- **Pexels**: https://www.pexels.com/ (free)
- **Pixabay**: https://pixabay.com/ (free)

Search terms: "corporate event", "business conference", "brand activation", "marketing team"
