function solve(input) {
    let counterEquals = 0;

    for(let firstRow = 0; firstRow < input.length - 1; firstRow++){
        for(let secondRow = firstRow + 1; secondRow < input.length; secondRow++){
            for(let col = 0; col < input[firstRow].length; col++){
                let firstElement = input[firstRow][col];
                let secondElement = input[secondRow][col];

                if(firstElement === secondElement){
                    counterEquals++;
                }
            }

            break;
        }
    }

    for(let row = 0; row < input.length; row++){
        for(let col = 0; col < input[row].length - 1; col++){
            let firstElement = input[row][col];
            let secondElement = input[row][col + 1];

            if(firstElement === secondElement){
                counterEquals++;
            }
        }
    }

    console.log(counterEquals);
}

solve(
[
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
