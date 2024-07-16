function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    var userChoice = prompt("Enter rock, paper, or scissors: ");
    return userChoice;
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(getHumanChoice, getComputerChoice) {
        getHumanChoice = getHumanChoice();
        getComputerChoice = getComputerChoice();
        var humanSelection = getHumanChoice.toLowerCase();
        var computerSelection = getComputerChoice.toLowerCase();
    
        if (humanSelection === computerSelection) {
            console.log("It's a tie!");
        }
        else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        else if (humanSelection === 'rock' && computerSelection === 'paper') {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }
        else if (humanSelection === 'paper' && computerSelection === 'rock') {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if (humanSelection === 'paper' && computerSelection === 'scissors') {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
        else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
        else if (humanSelection === 'scissors' && computerSelection === 'rock') {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }

        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    for (var i = 0; i < 5; i++) {
        playRound(getHumanChoice, getComputerChoice);
    }
}

playGame();



