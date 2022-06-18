// DOM elements
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const winModal = document.querySelector(".win");
let userResult = document.querySelector(".userResult");
let computerResult = document.querySelector(".computerResult");
let userScoreEl = document.querySelector(".user-score");
let compScoreEl = document.querySelector(".comp-score");
let winnerEl = document.querySelector(".winner");
let playAgain = document.querySelector(".again");

let userScore = 0;
let compScore = 0;
let outcome = ["Rock", "Paper", "Scissors"];
let computerSelected = "";

function game() {
  if (userScore == 5) {
    winModal.style.display = "block";
    playAgain.style.display = "block";
    winnerEl.textContent = "You have won the game 🎉";
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = "";
    compScoreEl.textContent = "";
    userResult.textContent = "";
    computerResult.textContent = "";
  } else if (compScore == 5) {
    winModal.style.display = "block";
    playAgain.style.display = "block";
    winnerEl.textContent = "Oh no, you have failed this time 😓";
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = "";
    compScoreEl.textContent = "";
    userResult.textContent = "";
    computerResult.textContent = "";
  }
}

playAgain.addEventListener("click", () => {
  winModal.style.display = "none";
  playAgain.style.display = "none";
});

function computerChooses() {
  let randomOutcome = Math.trunc(Math.random() * (2 + 1));
  computerSelected = outcome[randomOutcome];
  computerResult.textContent = computerSelected;
}

rock.addEventListener("click", () => {
  userResult.textContent = "Rock";
  computerChooses();
  if (computerSelected == "Scissors") {
    userScore += 1;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  } else if (computerSelected == "Paper") {
    compScore += 1;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  } else {
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  }
  game();
});
scissors.addEventListener("click", () => {
  userResult.textContent = "Scissors";
  computerChooses();
  if (computerSelected == "Paper") {
    userScore += 1;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  } else if (computerSelected == "Rock") {
    compScore += 1;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  } else {
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  }
  game();
});
paper.addEventListener("click", () => {
  userResult.textContent = "Paper";
  computerChooses();
  if (computerSelected == "Rock") {
    userScore += 1;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  } else if (computerSelected == "Scissors") {
    compScore += 1;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  } else {
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  }
  game();
});
