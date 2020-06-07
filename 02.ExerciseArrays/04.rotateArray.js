function solve(input = []) {
    let rotations = +input.pop() % input.length;
    
    for(let i = 0; i < rotations; i++){
        let elementToMove = input.pop();
        input.unshift(elementToMove);
    }

    console.log(input.join(" "));
}

solve(["1", "2", "3", "4", "2"]);
