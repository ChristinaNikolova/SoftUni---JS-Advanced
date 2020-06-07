let mathEnforcer = require("../code/04.mathEnforcer.js");
let assert = require("chai").assert;

describe("mathEnforcer obj behavior", () => {
  let actualResult;
  let expectedResult;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
  });

  describe("addFive", () => {
    it("check with invalid number", () => {
      actualResult = mathEnforcer.addFive("test");
      expectedResult = undefined;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - positive int", () => {
      actualResult = mathEnforcer.addFive(12);
      expectedResult = 17;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - negative int", () => {
      actualResult = mathEnforcer.addFive(-12);
      expectedResult = -7;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - negative double", () => {
      actualResult = mathEnforcer.addFive(-12.5);
      expectedResult = -7.5;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("subtractTen", () => {
    it("check with invalid number", () => {
      actualResult = mathEnforcer.subtractTen("test");
      expectedResult = undefined;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - positive int", () => {
      actualResult = mathEnforcer.subtractTen(12);
      expectedResult = 2;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - negative int", () => {
      actualResult = mathEnforcer.subtractTen(-12);
      expectedResult = -22;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - negative double", () => {
      actualResult = mathEnforcer.subtractTen(-12.5);
      expectedResult = -22.5;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("sum", () => {
    it("check with invalid number - first argument", () => {
      actualResult = mathEnforcer.sum("test", 12);
      expectedResult = undefined;

      assert.equal(actualResult, expectedResult);
    });

    it("check with invalid number - second argument", () => {
      actualResult = mathEnforcer.sum(12, "test");
      expectedResult = undefined;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - positive int", () => {
      actualResult = mathEnforcer.sum(12, 14);
      expectedResult = 26;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - negative int", () => {
      actualResult = mathEnforcer.sum(-12, -50);
      expectedResult = -62;

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid number - negative double", () => {
      actualResult = mathEnforcer.sum(-12.5, 25.2);
      expectedResult = 12.7;

      assert.equal(actualResult, expectedResult);
    });
  });
});
