//Global variables
let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerChoice = 0;

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
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie.");
  } else {
    computer.textContent = "Computer: " + ++computerScore;
    console.log("Computer wins.");
  }

  if (playerScore === 5) {
    winner.textContent = "Player wins!";
  } else if (computerScore === 5) {
    winner.textContent = "Computer wins!";
  }
}

//Logic for a 5 round game for rock paper scissors
function game() {
  let result;

  for (let i = 0; i < 5; i++) {
    result = playRound();
    round = ++round;
    if (result === "Player wins!") {
      playerScore = ++playerScore;
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
      console.log("Round: " + round);
    } else if (result === "Computer wins!") {
      computerScore = ++computerScore;
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
      console.log("Round: " + round);
    } else {
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
      console.log("Round: " + round);
    }
  }

  //Determine who is the winner
  if (playerScore > computerScore) {
    return "Player is the absolute winner! Congrats!";
  } else if (computerScore > playerScore) {
    return "Computer is the winner! Better luck next time!";
  } else {
    return "Nobody wins!";
  }
}

//console.log(game());

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(playRound());
});

paper.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(playRound());
});

scissors.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  console.log(playRound());
});

const score = document.querySelector("#score");

const player = document.createElement("div");
player.textContent = "Player: " + playerScore;
score.appendChild(player);
const computer = document.createElement("div");
computer.textContent = "Computer: " + computerScore;
score.appendChild(computer);

score.setAttribute(
  "style",
  "border: 1px solid black; margin:10px; padding: 5px"
);

const winner = document.createElement("div");
score.appendChild(winner);
winner.setAttribute("style", "margin-top: 5px");

if (playerScore === 5) {
  winner.textContent = "Player wins!";
} else if (computerScore === 5) {
  winner.textContent = "Computer wins!";
}
