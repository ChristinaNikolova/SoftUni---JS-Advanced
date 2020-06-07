class Kitchen {
  constructor(budget) {
    this.budget = budget;
    this.menu = {};
    this.productsInStock = {};
    this.actionsHistory = [];
  }

  loadProducts(products = []) {
    products.forEach((product) => {
      let [productName, productQuantity, productPrice] = product
        .split(" ")
        .map((x) => x.trim());
      productQuantity = +productQuantity;
      productPrice = +productPrice;

      if (this.budget >= productPrice) {
        this.budget -= productPrice;

        if (!this.productsInStock.hasOwnProperty(productName)) {
          this.productsInStock[productName] = 0;
        }

        this.productsInStock[productName] += productQuantity;
        this.actionsHistory.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.actionsHistory.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    });

    return this.actionsHistory.join("\n");
  }

  addToMenu(meal = "", neededProducts = [], price = 0) {
    if (this.menu.hasOwnProperty(meal)) {
      return `The ${meal} is already in our menu, try something different.`;
    }

    this.menu[meal] = {
      price: price,
      products: neededProducts,
    };

    let countMealsInMenu = Object.keys(this.menu).length;

    return `Great idea! Now with the ${meal} we have ${countMealsInMenu} meals in the menu, other ideas?`;
  }

  showTheMenu() {
    let result = "";

    for (const meal in this.menu) {
      result += `${meal} - $ ${this.menu[meal].price}` + "\n";
    }

    if (result === "") {
      return "Our menu is not ready yet, please come later...";
    }

    return result;
  }

  makeTheOrder(meal = "") {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    let neededProducts = this.menu[meal].products;
    let canMake = true;

    for (const currentProduct of neededProducts) {
      let argsCurrentProduct = currentProduct.split(" ").map((x) => x.trim());
      let quantityProduct = argsCurrentProduct.pop();
      let nameProduct = argsCurrentProduct.join(" ");

      if (
        !this.productsInStock.hasOwnProperty(nameProduct) ||
        this.productsInStock[nameProduct] < quantityProduct
      ) {
        canMake = false;
        break;
      }
    }

    if (!canMake) {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }

    for (const currentProduct of neededProducts) {
      let argsCurrentProduct = currentProduct.split(" ").map((x) => x.trim());
      let quantityProduct = argsCurrentProduct.pop();
      let nameProduct = argsCurrentProduct.join(" ");

      this.productsInStock[nameProduct] -= quantityProduct;
    }

    let priceCurrentMeal = this.menu[meal].price;
    this.budget += priceCurrentMeal;

    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${priceCurrentMeal}.`;
  }
}

let kitchen = new Kitchen(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);

console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5",
    ],
    15.55
  )
);

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder("hamburger"));
console.log(kitchen.makeTheOrder("Pizza"));
console.log(kitchen.makeTheOrder("frozenYogurt"));
