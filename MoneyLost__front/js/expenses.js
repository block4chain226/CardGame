"use strict";
//import { getUserData } from "./login.js";
const categoryUrl = "http://localhost:3000/category";
let firstLoad = true;
let categoryId;
let category;

let expenses;
let currentDate;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const user = localStorage.getItem("userid");
//const userExpenses = getAllExpenses(user);

console.log("userId=", localStorage.getItem("userid"));

const cardCategories = document.querySelector(".card__categories");
const cardHeader = document.querySelector(".card__header");
const cardDate = document.querySelector(".card__date");
const cardBalance = document.querySelector(".card__balance");
const balance = document.querySelector(".balance");
const cardFooter = document.querySelector(".card__footer");
const cardButtons = document.querySelectorAll(".button");
const cardExpensesDetails = document.querySelector(".card__expenses-details");

//NewDay
function currentDay(dateToShow = new Date().toLocaleDateString("en-US")) {
  // debugger;
  getAllExpenses(user, dateToShow)
    .then((data) => {
      debugger;
      //console.log("first: ", data);
      // debugger;
      let newObj = {};
      cardDate.textContent = dateToShow;
      //check if we have expenses today
      currentDate = dateToShow;
      const values = Object.values(data);
      let i = 0;
      firstLoad = false;
      for (let item of values) {
        if (item.date == dateToShow) {
          newObj[i] = item;
          i++;
        }
      }
      return newObj;
    })
    ///answer - current date expenses
    .then((answer) => {
      if (answer) {
        //console.log(answer);
        balance.textContent = sumDayExpenses(answer);
      } else {
        console.log("no expenses");
      }
      // sumCategoriesExpenses(answer);

      showAnswer(answer);
    });
}

function changeDay(e) {
  // debugger;
  let operator;
  if (e.target.className === "card__button") {
    if (firstLoad) {
      currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      currentDate = currentDate.toLocaleDateString("en-US");
      currentDay(currentDate);
    } else {
      //debugger;
      wasShown = [];
      let today = new Date();
      today = today.toLocaleDateString("en-US");

      let newdate = new Date(currentDate);
      console.log(typeof newdate);
      if (e.target.id === "prev") {
        newdate.setDate(newdate.getDate() - 1);
        cardExpensesDetails.innerHTML = "";
      } else if (
        e.target.id === "next" &&
        newdate.toLocaleDateString("en-US") !== today
      ) {
        newdate.setDate(newdate.getDate() + 1);
        cardExpensesDetails.innerHTML = "";
      } else {
        return;
      }

      newdate = newdate.toLocaleDateString("en-US");
      currentDay(newdate);
    }
  }
}
let newdate = new Date(currentDate);
newdate = newdate.toLocaleDateString("en-US");

let wasShown = [];
function showAnswer(answer) {
  let oldWasShwon = wasShown.length;
  for (let item of Object.values(answer)) {
    if (!wasShown.includes(item.category)) {
      wasShown.push(item.category);
      const details = addElement("details");
      details.id = item.category;
      const summary = addElement("summary");
      /////
      const div = addElement("div");
      div.classList.add("flex");
      const sumCategory = addElement("p");
      sumCategory.textContent = item.category;
      const sumTotalAmount = addElement("p");

      sumTotalAmount.textContent = categoryTotalAmount(
        answer,
        item.category,
        details
      );
      appendChild(div, sumCategory);
      appendChild(div, sumTotalAmount);
      appendChild(summary, div);
      appendChild(details, summary);
      appendChild(cardExpensesDetails, details);
    }
    if (
      Object.entries(answer[0]).length === 3 &&
      wasShown.length === oldWasShwon
    ) {
      const parentCategory = cardExpensesDetails.querySelector(
        `#${item.category}`
      );
      const div = addElement("div");
      div.classList.add("flex");
      const p = addElement("p");
      p.textContent = item.moneyAmount;
      const p1 = addElement("p");
      p1.textContent = item.date;
      appendChild(div, p);
      appendChild(div, p1);
      appendChild(parentCategory, div);
      const summary = parentCategory.querySelector("summary");
      console.log(summary.firstElementChild.lastElementChild);
      summary.firstElementChild.lastElementChild.textContent =
        +summary.firstElementChild.lastElementChild.textContent +
        +item.moneyAmount;
    }
  }
}
function categoryTotalAmount(answer, category, elementDom) {
  let acc = 0;
  for (let item of Object.values(answer)) {
    if (item.category === category) {
      const div = addElement("div");
      div.classList.add("flex");
      const p = addElement("p");
      p.textContent = item.moneyAmount;
      const p1 = addElement("p");
      p1.textContent = item.date;
      appendChild(div, p);
      appendChild(div, p1);
      appendChild(elementDom, div);
      acc += item.moneyAmount;
    }
  }
  return +acc;
}

