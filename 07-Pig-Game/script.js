'use strict';

const currentPlayer00 = document.querySelector('.player--0');
const currentPlayer01 = document.querySelector('.player--1');
const player00Score = document.getElementById('score--0');
const player01Score = document.getElementById('score--1');
const player00Current = document.getElementById('current--0');
const player01Current = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerChange = document.querySelector('.player-change');

let playing = true;
let dice = 0;
let scoreArr = [0, 0];
let currentPlayer = 0;
let score = 0;

const init = function () {
  playing = true;
  player00Score.textContent = 0;
  player01Score.textContent = 0;
  player00Current.textContent = 0;
  player01Current.textContent = 0;
  currentPlayer00.classList.remove('player--winner');
  currentPlayer01.classList.remove('player--winner');
  currentPlayer00.classList.add('player--active');
  currentPlayer01.classList.remove('player--active');
  diceEl.classList.add('hidden');
  playerChange.classList.add('hidden');
  scoreArr = [0, 0];
  dice = 0;
  score = 0;
  currentPlayer = 0;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer == 0 ? 1 : 0;
  currentPlayer00.classList.toggle('player--active');
  currentPlayer01.classList.toggle('player--active');
  score = 0;
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'r') {
    roll();
  }
});

const roll = function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;
    if (dice == 1) {
      switchPlayer();
      pChange();
    } else {
      score += dice;
      document.getElementById(`current--${currentPlayer}`).textContent = score;
    }
  }
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;
    if (dice == 1) {
      switchPlayer();
      pChange();
    } else {
      score += dice;
      document.getElementById(`current--${currentPlayer}`).textContent = score;
    }
  }
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'h') {
    hold();
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scoreArr[currentPlayer] += score;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scoreArr[currentPlayer];
    if (scoreArr[currentPlayer] >= 100) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      currentPlayer00.classList.remove('player--active');
      currentPlayer01.classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
      pChange();
    }
  }
});

const hold = function () {
  if (playing) {
    scoreArr[currentPlayer] += score;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scoreArr[currentPlayer];
    if (scoreArr[currentPlayer] >= 100) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      currentPlayer00.classList.remove('player--active');
      currentPlayer01.classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
      pChange();
    }
  }
};
document.addEventListener('keydown', function (e) {
  if (e.key === 'n') {
    init();
  }
});
btnNew.addEventListener('click', init);

const pChange = function () {
  playerChange.classList.remove('hidden');
  playing = false;
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !playerChange.classList.contains('hidden')) {
    playing = true;
    playerChange.classList.add('hidden');
  }
});
