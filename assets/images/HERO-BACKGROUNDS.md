# Hero Background Images

## Current Setup

The hero section uses a background image system that can be easily swapped by changing a CSS variable.

## How to Change the Hero Background

### Method 1: Change the CSS Variable (Recommended)

Open `styles.css` and find the `:root` section (around line 15):

```css
:root {
    /* ... */
    --hero-bg-image: url('assets/images/hero-1.jpg');
    /* ... */
}
```

Simply change `hero-1.jpg` to your desired image filename:

```css
--hero-bg-image: url('assets/images/hero-2.jpg');
```

### Method 2: Inline Style (For Testing)

Add an inline style to the hero section in `index.html`:

```html
<section class="hero animation-slide" id="home" style="--hero-bg-image: url('assets/images/hero-2.jpg')">
```

### Method 3: Add a Class

Add a class in your CSS:

```css
.hero.alt-bg {
    --hero-bg-image: url('assets/images/hero-alternate.jpg');
}
```

Then apply it in HTML:

```html
<section class="hero animation-slide alt-bg" id="home">
```

## Image Requirements

### Recommended Specifications

- **Format**: JPG (best for photos with compression)
- **Dimensions**: 1920x1080px minimum (Full HD)
- **Aspect Ratio**: 16:9 or wider
- **File Size**: Under 500KB (optimized)
- **Subject**: Corporate events, brand activations, conferences, business gatherings

### Image Content Suggestions

1. **Corporate Events**: Professional conference or seminar
2. **Brand Activation**: People engaging with a brand display
3. **Concerts/Events**: Crowd at a well-lit event
4. **HoReCa**: Upscale restaurant or hotel environment
5. **Team/Office**: Professional team collaboration

### Optimization Tips

1. **Compress your images** using tools like:
   - TinyJPG: https://tinyjpg.com/
   - Squoosh: https://squoosh.app/
   - ImageOptim (Mac): https://imageoptim.com/

2. **Use the right dimensions**: Don't upload 4K images if you'll display at 1080p

3. **Consider WebP format** for better compression:
   ```css
   --hero-bg-image: url('assets/images/hero-1.webp');
   ```

## Dark Overlay Adjustment

The hero section has a dark overlay to ensure text readability. You can adjust the overlay darkness in `styles.css`:

```css
.hero::before {
    /* ... */
    background: linear-gradient(
        135deg,
        rgba(10, 17, 40, 0.85) 0%,  /* Change 0.85 to adjust darkness (0-1) */
        rgba(28, 37, 65, 0.75) 100%  /* Change 0.75 to adjust darkness (0-1) */
    );
}
```

- **0.9 - 1.0**: Very dark overlay (best for light images)
- **0.7 - 0.8**: Medium overlay (balanced)
- **0.5 - 0.6**: Light overlay (best for dark images)

## Multiple Hero Backgrounds

If you want to rotate between multiple backgrounds, add them as CSS classes:

```css
/* Add to styles.css */
.hero.hero-events {
    --hero-bg-image: url('assets/images/hero-events.jpg');
}

.hero.hero-corporate {
    --hero-bg-image: url('assets/images/hero-corporate.jpg');
}

.hero.hero-activation {
    --hero-bg-image: url('assets/images/hero-activation.jpg');
}
```

Then switch in HTML:

```html
<!-- Events theme -->
<section class="hero animation-slide hero-events" id="home">

<!-- Corporate theme -->
<section class="hero animation-slide hero-corporate" id="home">
```

## Background Effects

### Parallax Scrolling (Currently Enabled)

The background has `background-attachment: fixed` for a subtle parallax effect. To disable:

```css
.hero {
    background-attachment: scroll; /* Change from 'fixed' */
}
```

### Disable Parallax on Mobile (Recommended)

```css
@media (max-width: 640px) {
    .hero {
        background-attachment: scroll;
    }
}
```

## Fallback Background

If an image fails to load, the hero will fall back to the gradient background:

```css
background: linear-gradient(135deg, var(--primary-navy) 0%, var(--secondary-navy) 100%);
```

## Image Sources

### Free Stock Photos

- **Unsplash**: https://unsplash.com/s/photos/corporate-event
- **Pexels**: https://www.pexels.com/search/business-conference/
- **Pixabay**: https://pixabay.com/images/search/corporate/

### Search Terms

- "corporate event"
- "business conference"
- "brand activation"
- "marketing event"
- "professional gathering"
- "concert crowd"
- "upscale restaurant"

## Troubleshooting

### Image Not Showing

1. **Check the file path**: Ensure the image is in `assets/images/`
2. **Check the filename**: Match exact capitalization and extension
3. **Check file format**: Use `.jpg`, `.jpeg`, `.png`, or `.webp`
4. **Clear browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Image Looks Stretched

Update the background properties:

```css
.hero {
    background-size: cover;        /* Fills the space */
    background-position: center;   /* Centers the image */
}
```

### Image Position

To focus on a specific part of the image:

```css
.hero {
    background-position: center top;    /* Focus on top */
    background-position: center bottom; /* Focus on bottom */
    background-position: left center;   /* Focus on left */
    background-position: right center;  /* Focus on right */
}
```

---

**Quick Reference:**

```css
/* In styles.css */
:root {
    --hero-bg-image: url('assets/images/YOUR-IMAGE.jpg');
}
```

Replace `YOUR-IMAGE.jpg` with your filename!
