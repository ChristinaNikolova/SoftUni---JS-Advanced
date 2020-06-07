let Repository = require("./solution.js");
let assert = require("chai").assert;

describe("Repository class behavior", () => {
  let actualResult;
  let expectedResult;
  let repository;
  let props;

  beforeEach(() => {
    actualResult = null;
    expectedResult = null;
    props = {
      name: "string",
      age: "number",
      birthday: "object",
    };

    repository = new Repository(props);
  });

  describe("check ctor behavior", () => {
    it("check instantion", () => {
      assert.deepEqual(repository.props, {
        name: "string",
        age: "number",
        birthday: "object",
      });

      assert.deepEqual(repository.data, new Map());
      assert.equal(repository.nextId(), 0);
    });

    it("check if all methods are reveived", () => {
        assert.isTrue(Object.getPrototypeOf(repository).hasOwnProperty("add"));
        assert.isTrue(Object.getPrototypeOf(repository).hasOwnProperty("getId"));
        assert.isTrue(Object.getPrototypeOf(repository).hasOwnProperty("update"));
        assert.isTrue(Object.getPrototypeOf(repository).hasOwnProperty("del"));
      });

    it("check count prop", () => {
      assert.equal(repository.count, 0);
    });
  });

  describe("check add() behavior", () => {
    it("check with invalid key", () => {
      let entity = {
        town: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = () => repository.add(entity);
      expectedResult = "Property name is missing from the entity!";

      assert.throws(actualResult, expectedResult);
    });

    it("check with missing key", () => {
      let entity = {
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = () => repository.add(entity);
      expectedResult = "Property name is missing from the entity!";

      assert.throws(actualResult, expectedResult);
    });

    it("check with valid key - incorrect type", () => {
      let entity = {
        name: 12,
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = () => repository.add(entity);
      expectedResult = "Property name is not of correct type!";

      assert.throws(actualResult, expectedResult);
    });

    it("check with valid data", () => {
      let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = repository.add(entity);
      expectedResult = 0;

      assert.equal(actualResult, expectedResult);
      assert.equal(repository.count, 1);
    });

    // it("check with valid data - second add", () => {
    //   let entity = {
    //     name: "Pesho",
    //     age: 22,
    //     birthday: new Date(1998, 0, 7),
    //   };

    //   let entity2 = {
    //     name: "Misho",
    //     age: 22,
    //     birthday: new Date(1998, 0, 7),
    //   };

    //   repository.add(entity);

    //   actualResult = repository.add(entity);
    //   expectedResult = 1;

    //   assert.equal(actualResult, expectedResult);
    // });
  });

  describe("check getId() behavior", () => {
    it("existing id", () => {
      let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      repository.add(entity);

      actualResult = repository.getId(0);
      expectedResult = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("not existing id", () => {
      actualResult = () => repository.getId(12);
      expectedResult = "Entity with id: 12 does not exist!";
      assert.throw(actualResult, expectedResult);
    });
  });

  describe("check update() behavior", () => {
    it("check with existing data", () => {
      let first = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      repository.add(first);

      let second = {
        name: "Misho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      repository.update(0, second);

      actualResult = repository.getId(0);
      expectedResult = {
        name: "Misho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      assert.deepEqual(actualResult, expectedResult);
    });

    it("check with invalid key", () => {
      let first = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      repository.add(first);

      let second = {
        name: "Misho",
        town: 22,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = () => repository.update(0, second);
      expectedResult = "Property age is missing from the entity!";

      assert.throws(actualResult, expectedResult);
    });

    it("check with invalid key type", () => {
      let first = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      repository.add(first);

      let second = {
        name: "Misho",
        age: true,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = () => repository.update(0, second);
      expectedResult = "Property age is not of correct type!";

      assert.throws(actualResult, expectedResult);
    });

    it("check with not existing id", () => {
      let first = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      repository.add(first);

      let second = {
        name: "Misho",
        age: true,
        birthday: new Date(1998, 0, 7),
      };

      actualResult = () => repository.update(12, second);
      expectedResult = "Entity with id: 12 does not exist!";

      assert.throws(actualResult, expectedResult);
    });
  });

  describe("check del() behavior", () => {
    it("check with existing id", () => {
      let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      repository.add(entity);

      repository.del(0);

      actualResult = repository.count;
      expectedResult = 0;

      assert.equal(actualResult, expectedResult);
    });

    it("check with not existing id", () => {
      actualResult = () => repository.del(12);
      expectedResult = "Entity with id: 12 does not exist!";

      assert.throws(actualResult, expectedResult);
    });
  });
});
