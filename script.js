// Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About us",
            services: "Services",
            partners: "Our Partners",
            contact: "Contact us"
        },
        hero: {
            networks: "Networks.",
            communications: "Communications.",
            security: "Security.",
            subtitle: "Technological solutions for private and corporate clients.",
            experience: "Experience",
            products: "Products",
            projects: "Projects Done",
            consultation: "Get Consultation"
        },
        services: {
            title: "Our Services",
            networking: {
                title: "Internet & Networking",
                description: "WiFi setup, cable installation, and router configuration"
            },
            security: {
                title: "Networking & Cybersecurity",
                description: "Professional network infrastructure and cybersecurity solutions"
            },
            monitoring: {
                title: "Access Control",
                description: "Smart locks, card readers, and mobile app management"
            },
            support: {
                title: "Maintenance & Support",
                description: "System updates, repairs, and ongoing technical support"
            }
        },
        about: {
            title: "About Us",
            description: "SubNet Group is a leading technology company specializing in comprehensive IT solutions. We provide cutting-edge network infrastructure, robust security systems, and reliable communication solutions for businesses of all sizes.",
            feature1: "Professional Team",
            feature2: "24/7 Support",
            feature3: "Proven Results",
            why_choose: "Why Choose Us"
        },
        process: {
            title: "Our Working Process",
            subtitle: "Professional approach to every project with guaranteed results",
            discussion: "Discussion",
            discussion_desc: "Understanding your needs and requirements",
            installation: "Installation",
            installation_desc: "Professional implementation and setup",
            maintenance: "Maintenance",
            maintenance_desc: "Ongoing support and optimization"
        },
        partners: {
            title: "Our Partners",
            subtitle: "We work with industry-leading technology partners to deliver comprehensive solutions"
        },
        contact: {
            title: "Contact Us",
            phone: "Phone",
            email: "E-Mail",
            name: "Name",
            email_address: "Email address",
            message: "Message",
            send_message: "Send Message"
        },
        footer: {
            description: "Installation, configuration and maintenance of access control systems, computer networks and other modern systems",
            navigation: "Navigation"
        },
        common: {
            learn_more: "Learn More"
        },

        certifications: {
            title: "Certifications & Achievements",
            iso: "Information Security Management",
            cissp: "Certified Information Systems Security Professional",
            ccnp: "Cisco Certified Network Professional",
            microsoft: "Gold Competency Status"
        },
        stats: {
            projects: "Projects Completed",
            clients: "Happy Clients",
            devices: "Devices Managed",
            uptime: "% Uptime Guaranteed"
        }
    },
    he: {
        nav: {
            home: "בית",
            about: "אודותינו",
            services: "שירותים",
            partners: "השותפים שלנו",
            contact: "צור קשר"
        },
        hero: {
            networks: "רשתות.",
            communications: "תקשורת.",
            security: "אבטחה.",
            subtitle: "פתרונות טכנולוגיים ללקוחות פרטיים ועסקיים.",
            experience: "ניסיון",
            products: "מוצרים",
            projects: "פרויקטים שהושלמו",
            consultation: "קבל יעוץ"
        },
        services: {
            title: "השירותים שלנו",
            networking: {
                title: "אינטרנט ורשתות",
                description: "הקמת WiFi, התקנת כבלים והגדרת נתבים"
            },
            security: {
                title: "רשתות ואבטחת מידע",
                description: "פתרונות תשתית רשת ואבטחת מידע מקצועיים לעסקים וארגונים"
            },
            monitoring: {
                title: "בקרת גישה",
                description: "מנעולים חכמים, קוראי כרטיסים וניהול באפליקציה"
            },
            support: {
                title: "תחזוקה ותמיכה",
                description: "עדכוני מערכת, תיקונים ותמיכה טכנית שוטפת"
            }
        },
        about: {
            title: "אודותינו",
            description: "SubNet Group היא חברת טכנולוגיה מובילה המתמחה בפתרונות IT מקיפים. אנו מספקים תשתית רשת חדישה, מערכות אבטחה חזקות ופתרונות תקשורת אמינים לעסקים בכל הגדלים.",
            feature1: "צוות מקצועי",
            feature2: "תמיכה 24/7",
            feature3: "תוצאות מוכחות",
            why_choose: "למה לבחור בנו"
        },
        process: {
            title: "תהליך העבודה שלנו",
            subtitle: "גישה מקצועית לכל פרויקט עם תוצאות מובטחות",
            discussion: "דיון",
            discussion_desc: "הבנת הצרכים והדרישות שלכם",
            installation: "התקנה",
            installation_desc: "יישום והגדרה מקצועית",
            maintenance: "תחזוקה",
            maintenance_desc: "תמיכה מתמשכת ואופטימיזציה"
        },
        partners: {
            title: "השותפים שלנו",
            subtitle: "אנו עובדים עם שותפי טכנולוגיה מובילים בתעשייה כדי לספק פתרונות מקיפים"
        },
        contact: {
            title: "צור קשר",
            phone: "טלפון",
            email: "אימייל",
            name: "שם",
            email_address: "כתובת אימייל",
            message: "הודעה",
            send_message: "שלח הודעה"
        },
        footer: {
            description: "התקנה, תצורה ותחזוקה של מערכות בקרת גישה, רשתות מחשבים ומערכות מודרניות אחרות",
            navigation: "ניווט"
        },
        common: {
            learn_more: "למד עוד"
        },

        certifications: {
            title: "הסמכות והישגים",
            iso: "ניהול אבטחת מידע",
            cissp: "מומחה מוסמך לאבטחת מערכות מידע",
            ccnp: "מומחה רשתות מוסמך סיסקו",
            microsoft: "סטטוס יכולת זהב"
        },
        stats: {
            projects: "פרויקטים שהושלמו",
            clients: "לקוחות מרוצים",
            devices: "מכשירים מנוהלים",
            uptime: "% זמינות מובטחת"
        }
    }
};

