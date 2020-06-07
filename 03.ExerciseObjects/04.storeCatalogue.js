function solve(input = []) {
    let catalog = {};

    input.forEach((line) => {

        let [productName, productPrice] = line.split(":").map(x => x.trim());
        productPrice = +productPrice;
        let currentLetter = productName[0];

        if(!catalog.hasOwnProperty(currentLetter)){
            catalog[currentLetter] = {};
        }

        let products = catalog[currentLetter];
        products[productName] = productPrice;
    });

    let sortedCatalog = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (const currentLetter of sortedCatalog) {
        console.log(currentLetter);

        let products = catalog[currentLetter];
        let sortedProducts = Object.keys(products).sort((a, b) => a.localeCompare(b));

        for (const currentProduct of sortedProducts) {
            console.log(`  ${currentProduct}: ${products[currentProduct]}`);
        }
    }
}

solve(
[
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
