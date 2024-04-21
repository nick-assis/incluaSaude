document.addEventListener('DOMContentLoaded', function() {
    const tituloInput = document.getElementById('titulo');
    const tituloMaxLength = 50;

    tituloInput.addEventListener('input', function() {
        const tituloValue = this.value;
        const excetp = /^[a-zA-Z0-9À-ÿ\s]*$/;
        if (!excetp.test(tituloValue)) {
            this.value = tituloValue.replace(/[^a-zA-Z0-9À-ÿ\s]/g, '');
            showMessagePopUp('Não são permitidos caracteres especiais no título.');
            this.style.backgroundColor = 'lightcoral';
        } else {
            this.style.backgroundColor = '';
        }
        if (tituloValue.length > tituloMaxLength) {
            this.value = tituloValue.slice(0, tituloMaxLength);
            showMessagePopUp('Limite de caracteres atingido para o título.');
            this.style.backgroundColor = 'lightcoral';
        }
        document.querySelector('.max-titulo').textContent = `Máximo de ${tituloMaxLength} caracteres permitidos.`;
    });

    const mensagemTextArea = document.getElementById('mensagem');
    const mensagemMaxLength = 140;

    mensagemTextArea.addEventListener('input', function() {
        const mensagemValue = this.value;
        if (mensagemValue.length > mensagemMaxLength) {
            this.value = mensagemValue.slice(0, mensagemMaxLength);
            showMessagePopUp('Limite de caracteres atingido para a mensagem.');
            this.style.backgroundColor = 'lightcoral';
        } else {
            this.style.backgroundColor = '';
        }
        const mensagemRemaining = mensagemMaxLength - mensagemValue.length;
        document.querySelector('.max-mensagem').textContent = `Máximo de ${mensagemMaxLength} caracteres permitidos. Restam ${mensagemRemaining}.`;
    });

    function showMessagePopUp(message) {
        alert(message);
    }

    const typingFields = document.querySelectorAll('textarea');

    typingFields.forEach((field) => {
        field.addEventListener('focus', () => {
            typing = true;
        });

        field.addEventListener('blur', () => {
            typing = false;
        });
    });

    document.addEventListener('keydown', function(event) {
        if (!typing) {
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
        }
    });
});
