function solve(input = []) {
    let result = [];
    let lastElement = input[0];
    result.push(lastElement);

    for(let i = 1; i < input.length;i++){
        let currentElement = input[i];

        if(currentElement >= lastElement){
            result.push(currentElement);
            lastElement = currentElement;
        }
    }

    console.log(result.join("\n"));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
