let PaymentPackage = require("../code/06.paymentPackage.js");
let assert = require("chai").assert;

describe("PaymentPackage class behavior", () => {
  let actualResult;
  let expectedResult;
  let pp;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    pp = new PaymentPackage("test", 12);
  });

  describe("constructor behavior", () => {
    it("check instance with valid params", () => {
      assert.equal(pp.name, "test");
      assert.equal(pp.value, 12);
      assert.equal(pp.VAT, 20);
      assert.equal(pp.active, true);
    });
  });

  describe("name prop behavior", () => {
    it("check with invalid input - not a string", () => {
      actualResult = () => (pp.name = 1234);
      expectedResult = "Name must be a non-empty string";

      assert.throw(actualResult, expectedResult);
    });

    it("check with invalid input - empty string", () => {
      actualResult = () => (pp.name = "");
      expectedResult = "Name must be a non-empty string";

      assert.throw(actualResult, expectedResult);
    });

    it("check with valid input", () => {
      pp.name = "test2";

      actualResult = pp.name;
      expectedResult = "test2";

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("value prop behavior", () => {
    it("check with invalid input - not a number", () => {
      actualResult = () => (pp.value = "test");
      expectedResult = "Value must be a non-negative number";

      assert.throw(actualResult, expectedResult);
    });

    it("check with invalid input - negative number", () => {
      actualResult = () => (pp.value = -12);
      expectedResult = "Value must be a non-negative number";

      assert.throw(actualResult, expectedResult);
    });

    it("check with valid input", () => {
      pp.value = 100;

      actualResult = pp.value;
      expectedResult = 100;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("VAT prop behavior", () => {
    it("check with invalid input - not a number", () => {
      actualResult = () => (pp.VAT = "test");
      expectedResult = "VAT must be a non-negative number";

      assert.throw(actualResult, expectedResult);
    });

    it("check with invalid input - negative number", () => {
      actualResult = () => (pp.VAT = -12);
      expectedResult = "VAT must be a non-negative number";

      assert.throw(actualResult, expectedResult);
    });

    it("check with valid input", () => {
      pp.VAT = 100;

      actualResult = pp.VAT;
      expectedResult = 100;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("active prop behavior", () => {
    it("check with invalid input - not a boolean", () => {
      actualResult = () => (pp.active = "test");
      expectedResult = "Active status must be a boolean";

      assert.throw(actualResult, expectedResult);
    });

    it("check with valid input", () => {
      pp.active = false;

      actualResult = pp.active;
      expectedResult = false;

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("toString() behavior", () => {
    it("check with valid data - status active", () => {
      actualResult = pp.toString();
      expectedResult =
        "Package: test\n- Value (excl. VAT): 12\n- Value (VAT 20%): 14.399999999999999";

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid data - status inactive", () => {
      pp.active = false;

      actualResult = pp.toString();
      expectedResult =
        "Package: test (inactive)\n- Value (excl. VAT): 12\n- Value (VAT 20%): 14.399999999999999";

      assert.equal(actualResult, expectedResult);
    });

    it("check with valid data - value equal to 0", () => {
      pp.value = 0;

      actualResult = pp.toString();
      expectedResult =
        "Package: test\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0";

      assert.equal(actualResult, expectedResult);
    });
  });
});
