// Inicializa o carrossel
new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 1000,
    hoverpause: true
}).mount();

// Efeito hover nos cards de serviço
document.querySelectorAll('.servico-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});