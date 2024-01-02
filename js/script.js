

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerSelectionPrompt = prompt("ROCK PAPER OR SCISSORS");

function playerChoice() {
    return playerSelectionPrompt.toLowerCase();
}

function getComputerChoice() {
   let choice = Math.floor(Math.random()*3);
   if(choice == 0) {
    return rock;
   } else if (choice == 1) {
    return paper;
   } else (choice == 2)
    return scissors;
}


function playerSelectionChoice(){
    if(playerChoice() == "rock"){
        return rock;
    } else if (playerChoice() == "paper"){
        return paper;
    } else if (playerChoice() == "scissors"){
        return scissors;
    } else {
        console.log("Not a valid option, pick it again!")
    }
}

let playerSelection = playerSelectionChoice();

computerSelection = getComputerChoice();
console.log(playerSelection, " - This is your pick");
console.log(computerSelection, " - This is computer pick");

function playRound(playerSelection, computerSelection){
   if(playerSelection == rock && computerSelection == scissors){
        return console.log("You win, rock beats scissors.");
   } else if (playerSelection == rock && computerSelection == paper){
        return console.log("You lose, paper beats rock.");
   } else if (playerSelection == paper && computerSelection == rock){
        return console.log("You win, paper beats rock.");
   } else if (playerSelection == paper && computerSelection == scissors){
        return console.log("You lose, scissors beats rock.");
   } else if (playerSelection == scissors && computerSelection == paper){
        return console.log("You win, scissors beats paper.");
   } else if (playerSelection == scissors && computerSelection == rock){
        return console.log("You lose, rock beats scissors.");
   } else (playerSelection == computerSelection)
        return console.log("Its a tie!");
}
playRound(playerSelection, computerSelection);