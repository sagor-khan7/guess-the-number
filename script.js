"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function updateScore(score) {
  document.querySelector(".score").textContent = score;
}

function updateSecretNumber(secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    updateSecretNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score -= 1;
      updateScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      updateScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  updateScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateSecretNumber(secretNumber);

  displayMessage("Start guessing...");
  updateScore(score);
  updateSecretNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
