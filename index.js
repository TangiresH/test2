const fs = require('fs');
const parse = require('./parse.js');
const CalculatorState = require('./calculatorState.js');
const handleKeyPress = require('./handleKeyPress.js');

function processInput(input) {
  const keys = parse(input);
  const calculatorState = new CalculatorState();

  for (const key of keys) {
    handleKeyPress(calculatorState, key);
  }

  return calculatorState.screen;
}

fs.readFile('input.txt', 'utf8', (err, inputData) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = processInput(inputData.trim());

  fs.writeFile('output.txt', result.toString(), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Результат записано у файл output.txt');
    }
  });
});