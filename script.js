const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const display = document.querySelector('.display');
const score = document.querySelector('.score');
const p = document.createElement('p');
display.appendChild(p);


rockBtn.addEventListener('click',() => oneRound("ROCK", computerPlay()));
paperBtn.addEventListener('click',() => oneRound("PAPER", computerPlay()));
scissorsBtn.addEventListener('click',() => oneRound("SCISSORS", computerPlay()));

let playerScore = 0;
let compScore = 0;
let result

function computerPlay(){
    let n = Math.floor(Math.random()*3);

    switch(n){
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
};

function oneRound(playerSelection, computerSelection){    
    if(computerSelection == playerSelection){
        p.textContent = "Its a tie";
        gameOver(playerScore,compScore);
        console.log("Tie",playerSelection,computerSelection);
    }else if(
        (computerSelection == "ROCK" && playerSelection == "SCISSORS") || 
        (computerSelection == "SCISSORS" && playerSelection == "PAPER") || 
        (computerSelection == "PAPER" && playerSelection == "ROCK")
    ) {
    p.textContent="Comp wins";
    compScore += 1;
    gameOver(playerScore, compScore);
        console.log("Comp wins",playerSelection,computerSelection);}else{
        p.textContent="Player wins";
        playerScore += 1;
        gameOver(playerScore, compScore);
            console.log("Player wins",playerSelection,computerSelection);
    }
    
}

function gameOver(score1, score2){
    console.log(playerScore,compScore)
    score.textContent = playerScore + " " + compScore;
    if(score1 == 5 || score2 == 5){
        playerScore = 0;
        compScore = 0;
        score.textContent = "Game over";
    }
}
/*
function game(){

    let compScore = 0;
    let playerScore = 0;

    for(let i=0;i<5;i++){
        let n = prompt("Rock, Paper, Scissors");
        if(oneRound(n) == 0){
            console.log("Tie")
        }else if(oneRound(n) == 1){
            console.log("Computer wins");
            compScore += 1;
        }else{
            console.log("Player wins");
            playerScore += 1;
        }
    }
    if(compScore == playerScore){
        console.log("Ahh its a draw")
    }else if(compScore > playerScore){
        console.log("Comp won")
    }else console.log("Player won")
}
*/

