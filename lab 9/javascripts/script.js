'use strict';

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let player, IsPlaying, score, MainDice;

const switchPlayer = function () {
  MainDice = 0;
  document.getElementById(`current--${player}`).innerText = MainDice;
  player = player === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const StartTheGame = function () {
  player = 0;
  IsPlaying = true;
  score = [0, 0];
  MainDice = 0;

  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.getElementById('score--0').innerText = score[0];
  document.getElementById('score--1').innerText = score[1];
  document.getElementById(`current--0`).innerText = MainDice;
  document.getElementById(`current--1`).innerText = MainDice;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.getElementById(`name--0`).innerText = `Player 1`;
  document.getElementById(`name--1`).innerText = `Player 2`;
};

StartTheGame();

btnRoll.addEventListener('click', function () {
  if (IsPlaying) {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `image/dice-${randomDice}.png`;
    dice.textContent = randomDice;
    document.getElementById(`current--${player}`).innerText = randomDice;

    if (randomDice !== 1) {
      MainDice += randomDice;
      document.getElementById(`current--${player}`).innerText = MainDice;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (IsPlaying) {
    score[player] += MainDice;
    if (score[player] >= 100) {
      IsPlaying = false;
      dice.classList.add('hidden');
      document.getElementById(`name--${player}`).innerText = `Player ${
        player + 1
      } Win`;
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
    }

    document.getElementById(`score--${player}`).innerText = score[player];
    switchPlayer();
  }
});

btnNew.addEventListener('click', StartTheGame);
