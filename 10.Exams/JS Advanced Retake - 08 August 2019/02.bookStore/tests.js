let BookStore = require("./02. Book Store_Ресурси.js");
let assert = require("chai").assert;

describe("check BookStore class behavior", () => {
  let actualResult;
  let expectedResult;
  let bookStore;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    bookStore = new BookStore("Test");
  });

  describe("check ctor behavior", () => {
    it("check instantion", () => {
      assert.equal(bookStore.name, "Test");
      assert.deepEqual(bookStore.books, []);
      assert.deepEqual(bookStore._workers, []);
    });
  });

  describe("check stockBooks() behavior", () => {
    it("check adding books", () => {
      actualResult = bookStore.stockBooks([
        "Inferno-Dan Braun",
        "Harry Potter-J.Rowling",
        "Uncle Toms Cabin-Hariet Stow",
        "The Jungle-Upton Sinclear",
      ]);

      expectedResult = [
        { title: "Inferno", author: "Dan Braun" },
        { title: "Harry Potter", author: "J.Rowling" },
        { title: "Uncle Toms Cabin", author: "Hariet Stow" },
        { title: "The Jungle", author: "Upton Sinclear" },
      ];

      assert.deepEqual(actualResult, expectedResult);
    });
  });

  describe("check hire() behavior", () => {
    it("check with valid new Employee", () => {
      actualResult = bookStore.hire("Misho", "seller");
      expectedResult = "Misho started work at Test as seller";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(bookStore._workers, [
        {
          booksSold: 0,
          name: "Misho",
          position: "seller",
        },
      ]);
    });

    it("check with already existing Employee", () => {
      bookStore.hire("Misho", "seller");

      actualResult = () => bookStore.hire("Misho", "seller");
      expectedResult = "This person is our employee";

      assert.throws(actualResult, expectedResult);
      assert.deepEqual(bookStore._workers, [
        {
          booksSold: 0,
          name: "Misho",
          position: "seller",
        },
      ]);
    });
  });

  describe("check fire() behavior", () => {
    it("check with existing Employee", () => {
      bookStore.hire("Misho", "seller");

      actualResult = bookStore.fire("Misho");
      expectedResult = "Misho is fired";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(bookStore._workers, []);
    });

    it("check with non existing Employee", () => {
      actualResult = () => bookStore.fire("Misho");
      expectedResult = "Misho doesn't work here";

      assert.throw(actualResult, expectedResult);
      assert.deepEqual(bookStore._workers, []);
    });
  });

  describe("check sellBook() behavior", () => {
    it("check with non existing book", () => {
      bookStore.hire("Misho", "seller");

      actualResult = () => bookStore.sellBook("Test", "Misho");
      expectedResult = "This book is out of stock";

      assert.throw(actualResult, expectedResult);
    });

    it("check with non existing employee", () => {
      bookStore.stockBooks([
        "Inferno-Dan Braun",
        "Harry Potter-J.Rowling",
        "Uncle Toms Cabin-Hariet Stow",
        "The Jungle-Upton Sinclear",
      ]);

      actualResult = () => bookStore.sellBook("Inferno", "Misho");
      expectedResult = "Misho is not working here";

      assert.throw(actualResult, expectedResult);
    });

    it("check with valid data", () => {
      bookStore.stockBooks([
        "Inferno-Dan Braun",
        "Harry Potter-J.Rowling",
        "Uncle Toms Cabin-Hariet Stow",
        "The Jungle-Upton Sinclear",
      ]);

      bookStore.hire("Misho", "seller");
      bookStore.sellBook("Inferno", "Misho");

      let misho = bookStore._workers.find((x) => x.name === "Misho");

      assert.isTrue(!bookStore.books.includes("Inferno"));
      assert.equal(misho.booksSold, 1);
    });
  });

  describe("check printWorkers() behavior", () => {
    it("check print - empty data", () => {
      actualResult = bookStore.printWorkers();
      expectedResult = "";

      assert.equal(actualResult, expectedResult);
    });

    it("check print - with valid data", () => {
      bookStore.hire("Misho", "seller");
      bookStore.hire("Pesho", "seller");

      actualResult = bookStore.printWorkers();
      expectedResult =
        "Name:Misho Position:seller BooksSold:0\nName:Pesho Position:seller BooksSold:0";

      assert.equal(actualResult, expectedResult);
    });
  });
});
