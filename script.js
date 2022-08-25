// const and let
const gameField = document.getElementById(`gamefield`);
const player = document.getElementById(`player1`);
const computer = document.getElementById(`player2`);
const paper = document.getElementById(`paper`);
const rock = document.getElementById(`rock`);
const scissors = document.getElementById(`scissors`);

// DOM load - send to titleScreen
window.addEventListener("DOMContentLoaded", titleScreen);

// titleScreen
function titleScreen() {
  // event listeners for player one click
  // event listeners for player two click
  // event listener rock btn click startGame
  // event listener paper btn click startGame
  // event listener scissors btn click startGame
}

// startGame
function startGame() {
  // player two (computer) randomize choice between 0, 1 and 2 (rock, paper or scissors)

  // if payer one click rock && player two click rock == tie
  // tieScreen
  // if payer one click rock && player two click paper == player one lose
  // loseScreen
  // if payer one click rock && player two click scissors == player one win
  // winScreen

  // else if player one click paper && palyer two click rock == player one win
  // winScreen
  // else if player one click paper && palyer two click paper == tie
  // tieScreen
  // else if player one click paper && palyer two click scissors == player one lose
  // loseScreen

  // else if player one click scissors && player two click rock == player one lose
  // loseScreen
  // else if player one click scissors && player two click paper == player one win
  // winScreen
  // else if player one click scissors && player two click scissors == tie
  // tieScreen
  // else player one no click -- startGame
}

function tieScreen() {
  // tieScreen
  // display block tie div
}

function winScreen() {
  // winScreen
  // display block win div
}

function loseScreen() {
  // loseScreen
  // display block lose screen
}
