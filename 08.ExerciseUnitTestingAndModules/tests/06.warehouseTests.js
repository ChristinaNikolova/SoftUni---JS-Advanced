let Warehouse = require("../code/06.warehouse.js");
let assert = require("chai").assert;

describe("Warehouse class behavior", () => {
  let actualResult;
  let expectedResult;
  let wh;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    wh = new Warehouse(12);
  });

  describe("constructor behavior", () => {
    it("check instance with valid params", () => {
      assert.equal(wh.capacity, 12);
      assert.deepEqual(wh.availableProducts, { Food: {}, Drink: {} });
    });

    it("check capacity prop with invalid input - not a number", () => {
      actualResult = () => (wh.capacity = "test");
      expectedResult = "Invalid given warehouse space";

      assert.throw(actualResult, expectedResult);
    });

    it("check capacity prop with invalid input - negative number", () => {
      actualResult = () => (wh.capacity = -100);
      expectedResult = "Invalid given warehouse space";

      assert.throw(actualResult, expectedResult);
    });

    it("check capacity prop with input", () => {
      wh.capacity = 20;

      actualResult = wh.capacity;
      expectedResult = 20;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("addProduct() behavior", () => {
    it("check with valid input and valid left capacity", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = wh.revision();
      expectedResult =
        "Product type - [Food]\n- banana 2\n- apple 3\n- ananas 1\nProduct type - [Drink]\n- water 2\n- juise 1";

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid input and valid left capacity - second add", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 1);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "banana", 2);

      actualResult = wh.revision();
      expectedResult =
        "Product type - [Food]\n- banana 6\n- apple 1\n- ananas 1\nProduct type - [Drink]\n- water 2\n- juise 1";

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid input and zero left capacity - second add", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 1);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 0);
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "banana", 1);

      actualResult = wh.revision();
      expectedResult =
        "Product type - [Food]\n- banana 7\n- apple 1\n- ananas 1\nProduct type - [Drink]\n- water 2\n- juise 0";

      assert.equal(actualResult, expectedResult);
    });

    it("check with not free capacity", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 1);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "banana", 1);

      actualResult = () => wh.addProduct("Food", "banana", 2);
      expectedResult =
        "There is not enough space or the warehouse is already full";

      assert.throw(actualResult, expectedResult);
    });
  });

  describe("orderProducts() behavior", () => {
    it("check with not empty warehouse", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = wh.orderProducts("Food");
      expectedResult = { apple: 3, banana: 2, ananas: 1 };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("check with empty warehouse", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);

      actualResult = wh.orderProducts("Drink");
      expectedResult = {};

      assert.deepEqual(actualResult, expectedResult);
    });
  });

  describe("occupiedCapacity() behavior", () => {
    it("check with not empty warehouse", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = wh.occupiedCapacity();
      expectedResult = 9;

      assert.equal(actualResult, expectedResult);
    });

    it("check with empty warehouse", () => {
      actualResult = wh.occupiedCapacity();
      expectedResult = 0;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("revision() behavior", () => {
    it("check with not empty warehouse", () => {
      wh.addProduct("Food", "banana", 2);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = wh.revision();
      expectedResult =
        "Product type - [Food]\n- banana 2\n- apple 3\n- ananas 1\nProduct type - [Drink]\n- water 2\n- juise 1";

      assert.equal(actualResult, expectedResult);
    });

    it("check with empty warehouse", () => {
      actualResult = wh.revision();
      expectedResult = "The warehouse is empty";

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("scrapeAProduct() behavior", () => {
    it("check with valid argument", () => {
      wh.addProduct("Food", "banana", 4);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = wh.scrapeAProduct("banana", 3);
      expectedResult = { banana: 1, apple: 3, ananas: 1 };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("check with valid argument - bigger qty to scrap", () => {
      wh.addProduct("Food", "banana", 4);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = wh.scrapeAProduct("banana", 10);
      expectedResult = { banana: 0, apple: 3, ananas: 1 };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("check with invalid argument", () => {
      wh.addProduct("Food", "banana", 4);
      wh.addProduct("Food", "apple", 3);
      wh.addProduct("Food", "ananas", 1);
      wh.addProduct("Drink", "water", 2);
      wh.addProduct("Drink", "juise", 1);

      actualResult = () => wh.scrapeAProduct("orange", 10);
      expectedResult = "orange do not exists";

      assert.throw(actualResult, expectedResult);
    });
  });
});
