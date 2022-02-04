"use strict";

let result;
let operator;
let resultValue;
let rounding;

const calculateButton = document.querySelector("#calculate");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const results = document.querySelector("#results");
const checkbox = document.querySelector("#doround");

document.addEventListener("DOMContentLoaded", userSetup);

function userSetup() {
  document.querySelector("#clear").addEventListener("click", clear);
  calculateButton.addEventListener("click", clickCalculate);
}

function clear() {
  results.innerHTML = "";
}

function clickCalculate() {
  operator = document.querySelector("#operator").value;
  if (operator === "add") {
    resultValue = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  } else if (operator === "sub") {
    resultValue = firstNumber.value - secondNumber.value;
  } else if (operator === "mul") {
    resultValue = firstNumber.value * secondNumber.value;
  } else if (operator === "div") {
    resultValue = firstNumber.value / secondNumber.value;
  }
  if (checkbox.checked === true) {
    rounding = parseInt(document.querySelector("#decimals").value);
    resultValue = resultValue.toFixed(rounding);
  }
  firstNumber.value = resultValue;

  result = document.createElement("li");
  result.textContent = resultValue;
  results.appendChild(result);
  results.scrollTop = results.scrollHeight;
}
