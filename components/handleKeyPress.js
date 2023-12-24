const calculate = require('./calculate');


function handleKeyPress(calculatorState, key) {
  if (/\d/.test(key)) {
    if (calculatorState.start_new_number) {
      calculatorState.screen = parseInt(key, 10);
      calculatorState.start_new_number = false;
    } else {
      calculatorState.screen = calculatorState.screen * 10 + parseInt(key, 10);
    }
  } else if (['+', '-', '*', '/'].includes(key)) {
    calculatorState.op = key;
    calculatorState.start_new_number = true;
    calculatorState.first_number = calculatorState.screen;
  } else if (key === '=') {
    calculatorState.screen = calculate(calculatorState.first_number, calculatorState.screen, calculatorState.op);
    calculatorState.op = null;
    calculatorState.start_new_number = true;
  }
}

module.exports = handleKeyPress;
