let modalTimeout; // armazena o timeout ativo

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
    
    // Limpa qualquer timeout anterior
    if (modalTimeout) {
        clearTimeout(modalTimeout);
    }
    
    // Troca APENAS para o modal que foi aberto
    modalTimeout = setTimeout(() => {
        const modal = document.getElementById(modalId);
        const images = modal.querySelectorAll('.modal-images img');
        
        if (images.length > 1) {
            images[0].classList.remove('active');
            images[1].classList.add('active');
        }
    }, 5000);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
    
    // Limpa o timeout ao fechar
    if (modalTimeout) {
        clearTimeout(modalTimeout);
    }
    
    // Reseta as imagens para o estado inicial
    const modal = document.getElementById(modalId);
    const images = modal.querySelectorAll('.modal-images img');
    if (images.length > 1) {
        images[0].classList.add('active');
        images[1].classList.remove('active');
    }
}

// Fecha ao clicar no X
document.querySelectorAll('.close').forEach(btn => {
    btn.onclick = function() {
        const modal = this.closest('.modal');
        const modalId = modal.id;
        closeModal(modalId);
    }
});

// Fecha ao clicar fora do modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
}
    // Exemplo de como conectar com seus modais existentes
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                const memberClass = this.classList[1]; // dusk, trace, od, ember, ou lyra
                const modalId = 'modal-' + memberClass;
                
                // Aqui você chamaria sua função openModal existente
                console.log('Abrindo modal:', modalId);
                // openModal(modalId); // Descomente quando integrar com seu código
            });
        });