"use strict";

function getComputerChoice() {
  let random = Math.floor(1 + Math.random() * 3); //To get random number between 1 to 3
  let choice;
  if (random === 1) {
    choice = "rock";
  } else if (random === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lost ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Won ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lost ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Won ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Won ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lost ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Its a draw ${computerSelection}  ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Choose the value");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
