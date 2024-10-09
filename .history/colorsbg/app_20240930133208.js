const body = document.querySelector('body');

const changeClor = () => {
    const color = prompt('Ingresa un Color: ');
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);