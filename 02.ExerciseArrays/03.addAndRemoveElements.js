function solve(input = []) {
    let result = [];

    for(let i = 0; i < input.length; i++){
        let currentCommand = input[i];

        if(currentCommand === "add"){
            result.push(i + 1);
        } else if(currentCommand === "remove"){
            result.pop();
        }
    }

    console.log(result.length !== 0 ? result.join("\n") : "Empty");
}

solve(["add", "add", "add", "add"]);
