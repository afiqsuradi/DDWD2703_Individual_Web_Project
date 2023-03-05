"use strict";

const buttonsEl = document.querySelectorAll(".button");
const [num1, num2, resultEl] = [
  Number(document.getElementById("num1").value),
  Number(document.getElementById("num2").value),
  document.getElementById("result"),
];

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
    resultEl.textContent = calculate[btnEl.target.textContent](num1, num2);
  });
});
