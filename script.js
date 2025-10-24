const choices = ["rock", "paper", "scissors"]
const rounds = 5
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * (choices.length - 1))]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "DRAW ROUND!"
    }

    if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        computerScore++
        return "COMPUTER WINS ROUND!"
    }

    if ((computerChoice == "rock" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "scissors") ||
        (computerChoice == "scissors" && humanChoice == "rock")
    ) {
        humanScore++
        return "HUMAN WINS ROUND!"
    }
}