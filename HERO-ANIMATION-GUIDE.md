# Hero Animation System Documentation

## Overview

The M-Crown website features a flexible hero title animation system with three distinct animation modes. The system is designed for easy switching between modes with a single configuration change.

## 🎬 Animation Modes

### Mode A: Slide-Up + Fade (Default)
- **Behavior**: Each title line slides up from 20px below with a fade-in effect
- **Timing**: Lines stagger by 200ms each
- **Duration**: 800ms per line
- **Best for**: Professional, smooth, corporate feel

### Mode B: Typing Effect
- **Behavior**: Characters appear one-by-one as if being typed
- **Timing**: 50ms per character, 300ms pause between lines
- **Duration**: Varies based on text length
- **Best for**: Dynamic, tech-focused, engaging presentation

### Mode C: Word-by-Word Reveal
- **Behavior**: Each word fades and slides up slightly
- **Timing**: 100ms delay between words, 200ms pause between lines
- **Duration**: Varies based on word count
- **Best for**: Emphasis on each part of the message

## 🔧 How to Switch Animation Modes

### Method 1: JavaScript Configuration (Recommended)

Open `script.js` and change the `HERO_ANIMATION_MODE` constant:

```javascript
// Line 9-13 in script.js
const HERO_ANIMATION_MODE = "slide";  // Default
// OR
const HERO_ANIMATION_MODE = "typing"; // Typing effect
// OR
const HERO_ANIMATION_MODE = "words";  // Word-by-word
```

### Method 2: HTML Class (Alternative)

Change the class on the hero section in `index.html`:

```html
<!-- Slide-Up + Fade -->
<section class="hero animation-slide" id="home">

<!-- Typing Effect -->
<section class="hero animation-typing" id="home">

<!-- Word-by-Word -->
<section class="hero animation-words" id="home">
```

**Note**: If using Method 2, you should also update or remove the JavaScript configuration to avoid conflicts.

## 📋 Title Structure

The hero title is split into three separate lines for optimal animation control:

```html
<h1 class="hero-title">
    <span class="hero-title-line" data-line="1">Driving Brands.</span>
    <span class="hero-title-line" data-line="2">Creating Experiences.</span>
    <span class="hero-title-line" data-line="3">Growing Customers.</span>
</h1>
```

Each line is independently animated based on the selected mode.

## ⏱️ Animation Timeline

### Mode A: Slide-Up + Fade
```
Line 1: 0ms       → 800ms   (slides up + fades in)
Line 2: 200ms     → 1000ms  (slides up + fades in)
Line 3: 400ms     → 1200ms  (slides up + fades in)
Subtitle: 800ms   → 1600ms  (slides up + fades in)
```

### Mode B: Typing Effect
```
Line 1: 0ms       → ~850ms  (17 chars × 50ms)
Pause:  850ms     → 1150ms  (300ms)
Line 2: 1150ms    → ~2200ms (21 chars × 50ms)
Pause:  2200ms    → 2500ms  (300ms)
Line 3: 2500ms    → ~3400ms (18 chars × 50ms)
Subtitle: 3600ms  → 4400ms  (fade in)
```

### Mode C: Word-by-Word
```
Line 1: Words 1-2 → 0-200ms     (2 words × 100ms)
Line 2: Words 3-4 → 400-600ms   (2 words × 100ms)
Line 3: Words 5-6 → 800-1000ms  (2 words × 100ms)
Subtitle: 1300ms  → 2100ms      (fade in)
```

## ♿ Accessibility Features

