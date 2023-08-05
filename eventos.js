const div = document.querySelector('div');
const btn = document.querySelector('button');

div.addEventListener('click', () => {
    alert('Hola! Soy el div');
});

btn.addEventListener('click', (e) => {
    alert('Hola!');
    e.stopPropagation();
    div.removeEventListener('click', saludoDIv);
});

function saludoDIv() {
    alert('Hola! Soy el div');
}

div.addEventListener('click', saludoDIv);