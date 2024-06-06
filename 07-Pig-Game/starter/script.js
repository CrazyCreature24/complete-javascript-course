'use strict';

// Variables
const players = document.querySelectorAll('.player');
const names = document.querySelectorAll('.name');
const totalScores = document.querySelectorAll('.score'); // Could also use 'getElementById('id')'.
const currentScores = document.querySelectorAll('.current-score');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let rolledNumber;
let activePlayerIndex = 0;
let isThereWinner = false;
const scoreToWin = 100;

// Initialize the game
resetGame();

// Roll dice
btnRoll.addEventListener('click', function () {
  if (isThereWinner === true) return;

  rolledNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${rolledNumber}.png`;
  dice.classList.remove('hidden'); // Dice is hidden until first number rolled
  handleScoringLogic();
});

// Handle scoring logic on roll
const handleScoringLogic = function () {
  const currScore = Number(currentScores[activePlayerIndex].textContent);
  currentScores[activePlayerIndex].textContent = 0;
  if (rolledNumber !== 1) {
    currentScores[activePlayerIndex].textContent = currScore + rolledNumber;
    return;
  }
  swapActivePlayer();
};

// Hold score
btnHold.addEventListener('click', function () {
  const currScore = Number(currentScores[activePlayerIndex].textContent);
  const totScore = Number(totalScores[activePlayerIndex].textContent);
  totalScores[activePlayerIndex].textContent = totScore + currScore;
  currentScores[activePlayerIndex].textContent = 0;
  // Handle Winning condition
  if (Number(totalScores[activePlayerIndex].textContent) >= scoreToWin) {
    players[activePlayerIndex].classList.add('player--winner');
    isThereWinner = true;
    return;
  }
  swapActivePlayer();
});

// Swap active player
const swapActivePlayer = function () {
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      players[i].classList.remove('player--active');
    } else {
      players[i].classList.add('player--active');
      activePlayerIndex = i;
    }
  }
};

// Reseting the game
function resetGame() {
  dice.classList.add('hidden');
  isThereWinner = false;

  for (let i = 0; i < players.length; i++) {
    totalScores[i].textContent = 0;
    currentScores[i].textContent = 0;
    players[i].classList.remove('player--winner');
  }
}

btnNewGame.addEventListener('click', resetGame);
