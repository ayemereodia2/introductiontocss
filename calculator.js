const Operands = {
  PLUS: "+",
  MINUS: "-",
  MULTIPLY: "x",
  DIVIDE: "/",
  DEFAULT: "",
};

const opObj = { left: undefined, operand: Operands.DEFAULT, right: undefined };
let numbers = [];
let currentOperand = undefined;
let answer = 0;

const processNumber = (value) => {
  const inputBox = document.querySelector("#input-box");

  // Reset for new entry after an operand
  if (currentOperand && opObj.right === undefined) {
    numbers = [];
    inputBox.value = "";
  }

  if (numbers.length < 10) {
    if (inputBox.value === "0") {
      inputBox.value = value;
    } else {
      inputBox.value += value;
    }
    numbers.push(value);

    // Update left or right based on the operand's presence
    if (currentOperand) {
      opObj.right = inputBox.value;
    } else {
      opObj.left = inputBox.value;
    }
  }
};

const calculateResult = () => {
  const { left, operand, right } = opObj;
  const numLeft = Number(left);
  const numRight = Number(right);

  if (isNaN(numLeft) || isNaN(numRight)) return;

  switch (operand) {
    case Operands.PLUS:
      answer = numLeft + numRight;
      break;
    case Operands.MINUS:
      answer = numLeft - numRight;
      break;
    case Operands.MULTIPLY:
      answer = numLeft * numRight;
      break;
    case Operands.DIVIDE:
      answer = numRight !== 0 ? numLeft / numRight : "Error";
      break;
    default:
      answer = "Invalid operation";
  }

  document.querySelector("#input-box").value = answer;
  opObj.left = answer;
  opObj.right = undefined;
  currentOperand = undefined;
};

const handleOperator = (operator) => {
  if (currentOperand && opObj.right !== undefined) {
    calculateResult();
  }
  opObj.operand = operator;
  currentOperand = operator;
};

const setupEventListeners = () => {
  document.querySelectorAll(".number-button").forEach((button) => {
    button.addEventListener("click", () => processNumber(button.textContent));
  });

  document.querySelector("#add").addEventListener("click", () => handleOperator(Operands.PLUS));
  document.querySelector("#subtract").addEventListener("click", () => handleOperator(Operands.MINUS));
  document.querySelector("#multiply").addEventListener("click", () => handleOperator(Operands.MULTIPLY));
  document.querySelector("#divide").addEventListener("click", () => handleOperator(Operands.DIVIDE));

  document.querySelector("#equal").addEventListener("click", calculateResult);
  document.querySelector("#cancel").addEventListener("click", () => {
    document.querySelector("#input-box").value = "0";
    numbers = [];
    opObj.left = undefined;
    opObj.right = undefined;
    currentOperand = undefined;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input-box").value = "0";
  setupEventListeners();
});
