let ChristmasMovies = require("./02. Christmas Movies_Resources.js");
let assert = require("chai").assert;

describe("check ChristmasMovies class behavior", () => {
  let actualResult;
  let expectedResult;
  let christmas;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    christmas = new ChristmasMovies();
  });

  describe("check ctor behavior", () => {
    it("check instantion", () => {
      assert.deepEqual(christmas.movieCollection, []);
      assert.deepEqual(christmas.watched, {});
      assert.deepEqual(christmas.actors, []);
    });
  });

  describe("check buyMovie() behavior", () => {
    it("check with valid not existing movie", () => {
      actualResult = christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      expectedResult =
        "You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(christmas.movieCollection, [
        {
          actors: ["Macaulay Culkin"],
          name: "Home Alone 2",
        },
      ]);
    });

    it("check with valid not existing movie - not unique actord", () => {
      actualResult = christmas.buyMovie("Home Alone 2", [
        "Macaulay Culkin",
        "Macaulay Culkin",
        "Macaulay Culkin",
      ]);
      expectedResult =
        "You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(christmas.movieCollection, [
        {
          actors: ["Macaulay Culkin"],
          name: "Home Alone 2",
        },
      ]);
    });

    it("check with existing movie", () => {
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);

      actualResult = () =>
        christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      expectedResult = "You already own Home Alone 2 in your collection!";

      assert.throws(actualResult, expectedResult);
      assert.deepEqual(christmas.movieCollection, [
        {
          actors: ["Macaulay Culkin"],
          name: "Home Alone 2",
        },
      ]);
    });
  });

  describe("check discardMovie() behavior", () => {
    it("check with existing movie with watches", () => {
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      christmas.watchMovie("Home Alone 2");

      actualResult = christmas.discardMovie("Home Alone 2");
      expectedResult = "You just threw away Home Alone 2!";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(christmas.watched, {});
      assert.deepEqual(christmas.movieCollection, []);
    });

    it("check with existing movie no watches", () => {
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);

      actualResult = () => christmas.discardMovie("Home Alone 2");
      expectedResult = "Home Alone 2 is not watched!";

      assert.throws(actualResult, expectedResult);
      assert.deepEqual(christmas.watched, {});
      assert.deepEqual(christmas.movieCollection, []);
    });

    it("check with not existing", () => {
      actualResult = () => christmas.discardMovie("Home Alone 2");
      expectedResult = "Home Alone 2 is not at your collection!";

      assert.throws(actualResult, expectedResult);
      assert.deepEqual(christmas.watched, {});
      assert.deepEqual(christmas.movieCollection, []);
    });
  });

  describe("check watchMovie() behavior", () => {
    it("check with existing movie - first watch", () => {
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      christmas.watchMovie("Home Alone 2");

      actualResult = christmas.watched;
      expectedResult = { "Home Alone 2": 1 };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("check with existing movie - second watch", () => {
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      christmas.watchMovie("Home Alone 2");
      christmas.watchMovie("Home Alone 2");

      actualResult = christmas.watched;
      expectedResult = { "Home Alone 2": 2 };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("check with not existing movie", () => {
      actualResult = () => christmas.watchMovie("Home Alone 2");
      expectedResult = "No such movie in your collection!";

      assert.throws(actualResult, expectedResult);
      assert.deepEqual(christmas.watched, {});
    });
  });

  describe("check favouriteMovie() behavior", () => {
    it("check with valid watches", () => {
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      christmas.buyMovie("Home Alone", ["Macaulay Culkin"]);

      christmas.watchMovie("Home Alone 2");
      christmas.watchMovie("Home Alone 2");
      christmas.watchMovie("Home Alone");

      actualResult = christmas.favouriteMovie();
      expectedResult =
        "Your favourite movie is Home Alone 2 and you have watched it 2 times!";

      assert.equal(actualResult, expectedResult);
      assert.deepEqual(christmas.watched, {
        "Home Alone 2": 2,
        "Home Alone": 1,
      });
    });

    it("check with no watches", () => {
      actualResult = () => christmas.favouriteMovie();
      expectedResult = "You have not watched a movie yet this year!";

      assert.throws(actualResult, expectedResult);
      assert.deepEqual(christmas.watched, {});
    });
  });

  describe("check mostStarredActor() behavior", () => {
    it("check with existing data", () => {
      christmas.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);

      actualResult = christmas.mostStarredActor();
      expectedResult =
        "The most starred actor is Macaulay Culkin and starred in 2 movies!";

      assert.equal(actualResult, expectedResult);
    });

    it("check with no data", () => {
      actualResult = () => christmas.mostStarredActor();
      expectedResult = "You have not watched a movie yet this year!";

      assert.throws(actualResult, expectedResult);
    });
  });
});
