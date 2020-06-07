function solve(input = 0) {
    let numberAsString = input.toString();

    let areEqual = true;
    let firstSymbol = numberAsString[0];
    let sum = +firstSymbol;

    for(let i = 1; i < numberAsString.length; i++){
        let currentSymbol = numberAsString[i];
        sum += +currentSymbol;

        if(firstSymbol !== currentSymbol){
            areEqual = false;
        }
    }

    console.log(areEqual);
    console.log(sum);
}

solve(2222222);
