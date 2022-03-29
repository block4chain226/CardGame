"use strict";
// function toReadable(number) {
//   const singleNumber = {
//     //0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//   };
//   const tenNumber = {
//     //0: "zero",
//     1: "eleven",
//     2: "twelve",
//     3: "thirteen",
//     4: "fourteen",
//     5: "fifteen",
//     6: "sixteen",
//     7: "seventeen",
//     8: "eighteen",
//     9: "nineteen",
//   };
//   const decimalNumber = {
//     1: "ten",
//     2: "twenty",
//     3: "thirty",
//     4: "fourty",
//     5: "fifty",
//     6: "sixty",
//     7: "seventy",
//     8: "eighty",
//     9: "ninty",
//   };

//   let numberLenght = 0;
//   let numberString = String(number);
//   numberString = numberString.split("");

//   //1
//   if (numberString.length === 1) {
//     if (numberString[0] === "0") {
//       console.log(`zero`);
//     } else {
//       console.log(`${singleNumber[numberString[0]]}`);
//     }
//   }

//   //10
//   if (numberString.length === 2) {
//     //10
//     if (numberString[0] == "1" && numberString[1] == "0") {
//       console.log(`${decimalNumber[numberString[0]]}`);
//       //12
//     } else if (numberString[0] === "1" && numberString[1] !== "0") {
//       console.log(`${tenNumber[numberString[1]]}`);
//     } else if (numberString[0] !== "1" && numberString[1] === "0") {
//       console.log(`${decimalNumber[numberString[numberString.length - 2]]}`);
//     } else if (numberString[0] !== "1" && "0" && numberString[1] !== "0") {
//       console.log(
//         `${decimalNumber[numberString[0]]} ${singleNumber[numberString[1]]}`
//       );
//     }
//   }

//   ///100
//   if (numberString.length === 3) {
//     if (numberString[1] === "0" && numberString[2] === "0") {
//       console.log(`${singleNumber[numberString[0]]} hundred`);
//       //110
//     } else if (numberString[1] !== "0" && numberString[2] === "0") {
//       console.log(
//         `${singleNumber[numberString[0]]} hundred ${
//           decimalNumber[numberString[1]]
//         }`
//       );
//     } else if (numberString[1] === "0") {
//       console.log(
//         `${singleNumber[numberString[0]]} hundred ${
//           singleNumber[numberString[2]]
//         }`
//       );
//     } else if (numberString[1] == "1") {
//       console.log(
//         `${singleNumber[numberString[0]]} hundred ${
//           tenNumber[numberString[numberString.length - 1]]
//         }
//           `
//       );
//     } else {
//       console.log(
//         `${singleNumber[numberString[0]]} hundred ${
//           decimalNumber[numberString[1]]
//         } ${singleNumber[numberString[2]]}`
//       );
//     }
//   }

