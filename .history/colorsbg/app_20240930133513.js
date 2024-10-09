const body = document.querySelector('body');
const btnChange = document.getElementById('btnChange');

const changeColor = () => {
    const color = prompt('Ingresa un Color: ');
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);