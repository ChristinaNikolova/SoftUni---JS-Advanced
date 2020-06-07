function solve(totalSteps, lengthPerStepsMeters, speedKmPerHour) {

    let totalLengthMeters = totalSteps * lengthPerStepsMeters;
    let totalBreaksMinutes = Math.floor(totalLengthMeters / 500);

    let totalLengthKm = totalLengthMeters / 1000;
    let totalTimeHours = totalLengthKm / speedKmPerHour + (totalBreaksMinutes / 60);
    let totalSeconds = Math.ceil(totalTimeHours * 3600);

    let format = new Date(null, null, null, null, null, totalSeconds);
    let finalOutput = format.toTimeString().split(" ")[0];

    console.log(finalOutput);
}

solve(4000, 0.60, 5);