//   ////1000
//   if (numberString.length === 4) {
//     if (
//       numberString[1] === "0" &&
//       numberString[2] === "0" &&
//       numberString[3] === "0"
//     ) {
//       console.log(`${singleNumber[numberString[0]]} thousand`);
//     } else if (numberString[1] === "0" && numberString[3] !== "0") {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand ${
//           decimalNumber[numberString[2]]
//         } ${singleNumber[numberString[3]]}`
//       );
//     } else if (numberString[1] === "0" && numberString[2] === "0") {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand ${
//           singleNumber[numberString[3]]
//         }`
//       );
//     } else if (numberString[1] === "0" && numberString[3] === "0") {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand  ${
//           decimalNumber[numberString[2]]
//         } `
//       );
//     }
//     //1111
//     else if (
//       numberString[1] !== "0" &&
//       numberString[2] === "1" &&
//       numberString[3] !== "0"
//     ) {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand  ${
//           singleNumber[numberString[1]]
//         } hundred ${tenNumber[numberString[2]]}`
//       );
//     }
//     ///1976
//     else if (
//       numberString[1] !== "0" &&
//       numberString[2] !== "0" &&
//       numberString[3] !== "0"
//     ) {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand  ${
//           singleNumber[numberString[1]]
//         } hundred ${decimalNumber[numberString[2]]} ${
//           singleNumber[numberString[3]]
//         }`
//       );
//       //1902
//     } else if (
//       numberString[1] !== "0" &&
//       numberString[2] === "0" &&
//       numberString[3] !== "0"
//     ) {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand  ${
//           singleNumber[numberString[1]]
//         } hundred ${singleNumber[numberString[3]]}`
//       );
//       //1900
//     } else if (
//       numberString[1] !== "0" &&
//       numberString[2] === "0" &&
//       numberString[3] === "0"
//     ) {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand  ${
//           singleNumber[numberString[1]]
//         } hundred `
//       );
//     }
//     //1940
//     else if (
//       numberString[1] !== "0" &&
//       numberString[2] !== "0" &&
//       numberString[3] === "0"
//     ) {
//       console.log(
//         `${singleNumber[numberString[0]]} thousand  ${
//           singleNumber[numberString[1]]
//         } hundred ${decimalNumber[numberString[2]]} `
//       );
//     }
//   }
// }
// toReadable(919);

// function reverse(number) {
//   let numberString = String(number).split("");
//   let temp = "";
//   for (let i = 0; i < numberString.length - 2; i++) {
//     temp = numberString[i];
//     numberString[i] = numberString[numberString.length - 1 - i];
//     numberString[numberString.length - 1 - i] = temp;
//   }
//   numberString = numberString.join("");
//   return +numberString;
// }
// reverse(123);

//console.log(document.body.children);

// let li = document.querySelectorAll("li");
// li.forEach((element) => {
//   if (element.childElementCount != 0) {
//     if (element.firstElementChild.nodeName == "UL") {
//       console.log(element.childNodes[0]);
//       let count = element.querySelectorAll("li").length;
//       element.firstChild.data += count;
//     }
//   }
// });

//Calendar
// function createCalendar(cal, year, day) {
//   const calendar = document.body.querySelector(`.${cal}`);
//   const table = document.createElement("table");
//   table.append(createTitle("calendar"));
//   table.append(createDays(table));
// }

// function createDays(table) {
//   let dayOfWeek = 1;
//   let tdArray = [];
//   let date = new Date();
//   const daysInMonth = new Date(2022, 1, 0).getDate();
//   const monthStartDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     1
//   ).getDay();
//   const tdCount = daysInMonth + monthStartDay;
//   date = new Date(2022, 0);
//   //fill empty
//   // const tr = document.createElement("tr");
//   for (let i = 1; i < tdCount; i++) {
//     while (i < monthStartDay) {
//       const td = document.createElement("td");
//       td.textContent = "";
//       tdArray.push(td);
//       // tr.append(td);
//       i++;

//       dayOfWeek++;
//     }
//     // while (dayOfWeek < 8) {
//     //   const td = document.createElement("td");
//     //   td.textContent = date.getDate(date.getDay());
//     //   tr.append(td);
//     //   dayOfWeek++;
//     //   date.setDate(date.getDate() + 1);
//     // }
//     // table.append(tr);
//     // document.body.append(table);
//     const td = document.createElement("td");
//     td.textContent = date.getDate(date.getDay());
//     tdArray.push(td);
//     //tr.append(td);
//     dayOfWeek++;
//     date.setDate(date.getDate() + 1);
//     if (dayOfWeek == 8 || i == tdCount - 1) {
//       //table.append(tr);
//       const tr = document.createElement("tr");
//       tr.append(...tdArray);
//       table.append(tr);
//       document.body.append(table);
//       //const tr = document.createElement("tr");
//       dayOfWeek = 1;
//       tdArray = [];
//     }
//   }
// }

// function createTitle(cal) {
//   const weekDays = ["mon", "tus", "wed", "thu", "fri", "sut", "sun"];
//   const tr = document.createElement("tr");
//   // const th = document.createElement("th");
//   for (let i = 0; i < 7; i++) {
//     //const td = document.createElement("td");
//     const th = document.createElement("th");
//     th.textContent = weekDays[i];
//     tr.append(th);
//   }

