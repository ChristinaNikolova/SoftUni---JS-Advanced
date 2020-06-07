function solve(input = []) {
    let currentSpeed = input[0];
    let typeOfRoad = input[1];

    let speedsLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    let limit = speedsLimit[typeOfRoad];
    checkTheSpeed(currentSpeed, limit)

    function checkTheSpeed(currentSpeed, speedLimit){
        let resultSpeed = speedLimit - currentSpeed;

        if(resultSpeed >= 0){
            console.log();
            return;
        }

        resultSpeed = Math.abs(resultSpeed);

        if(resultSpeed <= 20){
            console.log("speeding");
        } else if(resultSpeed <= 40){
            console.log("excessive speeding");
        } else{
            console.log("reckless driving");
        }
    }
}

solve([21, 'residential']);
