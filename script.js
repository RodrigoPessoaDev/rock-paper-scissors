//Global variables
let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerChoice = 0;

const score = document.querySelector("#score");
const roundTrack = document.createElement("div");
const player = document.createElement("div");
const computer = document.createElement("div");
const winner = document.createElement("div");

roundTrack.textContent = "Round: " + round;
player.textContent = "Player: " + playerScore;
computer.textContent = "Computer: " + computerScore;

score.appendChild(roundTrack);
score.appendChild(player);
score.appendChild(computer);
score.appendChild(winner);

score.setAttribute(
  "style",
  "border: 1px solid black; margin:10px; padding: 5px"
);
winner.setAttribute("style", "margin-top: 5px");

//Computer random input
function getComputerChoice() {
  let computerChoice;
  computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

//Logic for 1 round of rock paper scissors
function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = playerChoice;

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    player.textContent = "Player: " + ++playerScore;
    console.log("Player wins.");
    roundTrack.textContent = "Round: " + ++round;
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie.");
    roundTrack.textContent = "Round: " + ++round;
  } else {
    computer.textContent = "Computer: " + ++computerScore;
    console.log("Computer wins.");
    roundTrack.textContent = "Round: " + ++round;
  }

  if (round === 5 && playerScore > computerScore) {
    winner.textContent = "Player is the winner!";
  } else if (round === 5 && computerScore > playerScore) {
    winner.textContent = "Computer is the winner!";
  } else if (round === 5 && computerScore === playerScore) {
    winner.textContent = "It's a tie!";
  }
}

//Logic for a 5 round game for rock paper scissors
function game() {
  let result;

  result = playRound();
}

//DOM buttons selection
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#resetScore");

//Buttons event listener
rock.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  game();
});
paper.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  game();
});
scissors.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  game();
});
