// const and let
const gameField = document.getElementById(`gamefield`);
const player = document.getElementById(`player1`);
const computer = document.getElementById(`player2`);

const lose = document.getElementById(`lose`);
const win = document.getElementById(`win`);
const tie = document.getElementById(`tie`);

const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissors = document.querySelector(`.scissors`);

//rock = 0, paper = 1, scissors = 2
let compChoice = Math.floor(Math.random() * 3);
console.log(`compChoice is : ${compChoice}`);

//rock = 0, paper = 1, scissors = 2
let userChoice;

// DOM load - send to titleScreen
window.addEventListener("DOMContentLoaded", titleScreen);

// titleScreen
function titleScreen() {
  console.log(`titleScreen`);
  // event listener rock btn click startGame
  rock.addEventListener("click", rockClicked);
  // event listener paper btn click startGame
  paper.addEventListener("click", paperClicked);
  // event listener scissors btn click startGame
  scissors.addEventListener("click", scissorsClicked);
}

function rockClicked() {
  userChoice = 0;

  player.classList.add("rock");
  //   rock vs rock = tie
  if (userChoice == compChoice) {
    // shake animation
    // show hands pngs
    computer.classList.add(`rock`);
    tieScreen();
  }
  //   rock vs paper = player lose
  else if (compChoice == 1) {
    // shake animation
    // show hands pngs
    computer.classList.add(`paper`);
    loseScreen();
  }
  //   rock vs scissors = player win
  else if (compChoice == 2) {
    // shake animation
    // show hands pngs
    computer.classList.add(`scissors`);
    winScreen();
  }
}

function paperClicked() {
  userChoice = 1;
  player.classList.add(`paper`);

  //   paper vs rock = win
  if (userChoice == 0) {
    // shake animation
    // show hands pngs
    computer.classList.add(`rock`);
    winScreen();
  }
  //   paper vs paper = tie
  else if (compChoice == userChoice) {
    // shake animation
    // show hands pngs
    computer.classList.add(`paper`);
    tieScreen();
  }
  //   paper vs scissors = lose
  else if (compChoice == 2) {
    // shake animation
    // show hands pngs
    computer.classList.add(`scissors`);
    loseScreen();
  }
}

function scissorsClicked() {
  userChoice = 2;
  player.classList.add("scissors");

  //   scissors vs rock = lose
  if (userChoice == 0) {
    // shake animation
    // show hands pngs
    computer.classList.add(`rock`);
    loseScreen();
  }
  //   scissors vs paper = win
  else if (compChoice == 1) {
    // shake animation
    // show hands pngs
    computer.classList.add(`paper`);
    winScreen();
  }
  //   scissors vs scissors = tie
  else if (compChoice == userChoice) {
    // shake animation
    // show hands pngs
    computer.classList.add(`scissors`);
    tieScreen();
  }
}

// // startGame
// function startGame(event) {
//   console.log(`startGame`);
//   // player two (computer) randomize choice between 0, 1 and 2 (rock, paper or scissors)
//   compChoice;

//   // if payer one click rock && player two click rock == tie
//   if (player.click.rock && compChoice = compRock) {

//   }
//   // player one and player two animation shake
//   //   player one show rock png and player two show rock png
//   // tieScreen
//   // else if payer one click rock && player two click paper == player one lose
//   // player one and player two animation shake
//   //   player one show rock png and player two show paper png
//   // loseScreen
//   // else if payer one click rock && player two click scissors == player one win
//   // player one and player two animation shake
//   //   player one show rock png and player two show scissors png
//   // winScreen

//   // else if player one click paper && palyer two click rock == player one win
//   // player one and player two animation shake
//   //   player one show paper png and player two show rock png
//   // winScreen
//   // else if player one click paper && palyer two click paper == tie
//   // player one and player two animation shake
//   //   player one show paper png and player two show paper png
//   // tieScreen
//   // else if player one click paper && palyer two click scissors == player one lose
//   // player one and player two animation shake
//   //   player one show aper png and player two show scissors png
//   // loseScreen

//   // else if player one click scissors && player two click rock == player one lose
//   // player one and player two animation shake
//   // loseScreen
//   //   player one show scissors png and player two show rock png
//   // else if player one click scissors && player two click paper == player one win
//   // player one and player two animation shake
//   //   player one show scissors png and player two show paper png
//   // winScreen
//   // else if player one click scissors && player two click scissors == tie
//   // player one and player two animation shake
//   //   player one show scissors png and player two show scissors png
//   // tieScreen

//   // else player one no click -- startGame
// }

// tieScreen
function tieScreen() {
  console.log(`tieScreen`);

  // display block tie div
  tie.classList.remove("hidden");
}

// winScreen
function winScreen() {
  console.log(`winScreen`);

  // display block win div
  win.classList.remove("hidden");
}
// loseScreen
function loseScreen() {
  console.log(`loseScreen`);

  // display block lose screen
  lose.classList.remove("hidden");
}
