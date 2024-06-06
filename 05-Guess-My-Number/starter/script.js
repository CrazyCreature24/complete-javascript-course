'use strict';

// const message = document.querySelector('.message');
// console.log(message.textContent);
// message.textContent = 'Nice Try!';
// console.log(message.textContent);

// let score = document.querySelector('.score');
// let highScore = document.querySelector('.highscore');

// score.textContent = 50;
// highScore.textContent = 60;

// let guess = (document.querySelector('.guess').value = 0);

const secretNumberText = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const scoreText = document.querySelector('.score');
let scoreValue = 20;

const highScoreText = document.querySelector('.highscore');
let highScoreValue = 0;

const message = document.querySelector('.message');

// Hnadle Check number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (scoreValue > 0) {
    if (guess === secretNumber) {
      // When player wins
      message.textContent = 'Correct Number!';
      if (scoreValue > highScoreValue) {
        highScoreValue = scoreValue;
        highScoreText.textContent = highScoreValue;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      secretNumberText.style.width = '30rem';
      secretNumberText.textContent = secretNumber;
      return;
    } else if (!guess) {
      // No number
      message.textContent = 'No Number!';
    } else if (guess > secretNumber) {
      // Too high
      message.textContent = 'Too High';
    } else if (guess < secretNumber) {
      // Too low
      message.textContent = 'Too Low';
    }
    scoreValue--;
    scoreText.textContent = scoreValue;
  } else {
    message.textContent = 'Game Over!';
  }
});

// Reset event
document.querySelector('.again').addEventListener('click', function () {
  // Reset all values
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumberText.style.width = '15rem';
  secretNumberText.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;
  scoreText.textContent = scoreValue;
  message.textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
});
