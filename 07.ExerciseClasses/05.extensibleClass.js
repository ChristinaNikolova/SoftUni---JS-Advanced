(function () {
  let counter = 0;

  class Extensible {
    constructor() {
      this.id = counter;
      counter++;
    }

    extend(template) {
      let entries = Object.entries(template);

      for (const [key, value] of entries) {
        if (typeof value !== "function") {
          this[key] = value;
        } else {
          Object.getPrototypeOf(this)[key] = value;
        }
      }
    }
  }

  return Extensible;
})();
