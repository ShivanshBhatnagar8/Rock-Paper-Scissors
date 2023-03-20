"use strict";
let playerscoreEl = document.querySelector(".player-score"); //for the text of player score
let computerscoreEl = document.querySelector(".computer-score"); //for the text of computer score
let drawscoreEl = document.querySelector(".draw"); //for the text of draw
const playerImg = document.querySelector(".player-choice-img"); //for left hand images
const computerImg = document.querySelector(".computer-choice-img"); //for right hand images
const popup = document.querySelector(".popup"); //for popup
const popupContent = document.querySelector(".popup-content"); //for popup which declare the winner or draw
const h4 = document.querySelector("h4"); //for h4 element
const p = document.querySelector("p"); //for paragraph element
const btnClose = document.querySelector(".btn--close"); //for closing popup
const btnAgain = document.querySelector(".again"); //for playing the game again
let playerScore = 0; //playerscore
let computerScore = 0; //computerscore
let draw = 0; //draw
let score = 0; //score to store player score if player wins, computer score if computer wins and draw if there is a draw.

//Computer choice
function getComputerChoice() {
  let random = Math.floor(1 + Math.random() * 3); //To get random number between 1 to 3
  let choice;
  if (random === 1) {
    choice = "rock";
    computerImg.src = "./img/rock-computer.png";
  } else if (random === 2) {
    choice = "paper";
    computerImg.src = "./img/paper-computer.png";
  } else if (random === 3) {
    choice = "scissors";
    computerImg.src = "./img/scissors-computer.png";
  }
  return choice;
}

//Rock button
const rock = document
  .querySelector(".rock")
  .addEventListener("click", function () {
    playerImg.src = "./img/rock-player.png";
    playRound("rock", getComputerChoice());
  });

//Paper button
const paper = document
  .querySelector(".paper")
  .addEventListener("click", function () {
    playerImg.src = "./img/paper-player.png";
    playRound("paper", getComputerChoice());
  });

//scissors button
const scissors = document
  .querySelector(".scissors")
  .addEventListener("click", function () {
    playerImg.src = "./img/scissors-player.png";
    playRound("scissors", getComputerChoice());
  });

//Playing game

function playRound(playerSelection, computerSelection) {
  let score = 0;
  if (playerSelection === "rock" && computerSelection === "paper") {
    score++;
    computerScore += score;
    computerscoreEl.textContent = computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    score++;
    playerScore += score;
    playerscoreEl.textContent = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    score++;
    computerScore += score;
    computerscoreEl.textContent = computerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    score++;
    playerScore += score;
    playerscoreEl.textContent = playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    score++;
    playerScore += score;
    playerscoreEl.textContent = playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    score++;
    computerScore += score;
    computerscoreEl.textContent = computerScore;
  } else {
    score++;
    draw += score;
    drawscoreEl.textContent = draw;
  }

  //Winning Condition
  if (playerScore === 5) {
    popup.classList.remove("hidden");
    popupContent.classList.remove("hidden");
    popupContent.setAttribute(
      "style",
      "transform: translate(-50%, -50%) scale(1);"
    );
    h4.textContent = "Congratulations! You Won 🥳";
    p.textContent =
      "You won this rock paper and scissors battle against the computer.Congratulations! You are awesome. Click on Play Again button to play again. Good luck 👍.";
  } else if (computerScore == 5) {
    popup.classList.remove("hidden");
    popupContent.classList.remove("hidden");
    popupContent.setAttribute(
      "style",
      "transform: translate(-50%, -50%) scale(1);"
    );
    h4.textContent = "Better luck next time 😢";
    p.textContent =
      "Sorry to say but you lost this rock paper and scissors battle against the computer.Don't be sad you can try again. Click on Play Again button to play again. Good luck 👍. ";
  } else if (draw === 5) {
    popup.classList.remove("hidden");
    popupContent.classList.remove("hidden");
    popupContent.setAttribute(
      "style",
      "transform: translate(-50%, -50%) scale(1);"
    );
    h4.textContent = "It's a draw!! 😕";
    p.textContent =
      "It seems we don't have a winner this time. Don't worry, you can always try this game as much as you want . Click on Play Again button to play again. Good luck 👍. ";
  }
}

//For closing popup
btnClose.addEventListener("click", function () {
  popup.classList.add("hidden");
  popupContent.classList.add("hidden");
  popupContent.setAttribute(
    "style",
    "transform: translate(-50%, -50%) scale(0.5);"
  );
});

//For Resetting game
btnAgain.addEventListener("click", function () {
  score = 0;
  playerScore = 0;
  computerScore = 0;
  draw = 0;
  computerscoreEl.textContent = computerScore;
  playerscoreEl.textContent = playerScore;
  drawscoreEl.textContent = draw;
  playerImg.src = "./img/rock-player.png";
  computerImg.src = "./img/rock-computer.png";
});
