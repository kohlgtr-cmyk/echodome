// ============================================
// HAMBURGER MENU (mobile)
// ============================================
const hamburger = document.getElementById('hamburger');
const headerMenu = document.getElementById('header-menu');

if (hamburger && headerMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        headerMenu.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link
    headerMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            headerMenu.classList.remove('open');
        });
    });
}

// ============================================
// MODAIS
// ============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // impede scroll da página por trás
        startImageSlideshow(modal);
    }
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // restaura scroll
    stopImageSlideshow(modal);
}

// Fecha ao clicar no X
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) closeModal(modal);
    });
});

// Fecha ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Fecha com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') closeModal(modal);
        });
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

    // Reset imagens para a primeira
    const images = modal.querySelectorAll('.modal-images img');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === 0);
    });
}
