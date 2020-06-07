function solve(input = []) {
    let sum = 0;
    let reversedSum = 0;
    let concat = "";

    for(let i = 0; i < input.length; i++){
        let currentNumber = +input[i];

        sum += currentNumber;
        reversedSum += 1 / currentNumber;
        concat += currentNumber;
    }
    
    console.log(sum);
    console.log(reversedSum);
    console.log(concat);
}

solve([1, 2, 3]);
