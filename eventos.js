const div = document.querySelector('div');
const btn = document.querySelector('button');

div.addEventListener('click', saludoDiv);

btn.addEventListener('click', (e) => {
    alert('Hola!');
    e.stopPropagation();
    div.removeEventListener('click', saludoDiv);
});

function saludoDiv() {
    alert('Hola! Soy el div');
}

div.addEventListener('click', saludoDiv);