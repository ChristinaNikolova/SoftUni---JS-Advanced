class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  get budget() {
    return this.innerBudget;
  }

  set budget(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }

    this.innerBudget = budget;
  }

  shopping(product) {
    let name = product[0];
    let price = +product[1];

    if (this.budget < price) {
      throw new Error("Not enough money to buy this product");
    }

    this.budget -= price;
    this.products.push(name);

    return `You have successfully bought ${name}!`;
  }

  recipes(recipe) {
    let recipeName = recipe.recipeName;
    let productsList = recipe.productsList;

    for (const currentProduct of productsList) {
      if (!this.products.includes(currentProduct)) {
        throw new Error("We do not have this product");
      }
    }

    this.dishes.push(recipe);

    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    if (!this.dishes.some((x) => x.recipeName === dish)) {
      throw new Error("We do not have this dish");
    }

    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish;

    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let result = "";

    for (const guest in this.guests) {
      let products = this.dishes.find(
        (x) => x.recipeName === this.guests[guest]
      ).productsList;

      result +=
        `${guest} will eat ${
          this.guests[guest]
        }, which consists of ${products.join(", ")}` + "\n";
    }
    return result.trim();
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

console.log(
  dinner.recipes({
    recipeName: "Oshav",
    productsList: ["Fruits", "Honey"],
  })
);
console.log(
  dinner.recipes({
    recipeName: "Folded cabbage leaves filled with rice",
    productsList: ["Cabbage", "Rice", "Salt", "Savory"],
  })
);
console.log(
  dinner.recipes({
    recipeName: "Peppers filled with beans",
    productsList: ["Beans", "Peppers", "Salt"],
  })
);

console.log(dinner.inviteGuests("Ivan", "Oshav"));
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
