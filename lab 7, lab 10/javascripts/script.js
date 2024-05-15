'use strict';

let score = Number(document.querySelector('.score').textContent);
let hightScore = Number(document.querySelector('.highscore').textContent);
let scrtNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // Nếu không nhập số:
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number yet';
  }

  // Nếu đoán sai:
  else if (guess != scrtNumber && score > 0) {
    score--;
    document.querySelector('.message').textContent =
      guess > scrtNumber ? '📈 Too hight' : '📉 Too low';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    if (score === 0) {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('body').style.backgroundColor = '#ff483b';
      document.querySelector('.number').textContent = scrtNumber;
      document.querySelector('.number').style.width = '30rem';
    }
  }

  // Khi dành chiến thắng
  else if (guess === scrtNumber && score != 0) {
    document.querySelector('.number').textContent = scrtNumber;
    document.querySelector('.message').textContent = '✅ Correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
      console.log(hightScore);
    }
  }
});

// Khi click nút Again
document.querySelector('.again').addEventListener('click', function () {
  scrtNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
