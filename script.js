const words = ['flower', 'saturn', 'pianos', 'banana'];

let currentWord = '';
let tries = 0;
let mistakes = [];

const scrambledWordElement = document.getElementById('scrambled-word');
const inputs = document.querySelectorAll('.inputs input');
const triesElement = document.getElementById('tries');
const mistakesElement = document.getElementById('mistakes');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');

function scrambleWord(word) {
    let scrambled = word.split('');
    scrambled.sort(function() {
        return Math.random() - 0.5;
    });
    return scrambled.join('');
}

function updateInfo() {
    triesElement.textContent = tries + "/5";
    mistakesElement.textContent = mistakes.join(', ');
}

function reset() {
    tries = 0;
    mistakes = [];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    updateInfo();
}

function RandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    scrambledWordElement.textContent = scrambleWord(currentWord);
    reset();
}

randomButton.addEventListener('click', RandomWord);
resetButton.addEventListener('click', reset);

window.onload = RandomWord;
