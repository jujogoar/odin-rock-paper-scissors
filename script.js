const choices = ["rock", "paper", "scissors"]
const rounds = 5
let round = 1
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

function appendTextToResultContainer(text) {
    const resultContainer = document.getElementById("result")
    const resultPContainer = document.createElement("p")
    resultPContainer.append(text)
    resultContainer.append(resultPContainer)
}

document.querySelectorAll("#playerButtons .button").forEach(button => {
    button.addEventListener("click", () => {
        if (round > rounds) {
            return
        }
        
        const humanSelection = button.dataset.option
        const computerSelection = getComputerChoice()
        const resultText = playRound(humanSelection, computerSelection)
        appendTextToResultContainer(`Human: ${humanSelection} vs Computer: ${computerSelection} ... ${resultText}`)

        round++

        if (round > rounds) {
            if (humanScore == computerScore) {
                appendTextToResultContainer("DRAW!!")
            }
            if (humanScore > computerScore) {
                appendTextToResultContainer("HUMAN WINS!!")
            }
            if (humanScore < computerScore) {
                appendTextToResultContainer("COMPUTER WINS!!")
            }
        }

    }, false);
});