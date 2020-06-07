function solve(input = []) {
    let number = +input.shift();

    let operations = {
        chop: (x) => x /= 2,
        dice: (x) => x = Math.sqrt(x),
        spice: (x) => x += 1,
        bake: (x) => x *= 3,
        fillet: (x) => x -= 0.20 * x,
    }

    for(let i = 0; i < input.length; i++){
        let currentOperation = input[i];

        number = operations[currentOperation](number);

        console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
