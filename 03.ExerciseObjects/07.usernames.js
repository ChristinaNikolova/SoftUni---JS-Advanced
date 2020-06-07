function solve(input = []) {
    let uniqueUsernames = [];

    input.forEach((currentName) => {
        if(!uniqueUsernames.includes(currentName)){
            uniqueUsernames.push(currentName);
        }
    });

    let sortedResult = uniqueUsernames.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedResult.join("\n"));
}

solve(
[
  "Ashton",
  "Kutcher",
  "Ariel",
  "Lilly",
  "Keyden",
  "Aizen",
  "Billy",
  "Braston",
]);