//   return tr;
// }
// createCalendar("calendar", 2012, 9);

//Time
// let timerId;
// const buttonStart = document.querySelector(".start");
// const buttonStop = document.querySelector(".stop");
// function timeUpdate() {
//   let date = new Date();
//   let hoursSpan = document.querySelector(".clock__hour");
//   let hour = date.getHours();
//   hoursSpan.textContent = hour;

//   let minutesSpan = document.querySelector(".clock__min");
//   let minutes = date.getMinutes();
//   minutesSpan.textContent = minutes;

//   let secondsSpan = document.querySelector(".clock__sec");
//   let seconds = date.getSeconds();
//   secondsSpan.textContent = seconds;
// }

// function start() {
//   timerId = setInterval(() => {
//     timeUpdate();
//   }, 1000);
// }
// function stop() {
//   clearTimeout(timerId);
// }

// buttonStart.addEventListener("click", start);
// buttonStop.addEventListener("click", stop);

////////////////////////////////tepoe dodavanie
// function add(num1, num2) {
//   let result = [];
//   let minLength, maxLength;
//   let str = "22";
//   str = str.padStart(3, "0");
//   console.log(+str);
//   let temp;
//   num1 = String(num1)
//     .split("")
//     .map(function (item) {
//       return parseInt(item, 10);
//     });

//   num2 = String(num2)
//     .split("")
//     .map(function (item) {
//       return parseInt(item, 10);
//     });

//   minLength = Math.min(num1.length, num2.length);
//   maxLength = Math.max(num1.length, num2.length);
//   num1.length > num2.length ? (maxNum = num1) : (maxNum = num2);
//   for (let i = 1; i <= minLength; i++) {
//     temp = num1[num1.length - i] + num2[num2.length - i];
//     maxLength--;
//     result.unshift(String(temp));
//     if (i === minLength && minLength !== maxLength) {
//       //result = result.split("");
//       for (let i = maxLength - 1; i >= 0; i--) {
//         result.unshift(String(maxNum[i]));
//         // result += String(maxNum[i]);
//       }
//     } else if (i === minLength && minLength === maxLength) {
//       //result = result.split("");
//       for (let i = 0; i < maxLength; i++) {
//         result.unshift(String(maxNum[i]));
//         // result += String(maxNum[i]);
//       }
//     }
//   }
//   return +result.join("");
// }

// add(389101, 1241);
// const objA = { a: 10, b: 20, c: 30 };
// const objB = { a: 3, c: 6, d: 3 };
// const objC = { a: 5, d: 11, e: 8 };
// const objD = { c: 3 };

// function combine() {
//   return Array.from(arguments).reduce((acc, cur) => {
//     Object.keys(cur).forEach((k) => {
//       if (acc.hasOwnProperty(k)) {
//         acc[k] = acc[k] + cur[k];
//       } else {
//         acc[k] = cur[k];
//       }
//     });

//     return acc;
//   }, {});
// }
// combine(objA, objB);

//Count the Digit
// function nbDig(n, d) {
//   const arr = [];
//   //let newArr = [];
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     arr.push(i);
//   }
//   //let rpeat = 0;
//   arr.forEach((item, index) => {
//     let k = String(Math.pow(item, 2)).split("");
//     if (k.includes(String(d))) {
//       //newArr.push(+k.join(""));
//       k.forEach((item) => {
//         if (item == d) {
//           count++;
//         }
//       });

//       //count++;
//       console.log(newArr[+count - 1]);
//     }
//   });
//   // return +newArr.lengt.length;
//   return count;
// }
// nbDig(25, 1);

