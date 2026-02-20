// ============================================
// CUSTOM CURSOR
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const cursorDot  = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (!cursorDot || !cursorRing) return;

    // Start hidden — appear only after first mouse move
    cursorDot.style.opacity  = '0';
    cursorRing.style.opacity = '0';

    let ringX = 0, ringY = 0;
    let dotX  = 0, dotY  = 0;
    let started = false;

    window.addEventListener('mousemove', (e) => {
        dotX = e.clientX;
        dotY = e.clientY;

        // Snap both to cursor on first move so ring doesn't slide from 0,0
        if (!started) {
            ringX = dotX;
            ringY = dotY;
            started = true;
            cursorDot.style.opacity  = '1';
            cursorRing.style.opacity = '1';
        }

        cursorDot.style.transform = `translate(calc(${dotX}px - 50%), calc(${dotY}px - 50%))`;
    });

    function animateRing() {
        ringX += (dotX - ringX) * 0.12;
        ringY += (dotY - ringY) * 0.12;
        cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Scale ring on hoverable elements
    document.querySelectorAll('a, button, .card, .gallery-item, .tour-ticket').forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-hover'));
    });

    // Hide when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity  = '0';
        cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        if (started) {
            cursorDot.style.opacity  = '1';
            cursorRing.style.opacity = '1';
        }
    });
});

// ============================================
// ACTIVE NAV LINK
// ============================================
(function setActiveNav() {
    const currentPage = window.location.pathname.includes('band.html') ? 'band' : 'index';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
})();

// ============================================
// HAMBURGER MENU (mobile)
// ============================================
const hamburger  = document.getElementById('hamburger');
const headerMenu = document.getElementById('header-menu');

if (hamburger && headerMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        headerMenu.classList.toggle('open');
    });
    headerMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            headerMenu.classList.remove('open');
        });
    });
}

// ============================================
// HERO ANIMATIONS (index only)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const heroLines = document.querySelectorAll('.hero-line');
    const heroAnims = document.querySelectorAll('.hero-anim');

    if (!heroLines.length) return;

    heroLines.forEach(el => {
        const delay = parseInt(el.dataset.delay) || 0;
        setTimeout(() => el.classList.add('visible'), delay);
    });

    heroAnims.forEach(el => {
        const delay = parseInt(el.dataset.delay) || 0;
        setTimeout(() => el.classList.add('visible'), delay);
    });
});

// ============================================
// SCROLL-TRIGGERED SECTION REVEALS
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.About, .band-cta, .music-section, .tour-section, .gallery-section, .band-page-title, .members-section, .band').forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
});

// ============================================
// MODAIS
// ============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        startImageSlideshow(modal);
    }
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    stopImageSlideshow(modal);
}

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) closeModal(modal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) closeModal(e.target);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') closeModal(modal);
        });
        closeLightbox();
    }
});

// ============================================
// SLIDESHOW DE IMAGENS NOS MODAIS
// ============================================
const slideshowIntervals = {};

function startImageSlideshow(modal) {
    const images = modal.querySelectorAll('.modal-images img');
    if (images.length < 2) return;
    let currentIndex = 0;
    const id = modal.id;
    slideshowIntervals[id] = setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000);
}

function stopImageSlideshow(modal) {
    const id = modal.id;
    if (slideshowIntervals[id]) {
        clearInterval(slideshowIntervals[id]);
        delete slideshowIntervals[id];
    }
    const images = modal.querySelectorAll('.modal-images img');
    images.forEach((img, i) => img.classList.toggle('active', i === 0));
}

// ============================================
// LIGHTBOX (galeria)
// ============================================
const lightboxImages = [
    { src: 'assets/img/full-band.jpeg',   caption: 'The full band' },
    { src: 'assets/img/bg/trace.jpg',     caption: 'Trace — Singer / Guitar' },
    { src: 'assets/img/bg/od.jpg',        caption: 'OD — Lead Guitar' },
    { src: 'assets/img/bg/ember.jpg',     caption: 'Ember — Drummer' },
    { src: 'assets/img/bg/lyra.jpg',      caption: 'Lyra — Keyboards & Synths' },
    { src: 'assets/img/bg/dusk.jpg',      caption: 'Dusk — Bass Player' },
];

let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    updateLightboxImage();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

function lightboxNav(dir) {
    currentLightboxIndex = (currentLightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img     = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (!img) return;
    const data = lightboxImages[currentLightboxIndex];
    img.style.opacity = '0';
    setTimeout(() => {
        img.src           = data.src;
        img.alt           = data.caption;
        caption.textContent = data.caption;
        img.style.opacity = '1';
    }, 150);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'ArrowRight') lightboxNav(1);
    if (e.key === 'ArrowLeft')  lightboxNav(-1);
});

// ============================================
// COUNTDOWN (música)
// ============================================
function updateCountdown() {
    const release = new Date('2026-07-01T00:00:00');
    const now     = new Date();
    const diff    = release - now;

    if (diff <= 0) {
        ['cd-months','cd-days','cd-hours'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '00';
        });
        return;
    }

    const totalDays  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months     = Math.floor(totalDays / 30);
    const days       = totalDays % 30;
    const hours      = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const fmt = n => String(n).padStart(2, '0');

    const mEl = document.getElementById('cd-months');
    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');

    if (mEl) mEl.textContent = fmt(months);
    if (dEl) dEl.textContent = fmt(days);
    if (hEl) hEl.textContent = fmt(hours);
}

if (document.getElementById('cd-months')) {
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// ============================================
// CONTACT FORM (Formspree)
// ============================================
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        btn.classList.add('loading');
        btn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formFeedback.textContent = '✓ Message sent! We\'ll get back to you soon.';
                formFeedback.className = 'form-feedback success';
                contactForm.reset();
            } else {
                throw new Error('Server error');
            }
        } catch {
            formFeedback.textContent = '✗ Something went wrong. Try emailing us directly.';
            formFeedback.className = 'form-feedback error';
        } finally {
            btn.classList.remove('loading');
            btn.disabled = false;
        }
    });
}

// ============================================
// VINYL SPIN on hover (music section)
// ============================================
const vinyl = document.querySelector('.vinyl');
if (vinyl) {
    vinyl.addEventListener('mouseenter', () => vinyl.classList.add('spinning'));
    vinyl.addEventListener('mouseleave', () => vinyl.classList.remove('spinning'));
}