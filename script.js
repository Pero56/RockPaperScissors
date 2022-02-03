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
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerPlay().toUpperCase();
    if(computerSelection == playerSelection){
        return 0;
    }else if(
        (computerSelection == "ROCK" && playerSelection == "SCISSORS") || 
        (computerSelection == "SCISSORS" && playerSelection == "PAPER") || 
        (computerSelection == "PAPER" && playerSelection == "ROCK")
    ) {return 1 }else{
        return 2
    }
    
}

function game(){

    let compScore = 0;
    let playerScore = 0;

    for(let i=0;i<5;i++){
        if(oneRound(prompt("Rock, Paper, Scissors")) == 0){
            console.log("Tie")
        }else if(oneRound(prompt("Rock, Paper, Scissors")) == 1){
            compScore += 1;
        }else{
            playerScore += 1;
        }
    }
    if(compScore == playerScore){
        console.log("Ahh its a draw")
    }else if(compScore > playerScore){
        console.log("Comp won")
    }else console.log("Player won")
}
