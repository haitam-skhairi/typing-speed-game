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
  Easy: 10,
  Normal: 3,
  Hard: 2,
};

// Getting the Elements

let container = document.querySelector(".container");
let level = document.querySelector(".head-text .level");
let seconds = document.querySelector(".head-text .seconds");
let startPlaying = document.querySelector(".start-playing");
let input = document.querySelector(".input");
let upComingWord = document.querySelector(".up-coming-word");
let theWord = document.querySelector(".the-word");
let timeLeft = document.querySelector(".foot-text .time-left");
let wordsNumber = document.querySelector(".foot-text .words-number");

// level

level.innerHTML = "Easy";
seconds.innerHTML = levels.Easy;
wordsNumber.innerHTML = words.length;

// Controle footer
timeLeft.innerHTML = levels.Easy;

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
  // console
  console.log(randomizeWord);
  console.log(wordsIndex);

  // Calling the Words from the Array
  let restWords = document.querySelector(".rest-words");

  for (let i = 0; i < words.length; i++) {
    let wordSpan = document.createElement("span");
    let wordText = document.createTextNode(words[i]);
    wordSpan.appendChild(wordText);
    restWords.appendChild(wordSpan);
  }

  // Count down timer
  let countDown = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML == "0") {
      clearInterval(countDown);

      if (
        theWord.innerHTML.toLocaleLowerCase() ===
        input.value.toLocaleLowerCase()
      ) {
        randomize();
        input.value = "";
        timeLeft.innerHTML = levels.Easy;
      }

      // Game over
      // let gameOver = document.createElement("div");
      // let gameOverText = document.createTextNode("Game Over");
      // gameOver.classList.add("game-over");
      // gameOver.appendChild(gameOverText);
      // document.body.appendChild(gameOver);
    }
  }, 1000);
}
