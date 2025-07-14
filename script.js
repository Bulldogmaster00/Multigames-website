// Este arquivo conterá todo o seu código JavaScript interativo.

document.addEventListener('DOMContentLoaded', () => {
    // Exemplo: Um alerta simples quando o botão CTA é clicado
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Você clicou em "Explorar Jogos"! Em breve, muitos jogos aqui!');
            // Você pode rolar para a seção de jogos, por exemplo:
            // document.querySelector('.featured-games').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Você pode adicionar mais JavaScript para carregamento de jogos dinâmico, pesquisa, etc., aqui.
});