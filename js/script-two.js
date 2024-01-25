let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let userScore = parseInt(0);
let computerScore = parseInt(0);

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

let playerSeleciton = playerChoice;
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
        return userScore++, console.log("You win, rock beats scissors.");
   } else if (playerSeleciton == rock && computerSelection == paper){
        return computerScore++, console.log("You lose, paper beats rock.");
   } else if (playerSeleciton == paper && computerSelection == rock){
        return userScore++, console.log("You win, paper beats rock.");
   } else if (playerSeleciton == paper && computerSelection == scissors){
        return computerScore++, console.log("You lose, scissors beats rock.");
   } else if (playerSeleciton == scissors && computerSelection == paper){
        return userScore++, console.log("You win, scissors beats paper.");
   } else if (playerSeleciton == scissors && computerSelection == rock){
        return computerScore++, console.log("You lose, rock beats scissors.");
   } else if (playerSeleciton == computerSelection){
        return ("Its a tie pick again");
    } else (playerSeleciton == null)
        return console.log("Pick a valid selection");
}

function game(){
        let repeat = match();
        playRound(repeat.playerSelection, repeat.computerSelection);
}  

function winner(){
    if(userScore >= 3){
        return alert(`YOU WINT WITH ${userScore} POINTS!`), console.log('You are the winner!')
    } else (computerScore >= 3)
        return alert(`COMPUTER WINS WITH ${computerScore} POINTS!`), console.log('Computer is the winner')
}

console.log(userScore, " - This is your score");
console.log(computerScore, " - This is computer score");

const scoreBoard = document.querySelector('#play');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
paperButton.textContent = "PAPER!";
scissorsButton.textContent= "SCISSORS!";
rockButton.textContent = "ROCK!";
scoreBoard.appendChild(rockButton);
scoreBoard.appendChild(paperButton);
scoreBoard.appendChild(scissorsButton);

rockButton,addEventListener('click', () => {
    return playerChoice = rock, game();
})

scissorsButton.addEventListener('click', () => {
    return playerChoice = scissors, game();
})

paperButton.addEventListener('click', () => {
    return playerChoice == paper, playRound();
})