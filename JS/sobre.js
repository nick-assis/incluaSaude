document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.sobre');

    function showCards() {
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('show');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    showCards();
    window.addEventListener('scroll', showCards);

    document.addEventListener('keypress', function(event) {
        if (event.key === 'h') {
            document.querySelector('nav a[href="index.html"]').click();
        } else if (event.key === 'd') {
            document.querySelector('nav a[href="dicas.html"]').click();
        } else if (event.key === 'o') {
            document.querySelector('nav a[href="oportunidades.html"]').click();
        } else if (event.key === 's') {
            document.querySelector('nav a[href="sobre.html"]').click();
        } else if (event.key === 'f') {
            document.querySelector('nav a[href="forum.html"]').click();
        }
    });
});
