function solve(input) {
  let rows = input.length;

  let firstSum = 0;
  let row = 0;
  let col = 0;

  for (let i = 0; i < rows; i++) {
    let current = input[row][col];
    firstSum += current;
    row++;
    col++;
  }

  let secondSum = 0;
  row = 0;
  col = rows - 1;

  for (let i = 0; i < rows; i++) {
    let current = input[row][col];
    secondSum += current;
    row++;
    col--;
  }

  console.log(firstSum + " " + secondSum)
}

solve([
  [20, 40],
  [10, 60],
]);
