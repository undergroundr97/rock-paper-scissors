let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let userScore = parseInt(0);
let computerScore = parseInt(0);

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if(choice == 0) {
     return rock;
    } else if (choice == 1) {
     return paper;
    } else (choice == 2)
     return scissors;
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
        return console.log("Its a tie pick again");
    } else (playerSeleciton == null)
        return console.log("Pick a valid selection");
}


function winner(){
    if(userScore == 5){
        return alert(`YOU WIN WITH ${userScore} POINTS!`), console.log('You are the winner!')
    } else if (computerScore == 5)
        return alert(`COMPUTER WINS WITH ${computerScore} POINTS!`), console.log('Computer is the winner')
        else {
            return 
        }
}
function reset (){
    if(userScore == 5 || computerScore == 5){ 
        return userScore = parseInt(0), computerScore = parseInt(0);
    }
}

const section = document.querySelector('section');
const divScore = document.createElement('div')
section.appendChild(divScore);
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
paperButton.textContent = "PAPER!";
scissorsButton.textContent= "SCISSORS!";
rockButton.textContent = "ROCK!";
divScore.appendChild(rockButton);
divScore.appendChild(paperButton);
divScore.appendChild(scissorsButton);
const scoreBoard = document.createElement('p');
scoreBoard.textContent = `You won ${userScore} times and Computer won ${computerScore} times.`
section.appendChild(scoreBoard);

rockButton,addEventListener('click', () => {
    return playerSelection = rock, playRound(playerSelection, getComputerChoice()), scoreBoard.textContent = `You won ${userScore} times and Computer won ${computerScore} times.`, winner(), reset();
})

scissorsButton.addEventListener('click', () => {
    return playerSelection = scissors, playRound(playerSelection, getComputerChoice()), scoreBoard.textContent = `You won ${userScore} times and Computer won ${computerScore} times.`, winner(), reset();
})

paperButton.addEventListener('click', () => {
    return playerSelection = paper, playRound(playerSelection, getComputerChoice()), scoreBoard.textContent = `You won ${userScore} times and Computer won ${computerScore} times.`, winner(), reset();
})

console.log(userScore, " - This is your score");
console.log(computerScore, " - This is computer score");

