"use strict";
const email1 = document.querySelector("#email");
const password1 = document.querySelector("#password");
const submit = document.querySelector("#submit");
const userData = "";

async function handleSubmit() {
  const email = email1.value;
  const password = password1.value;
  const response = await fetch("http://localhost:3000/user/login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  console.log(response);
  const { token, userid, useremail } = await response.json();
  console.log("token!: " + token, userid, useremail);
  localStorage.setItem("userid", userid);
  window.location.href = "/expenses.html";
}

submit.addEventListener("click", handleSubmit);
