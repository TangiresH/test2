function Parse(input) {
  const validInputRegex = /^[0-9+\-*/=\s]+$/;
  if (!validInputRegex.test(input)) {
    console.error("Error: Invalid input. Only digits and allowed operators (+ - * / =) are allowed.");
    return [];
  }

  const invalidDigitSequenceRegex = /\d{2,}/;
  if (invalidDigitSequenceRegex.test(input)) {
    console.error("Error: Invalid input. Consecutive digits without space are not allowed.");
    return [];
  }

  const invalidSpaceRegex = /\s{2,}/;
  if (invalidSpaceRegex.test(input)) {
    console.error("Error: Invalid input. Multiple consecutive spaces are not allowed.");
    return [];
  }

  const keys = input.split(' ').filter(key => key !== '');
  return keys;
}

module.exports = Parse;
