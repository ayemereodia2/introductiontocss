let numbers = [];
let currentOperand;
let answer = 0;
const Operands = {
  PLUS: "+",
  MINUS: "-",
  MUTIPLY: "x",
  DIVIDE: "/",
  DEFAULT: "",
};
const opObj = { left: undefined, operand: Operands.DEFAULT, right: undefined };

/*
TODO: add funtions for handling operations.
*/


const processNumber = (value) => {
const inputBox = document.querySelector("#input-box");

  // accumulate numbers for first operand
  if (numbers.length == 0 && value == "0")
  {
    return;
  }

  if (currentOperand)
  {
    if(opObj.right == undefined)
    {
      numbers = [];
      inputBox.value = "0";
     console.log("appendages...");
    }
    
  }

    if (numbers.length < 10 && inputBox.value == "0")
    {
      inputBox.value = value;
      numbers.push(value);
      if (currentOperand) {
        opObj.right = value;
      } else {
        opObj.left = value;
      }
    }
    else
    {
      if (numbers.length < 10) {
        numbers.pop();
        inputBox.value += value;
        numbers.push(inputBox.value);
        if(currentOperand)
          {
            opObj.right = inputBox.value;
          }
          else
          {
            opObj.left = inputBox.value;
          }
      }
    }
};

const allContentLoaded = () => {
  const cancelButton = document.querySelector("#cancel");
  const inputBox = document.querySelector("#input-box");

  let currentValues = inputBox.value;

  const oneButton = document.querySelector("#one");
  const twoButton = document.querySelector("#two");
  const threeButton = document.querySelector("#three");
  const fourButton = document.querySelector("#four");
  const fiveButton = document.querySelector("#five");
  const sixButton = document.querySelector("#six");
  const sevenButton = document.querySelector("#seven");
  const eightButton = document.querySelector("#eight");
  const nineButton = document.querySelector("#nine");
  const zeroButton = document.querySelector("#zero");

  oneButton.addEventListener("click", () => {
    processNumber("1");
  });

  twoButton.addEventListener("click", () => {
    processNumber("2");
  });

  threeButton.addEventListener("click", () => {
    processNumber("3");
  });
  fourButton.addEventListener("click", () => {
    processNumber("4");
  });
  fiveButton.addEventListener("click", () => {
    processNumber("5");
  });
  sixButton.addEventListener("click", () => {
    processNumber("6");
  });
  sevenButton.addEventListener("click", () => {
    processNumber("7");
  });
  eightButton.addEventListener("click", () => {
    processNumber("8");
  });
  nineButton.addEventListener("click", () => {
    processNumber("9");
  });
  zeroButton.addEventListener("click", () => {
    processNumber("0");
  });

  cancelButton.addEventListener("click", () => {

    if(currentOperand)
    {
      opObj.left = undefined;
      opObj.right = undefined;
      opObj.operand = "";
      currentOperand = undefined;
      return;
    }

    numbers.pop();
    if (numbers.length > 0) {
      inputBox.value = numbers.join("");
    } else {
      inputBox.value = "0";
    }
    console.log(inputBox.value);
  });

  const addCommand = document.querySelector("#add");
  const subtractCommand = document.querySelector("#subtract");
  const multiplyCommand = document.querySelector("#multiply");
  const divideCommand = document.querySelector("#divide");

  const equalCommand = document.querySelector("#equal");



  addCommand.addEventListener("click", () => {
    
    if (currentOperand) {

      const firstOperand = opObj.left;
      const secondOperand = opObj.right ?? 0;

      if (Number(secondOperand) && Number(firstOperand)) {
        answer = Number(firstOperand) + Number(secondOperand);
        inputBox.value = answer;
        opObj.left = answer;
        opObj.right = undefined;
        return;
      }
    }
    opObj.operand = "+";
    currentOperand = "+";
  });

  subtractCommand.addEventListener("click", () => {
    
    if (currentOperand) {

      const firstOperand = opObj.left;
      const secondOperand = opObj.right ?? 0;

      if (Number(secondOperand) && Number(firstOperand)) {
        answer = Number(firstOperand) - Number(secondOperand);
        inputBox.value = answer;
        opObj.left = answer;
        opObj.right = undefined;
        return;
      }
    }
    opObj.operand = "-";
    currentOperand = "-";
  });

  multiplyCommand.addEventListener("click", () => {
    console.log("about to x");

    if (currentOperand)
    {

      const firstOperand = opObj.left;
      const secondOperand = opObj.right ?? 0;

      if (Number(secondOperand) && Number(firstOperand)) {
        answer = Number(firstOperand) * Number(secondOperand);
        inputBox.value = answer;
        opObj.left = answer;
        opObj.right = undefined;
        return;
      }
    }
    opObj.operand = "x";
    currentOperand = "x";
  });
  
  divideCommand.addEventListener("click", () => {
    
    if (currentOperand) {

      const firstOperand = opObj.left;
      const secondOperand = opObj.right ?? 0;

      if (Number(secondOperand) && Number(firstOperand)) {
        answer = Number(firstOperand) / Number(secondOperand);
        inputBox.value = answer;
        opObj.left = answer;
        opObj.right = undefined;
        return;
      }
    }
    opObj.operand = "/";
    currentOperand = "/";
  });

  equalCommand.addEventListener("click", ()=>{
    const firstOperand = opObj.left;
    const secondOperand = opObj.right ?? 0;

    if (Number(secondOperand) && Number(firstOperand)) {
      if(opObj.operand === "/")
      {
        answer = Number(firstOperand) / Number(secondOperand);

      }
      else if(opObj.operand === "+")
      {
        answer = Number(firstOperand) + Number(secondOperand);

      }
      else if(opObj.operand === "-")
      {
        answer = Number(firstOperand) - Number(secondOperand);

      }
      else if(opObj.operand === "x")
      {
        answer = Number(firstOperand) * Number(secondOperand);
      }
      inputBox.value = answer;
      opObj.left = answer;
      opObj.right = undefined;
      return;
    }
    return;
  });

  inputBox.value = "0";
};

document.addEventListener("DOMContentLoaded", allContentLoaded);
/*
// refactored code
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
*/
