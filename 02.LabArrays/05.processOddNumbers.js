function solve(input = []) {
    let result = [];
    input.reverse();

    let startIndex = 0;

    if(input.length % 2 !== 0){
        startIndex = 1;
    }

    for(let i = startIndex; i < input.length; i+=2){
       let current = input[i] * 2;
       result.push(current); 
    }

    console.log(result.join(" "));
}
  
  solve([10, 15, 20, 25]);