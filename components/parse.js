function parse(input) {
  return input.trim().split(' ').filter(Boolean);
}

module.exports = parse;