//Find the missing element between two arrays
// function findMissing(arr1, arr2) {
//   let countFirst = 0;
//   let countSecond = 0;
//   let result;
//   for (let i = 0; i < arr1.length; i++) {
//     countFirst = 0;
//     countSecond = 0;
//     arr1.map((item) => {
//       if (item == arr1[i]) {
//         countFirst++;
//       }
//     });
//     arr2.map((item) => {
//       if (item == arr1[i]) {
//         countSecond++;
//       }
//     });
//     if (countFirst === countSecond) {
//       continue;
//     } else {
//       result = arr1[i];
//       break;
//     }
//   }
//   return result;
// }
// findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);
// let firstArray = [6, 1, 3, 6, 8, 2];
// let secondArray = [3, 6, 6, 1, 2];

//decimal part
// function getDecimal(n) {
//   // return n - Math.floor(n);
//   n = Math.abs(n);
//   return n - Math.floor(n);
// }
// getDecimal(1e-7);

//Maximum Triplet Sum
// function maxTriSum(numbers) {
//   let number = new Set(numbers);
//   number = Array.from(number);
//   let sum = 0;
//   let max;
//   // let max = Math.max(number);
//   for (let i = 0; i < 3; i++) {
//     max = Math.max(...number);
//     sum += max;
//     number.splice(number.indexOf(max), 1);
//   }
//   return sum;
//   // let news = Array.from(number).reduce((cur) => {
//   //   return (cur += Math.max(...number));
//   // }, 0);
// }

// maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]);

//My Languages
// const results = { Hindi: 60, Greek: 71, Dutch: 93 };
// function myLanguages(results) {
//   let arr = [];
//   let result = Object.keys(results).sort(function (a, b) {
//     return results[b] - results[a];
//   });
//   for (let key of result) {
//     if (results[key] >= 60) {
//       arr.push(key);
//     }
//   }
//   Object.assign(result);
//   // for (let key in results) {
//   //   if (results[key] >= 60) {
//   //     arr.push(key);
//   //   }
//   // }
//   // arr = arr.sort();

//   return arr;
// }

// myLanguages(results);

//Nickname Generator
// function nicknameGenerator(name) {
//   const consonant = [
//       "b",
//       "c",
//       "d",
//       "f",
//       "g",
//       "h",
//       "j",
//       "k",
//       "l",
//       "m",
//       "n",
//       "p",
//       "r",
//       "s",
//       "y",
//       "t",
//       "v",
//       "w",
//       "x",
//       "z",
//     ],
//     vowel = ["a", "e", "i", "o", "u"];

//   name = name.split("");
//   name[0] = name[0].toUpperCase();
//   if (name.length < 4) {
//     return "Error: Name too short";
//   }
//   if (consonant.includes(name[2])) {
//     name.splice(3);
//     console.log(name);
//     return name.join("");
//   }
//   if (vowel.includes(name[2])) {
//     name.splice(4);
//     console.log(name);
//     return name.join("");
//   }
// }
// nicknameGenerator("jimmy");

//Odd-Even String Sort
// function sortMyString(s) {
//   let even = s
//     .split("")
//     .filter((v, i) => i % 2 === 0)
//     .join("");
//   let odd = s
//     .split("")
//     .filter((v, i) => i % 2 !== 0)
//     .join("");
//   return even + " " + odd;
// }
// sortMyString("CodeWars");

//power of two
// function isPowerOfTwo(n) {
//   return n != 0 && (n & (n - 1)) == 0;
// }
// isPowerOfTwo(2);

//The input will be an array of dictionaries.
// List = [
//   { 4: "dog" },
//   { 2: "took" },
//   { 3: "his" },
//   { "-2": "Vatsan" },
//   { 5: "for" },
//   { 6: "a" },
//   { 12: "spin" },
// ];
// function sentence(List) {
//   let result = Object.keys(List).sort(function (a, b) {
//     return List[b] - List[a];
//   });
//   for (let key of List) {
//     console.log(List[0][key]);
//   }

//   let entries = Object.assign({}, List);
// }
// sentence(List);

//arrow style sum
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum;
// var Sum = (sum = function (arr) {
//   return arr.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   });
//   return sum;
// });
// Sum(arr);

