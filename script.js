'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 💃';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//QUERIES

let check = document.querySelector('.check');
let message = document.querySelector('.message');
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

check.textContent = 'Log!';

check.addEventListener('click', function () {
  console.clear();

  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60B347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    //highscore rules
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  console.log(guess);

  /*
  document.querySelector('.message').textContent = '🎉 Correct Number';

  document.querySelector('.guess').value = '';
    */
});

//
//
//RESET
document.querySelector('.again').addEventListener('click', function () {
  //VARIABLES RESET
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //INPUT FIELDS RESET
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');

  //RESET STYLES
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
