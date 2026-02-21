// Script para envolver palabras en spans y crear efecto hover
document.addEventListener('DOMContentLoaded', function() {
    // Solo animar elementos marcados para evitar sobrecargar textos largos
    const elementsToAnimate = document.querySelectorAll('.word-animated');

    elementsToAnimate.forEach(element => {
        const text = element.textContent;
        const words = text.split(' ');

        element.innerHTML = '';

        words.forEach((word, index) => {
            if (word.trim() !== '') {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                wordSpan.textContent = word;

                element.appendChild(wordSpan);

                if (index < words.length - 1) {
                    element.appendChild(document.createTextNode(' '));
                }
            }
        });
    });
});
