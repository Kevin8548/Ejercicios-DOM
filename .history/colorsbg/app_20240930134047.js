const body = document.querySelector('body');
const btnChange =document.getElementById('btnchange');

const changeColor = () => {
    const color = prompt('Ingresa un color: ');
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);