function solve(numbers = [], startIndex, endIndex) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }

  if (startIndex < 0) {
    startIndex = 0;
  }

  if (endIndex > numbers.length) {
    endIndex = numbers.length - 1;
  }

  numbers = numbers.map((x) => +x).slice(startIndex, endIndex + 1);

  let sum = 0;

  if (numbers.length === 0) {
    return sum;
  }

  sum = numbers.reduce((a, b) => a + b);

  return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
