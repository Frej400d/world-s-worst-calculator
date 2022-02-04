const calculate = document.querySelector("#calculate");

document.addEventListener("DOMContentLoaded", userSetup);

function userSetup() {
  calculate.addEventListener("click", calculate);
  console.log("click");
}

function calculate() {}
