function solve(input = []) {
    let products = {};

    input.forEach((line) => {

        let [townName, productName, productPrice] = line.split("|").map(x => x.trim());
        productPrice = +productPrice;

        if(!products.hasOwnProperty(productName)){
            products[productName] = {};
        }

        let towns = products[productName];

        if(!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }

        towns[townName] = productPrice;
    });

    for (const currentProduct in products) {
        let towns = products[currentProduct];

        let minPrice = Number.MAX_SAFE_INTEGER;
        let townNameMinPrice = "";

        for (const currentTown in towns) {
          
            let currentPrice = towns[currentTown];

            if(currentPrice < minPrice){
                minPrice = currentPrice;
                townNameMinPrice = currentTown;
            }
        }

        console.log(`${currentProduct} -> ${minPrice} (${townNameMinPrice})`);
    }
}

solve(
[
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
