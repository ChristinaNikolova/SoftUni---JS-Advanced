function solve(input = []) {
    let towns = {};

    input.forEach((line) => {

        let [townName, townPopulation] = line.split("<->").map(x => x.trim());
        townPopulation = +townPopulation;

        if(!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }

        towns[townName] += townPopulation;
    });

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(
[
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
