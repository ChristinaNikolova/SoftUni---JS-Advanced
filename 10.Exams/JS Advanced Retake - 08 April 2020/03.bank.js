class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    if (
      this.allCustomers.some(
        (x) =>
          x.firstName === customer.firstName &&
          x.lastName === customer.lastName &&
          x.personalId === customer.personalId
      )
    ) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }

    this.allCustomers.push(customer);

    return customer;
  }

  depositMoney(personalId, amount) {
    let customer = this.allCustomers.find((x) => x.personalId === personalId);

    if (customer === undefined) {
      throw new Error("We have no customer with this ID!");
    }

    if (!customer.hasOwnProperty("totalMoney")) {
      customer.totalMoney = 0;
    }

    customer.totalMoney += amount;

    if (!customer.hasOwnProperty("history")) {
      customer.history = [];
    }

    customer.history.push(
      `${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`
    );

    return `${customer.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    let customer = this.allCustomers.find((x) => x.personalId === personalId);

    if (customer === undefined) {
      throw new Error("We have no customer with this ID!");
    }

    if (customer.totalMoney < amount) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`
      );
    }

    if (!customer.hasOwnProperty("history")) {
      customer.history = [];
    }

    customer.history.push(
      `${customer.firstName} ${customer.lastName} withdrew ${amount}$!`
    );

    customer.totalMoney -= amount;

    return `${customer.totalMoney}$`;
  }

  customerInfo(personalId) {
    let customer = this.allCustomers.find((x) => x.personalId === personalId);

    if (customer === undefined) {
      throw new Error("We have no customer with this ID!");
    }

    let result = "";
    result +=
      `Bank name: ${this._bankName}` +
      "\n" +
      `Customer name: ${customer.firstName} ${customer.lastName}` +
      "\n" +
      `Customer ID: ${customer.personalId}` +
      "\n" +
      `Total Money: ${customer.totalMoney}$` +
      "\n" +
      "Transactions:" +
      "\n";

    for (let i = customer.history.length - 1; i >= 0; i--) {
      result += `${i + 1}. ${customer.history[i]}` + "\n";
    }

    return result.trim();
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(4151596, 555));
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));
