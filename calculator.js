const screenNum = document.querySelector('#screen')
const numButton = document.querySelectorAll('.num-button');

const opButton = document.querySelectorAll('.op-button');
const operator = document.querySelectorAll('.operator');

const addButton = document.querySelector('#add');
const substractButton = document.querySelector('#substract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#delete');
const equalsButton = document.querySelector('#equals');

numButton.forEach((element) => {
  element.addEventListener('click', enterNumber);
})
function enterNumber(event) {
  const number = event.target.textContent.trim();
  screenNum.textContent += number;
}

operator.forEach((element) => {
  element.addEventListener('click', enterOperator);
})

function enterOperator(event) {
  const operator = event.target.textContent;
  let currentTextEnd = screenNum.textContent.slice(-1);
  if(currentTextEnd.match(/^-{0,1}\d+$/)) {
    screenNum.textContent += operator;
  }
}

backspaceButton.addEventListener('click', deleteChar);
function deleteChar(event) {
  let currentText = screenNum.textContent;
  let charToDelete = 1;
  if (currentText.slice(-1) == " ") charToDelete = 3;

  screenNum.textContent = screenNum.textContent.slice(0, -charToDelete);
}

clearButton.addEventListener('click', clearNumber);
function clearNumber(event) {
  screenNum.textContent = "";
}

equalsButton.addEventListener('click', runOperate);
function runOperate(event) {
  // use when there is no space delimiter + add trim to operator
  // let args = screenNum.textContent.split(/([^0-9.])/);
  let args = screenNum.textContent.split(" ");
  result = operate(...args);
  if (result) { 
    console.log(result);
    screenNum.textContent = result; 
  }
}

window.addEventListener('keydown', inputKey);
function inputKey(event) {
  const key = document.querySelector(`[data-key="${event.key}"]`);
  if (!key) return;
  key.click();
}

function add (firstNum, secondNum) {
	const result = firstNum + secondNum;
	return result;
}

function subtract(firstNum, secondNum) {
	const result = firstNum - secondNum;
	return result;
}

function multiply (firstNum, secondNum) {
	const result = firstNum * secondNum;
	return result;
}

function divide (firstNum, secondNum) {
	const result = firstNum / secondNum;
	return result;
}

function operate(firstNum, operator, secondNum) {
  let intFirstNum = +firstNum;
  let intSecondNum = +secondNum;
  let trimOperator = operator;
  switch(operator) {
    case "+":
      return add(intFirstNum, intSecondNum);
    case "-":
      return subtract(intFirstNum, intSecondNum);
    case "x":
      return multiply(intFirstNum, intSecondNum);
    case ":":
      return divide(intFirstNum, intSecondNum);
  }
}

