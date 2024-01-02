

let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";
let playerChoicePrompt = prompt("What is your choice?");
let playerChoice = playerChoicePrompt.slice(0).toLowerCase();

function playerChoiceFunction() {
    if (playerChoice == 'rock'){
        return rock;
    }
    else if (playerChoice == 'scissors'){
        return scissors;
    }
    else if (playerChoice == 'paper'){
        return paper;
    }
    else {
        console.log("Not a valid option, pick rock, paper or scissors");
    }
}
console.log(playerChoiceFunction()); 
console.log("PLAYER CHOICE ABOVE");
function getComputerChoice() {
   let choice = Math.floor(Math.random()*3);
   if(choice === 0) {
    return rock;
   } else if (choice === 1) {
    return paper;
   } else (choice === 2)
    return scissors;
}
console.log(getComputerChoice());
console.log("COMPUTER CHOICE ABOVE");
let computerSelection = getComputerChoice();
let playerSelection = playerChoiceFunction();
function realGame(computerSelection, playerSelection){
    if (computerSelection == playerChoice) {
        console.log("It's a TIE!");
        return playerChoicePrompt;
    } else if (computerSelection === rock && playerSelection === paper){
        return console.log("Player WINS!");
    } else if (computerSelection === rock && playerSelection === scissors){
        return console.log("Computer WINS!");
    } else if (computerSelection === paper && playerSelection === rock){
        return console.log("Computer WINS!");
    } else if (computerSelection === scissors && playerSelection === rock){
        return console.log("Player WINS!");
    } else if (computerSelection === scissors && playerSelection === paper){
        return console.log("Computer WINS!");
    } else if (computerSelection === paper && playerSelection === scissors)
        return console.log("Player WINS!");
        else {
            return
        }
}
realGame(computerSelection, playerSelection);

