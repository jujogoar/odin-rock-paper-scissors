const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    return choices[prompt("Please enter your choice between 1 and 3 (1: rock, 2: paper, 3: scissors)")]
}