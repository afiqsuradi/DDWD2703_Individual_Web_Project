"use strict;";
const result = document.getElementById("result");
let income = 0;

document.querySelector(".calculate").addEventListener("click", () => {
  income = parseFloat(document.getElementById("income").value);
  result.textContent = `RM${income * 0.025}`;
  result.style.backgroundColor = "var(--button-color)";
});

document.querySelector(".clear").addEventListener("click", () => {
  result.textContent = "";
  result.style.backgroundColor = "transparent";
  document.getElementById("income").value = "";
});
