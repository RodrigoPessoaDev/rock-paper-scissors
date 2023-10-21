//Define options for ComputerRandomizer to choose from
let choice = ["Rock","Paper","Scissors"];
//Create variables for player and computer score, and variable to keep track of game round
let playerCount = 0;
let computerCount = 0;
let round = 0;

//Create function so that Computer randomly chooses from "Rock, Paper,Scissors"
function getComputerChoice (choice){
    return choice [Math.floor(Math.random()*choice.length)];
}

//Create function to ask user what option will it choose via prompt pop up
function getPlayerChoice(playerchoice){
    return playerchoice = prompt("Rock, Paper or Scissors?");
}

//Create a round for the game. Get player and computer input
function playRound(playerSelection,computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice(choice);
//Update round variable with incrementation    
    round = ++round;

//Conditions to pick winner. Rock > Scissors > Paper > Rock
    if(playerSelection === "Rock" && computerSelection === "Scissors" ||
       playerSelection === "Scissors" && computerSelection === "Paper"||
       playerSelection === "Paper" && computerSelection === "Rock"){

//If player wins, display message and increment player score.
        playerCount = ++playerCount;
        return "Player wins!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
    } else if (playerSelection === computerSelection){

//If both player and computer choose the same, display a tie
        return "It\'s a tie!";
    } else {

//If none of the above, then display computer wins and increment computer score
        computerCount = ++computerCount;
        return "Computer wins!" + " " + computerSelection + " " + "beats" + " " + playerSelection;
    }  
}


//Create a function that simulates 5 rounds
function game(){
    
//Call play function
    console.log(playRound());
//Display scores and round
    console.log("Round " + round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);

    console.log(playRound());
    console.log("Round " + round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);

    console.log(playRound());
    console.log("Round " + round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);

    console.log(playRound());
    console.log("Round " + round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);

    console.log(playRound());
    console.log("Round " + round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);

//Decide and display winner by analising score
    if(playerCount>computerCount){
        return "Player wins! Good job!"
    } else if(computerCount>playerCount){
        return "Computer wins! Nice try, better luck next time!"
    }else {
        return "It's a tie! Well done!"
    }
}


console.log(game());