### Reduced Motion Support
The system respects the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
    .hero-title-line,
    .hero-subtitle {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
    }
}
```

When a user has reduced motion enabled in their system preferences:
- All animations are disabled
- Content appears immediately
- No jarring movements or fades

### Performance Considerations
- ✅ Animations run only once on page load
- ✅ No layout shifts during animation
- ✅ GPU-accelerated transforms used
- ✅ Efficient JavaScript with minimal DOM manipulation
- ✅ No recursive animation loops

## 🎨 Customization Guide

### Adjusting Animation Speed

#### Slide Mode
```css
/* In styles.css, line ~373 */
.hero.animation-slide .hero-title-line.animated {
    animation: slideUpFade 0.8s ease forwards; /* Change 0.8s */
}
```

#### Typing Mode
```javascript
/* In script.js, line ~106 */
const typingSpeed = 50; // Change this value (milliseconds per character)
```

#### Word Mode
```javascript
/* In script.js, line ~149 */
const wordDelay = 100; // Change this value (milliseconds between words)
```

### Adjusting Stagger Timing

#### Slide Mode - Line Delays
```css
/* In styles.css, lines ~375-385 */
.hero.animation-slide .hero-title-line[data-line="1"].animated {
    animation-delay: 0ms;     /* First line */
}
.hero.animation-slide .hero-title-line[data-line="2"].animated {
    animation-delay: 200ms;   /* Second line - change this */
}
.hero.animation-slide .hero-title-line[data-line="3"].animated {
    animation-delay: 400ms;   /* Third line - change this */
}
```

#### Typing Mode - Line Pause
```javascript
/* In script.js, line ~128 */
currentDelay += (text.length * typingSpeed) + 300; // Change 300ms
```

#### Word Mode - Line Pause
```javascript
/* In script.js, line ~177 */
if (lineIndex < lines.length - 1) {
    currentDelay += 200; // Change this value
}
```

### Changing Title Text

Edit the HTML in `index.html`:

```html
<span class="hero-title-line" data-line="1">Your First Line.</span>
<span class="hero-title-line" data-line="2">Your Second Line.</span>
<span class="hero-title-line" data-line="3">Your Third Line.</span>
```

**Important**: Keep the `data-line` attributes for proper slide animation timing.

## 🧪 Testing Checklist

When changing animation modes, test:

- [ ] Desktop view (large screen)
- [ ] Tablet view (768px - 992px)
- [ ] Mobile view (< 768px)
- [ ] Reduced motion preference enabled
- [ ] Page load and refresh behavior
- [ ] No console errors
- [ ] Subtitle animates after title
- [ ] No layout shifts or flashing

## 🐛 Troubleshooting

### Animation doesn't play
1. Check browser console for JavaScript errors
2. Verify `HERO_ANIMATION_MODE` is set correctly
3. Ensure the hero section has the correct animation class
4. Check if reduced motion is enabled in system preferences

### Animation plays multiple times
- The animation should only play once on page load
- If replaying, check for duplicate event listeners in custom code

### Text appears immediately (no animation)
- User may have reduced motion enabled (this is intentional)
- Check CSS classes are applied correctly
- Verify JavaScript is loading properly

### Typing animation is too slow/fast
- Adjust `typingSpeed` variable in `script.js` (line ~106)
- Lower values = faster typing
- Recommended range: 30-80ms

### Words overlap in word animation
- Check CSS for `.hero-title-word` display property
- Ensure proper spacing between words in the HTML

## 📝 Code Files

The animation system spans three files:

1. **index.html** (Lines 42-51)
   - Hero section structure
   - Title line elements
   - Subtitle text

2. **styles.css** (Lines ~360-437)
   - Animation keyframes
   - Mode-specific CSS
   - Responsive adjustments
   - Reduced motion queries

3. **script.js** (Lines 1-188)
   - Configuration constant
   - Animation initialization
   - Mode switching logic
   - Animation functions

## 💡 Tips & Best Practices

1. **Keep it Simple**: The default slide animation is professional and works well for most cases

2. **Match Your Brand**: 
   - Use typing for tech/digital brands
   - Use slide for corporate/professional
   - Use word-by-word for emphasis/impact

3. **Test Performance**: Always test on slower devices to ensure smooth animations

4. **Consider Context**: Some animations (like typing) take longer - ensure users don't have to wait too long before accessing content

5. **Maintain Consistency**: If you add more pages, consider using the same animation style across the site

## 🚀 Future Enhancements

Potential additions to the animation system:

- Split text effect with letters spreading out
- Gradient wipe animation
- 3D flip/rotate transitions
- Blur-to-focus effect
- Color transition animations
- Sound effects (optional)
- Animation replay on scroll into view

---

**Created for M-Crown Nigeria LTD**  
Last Updated: January 21, 2026
