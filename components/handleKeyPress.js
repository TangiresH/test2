const Calculate = require('./calculate');


function HandleKeyPress(calculatorState, key) {
  switch (key) {
      case "=":
          calculatorState.screen = Calculate(calculatorState.first_number, calculatorState.screen, calculatorState.op);
          break;
      case "+":
      case "-":
      case "*":
      case "/":
          calculatorState.op = key;
          calculatorState.start_second_number = true;
          calculatorState.first_number = calculatorState.screen;
          break;
      default:
          if (calculatorState.start_second_number) {
              calculatorState.screen = parseInt(key);
              calculatorState.start_second_number = false;
          } else {
              calculatorState.screen = calculatorState.screen * 10 + parseInt(key);
          }
          break;
  }
}

module.exports = HandleKeyPress;
