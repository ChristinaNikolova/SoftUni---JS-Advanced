function solve(input = []) {
    input = input.map(x => JSON.parse(x));
    let sums = [];
    let arrays = [];

    input.forEach((array) => {

        let currentSum = array.reduce((a, b) => (a + b), 0);

        if(!sums.includes(currentSum)){
            sums.push(currentSum);
            arrays.push((array).sort((a, b) => b - a));
        }
    });

    let sortedArrays = arrays.sort((a, b) => a.length - b.length);

    for (const array of sortedArrays) {

        console.log("[" + array.join(", ") + "]");
    }
}

solve(
[
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
