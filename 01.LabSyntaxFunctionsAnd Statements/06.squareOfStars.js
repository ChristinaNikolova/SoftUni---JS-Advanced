function solve(input) {
    let counter = input;

    if(input === undefined){
        counter = 5;
    }

    let result = "";

    for(let i = 0; i < counter; i++){
        result += "* ".repeat(counter);
        result += "\n";
    }

    console.log(result);
}

solve(5);
