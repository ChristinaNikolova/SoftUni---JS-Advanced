function solve(numbers = [], criteria = "") {

    let sortedNumbers = [];

    if(criteria === "asc"){
        sortedNumbers = numbers.sort((a, b) => a - b);
    } else if(criteria === "desc"){
        sortedNumbers = numbers.sort((a, b) => b - a);
    }

    return sortedNumbers;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
