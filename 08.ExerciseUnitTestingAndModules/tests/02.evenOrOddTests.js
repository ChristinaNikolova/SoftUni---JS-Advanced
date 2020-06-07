let isOddOrEven = require("../code/02.evenOrOdd.js");
let assert = require("chai").assert;

describe("isOddOrEven() behavior", () => {
  let actualResult;
  let expectedResult;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
  });

  it("check with invalid input - not a string", () => {
    actualResult = isOddOrEven(12);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid input - even string", () => {
    actualResult = isOddOrEven("even");
    expectedResult = "even";

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid input - odd string", () => {
    actualResult = isOddOrEven("odd");
    expectedResult = "odd";

    assert.equal(actualResult, expectedResult);
  });
});
