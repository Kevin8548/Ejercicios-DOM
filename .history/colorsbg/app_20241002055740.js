const body = document.querySelector('body');
const btnChange =document.getElementById('btnchange');

const changeColor = () => {
    const letras = 'ABCDEF0123456789';
    let color = '#';
    for(let i=0; i < 6; i++){
        color += letras[Math.floor(Math.random()=16)];
    }
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);