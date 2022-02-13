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
    let str;
    if(playerSelection=='Paper' && computerSelection=='Rock'){
        str =  'win';
    }
    else if(playerSelection=='Scissor' && computerSelection=='Paper'){
        str = 'win';
    }
    else if(playerSelection=='Rock' && computerSelection=='Scissor'){
        str =  'win';
    }
    else if(playerSelection==computerSelection){
        str =  'draw';
    }
    else{
        str =  'lose';
    }
    return str;

}
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const disRound = document.querySelector('.round');
const winDiv = document.querySelector('.win');
const lossDiv = document.querySelector('.lose');
const drawDiv = document.querySelector('.draw');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
const comSelection = document.querySelector('.comSelection');
comSelection.style.visibility = "hidden";
function restartRound(){
    playerScore = 0;
    computerScore = 0;
    draw = 0;
    round = 0;
    disRound.textContent = "Round 0";
    winDiv.textContent = "Win : 0";
    lossDiv.textContent = "Loss : 0";
    drawDiv.textContent = "Draw : 0";
    result.textContent = "";
    style.visibility = "hidden";
}
function game(playerSelection){
    round = round + 1;
    disRound.textContent = `Round ${round}`;
    comSelection.style.visibility = "visible"; 
    const computerSelection = computerPlay();
    comSelection.textContent = computerSelection;
    let status = whoIsWinner(playerSelection,computerSelection);  //Return Winner: win or loss or draw
    if(status == 'win'){
        playerScore = playerScore + 1;
        winDiv.textContent = `Win : ${playerScore}`;
    }
    else if(status == 'lose'){
        computerScore = computerScore + 1;
        lossDiv.textContent = `Lose : ${computerScore}`;
    }
    else{
        draw = draw + 1;
        drawDiv.textContent = `Draw : ${draw}`;
    }
    if(round==5){
        let dec = "<p>"+`Your Score : ${playerScore}`+"</p>";
        dec += "<p>"+`Computer Score : ${computerScore}`+"</p>";
        if(playerScore > computerScore){
            dec += "<p>You Wins!!</p>"; 
        }
        else if(playerScore == computerScore){ 
            dec += "<p>DRAW!!</p>";
        }
        else{
            dec += "<p>You Lose!!</p>";
        }
        result.innerHTML = dec;
        alert("Round is over!!");
    }
}
rock.addEventListener('click',() => game('Rock'));
paper.addEventListener('click',() => game('Paper'));
scissor.addEventListener('click',() => game('Scissor'));
reset.addEventListener('click',() => restartRound());