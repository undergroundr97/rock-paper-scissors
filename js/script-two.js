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
        return console.log("Its a tie pick again"), section.appendChild(scoreBoardTie);;
    } else (playerSeleciton == null)
        return console.log("Pick a valid selection");
}


function winner(){
    if(userScore == 5){
        alert(`YOU WIN WITH ${userScore} POINTS!`), console.log('You are the winner!')
    } else if (computerScore == 5)
        alert(`COMPUTER WINS WITH ${computerScore} POINTS!`), console.log('Computer is the winner')
        else {
            return 
        }
}
function reset (){
    if(userScore == 5 || computerScore == 5){ 
        return console.log("!Game over!"), userScore = parseInt(0), computerScore = parseInt(0), scoreBoard.textContent = `You won ${userScore} times and Computer won ${computerScore} times.`;
    }
}

const section = document.querySelector('#play');
const divScore = document.createElement('div')
section.appendChild(divScore);
divScore.setAttribute('class', 'playBtns')
const rockButton = document.createElement('button');
divScore.appendChild(rockButton);
rockButton.textContent = "ROCK!";
rockButton.setAttribute('class', 'playBtn');
const paperButton = document.createElement('button');
divScore.appendChild(paperButton);
paperButton.textContent = "PAPER!";
paperButton.setAttribute('class', 'playBtn');
const scissorsButton = document.createElement('button');
scissorsButton.textContent= "SCISSORS!";
divScore.appendChild(scissorsButton);
scissorsButton.setAttribute('class', 'playBtn');
const scoreBoard = document.createElement('p');
scoreBoard.textContent = `You won ${userScore} times and Computer won ${computerScore} times.`
section.appendChild(scoreBoard);
rockButton.addEventListener('click', () => {
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

