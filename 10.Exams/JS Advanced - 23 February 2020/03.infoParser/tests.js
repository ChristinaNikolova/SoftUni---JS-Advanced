let Parser = require("./solution.js");
let assert = require("chai").assert;

describe("check Parser() behavior", () => {
  let actualResult;
  let expectedResult;
  let parser;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    parser = new Parser(
      '[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]'
    );
  });

  describe("check ctor behavior", () => {
    it("check instantion behavior", () => {
      assert.deepEqual(
        parser._data,
        JSON.parse(
          '[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]'
        )
      );

      assert.deepEqual(parser._log, []);
      assert.equal(parser._addToLog(), "Added to log");
    });

    it("check getData prop behavior", () => {
      actualResult = parser.data;
      expectedResult = [
        { Nancy: "architect" },
        { John: "developer" },
        { Kate: "HR" },
      ];

      assert.deepEqual(actualResult, expectedResult);
    });
  });

  describe("check print() behavior", () => {
    it("check valid case", () => {
      actualResult = parser.print();
      expectedResult =
        "id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR";

      assert.equal(actualResult, expectedResult);
    });
  });

  describe("check addEntries() behavior", () => {
    it("check adding new Entry", () => {
      actualResult = parser.addEntries("Steven:tech-support Edd:administrator");
      expectedResult = "Entries added!";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(parser.data, [
        { Nancy: "architect" },
        { John: "developer" },
        { Kate: "HR" },
        { Steven: "tech-support" },
        { Edd: "administrator" },
      ]);
      assert.equal(
        parser.print(),
        "id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR\n3|Steven|tech-support\n4|Edd|administrator"
      );
    });
  });

  describe("check removeEntry() behavior", () => {
    it("check with valid key", () => {
      actualResult = parser.removeEntry("Kate");
      expectedResult = "Removed correctly!";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(parser.data, [
        { Nancy: "architect" },
        { John: "developer" },
      ]);
      assert.equal(
        parser.print(),
        "id|name|position\n0|Nancy|architect\n1|John|developer"
      );
    });

    it("check with invalid key", () => {
      actualResult = () => parser.removeEntry("Test");
      expectedResult = "There is no such entry!";

      assert.throws(actualResult, expectedResult);
    });
  });
});
