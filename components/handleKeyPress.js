const fs = require('fs');

function handleKeyPress(calculatorState, key) {
  if (/\d/.test(key)) {
    handleDigit(calculatorState, key);
  } else if (/[\+\-\*\/]/.test(key)) {
    handleOperator(calculatorState, key);
  } else if (key === '=') {
    handleEquals(calculatorState);
  } else {
    checkForLetter();
  }
}

function handleDigit(calculatorState, digit) {
  const parsedDigit = parseInt(digit, 16);

  if (calculatorState.startNewNumber) {
    calculatorState.screen = parsedDigit;
    calculatorState.startNewNumber = false;
  } else {
    calculatorState.screen = calculatorState.screen * 16 + parsedDigit;
  }

  const digitCount = Math.floor(Math.log10(parsedDigit) + 1);
  if (digitCount > 1) {
    console.error('Error: Input contains a number with more than one digits. Exiting.');

    fs.writeFileSync('output.txt', '');

    process.exit(1);
  }
}

function handleOperator(calculatorState, operator) {
  calculatorState.op = operator;
  calculatorState.startNewNumber = true;
  calculatorState.firstNumber = calculatorState.screen;
}

function handleEquals(calculatorState) {
  if (calculatorState.op && !calculatorState.startNewNumber) {
    switch (calculatorState.op) {
      case '+':
        calculatorState.screen += calculatorState.firstNumber;
        break;
      case '-':
        calculatorState.screen = calculatorState.firstNumber - calculatorState.screen;
        break;
      case '*':
        calculatorState.screen *= calculatorState.firstNumber;
        break;
      case '/':
        calculatorState.screen = Math.floor(calculatorState.firstNumber / calculatorState.screen);
        break;
    }
    calculatorState.startNewNumber = true;
  }
}

function checkForLetter() {
  const inputContent = fs.readFileSync('input.txt', 'utf-8');

  if (/[a-zA-Zа-яА-Я]/.test(inputContent)) {
    console.error('Error: Input contains at least one letter. Exiting.');

    fs.writeFileSync('output.txt', '');

    process.exit(1); 
  }
}

module.exports = handleKeyPress;
