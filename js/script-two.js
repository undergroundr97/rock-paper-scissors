let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let match = function (){

function getComputerChoice() {
   let choice = Math.floor(Math.random()*3);
   if(choice == 0) {
    return rock;
   } else if (choice == 1) {
    return paper;
   } else (choice == 2)
    return scissors;
}

function getPlayerChoice() {
    let playerPick = prompt("ROCK PAPER OR SCISSORS");
    let playerChoice = playerPick.toLowerCase();
    if (playerChoice == "rock"){
        return rock;
    } else if (playerChoice == "paper"){
        return paper;
    } else if (playerChoice == "scissors"){
        return scissors;
    } else {
        return console.log("Pick a valid selection");
    }
}
let playerSeleciton = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playerSeleciton, " - Player");
console.log(computerSelection, " - Computer");
    return {
        "playerSelection": playerSeleciton,
        "computerSelection": computerSelection
    }
}

function playRound(playerSeleciton, computerSelection){
    if(playerSeleciton == rock && computerSelection == scissors){
        return console.log("You win, rock beats scissors.");
   } else if (playerSeleciton == rock && computerSelection == paper){
        return console.log("You lose, paper beats rock.");
   } else if (playerSeleciton == paper && computerSelection == rock){
        return console.log("You win, paper beats rock.");
   } else if (playerSeleciton == paper && computerSelection == scissors){
        return console.log("You lose, scissors beats rock.");
   } else if (playerSeleciton == scissors && computerSelection == paper){
        return console.log("You win, scissors beats paper.");
   } else if (playerSeleciton == scissors && computerSelection == rock){
        return console.log("You lose, rock beats scissors.");
   } else (playerSeleciton == computerSelection)
        return console.log("Its a tie!");
}

function game(){
    for (i = 0; i < 5; i++){
        let repeat = match();
        playRound(repeat.playerSelection, repeat.computerSelection);
    }
}  
game();