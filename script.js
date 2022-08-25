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

  //   player.classList.remove("rock");
  //   player.classList.remove("paper");
  //   player.classList.remove("scissors");

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

  //   player.classList.add("rock");
  //   computer.classList.add("rock");
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", rockClicked);
}

function shakeHandsPaper() {
  console.log(`shakeHandsPaper`);

  //   player.classList.add("paper");
  //   computer.classList.add("rock");
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", paperClicked);
}

function shakeHandsScissors() {
  console.log(`shakeHandsScissors`);

  //   player.classList.add("scissors");
  //   computer.classList.add("rock");
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", scissorsClicked);
}

function rockClicked() {
  console.log(`rockClicked`);
  userChoice = 0;

  player.classList = "player";
  computer.classList = "player";
  player.classList.remove("shake");
  computer.classList.remove("shake");
  //   rock vs rock = tie
  if (userChoice == compChoice) {
    // shake animation

    // show hands pngs
    computer.classList.add(`rock`);
    player.classList.add(`rock`);
    tieScreen();
  }
  //   rock vs paper = player lose
  else if (compChoice == 1) {
    // shake animation

    // show hands pngs
    computer.classList.add(`paper`);
    player.classList.add(`rock`);
    loseScreen();
  }
  //   rock vs scissors = player win
  else if (compChoice == 2) {
    // shake animation

    // show hands pngs
    computer.classList.add(`scissors`);
    player.classList.add(`rock`);
    winScreen();
  }
}

function paperClicked() {
  console.log(`paperClicked`);
  userChoice = 1;

  player.classList = "player";
  computer.classList = "player";
  player.classList.remove("shake");
  computer.classList.remove("shake");

  //   paper vs rock = win
  if (compChoice == 0) {
    // shake animation

    // show hands pngs
    computer.classList.add("rock");
    player.classList.add(`paper`);
    winScreen();
  }
  //   paper vs paper = tie
  else if (compChoice == userChoice) {
    // shake animation

    // show hands pngs
    computer.classList.add(`paper`);
    player.classList.add(`paper`);
    tieScreen();
  }
  //   paper vs scissors = lose
  else if (compChoice == 2) {
    // shake animation

    // show hands pngs
    computer.classList.add(`scissors`);
    player.classList.add(`paper`);
    loseScreen();
  }
}

function scissorsClicked() {
  console.log(`scissorsClicked`);
  userChoice = 2;

  player.classList = "player";
  computer.classList = "player";
  player.classList.remove("shake");
  computer.classList.remove("shake");

  //   scissors vs rock = lose
  if (compChoice == 0) {
    // show hands pngs
    computer.classList.add(`rock`);
    player.classList.add(`scissors`);
    loseScreen();
  }
  //   scissors vs paper = win
  else if (compChoice == 1) {
    // shake animation

    // show hands pngs
    computer.classList.add(`paper`);
    player.classList.add(`scissors`);
    winScreen();
  }
  //   scissors vs scissors = tie
  else if (compChoice == userChoice) {
    // shake animation

    // show hands pngs
    computer.classList.add(`scissors`);
    player.classList.add(`scissors`);
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

  rock.addEventListener("click", shakeHandsRock);
  paper.addEventListener("click", shakeHandsPaper);
  scissors.addEventListener("click", shakeHandsScissors);
}
