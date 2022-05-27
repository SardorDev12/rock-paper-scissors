let userScore = 0;
let compScore = 0;
let outcome = ["Rock", "Paper", "Scissors"];

function playRound(playerSelected, computerSelected) {
  playerSelected = prompt("Choose one of these: Rock, Paper, Scissors");
  let randomOutcome = Math.trunc(Math.random() * (2 + 1));
  computerSelected = outcome[randomOutcome].toLowerCase();
  console.log(playerSelected);
  console.log(computerSelected);

  if (playerSelected == "rock" && computerSelected == "scissprs") {
    console.log("You won! Rock beats Scissors.");
    userScore += 1;
  } else if (playerSelected == "paper" && computerSelected == "rock") {
    console.log("You won! Paper beats Rock.");
    userScore += 1;
  } else if (playerSelected == "scissors" && computerSelected == "paper") {
    console.log("You won! Scissors beats Paper.");
    userScore += 1;
  } else if (computerSelected == "rock" && playerSelected == "scissors") {
    console.log("You lost! Rock beats Scissors.");
    compScore += 1;
  } else if (computerSelected == "paper" && playerSelected == "rock") {
    console.log("You lost! Paper beats Rock.");
    compScore += 1;
  } else if (computerSelected == "scissors" && playerSelected == "paper") {
    console.log("You lost! Scissors beats Paper.");
    compScore += 1;
  } else {
    console.log("Draw");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (userScore > compScore) {
    console.log(`You have won with the score ${userScore}>${compScore}`);
  } else if (userScore < compScore) {
    console.log(`You have lost with the score ${userScore}<${compScore}`);
  } else {
    console.log(`Draw! with the score ${userScore}<${compScore}`);
  }
}
game();
