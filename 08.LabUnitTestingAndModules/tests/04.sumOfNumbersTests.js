let sum = require("../code/04.sumOfNumbers.js");
let assert = require("chai").assert;

describe("sum() behavior", () => {

    let actualSum;
    let expectedSum;

    beforeEach(() => {
        actualSum = null;
        expectedSum = null;
    });

    it("check with int", () => {
        actualSum = sum([1, 2, 3, 4, -5, 6, -7]);
        expectedSum = 4;

        assert.equal(actualSum, expectedSum);
    });

    it("check with double", () => {
        actualSum = sum([-12, 2, 3.5, 4, -5, 6.7, -7]);
        expectedSum = -7.8;

        assert.equal(actualSum, expectedSum);
    });

    it("check with string", () => {
        actualSum = sum(["-12", "2", "3.5", 4, -5, 6.7, -7]);
        expectedSum = -7.8;

        assert.equal(actualSum, expectedSum);
    });
});
