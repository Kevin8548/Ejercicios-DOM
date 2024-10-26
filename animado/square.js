const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 0;
let y = 0;
let width = 3;
let height = 2;
let crece = true;

setInterval( ()=>{
    ctx.clearRect(0,0,600,400);
    ctx.fillStyle= `hsl(${width},50%,50%)`;
    ctx.fillRect(x,y,width,height);
    if (crece) {
        width += 3;
        height += 2;
    } else {
        width -= 3;
        height -= 2;
    }

    if (width >= lienzo.width || height >= lienzo.height) {
        crece = false;
    } else if (width <= 1 || height <= 1) {
        crece = true;
    }

    x = (lienzo.width - width) / 2;
    y = (lienzo.height - height) / 2;
}, 10);