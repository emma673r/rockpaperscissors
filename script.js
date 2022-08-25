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
let compChoice;
compChoice = Math.floor(Math.random() * 3);

//rock = 0, paper = 1, scissors = 2
let userChoice;

// DOM load - send to titleScreen
window.addEventListener("DOMContentLoaded", titleScreen);

// titleScreen
function titleScreen() {
  console.log(`titleScreen`);

  tie.classList = "hidden";
  win.classList = "hidden";
  lose.classList = "hidden";

  player.offsetLeft;

  compChoice = Math.floor(Math.random() * 3);
  console.log(`compChoice is : ${compChoice}`);

  // event listener rock btn click startGame
  rock.addEventListener("click", shakeHandsRock);
  // event listener paper btn click startGame
  paper.addEventListener("click", shakeHandsPaper);
  // event listener scissors btn click startGame
  scissors.addEventListener("click", shakeHandsScissors);
}

function shakeHandsRock() {
  console.log(`shakeHandsRock`);
  player.classList.add("rock");
  computer.classList.add("rock");
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", rockClicked);
}

function shakeHandsPaper() {
  console.log(`shakeHandsPaper`);
  //   player.classList.add("rock");
  //   computer.classList.add("rock");
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", paperClicked);
}

function shakeHandsScissors() {
  console.log(`shakeHandsScissors`);
  player.classList.add("scissors");
  computer.classList.add("rock");
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", scissorsClicked);
}

function rockClicked() {
  console.log(`rockClicked`);
  userChoice = 0;

  player.classList.add("rock");
  computer.classList = "player";
  player.classList.remove("shake");
  computer.classList.remove("shake");
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
  console.log(`paperClicked`);
  userChoice = 1;

  player.classList.add("paper");
  computer.classList = "player";
  player.classList.remove("shake");
  computer.classList.remove("shake");

  //   paper vs rock = win
  if (compChoice == 0) {
    // shake animation

    // show hands pngs
    computer.classList.add("rock");
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
  console.log(`scissorsClicked`);
  userChoice = 2;

  player.classList.add("scissors");
  computer.classList = "player";
  player.classList.remove("shake");
  computer.classList.remove("shake");

  //   scissors vs rock = lose
  if (compChoice == 0) {
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

// tieScreen
function tieScreen() {
  console.log(`tieScreen`);

  // display block tie div
  tie.classList = "";
  win.classList = "hidden";
  lose.classList = "hidden";
  rock.addEventListener("click", titleScreen);
  paper.addEventListener("click", titleScreen);
  scissors.addEventListener("click", titleScreen);
}

// winScreen
function winScreen() {
  console.log(`winScreen`);

  // display block win div
  win.classList = "";
  tie.classList = "hidden";
  lose.classList = "hidden";
  rock.addEventListener("click", titleScreen);
  paper.addEventListener("click", titleScreen);
  scissors.addEventListener("click", titleScreen);
}
// loseScreen
function loseScreen() {
  console.log(`loseScreen`);

  // display block lose screen
  lose.classList = "";
  win.classList = "hidden";
  tie.classList = "hidden";
  rock.addEventListener("click", titleScreen);
  paper.addEventListener("click", titleScreen);
  scissors.addEventListener("click", titleScreen);
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
