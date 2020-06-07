function solve(input = []) {
    let result = [];

    for(let i = 0; i < input.length; i+=2){
        let current = input[i];
        result.push(current);
    }

    console.log(result.join(" "));
}
  
  solve(['20', '30', '40']);