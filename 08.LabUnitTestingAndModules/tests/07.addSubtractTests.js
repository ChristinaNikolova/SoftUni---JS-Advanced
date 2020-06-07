let createCalculator = require("../code/07.addSubtract.js");
let assert = require("chai").assert;

describe("createCalculator() behavior", () => {
  let actualResult;
  let expectedResult;
  let calculator;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    calculator = new createCalculator();
  });

  it("check add()", () => {
    calculator.add(4);
    calculator.add(5);
    calculator.add(-9);
    calculator.add(-8, 9);
    calculator.add(7.98);
    calculator.add(0);
    calculator.add("15");

    actualResult = calculator.get();
    expectedResult = 14.98;

    assert.equal(actualResult, expectedResult);
  });

  it("check subtract()", () => {
    calculator.subtract(4);
    calculator.subtract(5);
    calculator.subtract(-9);
    calculator.subtract(-8, 9);
    calculator.subtract(7.98);
    calculator.subtract(0);
    calculator.subtract("15");

    actualResult = calculator.get();
    expectedResult = -14.98;

    assert.equal(actualResult, expectedResult);
  });

  it("check both together - add(), subtract()", () => {
    calculator.subtract(4);
    calculator.subtract(5);
    calculator.add(-9);
    calculator.subtract(-8, 9);
    calculator.add(7.98);
    calculator.subtract(0);
    calculator.add("15");

    actualResult = calculator.get();
    expectedResult = 12.98;

    assert.equal(actualResult, expectedResult);
  });
});
