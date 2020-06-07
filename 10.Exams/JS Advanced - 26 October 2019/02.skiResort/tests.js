let SkiResort = require("./solution");
let assert = require("chai").assert;

describe("SkiResort class behavior", function () {
  let actualResult;
  let expectedResult;
  let skiResort;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    skiResort = new SkiResort("Test");
  });

  describe("check ctor behavior", () => {
    it("check instantion", () => {
      assert.equal(skiResort.name, "Test");
      assert.equal(skiResort.voters, 0);
      assert.deepEqual(skiResort.hotels, []);
    });
  });

  describe("check bestHotel prop behavior", () => {
    it("with existing case", () => {
      skiResort.build("Sun", 10);
      skiResort.build("Sun 1", 10);

      skiResort.leave("Sun", 3, 10);
      skiResort.leave("Sun", 3, 15);
      skiResort.leave("Sun 1", 5, 10);

      actualResult = skiResort.bestHotel;
      expectedResult = "Best hotel is Sun with grade 75. Available beds: 16";

      assert.equal(actualResult, expectedResult);
      assert.equal(skiResort.voters, 11);
    });

    it("no votes", () => {
      actualResult = skiResort.bestHotel;
      expectedResult = "No votes yet";

      assert.equal(actualResult, expectedResult);
      assert.equal(skiResort.voters, 0);
    });
  });

  describe("check build() behavior", () => {
    it("check with invalid name - empty string", () => {
      actualResult = () => skiResort.build("", 12);
      expectedResult = "Invalid input";

      assert.throws(actualResult, expectedResult);
    });

    it("check with invalid beds - negative number", () => {
      actualResult = () => skiResort.build("Test", 0);
      expectedResult = "Invalid input";

      assert.throws(actualResult, expectedResult);
    });

    it("valid data", () => {
      actualResult = skiResort.build("Test", 12);
      expectedResult = "Successfully built new hotel - Test";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(skiResort.hotels, [
        {
          beds: 12,
          name: "Test",
          points: 0,
        },
      ]);
    });
  });

  describe("check book() behavior", () => {
    it("check with invalid name - empty string", () => {
      actualResult = () => skiResort.book("", 12);
      expectedResult = "Invalid input";

      assert.throws(actualResult, expectedResult);
    });

    it("check with invalid beds - negative number", () => {
      actualResult = () => skiResort.book("Test", 0);
      expectedResult = "Invalid input";

      assert.throws(actualResult, expectedResult);
    });

    it("check with not existing hotel", () => {
      actualResult = () => skiResort.book("Test", 5);
      expectedResult = "There is no such hotel";

      assert.throws(actualResult, expectedResult);
    });

    it("check with no free beds", () => {
      skiResort.build("Test", 12);
      skiResort.book("Test", 12);

      actualResult = () => skiResort.book("Test", 5);
      expectedResult = "There is no free space";

      assert.throws(actualResult, expectedResult);
    });

    it("check with valid data", () => {
      skiResort.build("Test", 12);

      actualResult = skiResort.book("Test", 5);
      expectedResult = "Successfully booked";

      let hotel = skiResort.hotels.find((x) => x.name === "Test");

      assert.equal(actualResult, expectedResult);
      assert.equal(hotel.beds, 7);
    });
  });

  describe("check leave() behavior", () => {
    it("check with invalid name - empty string", () => {
      actualResult = () => skiResort.leave("", 5, 12);
      expectedResult = "Invalid input";

      assert.throws(actualResult, expectedResult);
    });

    it("check with invalid beds - negative number", () => {
      actualResult = () => skiResort.leave("Test", 0, 12);
      expectedResult = "Invalid input";

      assert.throws(actualResult, expectedResult);
    });

    it("check with not existing hotel", () => {
      actualResult = () => skiResort.leave("Test", 5, 12);
      expectedResult = "There is no such hotel";

      assert.throws(actualResult, expectedResult);
    });

    it("check with valid data", () => {
      skiResort.build("Test", 12);

      actualResult = skiResort.leave("Test", 5, 12);
      expectedResult = "5 people left Test hotel";

      let hotel = skiResort.hotels.find((x) => x.name === "Test");

      assert.equal(actualResult, expectedResult);
      assert.equal(hotel.beds, 17);
      assert.equal(hotel.points, 60);
    });
  });

  describe("check averageGrade() behavior", () => {
    it("check with votes", () => {
      skiResort.build("Sun", 10);
      skiResort.build("Sun 1", 10);

      skiResort.leave("Sun", 3, 10);
      skiResort.leave("Sun", 3, 15);
      skiResort.leave("Sun 1", 5, 10);

      actualResult = skiResort.averageGrade();
      expectedResult = "Average grade: 11.36";

      assert.equal(actualResult, expectedResult);
      assert.equal(skiResort.voters, 11);
    });

    it("no votes", () => {
      actualResult = skiResort.averageGrade();
      expectedResult = "No votes yet";

      assert.equal(actualResult, expectedResult);
      assert.equal(skiResort.voters, 0);
    });
  });
});
