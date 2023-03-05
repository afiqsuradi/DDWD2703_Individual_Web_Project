"use strict";

const cards = [
  ...document.querySelectorAll(".card"),
  ...document.querySelectorAll(".skill-card"),
];
let maxBotom;

window.addEventListener("scroll", updateCard);

function updateCard() {
  maxBotom = window.innerHeight;
  cards.forEach((card) => {
    if (maxBotom * 0.8 > card.getBoundingClientRect().top) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}
