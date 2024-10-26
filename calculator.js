const numbers = [];
/*
TODO: add funtions for handling operations.
*/
const processNumber = (value) => {
  const inputBox = document.querySelector("#input-box");
  if(numbers.length == 0 && value == "0")
  {
    return;
  }
  
  if (inputBox.value == "0" && numbers.length < 10) {
    inputBox.value = value;
    numbers.push(value);
  } else {
    if (numbers.length < 10) {
      inputBox.value += value;
      numbers.push(value);
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

  oneButton.addEventListener("click", ()=> {
    processNumber("1");
  });
  twoButton.addEventListener("click", ()=> {
    processNumber("2");
  });
  threeButton.addEventListener("click", ()=> {
    processNumber("3");
  });
  fourButton.addEventListener("click", ()=> {
    processNumber("4");
  });
  fiveButton.addEventListener("click", ()=> {
    processNumber("5");
  });
  sixButton.addEventListener("click", ()=> {
    processNumber("6");
  });
  sevenButton.addEventListener("click", ()=> {
    processNumber("7");
  });
  eightButton.addEventListener("click", ()=> {
    processNumber("8");
  });
  nineButton.addEventListener("click", ()=> {
    processNumber("9");
  });
  zeroButton.addEventListener("click", ()=> {
    processNumber("0");
  });

  cancelButton.addEventListener("click", () => {
    numbers.pop();
    if(numbers.length > 0)
    {
        inputBox.value = numbers.join("");
    }
    else
    {
        inputBox.value = "0";  
    }
    console.log(inputBox.value);
  });
  inputBox.value = "0";
};

document.addEventListener("DOMContentLoaded", allContentLoaded);
