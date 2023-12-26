const parse = require('./parse');
const CalculatorState = require('./calculatorState');
const handleKeyPress = require('./handleKeyPress');

function calculate(input) {
  const keys = parse(input);
  const calculatorState = new CalculatorState();

  for (const key of keys) {
    handleKeyPress(calculatorState, key);
  }

  return calculatorState.screen.toString(16).toUpperCase();
}

module.exports = calculate;
