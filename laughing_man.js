const SQUARE_COUNT = 3;
const SPEED = 2;
const TIMER_SPEED = 10;

function getColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(Math.random() * letters.length));
    }
    return color;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#square').addEventListener('click', () => {
        alert("You caught the Laughing Man!");
    });
});

let box = document.querySelector('#box');

for (let i = 0; i < SQUARE_COUNT; i++) {
    let square = document.createElement('img');
    square.src = 'laughing_man.jpg';
    square.alt = "Catch the Laughing Man!";
    square.className = 'square';
    box.appendChild(square);

    square.addEventListener('mouseover', () => {
        square.src = 'orochimaru_50x50.jpg';
    });

    square.addEventListener('mouseout', () => {
        square.src = 'laughing_man.jpg';
    });
}

Array.from(box.children).forEach((element) => {
    let dx = SPEED * (Math.random() * 2 - 1);
    let dy = SPEED * (Math.random() * 2 - 1);
    let x = parseInt(element.style.left) || 0;
    let y = parseInt(element.style.top) || 0;

    setInterval(() => {
        x += dx;
        y += dy;

        if (x <= 0 || x >= 450) {
            dx = -dx;
            element.style.borderColor = getColor();
            element.style.backgroundColor = getColor();
        }
        if (y <= 0 || y >= 350) {
            dy = -dy;
            element.style.borderColor = getColor();
            element.style.backgroundColor = getColor();
        }

        element.style.left = x + 'px';
        element.style.top = y + 'px';
    }, TIMER_SPEED);
});