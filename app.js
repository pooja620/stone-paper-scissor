const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const userSelect = document.getElementById("user_select");
const computerSelect = document.getElementById("computer_select");
const winner = document.getElementById("winner");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

let userChoice;
let score = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    checkWinner();
  });
});

reset.addEventListener("click", () => {
  main.style.display = "flex";
  selection.style.display = "none";
  computerSelect.style.animation = '';
  userSelect.style.animation = '';
});

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const choices = ["paper", "rock", "scissors"];

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(point) {
  score += point;
  scoreEl.innerText = score;
}

function checkWinner() {
  const computerChoice = pickRandomChoice();

  updateSelection(userSelect, userChoice);
  updateSelection(computerSelect, computerChoice);

  if (userChoice === computerChoice) {
    winner.innerText = `It's a Draw!`;
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1);
    winner.innerText = "You Win!";
    userSelect.style.animation = 'win 1s linear infinite 0.5s';
  } else {
    updateScore(-1);
    winner.innerText = "You Lose!";
    computerSelect.style.animation = 'win 1s linear infinite 0.5s';
  }

  main.style.display = "none";
  selection.style.display = "flex";
}

function updateSelection(selectionEl, choice) {
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");

  selectionEl.classList.add(`btn-${choice}`);
  selectionEl.querySelector("img").src = `./images/icon-${choice}.svg`;
  selectionEl.querySelector("img").alt = choice;
}
