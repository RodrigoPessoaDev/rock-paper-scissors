//Global variables
let playerScore = 0;
let computerScore = 0;
let round = 0;

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
  let playerSelection = prompt("?").toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player wins!";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
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

console.log(game());
