const fs = require('fs');
const calculate = require('./components/calculate');

const input = fs.readFileSync('input.txt', 'utf-8').trim();

const result = calculate(input);
fs.writeFileSync('output.txt', result);
