function solution() {

  let elements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  return function result(input = "") {

    let recepts = {
        apple: (quantity) => {
          if (elements.carbohydrate < 1 * quantity) {
            return `Error: not enough carbohydrate in stock`;
          }
          elements.carbohydrate -= 1 * quantity;
          if (elements.carbohydrate < 2 * quantity) {
            return `Error: not enough flavour in stock`;
          }
          elements.flavour -= 2 * quantity;
    
          return "Success";
        },
        lemonade: (quantity) => {
          if (elements.carbohydrate < 10 * quantity) {
            return `Error: not enough carbohydrate in stock`;
          }
          elements.carbohydrate -= 10 * quantity;
          if (elements.flavour < 20 * quantity) {
            return `Error: not enough flavour in stock`;
          }
          elements.flavour -= 20 * quantity;
          return "Success";
        },
        burger: (quantity) => {
          if (elements.carbohydrate < 5 * quantity) {
            return `Error: not enough carbohydrate in stock`;
          }
          elements.carbohydrate -= 5 * quantity;
          if (elements.fat < 7 * quantity) {
            return `Error: not enough fat in stock`;
          }
          elements.fat -= 7 * quantity;
          if (elements.flavour < 3 * quantity) {
            return `Error: not enough flavour in stock`;
          }
          elements.flavour -= 3 * quantity;
          return "Success";
        },
        eggs: (quantity) => {
          if (elements.protein < 5 * quantity) {
            return `Error: not enough protein in stock`;
          }
          elements.protein -= 5 * quantity;
          if (elements.fat < 1 * quantity) {
            return `Error: not enough fat in stock`;
          }
          elements.fat -= 1 * quantity;
          if (elements.flavour < 1 * quantity) {
            return `Error: not enough flavour in stock`;
          }
          elements.flavour -= 1 * quantity;
          return "Success";
        },
        turkey: (quantity) => {
          if (elements.protein < 10 * quantity) {
            return `Error: not enough protein in stock`;
          }
          elements.protein -= 10 * quantity;
          if (elements.carbohydrate < 10 * quantity) {
            return `Error: not enough carbohydrate in stock`;
          }
          elements.carbohydrate -= 10 * quantity;
          if (elements.fat < 10 * quantity) {
            return `Error: not enough fat in stock`;
          }
          elements.fat -= 10 * quantity;
          if (elements.flavour < 10 * quantity) {
            return `Error: not enough flavour in stock`;
          }
          elements.flavour -= 10 * quantity;
          return "Success";
        },
      };

    let splitedInput = input.split(" ").map((x) => x.trim());
    let command = splitedInput[0];

    if (command === "restock") {
        let microelement = splitedInput[1];
        let quantity = +splitedInput[2];

        elements[microelement] += quantity;

        return "Success";
    } else if (command === "prepare") {
        let recipe = splitedInput[1];
        let quantity = +splitedInput[2];

        return recepts[recipe](quantity);

    } else if (command === "report") {

        return `protein=${elements.protein} carbohydrate=${elements.carbohydrate} fat=${elements.fat} flavour=${elements.flavour}`;
    }
  };
}
