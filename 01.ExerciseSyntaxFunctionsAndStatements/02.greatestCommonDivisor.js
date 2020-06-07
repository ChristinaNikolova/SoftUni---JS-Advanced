function solve(first, second) {
    while(second !== 0){
        let temp = first % second;
        first = second;
        second = temp;
    }

    console.log(first);
}

solve(15, 5);
