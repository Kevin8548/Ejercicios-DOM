const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';

const scoreDisplay = document.createElement('div');
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.style.fontSize = '24px';
document.body.appendChild(scoreDisplay);

let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let gameOver = false;

const Snake = [
    { x: 2, y: 1, show: function() { ctx.fillText('💩', this.x * 20, this.y * 20); } },
    { x: 1, y: 1, show: function() { ctx.fillText('💩', this.x * 20, this.y * 20); } },
    { x: 0, y: 1, show: function() { ctx.fillText('💩', this.x * 20, this.y * 20); } }
];

let x = 2;
let y = 1;
let direction = 1;

const food = {
    x: 5,
    y: 5,
    show: function() {
        ctx.fillText('🍖', this.x * 20, this.y * 20);
    },
    fadeIn: function() {
        do {
            this.x = Math.floor(Math.random() * 30);
            this.y = Math.floor(Math.random() * 20) + 1;
        } while (this.isFoodOnSnake());
    },
    isFoodOnSnake: function() {
        return Snake.some(segment => segment.x === this.x && segment.y === this.y);
    }
};

function eat() {
    if (Snake[0].x === food.x && Snake[0].y === food.y) {
        food.fadeIn();
        Snake.push({ ...Snake[Snake.length - 1] });
        score++;
    }
}

function checkCollision() {
    for (let i = 1; i < Snake.length; i++) {
        if (Snake[i].x === Snake[0].x && Snake[i].y === Snake[0].y) {
            return true;
        }
    }
    return false;
}

function nextMove() {
    for (let i = Snake.length - 1; i > 0; i--) {
        Snake[i].x = Snake[i - 1].x;
        Snake[i].y = Snake[i - 1].y;
    }
    Snake[0].x = x;
    Snake[0].y = y;
}

function resetGame() {
    Snake.length = 3;
    Snake[0] = { x: 2, y: 1, show: function() { ctx.fillText('💩', this.x * 20, this.y * 20); } };
    Snake[1] = { x: 1, y: 1, show: function() { ctx.fillText('💩', this.x * 20, this.y * 20); } };
    Snake[2] = { x: 0, y: 1, show: function() { ctx.fillText('💩', this.x * 20, this.y * 20); } };
    x = 4;
    y = 1;
    direction = 1;
    score = 0;
    gameOver = false;
    food.fadeIn();
    startGame();
}

function startGame() {
    const gameInterval = setInterval(() => {
        if (gameOver) {
            clearInterval(gameInterval);
            showGameOver();
            return;
        }

        ctx.clearRect(0, 0, 600, 400);
        nextMove();
        food.show();
        Snake.forEach(s => s.show());
        eat();
        scoreDisplay.textContent = `Puntaje: ${score} | Puntaje más alto: ${highScore}`;

        if (checkCollision()) {
            gameOver = true;
        }

        if (direction === 1) x++;
        else if (direction === 2) x--;
        else if (direction === 3) y++;
        else if (direction === 4) y--;

        if (x > 29) x = 0;
        else if (x < 0) x = 29;
        if (y > 20) y = 1;
        else if (y < 1) y = 20;
    }, 150);
}

function showGameOver() {
    ctx.fillStyle = 'white';
    ctx.fillText('Game Over!', 200, 150);
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }
    
    ctx.fillText(`Score: ${score}`, 200, 200);
    ctx.fillText(`High Score: ${highScore}`, 200, 250);
    
    const button = document.createElement('button');
    button.innerText = 'Reiniciar';
    button.style.position = 'absolute';
    button.style.top = '300px';
    button.style.left = '230px';
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
        document.body.removeChild(button);
        resetGame();
    });
}

food.fadeIn();
startGame();

document.querySelector('body').addEventListener('keydown', e => {
    if (e.key === "d" && direction !== 2) direction = 1;
    else if (e.key === "a" && direction !== 1) direction = 2;
    else if (e.key === "s" && direction !== 4) direction = 3;
    else if (e.key === "w" && direction !== 3) direction = 4;
});
