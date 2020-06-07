let rgbToHexColor = require("../code/06.RGBToHex");
let assert = require("chai").assert;

describe("rgbToHexColor() behavior", () => {
  let actualResult;
  let expectedResult;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
  });

  it("check with invalid first parameter - below 0", () => {
    actualResult = rgbToHexColor(-20, 20, 100);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with invalid first parameter - above 255", () => {
    actualResult = rgbToHexColor(256, 20, 100);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with invalid second parameter - below 0", () => {
    actualResult = rgbToHexColor(150, -20, 100);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with invalid second parameter - above 255", () => {
    actualResult = rgbToHexColor(150, 256, 100);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with invalid third parameter - below 0", () => {
    actualResult = rgbToHexColor(150, 20, -100);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with invalid third parameter - above 255", () => {
    actualResult = rgbToHexColor(150, 150, 256);
    expectedResult = undefined;

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid random values", () => {
    actualResult = rgbToHexColor(150, 200, 40);
    expectedResult = "#96C828";

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid values - 0", () => {
    actualResult = rgbToHexColor(0, 0, 0);
    expectedResult = "#000000";

    assert.equal(actualResult, expectedResult);
  });

  it("check with valid values - 255", () => {
    actualResult = rgbToHexColor(255, 255, 255);
    expectedResult = "#FFFFFF";

    assert.equal(actualResult, expectedResult);
  });
});
