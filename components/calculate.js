function Calculate(firstNumber, secondNumber, operation) {
  switch (operation) {
      case "+":
          return firstNumber + secondNumber;
      case "-":
          return firstNumber - secondNumber;
      case "*":
          return firstNumber * secondNumber;
      case "/":
          return firstNumber / secondNumber;
      default:
          return secondNumber;
  }
}

module.exports = Calculate;
