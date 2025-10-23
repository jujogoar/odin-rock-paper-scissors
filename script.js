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

for (let round = 1; round <= rounds; round++) {
    playRound(getHumanChoice(), getComputerChoice())
}

console.log(`HUMAN SCORE: ${humanScore}`)
console.log(`COMPUTER SCORE: ${computerScore}`)
if (humanScore == computerScore) {
    console.log("DRAW!!!")
} else if (humanScore > computerScore) {
    console.log("HUMAN WINS!!")
} else {
    console.log("COMPUTER WINS!!")
}