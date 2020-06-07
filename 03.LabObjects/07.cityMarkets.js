function solve(input = []) {
    let towns = {};

    input.forEach((line) => {

        let [town, product, saleArgs] = line.split("->").map(x => x.trim());
        let [amountOfSales, priceForOneUnit] = saleArgs.split(":").map(x => x.trim());
        let totalIncome = +amountOfSales * +priceForOneUnit;

        if(!towns.hasOwnProperty(town)){
            towns[town] = {};
        }

        let products = towns[town];

        if(!products.hasOwnProperty(product)){
            products[product] = 0;
        }

        products[product] += totalIncome;
    });

    for (const currentTown in towns) {
        console.log(`Town - ${currentTown}`);

        let products = towns[currentTown];

        for (const currentProduct in products) {
            console.log(`$$$${currentProduct} : ${products[currentProduct]}`)
        }
    }
}

solve(
[
  "Sofia -> Laptops HP -> 200 : 2000",
  "Sofia -> Raspberry -> 200000 : 1500",
  "Sofia -> Audi Q7 -> 200 : 100000",
  "Montana -> Portokals -> 200000 : 1",
  "Montana -> Qgodas -> 20000 : 0.2",
  "Montana -> Chereshas -> 1000 : 0.3",
]);
