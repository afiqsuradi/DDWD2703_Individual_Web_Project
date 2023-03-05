"use strict";

const buttonsEl = document.querySelectorAll(".button");
let num1, num2;
const resultEl = document.getElementById("result");

let calculate = {
  "+": function (num1, num2) {
    return num1 + num2;
  },
  "-": function (num1, num2) {
    return num1 - num2;
  },
  "*": function (num1, num2) {
    return num1 * num2;
  },
  "/": function (num1, num2) {
    return num1 / num2;
  },
};

buttonsEl.forEach((button) => {
  num1 = parseFloat(document.getElementById("num1").value);
  num2 = parseFloat(document.getElementById("num2").value);
  button.addEventListener("click", (btnEl) => {
    resultEl.textContent = calculate[btnEl.target.textContent](num1, num2);
  });
});