// Global variables
let currentLanguage = 'en';

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const langButtons = document.querySelectorAll('.lang-btn');
const serviceCards = document.querySelectorAll('.service-card');

// Loading Screen Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
        }, 500);
    }, 3000); // Show loading for 3 seconds
});

// Mobile Menu Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Language Switcher
function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translated elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update HTML lang and direction attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.className = lang === 'he' ? 'rtl-mode' : 'ltr-mode';
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Initialize language buttons
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientPosition().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 20, 25, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(15, 20, 25, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .step, .partner-logo');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Service cards no longer use modals - cleaned up

// Modals removed - cleaned up
function openServiceModal(service) {
    // Function disabled - no longer needed
    return;
    // Create modal HTML
    const modalHTML = `
        <div class="service-modal" id="serviceModal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>${getServiceTitle(service)}</h2>
                </div>
                <div class="modal-body">
                    ${getServiceContent(service)}
                </div>
                <div class="modal-footer">
                    <button class="contact-btn" onclick="scrollToContact()">Contact Us</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles if not exists
    if (!document.getElementById('modal-styles')) {
        const modalStyles = `
            <style id="modal-styles">
                .service-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeInModal 0.3s ease;
                }
                
                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    position: relative;
                    animation: slideInModal 0.3s ease;
                }
                
                .close-modal {
                    position: absolute;
                    top: 1rem;
                    right: 1.5rem;
                    font-size: 2rem;
                    cursor: pointer;
                    color: #666;
                    transition: color 0.3s ease;
                }
                
                .close-modal:hover {
                    color: #00d4ff;
                }
                
                .modal-header h2 {
                    color: #1a2332;
                    margin-bottom: 1rem;
                }
                
                .modal-body {
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }
                
                .modal-footer {
                    text-align: center;
                }
                
                .contact-btn {
                    background: linear-gradient(45deg, #00d4ff, #0099cc);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .contact-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
                }
                
                @keyframes fadeInModal {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideInModal {
                    from { transform: translateY(-50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', modalStyles);
    }
    
    // Close modal functionality
    const modal = document.getElementById('serviceModal');
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    // Function disabled - no longer needed
    return;
}

function getServiceTitle(service) {
    const titles = {
        networking: 'Internet & Networking',
        security: 'Video Surveillance',
        monitoring: 'Access Control',
        support: 'Maintenance & Support'
    };
    return titles[service] || 'Our Service';
}

function getServiceContent(service) {
    const content = {
        networking: `
            <h3>Internet & Networking Solutions</h3>
            <p>Professional internet setup and networking services for homes and businesses:</p>
            <ul>
                <li>WiFi router installation and configuration</li>
                <li>Ethernet cable installation and management</li>
                <li>Network troubleshooting and optimization</li>
                <li>Wireless coverage planning and setup</li>
                <li>Internet provider configuration</li>
                <li>Home and office network setup</li>
            </ul>
            <p>Get fast, reliable internet connectivity throughout your space with our expert installation.</p>
        `,
        security: `
            <h3>Video Surveillance Systems</h3>
            <p>Secure your property with professional camera systems and monitoring:</p>
            <ul>
                <li>HD security camera installation</li>
                <li>Network video recording (NVR) setup</li>
                <li>Remote monitoring via mobile app</li>
                <li>Motion detection and smart alerts</li>
                <li>Night vision and weatherproof cameras</li>
                <li>Cloud storage and local backup</li>
            </ul>
            <p>Monitor your property 24/7 with high-definition cameras and intelligent recording systems.</p>
        `,
        monitoring: `
            <h3>Access Control Systems</h3>
            <p>Control and monitor access to your property with smart security solutions:</p>
            <ul>
                <li>Electronic door locks and keypads</li>
                <li>Card reader and key fob systems</li>
                <li>Mobile app access management</li>
                <li>Biometric access control (fingerprint, facial)</li>
                <li>Visitor management and temporary access</li>
                <li>Real-time access logging and reporting</li>
            </ul>
            <p>Grant or revoke access remotely and track all entry activity with our smart access systems.</p>
        `,
        support: `
            <h3>Maintenance & Support Services</h3>
            <p>Keep your technology running smoothly with our comprehensive support:</p>
            <ul>
                <li>Regular system maintenance and updates</li>
                <li>Emergency repair services</li>
                <li>Hardware troubleshooting and replacement</li>
                <li>Software updates and security patches</li>
                <li>Performance optimization and tuning</li>
                <li>24/7 technical support assistance</li>
            </ul>
            <p>Ensure optimal performance and minimize downtime with our proactive maintenance services.</p>
        `
    };
    return content[service] || '<p>Service information will be available soon.</p>';
}

function scrollToContact() {
    // Simplified - just scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show success message
        showNotification('Message sent successfully! We will contact you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', { name, email, message });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add notification styles if not exists
    if (!document.getElementById('notification-styles')) {
        const notificationStyles = `
            <style id="notification-styles">
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    max-width: 400px;
                    animation: slideInNotification 0.3s ease;
                }
                
                .notification-success {
                    border-left: 4px solid #10b981;
                    color: #10b981;
                }
                
                .notification-error {
                    border-left: 4px solid #ef4444;
                    color: #ef4444;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                }
                
                @keyframes slideInNotification {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', notificationStyles);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Close notification
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.circuit-pattern, .floating-particles');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target') || counter.textContent.replace('+', ''));
            const count = parseInt(counter.textContent.replace('+', ''));
            const increment = target / speed;
            
            if (count < target) {
                counter.textContent = Math.ceil(count + increment) + (counter.textContent.includes('+') ? '+' : '');
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        // Set data-target if not exists
        if (!counter.getAttribute('data-target')) {
            counter.setAttribute('data-target', counter.textContent.replace('+', ''));
            counter.textContent = '0' + (counter.textContent.includes('+') ? '+' : '');
        }
        
        updateCount();
    });
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    heroObserver.observe(heroSection);
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateLanguage(currentLanguage);
    
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    console.log('SubNet Group website initialized successfully!');
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add floating animation to WhatsApp button
const whatsappButton = document.querySelector('.whatsapp-float a');
if (whatsappButton) {
    setInterval(() => {
        whatsappButton.style.animation = 'none';
        setTimeout(() => {
            whatsappButton.style.animation = 'bounce 2s infinite';
        }, 10);
    }, 10000); // Re-animate every 10 seconds
}

// Animated counter for statistics
function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target === 99.9) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, duration / steps);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(statNumber => {
                const target = parseFloat(statNumber.dataset.number);
                animateCounter(statNumber, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    // ... existing DOMContentLoaded code ...
    
    // Add modal HTML to body
    const modalHTML = `
        <div id="projectModal" class="modal">
            <div class="modal-content" id="modalContent">
                <!-- Content will be dynamically loaded -->
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Observe stats section
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Enhanced smooth scrolling for new sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Enhanced scroll effects
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('visible');
            }
        });
    });
});

