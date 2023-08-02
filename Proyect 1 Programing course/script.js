'use strict';
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const secretNumberAssig = function () {
  let number = Math.trunc(Math.random() * 20) + 1;
  return number;
};
let secretNumber = secretNumberAssig();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Cuando no se ingresa ningun numero
  if (!guess) {
    displayMessage('🚫 No number!');

    //Cuando el numero es correcto- Win the game
  } else if (guess == secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Cuando el numero no se correcto - Lose the game
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lose the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumberAssig();
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start gueassing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
