const elementOutput = document.querySelector(".output");
const elementClear = document.querySelector(".item-1");
const elementComma = document.querySelector(".item-18");

let currentInput = "";

const displayClear = () => {
  currentInput = "";
  elementOutput.textContent = "";
};

const displayNumber = (n) => {
  currentInput += n;
  elementOutput.textContent += n;
};

const displayOperator = (o) => {
  currentInput += o;
  elementOutput.textContent += o;
};

const displayComma = () => {
  if (elementOutput.textContent.trim() === "") return;

  currentInput += ".";
  elementOutput.textContent += ",";
};

const calculate = () => {
  try {
    currentInput = currentInput.replace(/,/g, ".");
    currentInput = eval(currentInput);
    elementOutput.textContent = currentInput;
  } catch (error) {
    elementOutput.textContent = "ERROR";
  }
};
