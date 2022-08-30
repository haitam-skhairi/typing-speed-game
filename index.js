// Hello JS

const words = [
  "work",
  "Hi",
  "Programmig",
  "Example",
  "Job",
  "Film",
  "Race",
  "Sport",
  "Coffee",
  "Name",
];

// Levels

let levels = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

// Getting the Elements

let level = document.querySelector(".head-text .level");
let seconds = document.querySelector(".head-text .seconds");
let startPlaying = document.querySelector(".start-playing");
let input = document.querySelector("input");
let upComingWord = document.querySelector(".up-coming-word");
let timeLeft = document.querySelector(".foot-text .time-left");
let wordsNumber = document.querySelector(".foot-text .words-number");

// level

level.innerHTML = "Normal";
seconds.innerHTML = levels.Normal;
wordsNumber.innerHTML = words.length;

// Calling the Words from the Array

let restWords = document.querySelector(".rest-words");

for (let i = 0; i < words.length; i++) {
  let wordSpan = document.createElement("span");
  let wordText = document.createTextNode(words[i]);
  wordSpan.appendChild(wordText);
  restWords.appendChild(wordSpan);
}

// Radomize Function

startPlaying.onclick = function () {
  this.remove();
  input.focus();
  // call randomize function
  randomize();
};

function randomize() {
  let randomizeWord = words[Math.floor(Math.random() * words.length)];
  upComingWord.innerHTML = randomizeWord;

  let countDown = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML == "0") {
      clearInterval(countDown);
    }
  }, 1000);
  empyInput();
}

function empyInput() {
  if (upComingWord.innerHTML === input.value) {
    input.value.innerHTML = "";
  }
}
