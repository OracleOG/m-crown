# M-Crown Nigeria LTD - Corporate Website

A modern, responsive corporate website for M-Crown Nigeria LTD, an experiential marketing agency specializing in brand activations, consumer promotions, and strategic events.

## 🏆 Features

- **Modern Design**: Clean, premium corporate aesthetic with gold and navy color scheme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle scroll animations and hover effects
- **Fast Performance**: Optimized vanilla JavaScript (no framework dependencies)
- **Accessible**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Semantic HTML with proper meta tags

## 📁 Project Structure

```
m-crown/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── assets/
│   └── images/         # Image assets (optional)
└── README.md           # This file
```

## 🎨 Branding

- **Primary Color**: Dark Navy (#0a1128)
- **Accent Color**: Gold (#d4af37)
- **Typography**: Poppins (Google Fonts)
- **Logo**: Crown icon with "M-Crown" text

## 🚀 Quick Start

### Option 1: Open Locally

1. Simply open `index.html` in your web browser
2. No build process or dependencies required!

### Option 2: Use a Local Server (Recommended)

Using Python:
```bash
python -m http.server 8000
```

Using Node.js (if you have it):
```bash
npx serve
```

Then visit `http://localhost:8000` in your browser.

## 📄 Page Sections

1. **Header/Navigation**: Sticky navigation with smooth scrolling
2. **Hero Section**: Full-width hero with compelling headline and CTAs
3. **Services**: Grid layout showcasing 5 main service categories
4. **Why M-Crown**: Feature highlights with icons
5. **Bank & Fintech**: Specialized section for financial institutions
6. **Partners**: Logo grid of trusted partners
7. **Contact**: Contact form and company information
8. **Footer**: Quick links and company info

## 🎯 Customization Guide

### Adding Images

1. Add your images to the `assets/images/` folder
2. For the hero background, update the CSS in `styles.css`:
   ```css
   .hero {
       background-image: 
           linear-gradient(...),
           url('assets/images/hero-bg.jpg');
   }
   ```

3. For partner logos, update the HTML in `index.html`:
   ```html
   <div class="partner-logo">
       <img src="assets/images/partner-logo.png" alt="Partner Name">
   </div>
   ```

### Updating Colors

All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-navy: #0a1128;
    --gold: #d4af37;
    /* ... */
}
```

### Adding Video Background (Optional)

To add a video background to the hero section, replace the `.hero` CSS with:
```html
<section class="hero">
    <video autoplay muted loop class="hero-video">
        <source src="assets/videos/hero-video.mp4" type="video/mp4">
    </video>
    <!-- ... rest of hero content -->
</section>
```

And add this CSS:
```css
.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ✨ Interactive Features

- Smooth scrolling navigation
- Active link highlighting based on scroll position
- Mobile hamburger menu
- Scroll-triggered animations for service cards
- Hover effects on buttons and cards
- Back-to-top button
- Contact form with mailto functionality

## 📧 Contact Form

The contact form currently uses a `mailto:` link to open the user's email client. For production, you may want to integrate with:

- **FormSpree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Custom Backend**: PHP, Node.js, or serverless functions

### Example: Integrating with FormSpree

1. Sign up at https://formspree.io/
2. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🌐 Deployment Options

### 1. GitHub Pages (Free)
```bash
# Create a new repository on GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repository settings
```

### 2. Netlify (Free)
- Drag and drop the project folder to https://app.netlify.com/drop
- Or connect your GitHub repository for automatic deployments

### 3. Vercel (Free)
```bash
npm i -g vercel
vercel
```

### 4. Traditional Web Hosting
- Upload all files via FTP to your web host
- Ensure `index.html` is in the root directory

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Optimization

The website is already optimized with:
- ✅ Minimal dependencies (only Google Fonts and Font Awesome)
- ✅ Efficient CSS animations
- ✅ Lazy loading support (for images)
- ✅ Debounced scroll events
- ✅ Intersection Observer API for animations

### Further Optimizations (Optional)

1. **Self-host fonts**: Download and serve Google Fonts locally
2. **Minify files**: Use tools like `UglifyJS` and `cssnano`
3. **Add service worker**: For offline functionality
4. **Compress images**: Use tools like TinyPNG or ImageOptim

## 📝 Content Updates

All content can be easily updated directly in `index.html`. Key sections:

- **Company info**: Update in the contact section
- **Services**: Modify the service cards in the services section
- **Partners**: Add/remove partner cards in the partners section
- **Hero text**: Update the hero title and subtitle

## 🎨 Font Awesome Icons

The website uses Font Awesome for icons. You can replace any icon by changing the class:

```html
<!-- Example: Change crown to star -->
<i class="fas fa-crown"></i>  →  <i class="fas fa-star"></i>
```

Browse icons at: https://fontawesome.com/icons

## 💡 Tips for Maintenance

1. **Regular Backups**: Keep backups before making major changes
2. **Test Responsiveness**: Always test on multiple devices
3. **Browser Testing**: Check in different browsers after updates
4. **Image Optimization**: Compress images before uploading
5. **Analytics**: Consider adding Google Analytics or similar

## 📞 Support

For questions or support:
- **Email**: mcrownnigerialtd@gmail.com
- **Phone**: +234 706 266 6662

## 📜 License

© 2026 M-Crown Nigeria LTD. All rights reserved.

---

**Built with ❤️ for M-Crown Nigeria LTD**
