function solve(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for(let row = 0; row < input.length; row++){
        for(let col = 0; col < input[row].length; col++){
            let current = input[row][col];

            if(current > maxNumber){
                maxNumber = current;
            }
        }
    }

    console.log(maxNumber);
}

solve(
[
  [20, 50, 10],
  [8, 33, 145],
]);
