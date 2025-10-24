const choices = ["rock", "paper", "scissors"]
const rounds = 5
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * (choices.length - 1))]
}

function getHumanChoice() {
    return choices[prompt("Please enter your choice between 1 and 3 (1: rock, 2: paper, 3: scissors)") - 1]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return
    }

    if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        computerScore++
        return
    }

    if ((computerChoice == "rock" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "scissors") ||
        (computerChoice == "scissors" && humanChoice == "rock")
    ) {
        humanScore++
        return
    }
}