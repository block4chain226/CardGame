const cards = document.querySelector(".cards");
const start = document.querySelector("#start");
let beforeRandomImage = 0;
let gameStarted = false;
let currentCard;
let beforeEventTargets = [];
let clickCount = 0;
let imageMap = [];
let imageCollection = [];
let count = 0;
let liderBoard = [];
let k = 17;
let generalClickCounter = 0;
let generalCardCounter = 0;
let randomMass = [1, 2, 3, 4, 5, 6, 3, 4, 2, 1, 6, 5];
//localStorage.clear();
//functions

function addCards() {
  for (let i = 0; i < 3; i++) {
    const cardsRow = document.createElement("div");
    cardsRow.classList.add("cards__row");
    for (let j = 0; j < 4; j++) {
      const cardsCard = document.createElement("div");
      cardsCard.classList.add("cards__card");
      const img = document.createElement("img");
      const image = getRandomCards();
      img.src = `/img/${image}.jpg`;
      img.style.width = "220px;";
      img.style.height = "200px";
      img.dataset.image = image;
      imageMap.push(img.dataset.image);
      imageCollection.push(img);
      cardsCard.append(img);
      cardsRow.append(cardsCard);
    }
    cards.append(cardsRow);
  }
  console.log(imageMap);
}

function getRandomCards() {
  const random = Math.floor(Math.random() * (randomMass.length - 1 - 0) + 0);
  if (beforeRandomImage !== randomMass[random]) {
    beforeRandomImage = randomMass[random];
    const temp = randomMass[random];
    randomMass.splice(random, 1);
    return temp;
  } else {
    return getRandomCards();
  }
}
function hideCards() {
  if (!gameStarted) {
    images.forEach((img) => {
      img.src = `/img/0.jpg`;
    });
  }
  console.log(document.body.outerHTML);
  gameStarted = true;
}
/////do that opened cards must be not clicable
// function toggleCard(event) {
//   ///first click new card
//   if (
//     gameStarted &&
//     currentCard === undefined &&
//     !event.target.dataset.opened
//   ) {
//     if (event.target.tagName == "IMG" && gameStarted) {
//       generalClickCounter++;
//       currentCard = event.target.dataset.image;
//       //card opened
//       event.target.dataset.opened = "true";
//       //
//       event.target.src = `/img/${event.target.dataset.image}.jpg`;
//       clickCount++;
//       beforeEventTargets.push(event.target);
//     }
//   }
//   if (
//     gameStarted &&
//     currentCard !== undefined &&
//     event.target.dataset.image === currentCard &&
//     clickCount < 2 &&
//     !event.target.dataset.opened
//   ) {
//     //card opened
//     generalClickCounter++;
//     event.target.dataset.opened = "true";
//     //
//     currentCard === event.target.dataset.image;
//     clickCount++;
//     beforeEventTargets.push(event.target);
//     event.target.src = `/img/${event.target.dataset.image}.jpg`;
//     if (clickCount === 2) {
//       beforeEventTargets = [];
//       clickCount = 0;
//       currentCard = undefined;
//       generalCardCounter += 2;
//       if (generalCardCounter === 12) {
//         alert(`Congratulations, you done ${generalClickCounter} moves`);
//         if (localStorage.length == 0) {
//           count += 1;
//           localStorage.setItem(count, generalClickCounter);
//           console.log(localStorage.key(0));
//         } else {
//           count = localStorage.length;
//           localStorage.setItem(++count, generalClickCounter);
//         }
//         showLiderBoard();
//       }
//     }
//   } else if (
//     gameStarted &&
//     currentCard !== undefined &&
//     event.target.dataset.image !== currentCard &&
//     clickCount < 2 &&
//     !event.target.dataset.opened
//   ) {
//     generalClickCounter++;
//     beforeEventTargets.forEach((img) => {
//       delete img.dataset.opened;
//       img.src = "/img/0.jpg";
//       beforeEventTargets = [];
//       clickCount = 0;
//       currentCard = undefined;
//     });
//   }
// }
lockBoard = false;
countClick = 0;
openedCollection = [];
eventTargetTemp = [];
function compareTwoCards(event) {
  if (
    event.target.tagName == "IMG" &&
    gameStarted &&
    !event.target.dataset.opened
  ) {
    countClick++;
    if (countClick === 1) {
      currentCard = event.target.dataset.image;
    }
    //card opened
    event.target.dataset.opened = "true";
    event.target.src = `/img/${event.target.dataset.image}.jpg`;
    /////
    eventTargetTemp.push(event.target.dataset.image);
    /////
    beforeEventTargets.push(event.target);
    console.log(event.target);
  }
  if (countClick === 2 && event.target.dataset.image === currentCard) {
    countClick = 0;
    openedCollection.push(eventTargetTemp);
    openedCollection = openedCollection.flat();
    eventTargetTemp = [];
    beforeEventTargets = [];
  }
  if (countClick === 2 && event.target.dataset.image !== currentCard) {
    ///debugger;
    imageCollection.forEach((img) => {
      img.dataset.opened = "true";
    });
    setTimeout(() => {
      beforeEventTargets.forEach((img) => {
        //delete img.dataset.opened;
        img.src = "/img/0.jpg";
        //debugger;
        imageCollection.forEach((img) => {
          if (!openedCollection.includes(img.dataset.image)) {
            delete img.dataset.opened;
          }
        });
        beforeEventTargets = [];
        eventTargetTemp = [];
        countClick = 0;
        currentCard = undefined;
      });
    }, 1000);
  }
}
//////////beforeeventtarget need to null
function showLiderBoard() {
  const liderBoard = document.querySelector(".lider-board");
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      // console.log(`${key} : ${localStorage.getItem(key)}`);
      const span = document.createElement("span");
      span.textContent = `${key} : ${localStorage.getItem(key)}`;
      liderBoard.append(span);
      //liderBoard.textContent += `${key} : ${localStorage.getItem(key)}` + "\n";
    }
  }
  liderBoard.classList.add("visible");
}

//events
// cards.addEventListener("click", toggleCard);
cards.addEventListener("click", compareTwoCards);
start.addEventListener("click", hideCards);

//function call
addCards();
const images = document.querySelectorAll("img");
getRandomCards();
