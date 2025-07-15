# SubNet Group - Professional Website

🌐 Modern, responsive website for SubNet Group - Networks, Communications, Security solutions.

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX Design** - Clean, professional design with beautiful animations
- **Stunning Loading Screen** - Animated network visualization with progress bar
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Dark Theme** - Professional dark color scheme with blue accents
- **Smooth Animations** - CSS3 animations and transitions throughout

### 🌍 Multi-language Support
- **English** (Primary)
- **Hebrew** (Secondary)
- Easy language switching with top-right toggle
- Complete translation system for all content
- RTL (Right-to-Left) support for Hebrew

### 📱 Mobile Optimized
- Hamburger menu for mobile navigation
- Touch-friendly interface
- Fast loading on mobile networks
- Progressive Web App features

### 🚀 Performance
- Optimized images and assets
- Lazy loading for images
- Minified CSS and JavaScript
- Fast loading times
- SEO optimized

### 💬 Communication Features
- **WhatsApp Integration** - Floating chat button
- **Contact Form** - Professional contact form with validation
- **Social Media Links** - Facebook, Instagram, WhatsApp
- **Phone/Email Links** - Direct contact options

### 🏢 Business Sections
- **Hero Section** - Compelling introduction with statistics
- **Services** - Detailed service offerings with modals
- **About Us** - Company information and features
- **Process** - Step-by-step work methodology
- **Partners** - Trusted company partnerships
- **Project Gallery** - Showcase of completed work
- **Contact** - Multiple ways to get in touch

## 📁 Project Structure

```
SubnetGroup/
├── index.html              # Main homepage
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── package.json            # Project dependencies
├── README.md               # Project documentation
  ├── services/               # Service detail pages
    │   ├── network-solutions.html     # Network solutions page
  │   ├── cybersecurity.html        # Cybersecurity page
  │   ├── system-monitoring.html     # System monitoring page
  │   ├── technical-support.html     # Technical support page
│   ├── service-page.css    # Service page styles
│   └── service-page.js     # Service page JavaScript
├── images/                 # Image assets
│   ├── logo.png
│   ├── about-image.jpg
│   ├── networking-hero.jpg
│   ├── project-*.jpg       # Project images
│   └── partner-logo-*.png  # Partner logos
└── assets/                 # Additional assets
    ├── icons/
    └── fonts/
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Modern web browser

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/subnetgroup/website.git
cd website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Optimize images
npm run optimize-images

# Minify CSS
npm run minify-css

# Minify JavaScript  
npm run minify-js

# Deploy to GitHub Pages
npm run deploy

# Run Lighthouse audit
npm run lighthouse
```

## 🎨 Customization

### Colors
Primary colors are defined in `styles.css`:
```css
:root {
  --primary-blue: #00d4ff;
  --dark-blue: #0099cc;
  --dark-bg: #0f1419;
  --secondary-bg: #1a2332;
}
```

### Logo & Branding
- Replace `images/logo.png` with your logo
- Update company name in HTML files
- Modify contact information in all files

### Content Translation
Add new languages in `script.js`:
```javascript
const translations = {
  en: { /* English translations */ },
  he: { /* Hebrew translations */ },
  fr: { /* Add French translations */ }
};
```

Note: Hebrew includes RTL (Right-to-Left) support. The website automatically adjusts layout and text direction when Hebrew is selected.

## 📧 Contact Configuration

### WhatsApp Integration
Update the phone number in:
- `index.html` (WhatsApp float button)
- `services/*.html` (Service page WhatsApp buttons)

```html
<!-- Update this number -->
<a href="https://api.whatsapp.com/send?phone=972507123123&text=Hello!">
```

### Contact Form
The contact form currently shows success messages. To connect to a backend:

1. **Email Service (Recommended)**
   - Use EmailJS, Formspree, or Netlify Forms
   - Update form action in `script.js`

2. **Custom Backend**
   - Create API endpoint for form submission
   - Update `contactForm` event listener in `script.js`

### Email & Phone
Update contact information in:
- `index.html` (Contact section)
- `services/*.html` (Service pages)

## 🔧 SEO Optimization

### Meta Tags
Each page includes:
- Title tags with keywords
- Meta descriptions
- Keywords meta tags
- Open Graph tags for social sharing

### Google Search Console
1. Add your website to Google Search Console
2. Submit sitemap.xml (create one)
3. Monitor search performance

### Analytics
Add Google Analytics:
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Mobile Performance

### Lighthouse Scores
Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Optimization Tips
1. Compress images (use WebP format)
2. Minimize HTTP requests
3. Enable gzip compression
4. Use CDN for assets
5. Implement caching headers

## 🌐 Deployment

### GitHub Pages (Free)
```bash
npm run deploy
```

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import GitHub repository
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server

## 🛠️ Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Monitoring

### Tools
- Google PageSpeed Insights
- GTmetrix
- Pingdom
- Lighthouse (built-in)

### Key Metrics
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

## 🔒 Security

### HTTPS
Always serve over HTTPS for:
- SEO benefits
- Security
- Modern browser features
- WhatsApp integration

### Content Security Policy
Add CSP headers to prevent XSS attacks:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com;">
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- 📧 Email: sub@index.com
- 📱 Phone: +972-507-123-123
- 💬 WhatsApp: [Click to chat](https://api.whatsapp.com/send?phone=972507123123)

## 🚀 Future Enhancements

### Planned Features
- [ ] Blog section with CMS
- [ ] Client testimonials carousel
- [ ] Live chat integration
- [ ] Service booking system
- [ ] Case studies section
- [ ] Team member profiles
- [ ] Newsletter subscription
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA)
- [ ] Voice search integration

### Additional Service Pages
- [ ] `services/security.html` - Cybersecurity page
- [ ] `services/monitoring.html` - System monitoring page  
- [ ] `services/support.html` - Technical support page

---

**Made with ❤️ for SubNet Group - Networks. Communications. Security.** 