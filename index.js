// Hello JS

const words = [
  "Work",
  "Hi",
  "Programming",
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

// Getting the Elements

let game = document.querySelector(".game");
let selectLevel = document.querySelector(".select-level");
let options = document.querySelectorAll(".options div");
let easyBtn = document.querySelector(".options .easy");
let normalBtn = document.querySelector(".options .normal");
let hardBtn = document.querySelector(".options .hard");
let headText = document.querySelector(".head-text");
let level = document.querySelector(".head-text .level");
let seconds = document.querySelector(".head-text .seconds");
let startPlaying = document.querySelector(".start-playing");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upComingWord = document.querySelector(".up-coming-word");
let footText = document.querySelector(".foot-text");
let timeLeft = document.querySelector(".foot-text .time-left");
let score = document.querySelector(".foot-text .score");
let wordsNumber = document.querySelector(".foot-text .words-number");
let restart = document.querySelector(".game-over .restart");

// Levels

let levels = {
  easy: 7,
  normal: 5,
  hard: 3,
};

// levels & Controle footer

wordsNumber.innerHTML = words.length;

// Options

console.log(options);

options.forEach((el) => {
  el.addEventListener("click", () => {
    options.forEach((el) => {
      el.classList.add("active");
    });
    el.classList.remove("active");
  });
  // console.log(el);
});

// Easy option
easyBtn.onclick = function () {
  headText.style.display = "block";
  startPlaying.style.display = "block";
  level.innerHTML = this.innerHTML;
  seconds.innerHTML = levels.easy;
  timeLeft.innerHTML = levels.easy;
};

// Normal option
normalBtn.onclick = function () {
  headText.style.display = "block";
  startPlaying.style.display = "block";
  level.innerHTML = this.innerHTML;
  seconds.innerHTML = levels.normal;
  timeLeft.innerHTML = levels.normal;
};
// hard option
hardBtn.onclick = function () {
  headText.style.display = "block";
  startPlaying.style.display = "block";
  level.innerHTML = this.innerHTML;
  seconds.innerHTML = levels.hard;
  timeLeft.innerHTML = levels.hard;
};
// Input retunt false on paste

input.onpaste = function () {
  return false;
};

// Block the button before Selecting the level

if ((headText.style.display = "none")) {
  console.log("good");
}

// Radomize Function

startPlaying.onclick = function () {
  this.remove();
  selectLevel.remove();
  upComingWord.style.display = "flex";
  input.style.display = "flex";
  footText.style.display = "flex";
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
  timeLeft.innerHTML = seconds.innerHTML;
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
        // block input
        input.blur();
        // Game over
        let gameOver = document.createElement("div");
        gameOver.className = "game-over";
        // h1
        let gameOverH1 = document.createElement("h1");
        let gameOverH1Text = document.createTextNode("Game Over");
        gameOver.appendChild(gameOverH1);
        gameOverH1.appendChild(gameOverH1Text);
        // restart
        let restart = document.createElement("div");
        let restartText = document.createTextNode("Restart");
        restart.className = "restart";
        restart.appendChild(restartText);
        gameOver.appendChild(restart);
        // total
        game.appendChild(gameOver);

        // restart
        restart.addEventListener("click", () => {
          location.reload();
        });
      }
    }
  }, 1000);
}

console.log(location);
