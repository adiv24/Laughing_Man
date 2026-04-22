const SQUARE_COUNT = 3;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#square').addEventListener('click', () => {
        alert("You caught the Laughing Man!");
    });
});

let box = document.querySelector('#box');
for(let i = 0; i < SQUARE_COUNT; i++) {
    let square = document.createElement('div');
    square.src = 'laughing_man.jpg';
    square.alt = "Catch the Laughing Man!";
    square.className = 'square';
    box.appendChild(square);





}