

const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const indigo = document.getElementById('indigo');
const violet = document.getElementById('violet');
const startButton = document.getElementById('start');

let level = 0;
let gameSequence = [];
let playerSequence = [];
let colorRandom;
let playerColor;
let reset = false;


function startGame() {
    if (level === 0) {
        levelUp();
        startButton.textContent = `simon says level ${level}`;
    }
    gameClick();
}

function levelUp() {
    level++;
    playerSequence = [];
    gameClick();
}

function gameClick() {
    randomColor();
    gameSequence.push(colorRandom);
    colorFlash(colorRandom);
}
// how to call colorFlash sequentially for each item in gameSequence[0, 1, 2...], instead of color random??

function playerClick() {

}

function colorFlash(color) {
    if (color === 'red') {
        red.className = 'color red-click';
        setTimeout(() => {
            red.className = 'color red';
        }, 500);
    } else if (color === 'orange') {
        orange.className = 'color orange-click';
        setTimeout(() => {
            orange.className = 'color orange';
        }, 500);
    } else if (color === 'yellow') {
        yellow.className = 'color yellow-click';
        setTimeout(() => {
            yellow.className = 'color yellow';
        }, 500);
    } else if (color === 'green') {
        green.className = 'color green-click';
        setTimeout(() => {
            green.className = 'color green';
        }, 500);
    } else if (color === 'blue') {
        blue.className = 'color blue-click';
        setTimeout(() => {
            blue.className = 'color blue';
        }, 500);
    } else if (color === 'indigo') {
        indigo.className = 'color indigo-click';
        setTimeout(() => {
            indigo.className = 'color indigo';
        }, 500);
    } else if (color === 'violet') {
        violet.className = 'color violet-click';
        setTimeout(() => {
            violet.className = 'color violet';
        }, 500);
    };
}

function randomColor() {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = Math.floor(Math.random() * 7);
    colorRandom = colorArray[i];
    console.log(`colorRandom = ${colorRandom}`);
}


startButton.addEventListener('click', () => {
    gameClick();
});
