console.log("Hello World")

let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

function playerChoiceFunction() {
    let playerChoice = prompt("What is your choice?");
    return playerChoice.toLowerCase();
    if (playerChoice != rock || paper || scissors){
        console.log("Not a valid choice");
    }
    else if (playerChoice = rock){
        console.log("You picked rock!");
    }
}

function getComputerChoice() {
   let choice = Math.floor(Math.random()*3);
   if(choice === 0) {
    return rock;
   } else if (choice === 1) {
    return paper;
   } else (choice === 2)
    return scissors;
}

