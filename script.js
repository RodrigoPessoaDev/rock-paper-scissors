//Defining variable for game options and creating a function that outputs a random computer choice
let choice = ["rock","paper","scissors"];

function getComputerChoice (choice){
    return choice [Math.floor(Math.random()*choice.length)];
}

console.log(getComputerChoice(choice));