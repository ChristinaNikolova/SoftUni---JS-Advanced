function solve(input = []) {
    let towns = {};

    for(let i = 0; i < input.length; i+=2){
        let townName = input[i];
        let score = +input[i + 1];

        if(!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }

        towns[townName] += score;
    }

    console.log(JSON.stringify(towns));
}

solve(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);
