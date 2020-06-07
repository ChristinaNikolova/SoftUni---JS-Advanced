class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.subscribers = [];
    this.subscriptionTypes = {
      normal: this.libraryName.length,
      special: this.libraryName.length * 2,
      vip: Number.MAX_SAFE_INTEGER,
    };
  }

  subscribe(name, type) {
    if (!this.subscriptionTypes.hasOwnProperty(type)) {
      throw new Error(`The type ${type} is invalid`);
    }

    let user = this.subscribers.find((x) => x.name === name);

    if (user === undefined) {
      user = {
        name: name,
        type: type,
        books: [],
      };

      this.subscribers.push(user);
    } else {
      user.type = type;
    }

    return user;
  }

  unsubscribe(name) {
    let indexUser = this.subscribers.findIndex((x) => x.name === name);

    if (indexUser === -1) {
      throw new Error(`There is no such subscriber as ${name}`);
    }

    this.subscribers.splice(indexUser, 1);

    return this.subscribers;
  }

  receiveBook(subscriberName, bookTitle, bookAuthor) {
    let user = this.subscribers.find((x) => x.name === subscriberName);

    if (user === undefined) {
      throw new Error(`There is no such subscriber as ${subscriberName}`);
    }

    let type = user.type;
    let maxCapacity = this.subscriptionTypes[type];

    if (user.books.length === maxCapacity) {
      throw new Error(
        `You have reached your subscription limit ${maxCapacity}!`
      );
    }

    let book = {
      title: bookTitle,
      author: bookAuthor,
    };

    user.books.push(book);

    return user;
  }

  showInfo() {
    let result = "";

    for (const current of this.subscribers) {
      result += `Subscriber: ${current.name}, Type: ${current.type}` + "\n";

      let books = [];

      for (const book of current.books) {
        books.push(`${book.title} by ${book.author}`);
      }

      result += `Received books: ${books.join(", ")}` + "\n";
    }

    if (result === "") {
      return `${this.libraryName} has no information about any subscribers`;
    }

    return result.trim();
  }
}

let lib = new Library("Lib");

lib.subscribe("Peter", "normal");
lib.subscribe("John", "special");

lib.receiveBook("John", "A Song of Ice and Fire", "George R. R. Martin");
lib.receiveBook("Peter", "Lord of the rings", "J. R. R. Tolkien");
lib.receiveBook("John", "Harry Potter", "J. K. Rowling");

console.log(lib.showInfo());
