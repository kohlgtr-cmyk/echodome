// ============================================
// IFRAME NAVIGATION
// Intercepta cliques em links internos e
// navega dentro do iframe sem recarregar o shell
// ============================================
(function() {
    // Só roda se estiver dentro de um iframe
    if (window.self === window.top) return;

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        // Ignora âncoras da mesma página (ex: #about, #music)
        if (href.startsWith('#')) return;

        // Ignora links externos
        if (href.startsWith('http') || href.startsWith('//')) return;

        // Navega dentro do iframe (sem recarregar o shell)
        e.preventDefault();
        window.location.href = href;
    });
})();
