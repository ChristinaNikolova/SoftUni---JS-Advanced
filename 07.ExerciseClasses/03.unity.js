class Rat {
  constructor(name) {
    this.name = name;
    this.rats = [];
  }

  unite(otherRat) {
    if (otherRat instanceof Rat) {
      this.rats.push(otherRat);
    }
  }

  getRats() {
    return this.rats;
  }

  toString() {
    let result = this.name + "\n";

    this.rats.forEach((rat) => {
      result += "##" + rat.name + "\n";
    });

    return result;
  }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