//spread arguments
// function spread(func, args) {
//   return func(...args);
// }
// spread(
//   function (x, y) {
//     return x + y;
//   },
//   [2, 3]
// );

//vowel one
// const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
// let result;
// let str = "";
// const vovelOne = (item) => {
//   result = item.split("").filter((v, i) => {
//     vowel.includes(v) ? (str += "1") : (str += "0");
//   });
//   return str;
// };
// vovelOne("abceios");

//Who is the killer?
// const suspectInfo = {
//     Johnny: ["David", "Kyle", "Lucas"],
//     Peter: ["Lucy", "Kyle"],
//     James: ["Jacob", "Bill", "Lucas"],
//   },
//   dead = ["Lucas", "Bill"];
// function killer(suspectInfo, dead) {
//   let arrLength = [];
//   let arr = Object.entries(suspectInfo);
//   arr.forEach((element) => {
//     arrLength.push(element[1].length);
//     element[1].push(...dead);
//   });инце
//   let set1;
//   let backToArray;
//   for (let i = 0; i < 3; i++) {
//     set1 = new Set(arr[i][1]);
//     backToArray = [...set1];
//     if (backToArray.length == arrLength[i]) {
//       return backToArray;
//     }
//   }
// }
// killer(suspectInfo, dead);

//A stream of data is received and needs to be reversed.
// const data = [
//   1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
//   1, 0, 1, 0, 1, 0,
// ];
// function dataReverse(data) {
//   let newData = [];
//   let newData2 = [];
//   let temp = [];
//   data.forEach((element, index) => {
//     if ((index + 1) % 8 === 0 && index !== 0) {
//       newData.push(element);
//       newData.push(" ");
//     } else {
//       newData.push(element);
//     }
//   });
//   newData = newData.join("").trim();
//   newData = newData.split("");
//   newData.reverse();
//   for (let i = 0; i < newData.length; i++) {
//     if (newData[i] !== " ") {
//       temp.push(newData[i]);
//     }
//     if (i === newData.length - 1) {
//       temp.reverse();
//       //temp.push(newData[i]);
//       newData2.push(temp);
//       temp = [];
//     }
//     if (newData[i] === " ") {
//       temp.reverse();
//       //temp.push(newData[i]);

//       newData2.push(temp);
//       temp = [];
//     }
//   }
//   newData2 = [].concat(...newData2);
//   newData2 = Array.from(newData2);
//   //newData2 = newData2.split("");
//   //newData2 = newData2.join("");
//   let numb = newData2.map((element) => parseInt(element));
//   Number.parseInt(newData2[0]);
//   return numb;
// }
// dataReverse(data);

// let user1 = {
//   name: "john",
//   sallary: 10000,
//   toString() {
//     return this.name;
//   },
//   valueOf() {
//     return this.sallary;
//   },
// };

// console.log(user1.toString());
// console.log(user1.valueOf());
///////////////////////////////////////////////
// let sum;
// let sum1 = [];
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 0, 8],
//   [0, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// arr.reduce(function (result, current, index = 0, arr) {
//   result[index] += current[index];
//   return result;
// });
////////////////////////////////////////////////////////////////////object string
// const obj = {
//   first: "1",
//   second: "2",
//   six: {
//     one: "1",
//     five: { one: "4" },
//     two: 2,
//     three: 3,
//     four: "4",
//     nine: {
//       one: "1",
//       five: { one: "4", two: "seven", three: null },
//       two: 2,
//       three: 3,
//       four: "4",
//     },
//   },
//   third: false,
//   fourth: ["anytime", 2, 3, 4],
//   fifth: null,
// };
// let count = 0;
// function strCount(obj) {
//   let obj1 = Object.values(obj);
//   obj1.forEach((item) => {
//     if (typeof item === "Object") {
//       obj[item] = Object.values(obj[item]);
//     }
//   });

