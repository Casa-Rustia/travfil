/* ── CIRCLE BUTTONS NOW USE SMOOTH SCROLL (handled by existing scroll code) ──

// ── TAB FUNCTIONALITY ──
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', function() {
    const tabName = this.getAttribute('data-tab');
    
    // Remove active class from all buttons and contents
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    this.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
  });
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Close menu when link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
}

// ── CONTACT FORM ──
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message')
    };
    
    // Validate form
    if (!data.name || !data.email || !data.service || !data.message) {
      showFormMessage('Please fill in all required fields.', 'error');
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show success message (in real app, send to backend)
    showFormMessage('Thank you for your inquiry! We will contact you shortly.', 'success');
    
    // Reset form
    this.reset();
    
    // Log data (in production, send to backend)
    console.log('Form submitted:', data);
  });
}

function showFormMessage(message, type) {
  const formMsg = document.getElementById('form-msg');
  if (formMsg) {
    formMsg.textContent = message;
    formMsg.className = `form-msg ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(function() {
      formMsg.className = 'form-msg';
    }, 5000);
  }
}

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offset = 80; // Navbar height
      const top = target.offsetTop - offset;
      
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  });
});

// ── NAVBAR BACKGROUND ON SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(27, 42, 94, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(27, 42, 94, 0.07)';
  }
});

// ── INITIALIZE ──
console.log('Travfil Travel Services website loaded successfully!');
