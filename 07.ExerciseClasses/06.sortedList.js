class List {
  constructor() {
    this.numbers = [];
    this.size = this.numbers.length;
  }

  sortNumbers() {
    this.numbers = this.numbers.sort((a, b) => a - b);
    return this.numbers;
  }

  add(elemenent) {
    this.numbers.push(elemenent);
    this.sortNumbers();
    this.size++;
  }

  remove(index) {
    if (this.numbers.length > index && index >= 0) {
      this.numbers.splice(index, 1);
      this.sortNumbers();
      this.size--;
    }
  }

  get(index) {
    if (this.numbers.length > index && index >= 0) {
      return this.numbers[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
