const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 10,
    y: 10,
    show: function() {
        ctx.fillStyle = `hsl(${this.x}, 50%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    
    if (right) ball.x++;
    else ball.x--;
    
    if (down) ball.y++;
    else ball.y--;

    ball.show();

    if (ball.x > 590 || ball.x < 10) right = !right;
    if (ball.y > 390 || ball.y < 10) down = !down;
}, 2);
