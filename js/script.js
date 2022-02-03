function computerPlay(){
    let random = Math.floor(Math.random()*3) + 1;

    if(random==1)  return 'Rock';
    else if(random==2)  return 'Paper';
    else           return 'Scissor';
}
function capatalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function whoIsWinner(playerSelection,computerSelection){
    playerSelection = capatalize(playerSelection);
    computerSelection = capatalize(computerSelection);
    let str = "You ";

    if(playerSelection=='Paper' && computerSelection=='Rock'){
        str+="Win! Rock beats Paper";
        playerScore++;
    }
    else if(playerSelection=='Scissor' && computerSelection=='Paper'){
        str+="Win! Scissor beats Paper";
        playerScore++;
    }
    else if(playerSelection=='Rock' && computerSelection=='Scissor'){
        str+="Win! Rock beats Scissor";
        playerScore++;
    }
    else if(playerSelection==computerSelection){
        str+="Draw!! ";
    }
    else{
        str+=`Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    
    return str;

}
let playerScore = 0;
let computerScore = 0;
function game(){
    console.log("Welcome to game of Rock Paper Scissors");
    
    playerScore = 0;
    computerScore = 0;
    for(let i=0;i<5;i++){
        const playerSelection = prompt("What do you choose? ");
        const computerSelection = computerPlay();
        let winner = whoIsWinner(playerSelection,computerSelection);
        console.log(winner);
        console.log(`You scored ${playerScore}/5`);
    }

    console.log("Player Score : "+ playerScore);
    console.log("Computer Score : " + computerScore);
    if(playerScore > computerScore)  console.log("You Win!!");
    else if(playerScore == computerScore) console.log("Its a Draw!");
    else console.log("You Lose!!");
}