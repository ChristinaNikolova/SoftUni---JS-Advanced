function solve(input = "") {
    let result = [];
    let pattern = /[A-Za-z0-9_]+/

    while(input.match(pattern)){
        let currentMatch = input.match(pattern);
        result.push(currentMatch.toString().toUpperCase());
        input = input.replace(currentMatch, "");
    }

    console.log(result.join(", "));
}

solve('Hi, how are you?');
