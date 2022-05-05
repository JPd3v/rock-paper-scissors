function computerPlay() {
    let randomNumber = Math.floor((Math.random()) * 3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    }
}

function playRound(computerSelection) {
    let playerSelection = prompt("select write rock, paper or scissors").toLowerCase();

    if (playerSelection === computerSelection) {
        return `its a tie`
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        winnerCase()
        return "you win, rock beats scissors"
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        winnerCase()
        return "you win, paper beat rock"
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        winnerCase()
        return "you win, paper beat rock"
    }

    else {
        loserCase()
        return `you lose, ${computerSelection} beat ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(computerPlay())
    }

    if (playerScore > computerScore) {
        ScoreReset()
        return "Player WINS"
    } else if (computerScore > playerScore) {
        ScoreReset()
        return "Computer WINS"
    } else {
        ScoreReset()
        return "IT'S A TIE"
    }
}

let playerScore = 0
let computerScore = 0

function winnerCase() {
    return ++playerScore
}

function loserCase() {
    return ++computerScore
}

function ScoreReset() {
    playerScore = 0
    computerScore = 0
}
