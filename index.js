const fs = require('fs');
const Parse = require('./components/parse');
const CalculatorState = require('./components/calculatorState');
const HandleKeyPress = require('./components/handleKeyPress');

const input = fs.readFileSync('input.txt', 'utf8').trim();

const keys = Parse(input);

if (keys.length === 0) {
    fs.writeFileSync('output.txt', '');
} else {
    const calculatorState = new CalculatorState();

    for (const key of keys) {
        HandleKeyPress(calculatorState, key);
    }

    fs.writeFileSync('output.txt', calculatorState.screen.toString());
    console.log('Result has been written to output.txt.');
}
