let result;
let operator;

const calculateButton = document.querySelector("#calculate");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");

document.addEventListener("DOMContentLoaded", userSetup);

function userSetup() {
  calculateButton.addEventListener("click", clickCalculate);
}

function clickCalculate() {
  console.log("click calculate");
  operator = document.querySelector("#operator").value;
  if (operator === "add") {
    resultValue = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  } else if (operator === "sub") {
    resultValue = firstNumber.value - secondNumber.value;
  } else if (operator === "mul") {
    resultValue = firstNumber.value * secondNumber.value;
  } else if (operator === "div") {
    resultValue = firstNumber.value / secondNumber.value;
    console.log("read ");
  }
}