// ANCHOR LINK NAVIGATION FIX
class AnchorNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.handleHashOnLoad();
        this.smoothScrollToAnchors();
    }

    handleHashOnLoad() {
        // Проверяем есть ли хеш в URL при загрузке страницы
        window.addEventListener('load', () => {
            const hash = window.location.hash;
            if (hash) {
                // Небольшая задержка чтобы страница полностью загрузилась
                setTimeout(() => {
                    this.scrollToElement(hash);
                }, 300);
            }
        });

        // Также обрабатываем если пользователь пришел по прямой ссылке
        document.addEventListener('DOMContentLoaded', () => {
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    this.scrollToElement(hash);
                }, 500);
            }
        });
    }

    scrollToElement(hash) {
        const element = document.querySelector(hash);
        if (element) {
            // Учитываем высоту хедера
            const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Обновляем URL без перезагрузки
            history.replaceState(null, null, hash);
        }
    }

    smoothScrollToAnchors() {
        // Обрабатываем клики по якорным ссылкам на текущей странице
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const hash = link.getAttribute('href');
                this.scrollToElement(hash);
            }
        });
    }
}

// NAVIGATION IMPROVEMENTS
class NavigationEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.highlightActiveSection();
        this.improveNavigationUX();
    }

    highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Убираем активный класс со всех ссылок
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Добавляем активный класс к текущей ссылке
                    const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            rootMargin: '-100px 0px -100px 0px',
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    improveNavigationUX() {
        // Добавляем эффекты для логотипа
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', (e) => {
                // Если мы уже на главной странице, прокручиваем вверх
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Добавляем прелоадер эффект при переходах между страницами
        const externalLinks = document.querySelectorAll('a[href^="../"], a[href^="services/"], a[href="index.html"]');
        externalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Добавляем эффект загрузки
                document.body.style.opacity = '0.8';
                document.body.style.transition = 'opacity 0.3s ease';
            });
        });
    }
}

