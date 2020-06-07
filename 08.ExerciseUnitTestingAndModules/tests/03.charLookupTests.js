let lookupChar = require("../code/03.charLookup.js");
let assert = require("chai").assert;

describe("lookupChar() behavior", () => {
  let actualResult;
  let expectedResult;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
  });

  it("check with invalid first parameter - not a string", () => {
    actualResult = lookupChar(12, 1);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with invalid second parameter - not an int", () => {
    actualResult = lookupChar("test", 1.2);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid parameters - index out of range", () => {
    actualResult = lookupChar("test", 12);
    expectedResult = "Incorrect index";

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid parameters - index below 0", () => {
    actualResult = lookupChar("test", -12);
    expectedResult = "Incorrect index";

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid parameters", () => {
    actualResult = lookupChar("test", 2);
    expectedResult = "s";

    assert.equal(actualResult, expectedResult);
  });
});
