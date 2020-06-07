function solve(input) {
  let areMagic = true;
  let checkSum = input[0].reduce((a, b) => a + b, 0);

  for (let row = 1; row < input.length; row++) {
    let currentSum = input[row].reduce((a, b) => a + b, 0);

    if (checkSum !== currentSum) {
      areMagic = false;
      console.log(areMagic);
      return;
    }
  }

  for (let col = 0; col < input.length; col++) {
    let currentSum = 0;

    for (let row = 0; row < input.length; row++) {
      let currentElement = input[col][row];
      currentSum += currentElement;
    }

    if (currentSum !== checkSum) {
      areMagic = false;
      console.log(areMagic);
      return;
    }
  }

  console.log(areMagic);
}

solve(
[
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
