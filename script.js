let playerScore = 0
let computerScore = 0


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

function playRound(e) {
    let playerSelection = `${e.currentTarget.className}`
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        checkWinner()
        return displayResult(`its a tie`)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winnerCase()
        displayScores(playerScore, computerScore)
        checkWinner()
        return displayResult("you win, rock beats scissors")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winnerCase()
        displayScores(playerScore, computerScore)
        checkWinner()
        return displayResult("you win, paper beat rock")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        winnerCase()
        displayScores(playerScore, computerScore)
        checkWinner()
        return displayResult("you win, paper beat rock")
    } else {
        loserCase()
        displayScores(playerScore, computerScore)
        checkWinner()
        return displayResult(`you lose, ${computerSelection} beat ${playerSelection}`)
    }
    
}

buttons = document.querySelectorAll("button")

buttons.forEach(button => button.addEventListener("click", playRound))

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

function displayResult(result) {
    let displayer = document.querySelector(".displayer")
    let newDiv = document.createElement("div")
    newDiv.textContent = result
    return displayer.appendChild(newDiv)
}

function displayScores(player, computer) {
    let scoreboard = document.querySelector(".scoreboard")
    let playerScore = document.querySelector(".player-score")
    let computerScore = document.querySelector(".computer-score")
    playerScore.textContent = player
    computerScore.textContent = computer
    scoreboard.appendChild(playerScore)
    scoreboard.appendChild(computerScore)
}

function displayWinner(winner){
    let body = document.querySelector("body")
    let div = document.createElement("div")
    div.textContent = `${winner} Wins!`
    body.appendChild(div)
}
function checkWinner() {
    if (playerScore === 5) {
        return displayWinner("player")
    } else if (computerScore === 5) {
        return displayWinner("computer")
    }
}
