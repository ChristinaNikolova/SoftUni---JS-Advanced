function solve(first, second, operator) {
  let result = 0;

  switch (operator) {
    case "+":
        result = first + second;
      break;
    case "-":
        result = first - second;
      break;
    case "*":
        result = first * second;
      break;
    case "/":
        result = first / second;
      break;
    case "%":
        result = first % second;
      break;
    case "**":
        result = first ** second;
      break;
  }

  console.log(result);
}

solve(5, 6, "+");
