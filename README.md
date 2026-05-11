# 🇵🇭 Travfil Travel Services - Website

A modern, responsive website for **Travfil Travel Services**, a Philippine-based travel agency specializing in educational tours, group outings, and seamless travel experiences.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Hero Section** - Eye-catching background with beautiful imagery and scrolling effect
- **Orange Circle Button** - "Why Choose Us" clickable button with dropdown services list
- **Service Showcase** - Display of services with hover effects
- **Company Profile** - Tabbed sections for About Us, Staff, Mission & Vision, Testimonials, and Awards
- **Package Listings** - Featured tour packages with detailed information
- **Contact Form** - Client inquiry form with validation
- **Professional UI** - Modern design with smooth animations
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant structure

## 📁 Project Structure

```
travfil-website/
├── index.html              # Main HTML file
├── style.css               # Stylesheet with responsive design
├── script.js               # JavaScript functionality
├── README.md               # This file
└── assets/
    ├── Main_BG.png         # Hero section background image
    └── Travfil_Logo.jpg    # Company logo
```

## 🎨 Design Highlights

**Brand Colors:**
- **Navy Blue:** `#1B2A5E` (Primary)
- **Orange:** `#F47C20` (Accent)
- **Teal:** `#2E8B7A` (Secondary)

**Typography:**
- **Headings:** Montserrat (Bold, 700-800)
- **Body:** Open Sans (Regular, 400-600)

**Responsive Breakpoints:**
- **Desktop:** 1100px max-width
- **Tablet:** 768px
- **Mobile:** 480px

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/travfil-website.git
cd travfil-website
```

### 2. Open in Browser
- Simply open `index.html` in your web browser
- Or use a local server (recommended):
  ```bash
  # Using Python 3
  python -m http.server 8000
  
  # Using Node.js (http-server)
  npx http-server
  ```

### 3. View at
Navigate to: `http://localhost:8000`

## 📋 Sections

### Navigation
- Sticky navigation bar with logo and menu links
- Hamburger menu for mobile devices
- Smooth scroll functionality

### Hero Section
- Full-width background image with scrolling effect
- Compelling headline and call-to-action buttons
- **Orange Circle Button** with "Why Choose Us" dropdown
  - Click to toggle services list
  - Services include:
    - DOT Accredited Travel Agency
    - DOT Accredited Tourist Bus
    - Bus Transport
    - Airlines Ticketing
    - Fieldtrips
    - Company Outing
    - Team Building
    - Hotel Bookings
    - Bisita Iglesia
    - And More

### Company Profile
- 5 interactive tabs:
  - About Us with statistics
  - Admin/Staff directory
  - Mission & Vision
  - Client testimonials
  - Awards & recognition

### Services
- 6 service cards with icons
- Hover animations
- Service descriptions

### Why Choose Us
- 4 key benefits with icons
- Professional cards with descriptions

### Featured Packages
- 3 tour package cards
- Package details with highlights
- Quick booking buttons

### Contact Section
- Contact information
- Inquiry form with validation
- Multiple contact methods

### Footer
- Quick links
- Service links
- Copyright information

## 📱 Responsive Design

The website is fully responsive and adapts to:
- **Desktop** (1100px+)
- **Tablet** (768px - 1099px)
- **Mobile** (480px - 767px)
- **Small Mobile** (< 480px)

## 🔧 Customization

### Update Contact Information
Edit the Contact Us section in `index.html` (lines ~431-450):
```html
<span>+63 9XX XXX XXXX</span>
<span>info@travfil.com</span>
```

### Change Brand Colors
Update CSS variables in `style.css` (lines 16-35):
```css
:root {
  --navy:         #1B2A5E;
  --orange:       #F47C20;
  --teal:         #2E8B7A;
}
```

### Modify Services List
Edit the dropdown in `index.html` (lines 62-74):
```html
<div class="why-choose-dropdown" id="whyChooseDropdown">
  <ul class="dropdown-list">
    <li>• Your Service Here</li>
  </ul>
</div>
```

### Update Package Information
Edit package cards in the "Featured Tour Packages" section in `index.html`.

### Update Hero Background
Replace `assets/Main_BG.png` with your desired image.

### Update Logo
Replace `assets/Travfil_Logo.jpg` with your logo.

## 💻 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Features Implemented

- ✅ Sticky navigation
- ✅ Smooth scrolling
- ✅ Tab switching
- ✅ Form validation
- ✅ Mobile-first responsive design
- ✅ Hamburger menu
- ✅ Hover animations
- ✅ Professional typography
- ✅ Accessibility features
- ✅ SEO optimization
- ✅ Orange circle button with dropdown
- ✅ Scrolling background image

## 🔄 Form Validation

The contact form includes:
- Required field validation
- Email format validation
- Success/error messages
- Auto-hide notifications after 5 seconds

## 📞 Contact Form Integration

Currently, the form shows a success message. To integrate with a backend:

1. Update the form submission in `script.js`
2. Configure your backend endpoint
3. Use services like Formspree, GetForm, or EmailJS

## 🌐 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push the files to the `main` branch
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch
6. Your site will be live at `https://yourusername.github.io/travfil-website`

### Deploy to Other Platforms

- **Netlify:** Drag and drop the folder
- **Vercel:** Import GitHub repository
- **Traditional Hosting:** Upload via FTP

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to report bugs, suggest features, or submit pull requests.

## 📧 Support

For questions or support:
- Email: info@travfil.com
- Phone: +63 9XX XXX XXXX
- Facebook: facebook.com/TravfilTravelServices

---

**Made with ❤️ for Travfil Travel Services**
