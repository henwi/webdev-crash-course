// Refactoring Rock, Paper, Scissors game into functional code
// so that it will ease the process of mapping the function to the DOM later on
// each (helper) function only does one thing only. It's a single responsibility principle.
// The overall code is seemingly long, but the logical flow is easier to reason about.

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, scissors?");
    startGame ? playGame() : alert("Ok, maybe next time");
};

// Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = (playerChoice) => {
    return prompt("Please enter rock, paper, scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decideNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"        
    ) {
      return playerChoice;
    } else {
      return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter: rock, paper, scissors.");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner =
    player === computer 
       ? "Tie game!"
       : player === "rock" && computer === "paper" 
       ? `playerOne: ${player}\nComputer: ${computer} \nComputer wins!`
       : player === "paper" && computer === "scissors" 
       ? `playerOne: ${player}\nComputer: ${computer} \nComputer wins!`
       : player === "scissors" && computer === "rock" 
       ? `player: ${player}\nComputer: ${computer} \nComputer wins!`
       : `player: ${player}\nComputer: ${computer} \nplayerOne wins!`;
    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();


 

