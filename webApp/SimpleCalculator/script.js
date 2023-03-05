"use strict";

const buttonsEl = document.querySelectorAll(".button");
const resultEl = document.getElementById("result");
let num1, num2;

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
  button.addEventListener("click", (btnEl) => {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    resultEl.textContent = calculate[btnEl.target.textContent](num1, num2);
  });
});
