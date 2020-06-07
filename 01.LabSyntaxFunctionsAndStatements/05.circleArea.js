function solve(input) {
    let typeInput = typeof(input);

    if(typeInput !== "number"){
        return `We can not calculate the circle area, because we receive a ${typeInput}.`;
    }

    let radius = +input;
    let areaCircle = Math.PI * Math.pow(radius, 2);

    return areaCircle.toFixed(2);
}

console.log(solve(5));
