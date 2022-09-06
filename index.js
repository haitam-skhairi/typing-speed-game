// Hello JS

const words = [
  "Work",
  "Hi",
  "Programmig",
  "Example",
  "Job",
  "Film",
  "Race",
  "Sport",
  "Communication",
  "Compitition",
  "Coffee",
  "Name",
  "City",
  "Baby",
  "Ugly",
  "CSS",
  "Repeat",
  "Okey",
  "Morocco",
  "JavaScript",
];

// Levels

let levels = {
  easy: 5,
  normal: 3,
  hard: 2,
};

// Getting the Elements
let game = document.querySelector(".game");
let container = document.querySelector(".container");
let level = document.querySelector(".head-text .level");
let seconds = document.querySelector(".head-text .seconds");
let startPlaying = document.querySelector(".start-playing");
let input = document.querySelector(".input");
let upComingWord = document.querySelector(".up-coming-word");
let theWord = document.querySelector(".the-word");
let timeLeft = document.querySelector(".foot-text .time-left");
let wordsNumber = document.querySelector(".foot-text .words-number");
let score = document.querySelector(".foot-text .score");

// level

level.innerHTML = "easy";
seconds.innerHTML = levels.easy;
wordsNumber.innerHTML = words.length;

// Controle footer
timeLeft.innerHTML = levels.easy;

// Input retunt false on paste
input.onpaste = function () {
  return false;
};

// Radomize Function

startPlaying.onclick = function () {
  this.remove();
  input.focus();

  // Generate Word Function
  randomize();
};

function randomize() {
  let randomizeWord = words[Math.floor(Math.random() * words.length)];

  // Get index word
  let wordsIndex = words.indexOf(randomizeWord);

  // Remove Word From Array
  words.splice(wordsIndex, 1);

  // Empty Up Coming Word
  upComingWord.innerHTML = "";

  // Calling the randomize word
  theWord.innerHTML = randomizeWord;

  // Create the Words from the Array
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    div.appendChild(text);
    upComingWord.appendChild(div);
  }

  // startPlay Function
  startPlay();
}

function startPlay() {
  timeLeft.innerHTML = levels.easy;
  // Count down timer
  let countDown = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML == "0") {
      clearInterval(countDown);

      // Compare Words
      if (
        theWord.innerHTML.toLocaleLowerCase() ===
        input.value.toLocaleLowerCase()
      ) {
        input.value = "";
        score.innerHTML++;
        console.log(words.length);
        if (words.length > 0) {
          randomize();
        } else {
          // Congratulations
          let span = document.createElement("span");
          let text = document.createTextNode("Congratulations");
          span.className = "congratulations";
          span.appendChild(text);
          document.body.appendChild(span);
        }
      } else {
        // Game over
        let gameOver = document.createElement("div");
        let gameOverText = document.createTextNode("Game Over");
        gameOver.className = "game-over";
        gameOver.appendChild(gameOverText);
        game.appendChild(gameOver);
      }
    }
  }, 1000);
}