// Инициализируем улучшенную навигацию
document.addEventListener('DOMContentLoaded', () => {
    new AnchorNavigation();
    new NavigationEnhancer();
});

// PREMIUM SCROLL ANIMATIONS SYSTEM
class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.init();
    }

    init() {
        this.addAnimationClasses();
        this.observeElements();
        this.addStaggeredAnimations();
    }

    addAnimationClasses() {
        // Add animation classes to elements
        const animations = [
            { selector: '.services h2, .partners h2, .about h2, .contact h2, .certifications h2', class: 'fade-in-up', delay: 0 },
            { selector: '.services .section-subtitle, .partners .section-subtitle, .about .section-subtitle', class: 'fade-in-up', delay: 0.2 },
            { selector: '.service-card', class: 'slide-in-up', delay: 'staggered' },
            { selector: '.partner-card', class: 'scale-in', delay: 'staggered' },
            { selector: '.contact-info, .contact-form', class: 'slide-in-up', delay: 'staggered' },
            { selector: '.contact-item', class: 'slide-in-left', delay: 'staggered' },
            { selector: '.social-link', class: 'rotate-in', delay: 'staggered' },
            { selector: '.certification-card', class: 'flip-in', delay: 'staggered' },
            { selector: '.hero-subtitle, .hero-description', class: 'fade-in-up', delay: 0.3 }
        ];

        animations.forEach(anim => {
            const elements = document.querySelectorAll(anim.selector);
            elements.forEach((el, index) => {
                el.classList.add(anim.class);
                if (anim.delay === 'staggered') {
                    el.style.animationDelay = `${index * 0.1}s`;
                } else {
                    el.style.animationDelay = `${anim.delay}s`;
                }
            });
        });
    }

    observeElements() {
        const options = {
            root: null,
            rootMargin: '-5% 0px -5% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    this.animateElement(entry.target);
                }
            });
        }, options);

        // Observe all animation elements
        const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-up, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .flip-in');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    animateElement(element) {
        element.classList.add('animated');
        
        // Add shimmer effect to titles
        if (element.tagName === 'H2' && element.querySelector('::after')) {
            setTimeout(() => {
                element.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    addStaggeredAnimations() {
        // Add enhanced staggered animations for card grids
        const cardContainers = [
            { selector: '.services-grid', childSelector: '.service-card' },
            { selector: '.partners-grid', childSelector: '.partner-card' },
            { selector: '.certifications-grid', childSelector: '.certification-card' }
        ];

        cardContainers.forEach(container => {
            const parent = document.querySelector(container.selector);
            if (parent) {
                const cards = parent.querySelectorAll(container.childSelector);
                cards.forEach((card, index) => {
                    const delay = index * 0.1 + 0.2;
                    card.style.animationDelay = `${delay}s`;
                });
            }
        });
    }
} 