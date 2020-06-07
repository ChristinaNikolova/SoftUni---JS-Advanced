function solve(input = []) {
    let smallestNumbers = input.sort((a, b) => a - b).slice(0, 2);

    console.log(smallestNumbers.join(" "));
}

solve([30, 15, 50, 5]);
