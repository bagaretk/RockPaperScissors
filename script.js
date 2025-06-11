let humanScore = 0;
let computerScore = 0;

const gameStatus = document.querySelector("#gameStatus");

function updateScore(){
    const pScore = document.querySelector("#score");
    pScore.textContent = String(humanScore) + ":" + String(computerScore);    
}
updateScore();
function getComputerChoice(){
    let choice = Math.round(Math.random()*3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice(){
    let option = prompt("Choose: rock | paper | scissors");
    option.toLowerCase();
    return option;
}

function playRound(humanChoice, computerChoice){
    const round = document.querySelector("#round");
    gameStatus.textContent = "";
    switch(humanChoice){
        case "rock":
            if(computerChoice === "paper"){
                computerScore += 1;
                round.textContent = "You lost this round :( Computer picked paper";
            } else if(computerChoice === "scissors"){
                humanScore += 1;
                round.textContent = "You won this round :)  Computer picked scissors";
            } else {
                round.textContent = "Draw";
            }
            break;
        case "paper":
            if(computerChoice === "scissors"){
                computerScore += 1;
                round.textContent = "You lost this round :( Computer picked scissors";
            } else if(computerChoice === "rock"){
                humanScore += 1;
                round.textContent = "You won this round :)  Computer picked rock";
            } else {
                round.textContent = "Draw";
            }
            break;
        case "scissors":
            if(computerChoice === "rock"){
                computerScore += 1;
                round.textContent = "You lost this round :( Computer picked rock";
            } else if(computerChoice === "paper"){
                humanScore += 1;
                round.textContent = "You won this round :)  Computer picked paper";
            } else {
                round.textContent = "Draw";
            }
            break;
        default:
            round.textContent = "Wrong player input";
    }
    updateScore();
    if(humanScore + computerScore >= 5){
        endGame()
        round
    }          
}
function endGame(){
    if(humanScore > computerScore){
        gameStatus.textContent = "Congrats, you won!";
    } else if (humanScore < computerScore){
        gameStatus.textContent = "Nice try! you lost!";
    } else {
        gameStatus.textContent = "DRAW GAME";
    }
    humanScore = 0;
    computerScore = 0;

}
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click",() => {
    playRound("scissors", getComputerChoice());
})
