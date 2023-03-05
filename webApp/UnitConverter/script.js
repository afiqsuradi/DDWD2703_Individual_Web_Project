"use strict;";

const result = document.querySelector(".result-placeholder");
let unit, unit1, unit2, number;

let calculate = {
  "km+m": function (num) {
    return num * 1000;
  },
  "m+cm": function (num) {
    return num * 100;
  },
  "km+cm": function (num) {
    return this["m+cm"](this["km+m"](num));
  },
  "m+km": function (num) {
    return num / 1000;
  },
  "cm+m": function (num) {
    return num / 100;
  },
  "cm+km": function (num) {
    return this["m+km"](this["cm+m"](num));
  },
};

document.querySelector(".convert").addEventListener("click", () => {
  number = Number(document.getElementById("unit1n").value);
  unit1 = document.getElementById("unit1").value;
  unit2 = document.getElementById("unit2").value;
  unit = `${unit1}+${unit2}`;
  if (!(unit1 === unit2)) {
    console.log(unit);
    result.textContent = calculate[unit](number);
  } else {
    result.textContent = number;
  }
});
