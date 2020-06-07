function solve(input) {
    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    let currentDay = weekDays.indexOf(input);

    console.log(currentDay !== -1 ? currentDay + 1 : "error");
}

solve("Monday");
