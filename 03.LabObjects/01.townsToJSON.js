function solve(input = []) {
    input.shift();
    let towns = [];

    input.forEach((line) => {

        let [ignore, town, latitude, longitude] = line.split("|").map(x => x.trim());
        latitude = (+latitude).toFixed(2);
        longitude = (+longitude).toFixed(2);

        let currentTown = {
            Town: town,
            Latitude: +latitude,
            Longitude: +longitude
        };

        towns.push(currentTown);
    });

    console.log(JSON.stringify(towns));
}

solve(
[
  "| Town | Laittude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
