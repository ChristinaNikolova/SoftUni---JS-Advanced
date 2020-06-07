function solve(first, second) {
    let startNumber = +first;
    let endNumber = +second;
    let sum = 0;

    for(let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++){
        sum += currentNumber;
    }

    console.log(sum);
}

solve('1', '5' );
