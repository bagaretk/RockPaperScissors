let humanScore = 0;
let computerScore = 0;

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
    switch(humanChoice){
        case "rock":
            if(computerChoice === "paper"){
                computerScore += 1;
                console.log("You lost this round :( Computer picked paper");
            } else if(computerChoice === "scissors"){
                humanScore += 1;
                console.log("You won this round :)  Computer picked scissors");
            } else {
                console.log("Draw");
            }
            break;
        case "paper":
            if(computerChoice === "scissors"){
                computerScore += 1;
                console.log("You lost this round :( Computer picked scissors");
            } else if(computerChoice === "rock"){
                humanScore += 1;
                console.log("You won this round :)  Computer picked rock");
            } else {
                console.log("Draw");
            }
            break;
        case "scissors":
            if(computerChoice === "rock"){
                computerScore += 1;
                console.log("You lost this round :( Computer picked rock");
            } else if(computerChoice === "paper"){
                humanScore += 1;
                console.log("You won this round :)  Computer picked paper");
            } else {
                console.log("Draw");
            }
            break;
        default:
            console.log("Wrong player input");
    }          
}
function playGame(){
    let humanSelection;
    let computerSelection;
    for(let i=0;i<=4;i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("Congrats, you won!");
    } else if (humanScore < computerScore){
        console.log("Nice try! you lost!");
    } else {
        console.log("DRAW GAME");
    }
}

playGame();