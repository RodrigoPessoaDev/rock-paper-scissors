//Defining variable for game options and creating a function that outputs a random computer choice
let choice = ["Rock","Paper","Scissors"];
//const playerSelection = prompt("Rock, Paper or Scissors?");
//const computerSelection = getComputerChoice(choice);
let playerCount = 0;
let computerCount = 0;
let round = 0;

function getComputerChoice (choice){
    return choice [Math.floor(Math.random()*choice.length)];
}

function getPlayerChoice(playerchoice){
    return playerchoice = prompt("Rock, Paper or Scissors?");
}

function playRound(playerSelection,computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice(choice);
    round = ++round;

    if(playerSelection === "Rock" && computerSelection === "Scissors" ||
       playerSelection === "Scissors" && computerSelection === "Paper"||
       playerSelection === "Paper" && computerSelection === "Rock"){
        playerCount = ++playerCount;
        return "Player wins!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
    } else if (playerSelection === computerSelection){
        return "It\'s a tie!";
    } else {
        computerCount = ++computerCount;
        return "Computer wins!" + " " + computerSelection + " " + "beats" + " " + playerSelection;
    }

    
}



function game(){
    

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

    console.log(playRound());
    console.log("Round " + round);
    console.log("Player:"+ playerCount);
    console.log("Computer:"+ computerCount);

    if(playerCount>computerCount){
        return "Player wins! Good job!"
    } else if(computerCount>playerCount){
        return "Computer wins! Nice try, better luck next time!"
    }else {
        return "It's a tie! Well done!"
    }
}


console.log(game());