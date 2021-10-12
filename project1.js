"use strict";

/*console.log(document.querySelector(".start-guess").textContent);
document.querySelector(".start-guess").textContent = "👏🏻 Correct number!";

document.querySelector("#result").textContent = 13;
document.querySelector(".new-score").textContent = 10;

document.querySelector("#put-number").value = 18;
console.log(document.querySelector("#put-number").value);*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Refactor 78.
const displayMessage = function (message) {
  document.querySelector(".start-guess").textContent = message;
};

document.querySelector("#result-button").addEventListener("click", function () {
  //console.log(document.querySelector("#put-number").value);
  const guess = Number(document.querySelector("#put-number").value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    // Refactor
    displayMessage("❌ No number! ❌");
    //document.querySelector(".start-guess").textContent = "❌ No number! ❌";

    // when Player wins
  } else if (guess === secretNumber) {
    // Refactor
    displayMessage("🌟🌟 Correct number! 🎉🎉");
    //document.querySelector(".start-guess").textContent =
    //"🌟🌟 Correct number! 🎉🎉";

    document.querySelector("#result").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#7FFFD4";

    document.querySelector("#result").style.width = "20rem";

    //high score

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscores").textContent = highScore;
    }

    // เป็นการเขียนโค๊ดแบบ refactor โดยที่นี้เอา guess > < secretNumber มารวมกันไว้ เพราะโค้ดมันซ้ำกัน duplicate อันนี้คืิอรวม ถ้าไม่รวมจะเป็นแบบข้างล่าง ที่แยกเป็น 2 อันนะ 78.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Refactor
      displayMessage(
        guess > secretNumber ? "❌ Too High! 📈" : "❌ Too Low! 📉"
      );

      //document.querySelector(".start-guess").textContent =
      //guess > secretNumber ? "❌ Too High! 📈" : "❌ Too Low! 📉";
      score--;
      document.querySelector(".new-score").textContent = score;
    } else {
      // Refactor
      displayMessage("⛔️ You lost the game! ⛔️");
      //document.querySelector(".start-guess").textContent =
      //"⛔️ You lost the game! ⛔️";
      document.querySelector(".new-score").textContent = 0;
    }

    // when guess is too high
  } /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".start-guess").textContent = "❌ Too High! 📈";
      score--;
      document.querySelector(".new-score").textContent = score;
    } else {
      document.querySelector(".start-guess").textContent =
        "⛔️ You lost the game! ⛔️";
      document.querySelector(".new-score").textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".start-guess").textContent = "❌ Too Low! 📉";
      score--;
      document.querySelector(".new-score").textContent = score;
    } else {
      document.querySelector(".start-guess").textContent =
        "⛔️ You lost the game! ⛔️";
      document.querySelector(".new-score").textContent = 0;
    }
  }*/
});

// Again
document.querySelector("#again-button").addEventListener("click", function () {
  score = 20;
  document.querySelector(".new-score").textContent = score;
  // Refactor
  displayMessage("Start guessing ...");
  //document.querySelector(".start-guess").textContent = "Start guessing ...";

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("#result").textContent = "?";
  document.querySelector("#result").style.width = "10rem";
  document.querySelector("#put-number").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(21, 35, 58)";
});