//   let arr;
//   let arr1;
//   obj1 = obj1.flat();
//   obj1.forEach((value) => {
//     if (typeof (value !== "object")) {
//       typeof value === "string" ? count++ : console.log(`${value} not string`);
//     }
//     if (typeof value === "object" && value) {
//       isObject(value);
//     }
//   });

//   return count;
// }
// strCount(obj);
// function isObject(value) {
//   let arrayObj = Object.values(value);

//   arrayObj.forEach((value) => {
//     console.log(value + typeof value);
//     if (typeof value !== "object") {
//       typeof value === "string" ? count++ : console.log(`${value} not string`);
//     }
//     if (typeof value === "object" && value) {
//       isObject(value);
//     }
//   });
// }
// let count = 0;
// const iterate = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     console.log(`key: ${key}, value: ${obj[key]}`);
//     typeof obj[key] === "string"
//       ? count++
//       : console.log(`${obj[key]} is not string`);
//     if (typeof obj[key] === "object" && obj[key]) {
//       iterate(obj[key]);
//     }
//   });
//   return count;
// };
// iterate(obj);

///////////////////Convert
// var Alphabet = {
//   BINARY: "01",
//   OCTAL: "01234567",
//   DECIMAL: "0123456789",
//   HEXA_DECIMAL: "0123456789abcdef",
//   ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
//   ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   ALPHA_NUMERIC:
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
// };

// function convert(value, from, to) {

// }

//Bingo
// function getCard() {
//   let result = [];
//   let temp = [];
//   let k;
//   for (let i = 1; i < 76; i++) {
//     if (i < 6) {
//       k = Math.floor(Math.random() * 16);
//       if (!result.includes("B" + k) && k !== 0) {
//         result.push("B" + k);
//       } else {
//         i--;
//       }
//     }
//     if (i > 5 && i < 11) {
//       k = Math.floor(Math.random() * (31 - 16) + 16);
//       if (!temp.includes("I" + k) && k !== 0) {
//         temp.push("I" + k);
//       } else {
//         i--;
//       }
//       if (i === 10) {
//         result.push(temp);
//         temp = [];
//       }
//     }
//     if (i > 10 && i < 15) {
//       k = Math.floor(Math.random() * (46 - 31) + 31);
//       if (!temp.includes("N" + k) && k !== 0) {
//         temp.push("N" + k);
//       } else {
//         i--;
//       }
//       if (i === 14) {
//         result.push(temp);
//         temp = [];
//       }
//     }
//     if (i > 14 && i < 20) {
//       k = Math.floor(Math.random() * (61 - 46) + 46);
//       if (!temp.includes("G" + k) && k !== 0) {
//         temp.push("G" + k);
//       } else {
//         i--;
//       }
//       if (i === 19) {
//         result.push(temp);
//         temp = [];
//       }
//     }
//     if (i > 19 && i < 25) {
//       k = Math.floor(Math.random() * (76 - 61) + 61);
//       if (!temp.includes("O" + k) && k !== 0) {
//         temp.push("O" + k);
//       } else {
//         i--;
//       }
//       if (i === 24) {
//         result.push(temp);
//         temp = [];
//       }
//     }
//   }
//   let res = [];
//   return (res = [].concat(...result));
// }
// bingo();

/////bit count
// let number = 12;
// let count = 0;
// const result = number.toString(2);
// result.split("").forEach((item) => {
//   if (item === "1") {
//     count++;
//   }
// });

////clock

// let whatTimeIsIt = function (angle) {
//   const time = {
//     0: "12:00",
//     30: "01:00",
//     60: "02:00",
//     90: "03:00",
//     120: "04:00",
//     150: "05:00",
//     180: "06:00",
//     210: "07:00",
//     240: "08:00",
//     270: "09:00",
//     300: "10:00",
//     330: "11:00",
//     360: "12:00",
//   };
//   return time[angle];
// };
// console.log(whatTimeIsIt(270));

//weird string
// function toWeirdCase(str) {
//   return str
//     .split(" ")
//     .map((item) => {
//       return item
//         .split("")
//         .map((item, index) => {
//           return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
//         })
//         .join("");
//     })
//     .join(" ");
// }

