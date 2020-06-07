function solve(input = []) {
    let dictionaty = {};

    let words = input.join(" ");
    let pattern = /[A-Za-z0-9_]+/;

    while(words.match(pattern)){
        let currentMatch = words.match(pattern);
        words = words.replace(currentMatch, "");

        if(!dictionaty.hasOwnProperty(currentMatch.toString())){
            dictionaty[currentMatch.toString()] = 0;
        }

        dictionaty[currentMatch.toString()]++;
    }

    console.log(JSON.stringify(dictionaty));
}

solve(['Far too slow, you\'re far too slow.']);
