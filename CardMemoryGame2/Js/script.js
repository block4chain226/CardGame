const cards = document.querySelectorAll(".memory__card");
const move = document.querySelector(".info__moves");
const timer = document.querySelector(".info__timer");
move.firstElementChild.textContent = 0 + " Moves";
let lock = false;
let count = 0;
let second = 0,
  minute = 0;
let disableCount = 0;
const resultArray = [];
let moves = 0;
let timerStarted = false;
let hasFlippedCard = false;
let firstCard, secondCard;

function shuffle() {
  cards.forEach((card) => {
    const random = Math.floor(Math.random() * 12);
    card.style.order = random;
  });
}

function flipCard() {
  if (lock) return;
  this.classList.add("flip");
  if (timerStarted === false) {
    timerStarted = true;
    startTimer();
  }
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  } else {
    secondCard = this;
    hasFlippedCard = false;
    compare();
  }
}
timer.textContent = "0 mins 0 secs";
function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = minute + " mins " + second + " secs";
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

function reset() {
  [lock, hasFlippedCard] = [false, false];
  [firstCard.secondCard] = [null, null];
}

function compare() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
  }
  unflipCards();
}
//localStorage.clear();
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  disableCount++;
  moves++;
  move.firstElementChild.textContent = moves;
  if (disableCount === 6) {
    getRating();
  }
  reset();
}

function getRating() {
  clearTimeout(interval);
  if (localStorage.length === 10) {
    localStorage.removeItem(localStorage.length - localStorage.length - 1);
  }
  if (localStorage.length == 0) {
    count += 1;
    resultArray.push(
      moves + " moves ",
      minute + " min ",
      " " + second - 1 + " secs"
    );
    localStorage.setItem(count, resultArray);
  } else {
    count = localStorage.length;
    resultArray.push(
      moves + " moves ",
      minute + " min ",
      " " + second - 1 + " secs"
    );
    localStorage.setItem(++count, resultArray);
  }
  const liderBoard = document.querySelector(".lider-board");
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const p = document.createElement("p");
      console.log(`${key} : ${localStorage.getItem(key)}`);
      p.textContent = `${key} : ${localStorage.getItem(key)}`;
      liderBoard.append(p);
    }
  }
  liderBoard.classList.add("visible");
}

function unflipCards() {
  lock = true;
  moves++;
  move.firstElementChild.textContent = moves + " Moves";
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lock = false;
    reset();
  }, 800);
}
cards.forEach((card) => card.addEventListener("click", flipCard));
shuffle();
//cards.addEventListener("click", flipCard);
