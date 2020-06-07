let isSymmetric = require("../code/05.checkForSymmetry.js");
let assert = require("chai").assert;

describe("isSymmetric() behavior", () => {
  let actualResult;
  let expectedResult;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
  });

  it("check with not array input", () => {
    actualResult = isSymmetric(1, 2, 2);
    expectedResult = false;

    assert.equal(actualResult, expectedResult);
  });

  it("check with symetric array - even", () => {
    actualResult = isSymmetric([1, 2, 2, 1]);
    expectedResult = true;

    assert.equal(actualResult, expectedResult);
  });

  it("check with symetric array - odd", () => {
    actualResult = isSymmetric([1, 2, 1]);
    expectedResult = true;

    assert.equal(actualResult, expectedResult);
  });

  it("check with not symetric array - odd", () => {
    actualResult = isSymmetric([1, 2, 2]);
    expectedResult = false;

    assert.equal(actualResult, expectedResult);
  });

  it("check with not symetric array - even", () => {
    actualResult = isSymmetric([1, 2, 2, 3]);
    expectedResult = false;

    assert.equal(actualResult, expectedResult);
  });

  it("check with symetric array - even - diff variable types", () => {
    actualResult = isSymmetric([
      1,
      "2",
      { a: 5 },
      true,
      new Date(),
      new Date(),
      true,
      { a: 5 },
      "2",
      1,
    ]);
    expectedResult = true;

    assert.equal(actualResult, expectedResult);
  });

  it("check with not symetric array - even - diff variable types", () => {
    actualResult = isSymmetric([
      1,
      "2",
      { a: 5 },
      true,
      new Date(),
      new Date(),
      true,
      { a: 6 },
      "2",
      3,
    ]);
    expectedResult = false;

    assert.equal(actualResult, expectedResult);
  });
});
