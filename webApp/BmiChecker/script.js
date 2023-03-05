const [weight, height, result] = [
  Number(document.getElementById("weight").value),
  Number(document.getElementById("height").value),
  document.getElementById("result"),
];

let bmi;

document.querySelector(".calculate").addEventListener("click", () => {
  bmi = weight / Math.pow(height / 100, 2);
  console.log(bmi);
  if (bmi >= 40) {
    showResult("Extremely Obese", "#E90064");
  } else if (bmi >= 30 && bmi < 40) {
    showResult("Obese", "#F08A5D");
  } else if (bmi >= 25 && bmi < 30) {
    showResult("Overweight", "#FCE38A");
  } else if (bmi >= 18.5 && bmi < 25) {
    showResult("Normal", "#91C788");
  } else {
    showResult("Wasted", "#3D84A8");
  }
});

function showResult(text, color) {
  result.textContent = text;
  result.style.backgroundColor = color;
}

document.querySelector(".clear").addEventListener("click", () => {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  result.textContent = "";
  result.style.backgroundColor = "transparent";
});
