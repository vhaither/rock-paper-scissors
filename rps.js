const getComputerChoice = () => {
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*3)]
}

const playRound = (playerSelection, computerSelection)=>{
    if (playerSelection == computerSelection){
        return alert("It's a tie!")
    } 
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            return alert("You lose! Paper beats Rock.") 
        }
        else return alert("You win! Rock beats Scissors.")
    }
    else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors'){
            return alert("You lose! Scissors beats Paper.") 
        }
        else return alert("You win! Paper beats Rock.")
    }
    else if (playerSelection == 'scissors'){
        if (computerSelection == 'paper'){
            return alert("You lose! Rock beats Scissors.") 
        }
        else return alert("You win! Scissors beats Paper.")
    }
}

const game = () => {
    const playerSelection  = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    console.log(playerSelection, computerSelection)
}

for (let i=0; i<5; i++){
    game();
}