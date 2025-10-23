const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    return choices[prompt("Please enter your choice between 1 and 3 (1: rock, 2: paper, 3: scissors)")]
}

function playRound(humanChoice, computerChoice) {

    console.log(`HUMAN: ${humanChoice} VS COMPUTER: ${computerChoice}`)

    if (humanChoice == computerChoice) {
        console.log("DRAW!")
        return
    }

    if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        console.log("COMPUTER WINS ROUND!")
        computerScore++
        return
    }

    if ((computerChoice == "rock" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "scissors") ||
        (computerChoice == "scissors" && humanChoice == "rock")
    ) {
        console.log("HUMAN WINS ROUND!")
        humanScore++
        return
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)