'use strict';

const secretNumber = Math.trunc(Math.random()*20 + 1);
let score = 20;
console.log(secretNumber)
document.querySelector('.number').textContent = secretNumber;



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if(!guess){
    document.querySelector('.message').textContent = '😔Enter your choice number';
  }else if(guess == secretNumber){
    document.querySelector('.message').textContent = '😃You found a perfect match'
    score++;
    document.querySelector('.score').textContent = score;
  }else if(guess < secretNumber){
    document.querySelector('.message').textContent = '😍 you have to put  bigger number'
    score--;
    document.querySelector('.score').textContent = score;
  } else if(guess > secretNumber){
    document.querySelector('.message').textContent = '🤣your guess is too high, try again'
    score--;
    document.querySelector('.score').textContent = score;
  }
})