// toWeirdCase("This is a test");

// Lotery
// const alphaUpper = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// let alphaObj = {};
// alphaUpper.forEach((item, index) => {
//   alphaObj[index] = item;
// });
// console.log(alphaObj);

/////////////////////////////////////////////////////////likes!!!!!!
// const getLikes = (users) => {
//   if (users.length === 0) {
//     return "no one likes this";
//   }
//   if (users.length === 1) {
//     return `${users[0]} likes this`;
//   }
//   if (users.length > 1) {
//     const result = users.reduce((acc, cur, index) => {
//       if (users.length < 4) {
//         index === users.length - 1 ? (acc += " " + "and" + " ") : acc;
//         if (index === users.length - 1 || index === users.length - 2) {
//           return (acc += cur);
//         }
//         return (acc += cur + ", ");
//       } else if (users.length > 3) {
//         while (index < 2) {
//           if (index !== 1) {
//             return (acc += cur + ", ");
//           }
//           if (index === 1) {
//             return (acc += cur + " ");
//           }
//         }
//         if (index === users.length - 1) {
//           return acc + `and ${users.length - 2} other like this`;
//         }
//         return acc;
//       }
//     }, "");
//     return result;
//   }
// };
// console.log(getLikes(users));

//////////////////////////////////////////////////////////////////rgb to hex
// function rgb(r, g, b) {
//   const hexResult = [...arguments].reduce((acc, cur) => {
//     if (cur >= 0) {
//       return (acc += ColorToHex(cur));
//     } else if (cur < 0) {
//       cur = 0;
//       return (acc += ColorToHex(cur));
//     }
//   }, r);
//   return hexResult;
// }

// function ColorToHex(color) {
//   var hexadecimal = color.toString(16);
//   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
// }

// console.log(rgb(0, 0, -20));

// Initialize an object
// const operatingSystem = {
//   name: "Ubuntu",
//   version: 18.04,
//   license: "Open Source",
// };

// Get the object key/value pairs
// const entries = Object.entries(operatingSystem);

// // Loop through the results
// entries.forEach((entry) => {
//   let key = entry[0];
//   let value = entry[1];

//   console.log(`${key}: ${value}`);
// });

///////////////////////////////////////////////Highest Rank Number in an Array
// const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];

// function highestRank(arr) {
//   let i;
//   let count;
//   let dublicatesObj = {};
//   let objCollection = new Set();
//   for (i = 0; i < arr.length; i++) {
//     count = 1;
//     dublicatesObj[arr[i]] = {};
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         dublicatesObj[arr[i]].number = arr[i];
//         dublicatesObj[arr[i]].count = ++count;
//         dublicatesObj[arr[i]].iterration = i;
//       }
//     }

//     objCollection.add(dublicatesObj[arr[i]]);
//   }
//   return objCollection;
// }
// function rrrr(highestRank) {
//   const fff = highestRank;
//   let temp = 0;
//   let result;
//   for (let key of fff) {
//     if (key.count > temp) {
//       temp = key.count;
//       result = key.number;
//     }
//   }
//   return result;
// }
// rrrr(highestRank(arr));
// const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// function highestRank(arr) {
//   return arr.sort(
//     (a, b) =>
//       arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
//   )[0];
// }
// highestRank(arr);
// const mass = [1, 2, 3, 4, 5];

// Array.prototype.multi = function (n) {
//   return this.map((i) => {
//     return i * n;
//   });
// };
// console.log(mass.multi(2));

// const obj = {
//   name: "igor",
//   writeName: (lastName) => {
//     console.log(this.name, lastName);
//   },
// };

// const f = obj.writeName.bind(obj, "igorevich");
// f();

document.querySelector("select").addEventListener("change", f);

function f() {
  console.log(this, this.value);
  document.querySelector(".out").textContent = this.value;
}

f.call(document.querySelector("select"));
