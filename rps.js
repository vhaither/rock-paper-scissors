let winCount = 0;
let lossCount = 0;

const getComputerChoice = () => {
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*3)]
}

const playRound = (playerSelection, computerSelection)=>{

    if (lossCount >= 5){
        resultsBlock.textContent="You lost the match! Reload the page and to try again.";
        resultsBlock.style.color = 'red';
        return ;
    }

    if (winCount >= 5){
        resultsBlock.textContent="You won the match! Reload the page and to play again.";
        resultsBlock.style.color = 'green';
        return ;
    }

    if (playerSelection == computerSelection){
        resultsBlock.textContent="It's a tie!"
        resultsBlock.style.color = 'gray';
    } 
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            resultsBlock.textContent="You lose! Paper beats Rock.";
            resultsBlock.style.color = 'red';
            lossCount+=1;
        }
        else {
            resultsBlock.textContent="You win! Rock beats Scissors."
            resultsBlock.style.color = 'green';
            winCount += 1;
        }
    }
    else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors'){
            resultsBlock.textContent="You lose! Scissors beats Paper.";
            resultsBlock.style.color = 'red';
            lossCount+=1;
        }
        else {
            resultsBlock.textContent="You win! Paper beats Rock."
            resultsBlock.style.color = 'green';
            winCount += 1;
        }
    }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            resultsBlock.textContent="You lose! Rock beats Scissors.";
            resultsBlock.style.color = 'red';
            lossCount+=1;
        }
        else {
            resultsBlock.textContent="You win! Scissors beats Paper.";
            resultsBlock.style.color = 'green';
            winCount += 1;
        }
    }

    playerScoreBlock.textContent = winCount;
    computerScoreBlock.textContent = lossCount;
    playerPickBlock.textContent = playerSelection.toUpperCase();
    computerPickBlock.textContent = computerSelection.toUpperCase();

    if (lossCount >= 5){
        resultsBlock.textContent="You lost the match! Reload the page and to try again.";
        resultsBlock.style.color = 'red';
        return ;
    }

    if (winCount >= 5){
        resultsBlock.textContent="You won the match! Click the button below to play again.";
        resultsBlock.style.color = 'green';
        return ;
    }
}

const rockButton = document.querySelector('button.rock');
const paperButton = document.querySelector('button.paper');
const scissorsButton = document.querySelector('button.scissors');
const resultsBlock = document.querySelector('.gameResult');
const playerScoreBlock = document.querySelector('.playerScoreBlock');
const computerScoreBlock = document.querySelector('.botScoreBlock');
const playerPickBlock = document.querySelector('.myPick');
const computerPickBlock = document.querySelector('.computerPick');
const resetButton = document.querySelector('button.restart');

document.querySelectorAll('.rpsButtons').forEach(button => {
    button.addEventListener('click', (e) =>{
        const playerSelection = e.target.innerText.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log(playerSelection, computerSelection);
    } )
})

resetButton.addEventListener('click', (e)=>{
    winCount = 0;
    lossCount = 0;
    playerScoreBlock.textContent = winCount;
    computerScoreBlock.textContent = lossCount;
    resultsBlock.textContent="";
    playerPickBlock.textContent = '...';
    computerPickBlock.textContent = '...';
})

const game = () => {
    const playerSelection  = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    console.log(playerSelection, computerSelection)
}