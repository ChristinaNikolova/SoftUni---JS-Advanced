function solve(input = []) {
    let step = +input.pop();
    let result = [];

    for(let i = 0; i < input.length; i+=step){
     let current = input[i];
     result.push(current);
    }

    console.log(result.join("\n"));
}

solve(["5", "20", "31", "4", "20", "2"]);
