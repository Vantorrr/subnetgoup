# 🚀 Deployment Guide - SubNet Group Website

## Quick Start (Local Development)

### Option 1: Python HTTP Server (Simplest)
```bash
# Navigate to project directory
cd /path/to/SubnetGroup

# Start server (Python 3)
python3 -m http.server 8000

# Open browser
# Visit: http://localhost:8000
```

### Option 2: Node.js with Live Reload
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit: http://localhost:3000
```

### Option 3: PHP Built-in Server
```bash
php -S localhost:8000
```

## 📱 Mobile Testing

Test on mobile devices using your local IP:
```bash
# Find your IP address
ipconfig getifaddr en0  # macOS
ip route get 1 | awk '{print $7}' # Linux

# Access from mobile
# Visit: http://YOUR_IP:8000
```

## 🌐 Production Deployment

### 1. GitHub Pages (Free)
```bash
# Create GitHub repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/subnet-website.git
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

**Result**: `https://yourusername.github.io/subnet-website`

### 2. Netlify (Recommended)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Custom Domain** (Optional)
   - Add custom domain in Netlify dashboard
   - Update DNS records with your domain provider

**Result**: `https://subnet-group.netlify.app`

### 3. Vercel (Alternative)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

**Result**: `https://subnet-website.vercel.app`

### 4. Traditional Web Hosting

1. **Build for Production**
```bash
npm run build
```

2. **Upload Files**
   - Upload contents of `dist/` folder to your web server
   - Ensure `index.html` is in the root directory

3. **Configure Web Server**
   - Enable gzip compression
   - Set cache headers for static assets
   - Ensure HTTPS is enabled

## 🔧 Configuration

### Update Contact Information

1. **Phone Numbers**
   - Update in `index.html`: Search for `+972-507-123-123`
   - Update in `services/network-solutions.html`: Same number
   - Update WhatsApp links: `https://api.whatsapp.com/send?phone=972507123123`

2. **Email Addresses**
   - Update in `index.html`: Search for `Sub@index.com`
   - Update in `README.md` and other documentation

3. **Company Name**
   - Already set to "SubNet Group" throughout

### Add Your Images

1. **Required Images** (see `images/README.md`)
   - Company logo: `images/logo.png`
   - About section: `images/about-image.jpg`
   - Service hero: `images/networking-hero.jpg`
   - Project thumbnails: `images/project-*-thumb.jpg`
   - Partner logos: `images/partner-logo-*.png`

2. **Stock Photo Sources**
   - Unsplash.com (free)
   - Pexels.com (free)
   - Pixabay.com (free)

### Language Configuration

The site supports English and Hebrew (with RTL support). To add more languages:

1. **Update `script.js`**
```javascript
const translations = {
  en: { /* existing */ },
  he: { /* existing Hebrew with RTL */ },
  fr: { /* add French */ },
  de: { /* add German */ }
};
```

2. **Add Language Button**
```html
<button class="lang-btn" data-lang="fr">FR</button>
```

For RTL languages like Arabic:
```html
<button class="lang-btn" data-lang="ar">عر</button>
```

## 📊 SEO Setup

### 1. Google Search Console
```bash
# Verify ownership using HTML file method
# Download verification file from Google Search Console
# Upload to root directory

# Submit sitemap
# URL: https://yoursite.com/sitemap.xml
```

### 2. Google Analytics
Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Meta Tags Update
Update in each HTML file:
- Title tags with your keywords
- Meta descriptions (150-160 characters)
- Keywords meta tags

## 🔒 Security & Performance

### SSL Certificate
- **Free SSL**: Cloudflare, Let's Encrypt
- **Paid SSL**: Your hosting provider

### Content Security Policy
Add to your web server or meta tag:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com;">
```

### Performance Optimization
```bash
# Optimize images
npm run optimize-images

# Minify CSS/JS
npm run build

# Enable gzip on server
# Enable browser caching
# Use CDN for assets
```

## 📱 WhatsApp Business Integration

### Set Up WhatsApp Business
1. **Create WhatsApp Business Account**
2. **Get Business Phone Number**
3. **Update Links in Code**
```html
<!-- Update this number in all files -->
https://api.whatsapp.com/send?phone=YOURNUMBER&text=Hello!
```

### WhatsApp Widget (Advanced)
Consider using WhatsApp Business API for:
- Automated responses
- Business hours
- Multiple agents
- Chat analytics

## 🔍 Testing Checklist

### Before Going Live
- [ ] All images loaded correctly
- [ ] Contact form working
- [ ] WhatsApp links functional
- [ ] Mobile responsive design
- [ ] Language switcher working
- [ ] All internal links functional
- [ ] Page load speed < 3 seconds
- [ ] SSL certificate installed
- [ ] Google Analytics tracking

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing
```bash
# Lighthouse audit
npm run lighthouse

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 90+
# SEO: 95+
```

## 📞 Support

### Technical Issues
- 📧 Developer support: your-email@domain.com
- 📱 WhatsApp: [Your WhatsApp number]

### Hosting Issues
- Contact your hosting provider
- Check server status
- Review error logs

### Domain Issues
- Contact domain registrar
- Check DNS settings
- Verify nameservers

---

**🎉 Your SubNet Group website is ready to go live!**

Visit your site and test all functionality before announcing to clients. 