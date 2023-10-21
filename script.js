//Defining variable for game options and creating a function that outputs a random computer choice
let choice = ["Rock","Paper","Scissors"];
let playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice(choice);
let playerCount = 0;
let computerCount = 0;

function getComputerChoice (choice){
    return choice [Math.floor(Math.random()*choice.length)];
}

function playRound(){
    
    if(playerSelection === "Rock" && computerSelection === "Scissors" ||
       playerSelection === "Scissors" && computerSelection === "Paper"||
       playerSelection === "Paper" && computerSelection === "Rock"){
        return "Player wins!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
    } else if (playerSelection === computerSelection){
        return "It\'s a tie!";
    } else {
        return "Computer wins!" + " " + computerSelection + " " + "beats" + " " + playerSelection;
    }
}

function game(){
    let round = 0;

    console.log(playRound());{
    round = ++round;
    if (playRound()==="Player wins!" + " " + playerSelection + " " + "beats" + " " + computerSelection){
        playerCount = ++playerCount;
    } else if ( playRound()==="Computer wins!" + " " + computerSelection + " " + "beats" + " " + playerSelection){
        computerCount = ++computerCount;
    } else {
        playerCount = ++playerCount;
        computerCount = ++computerCount;
    }
    console.log(round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);
}

console.log(playRound());{
    round = ++round;
    if (playRound()==="Player wins!" + " " + playerSelection + " " + "beats" + " " + computerSelection){
        playerCount = ++playerCount;
    } else if ( playRound()==="Computer wins!" + " " + computerSelection + " " + "beats" + " " + playerSelection){
        computerCount = ++computerCount;
    } else {
        playerCount = ++playerCount;
        computerCount = ++computerCount;
    }
    console.log(round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);
}

    

    

    
}

console.log(game());