//sumTotalDayExpenses
function sumDayExpenses(answer) {
  let sum = 0;
  for (let [key, value] of Object.entries(answer)) {
    sum += value.moneyAmount;
  }
  return sum;
}
//Get all categories from database

async function getCategories(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.answer);
    return data.answer;
  } catch (err) {
    console.error("error: ", err);
  }
}

function addElement(element) {
  return document.createElement(element);
}
function appendChild(parent, child) {
  return parent.append(child);
}

//Show all category buttons
const addButtons = () =>
  getCategories(categoryUrl).then((data) => {
    for (let [key, value] of Object.entries(data)) {
      const div = addElement("div");
      div.classList.add("card__category");
      div.textContent = value.name;
      div.id = value._id;
      div.dataset.field = value.name;
      appendChild(cardCategories, div);
    }
  });

function getNewExpenseCategory(e) {
  if (
    e.target.tagName === "DIV" &&
    e.target.id !== "submit" &&
    e.target.className !== "card__categories"
  ) {
    console.log(e.target.dataset.field);
    categoryId = e.target.id;
    category = e.target.dataset.field;
  }
}

let allCategories = getCategories(categoryUrl);
// let allExpenses = getAllExpenses(user);
//Send new expense to database
async function sendExpense(e) {
  const moneyAmount = document.querySelector("#amount").value;
  const userId = localStorage.getItem("userid");
  let newdate = new Date(currentDate);

  newdate = newdate.toLocaleDateString("en-US");
  // const date= cardDate.te
  //update balance
  balance.textContent = +balance.textContent + +moneyAmount;
  debugger;
  showAnswer([
    {
      moneyAmount: moneyAmount,
      category: category,
      date: newdate,
    },
  ]);

  if (moneyAmount !== undefined && categoryId !== undefined) {
    try {
      const response = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId: categoryId,
          category: category,
          userId: userId,
          date: newdate,
          moneyAmount: moneyAmount,
        }),
      });
    } catch (err) {
      console.error("error: ", err);
    }
  } else {
    console.error("error");
  }
}

async function getAllExpenses(userId, date) {
  // debugger;
  const response = await fetch(
    `http://localhost:3000/expenses/${userId}&${date}`
  );
  const data = await response.json();
  expenses = data.answer;
  console.log(expenses);
  return data.answer;
}

//Add Category
async function addCategory() {
  const newCategory = document.querySelector("#category").value;
  const response = await fetch("http://localhost:3000/category", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newCategory }),
  });
  document.querySelector("#category").value = "";
}

function toggleDetails() {
  cardFooter.classList.toggle("toggle-details");
  const details = cardExpensesDetails.querySelectorAll("details");
  details.forEach((detail) => {
    if (detail.open === true) {
      detail.open = false;
    }
  });
}

addButtons();
currentDay();

//getAllExpenses(localStorage.getItem("userid"));
//ExpensesByDay(localStorage.getItem("userid"));

cardCategories.addEventListener("click", getNewExpenseCategory);
cardBalance.addEventListener("click", toggleDetails);
document.querySelector("#submit").addEventListener("click", sendExpense);
document.querySelector("#categorySub").addEventListener("click", addCategory);
cardHeader.addEventListener("click", changeDay);
