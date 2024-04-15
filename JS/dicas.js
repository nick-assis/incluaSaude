document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keypress', function(event) {
        if (event.key === 'h') {
            document.querySelector('nav a[href="index.html"]').click();
        }
    });

    document.addEventListener('keypress', function(event) {
        if (event.key === 'd') {
            document.querySelector('nav a[href="dicas.html"]').click();
        }
    });

    document.addEventListener('keypress', function(event) {
        if (event.key === 'o') {
            document.querySelector('nav a[href="oportunidades.html"]').click();
        }
    });

    document.addEventListener('keypress', function(event) {
        if (event.key === 's') {
            document.querySelector('nav a[href="sobre.html"]').click();
        }
    });

    document.addEventListener('keypress', function(event) {
        if (event.key === 'f') {
            document.querySelector('nav a[href="forum.html"]').click();
        }
    });
});