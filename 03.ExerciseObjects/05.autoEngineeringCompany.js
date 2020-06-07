function solve(input = []) {
    let cars = {};

    input.forEach((line) => {

        let [carBrand, carModel, producedCars] = line.split("|").map(x => x.trim());
        producedCars = +producedCars;

        if(!cars.hasOwnProperty(carBrand)){
            cars[carBrand] = {};
        }

        let models = cars[carBrand];

        if(!models.hasOwnProperty(carModel)){
            models[carModel] = 0;
        }

        models[carModel] += producedCars;
    });

    for (const currentBrand in cars) {
        console.log(currentBrand);

        let models = cars[currentBrand];

        for (const currentModel in models) {
            console.log(`###${currentModel} -> ${models[currentModel]}`);
        }
    }
}

solve(
[
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
