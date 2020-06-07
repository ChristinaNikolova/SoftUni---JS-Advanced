function solve(arrayTicketsInput = [], criteria = "") {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = [];

  arrayTicketsInput.forEach((currentInput) => {
    let [destination, price, status] = currentInput
      .split("|")
      .map((x) => x.trim());
    price = +price;

    let ticket = new Ticket(destination, price, status);
    tickets.push(ticket);
  });

  let sortedTickets = [];

  if (criteria !== "price") {
    sortedTickets = tickets.sort((a, b) =>
      a[criteria].localeCompare(b[criteria])
    );
  } else {
    sortedTickets = tickets.sort((a, b) => a[criteria] - b[criteria]);
  }

  return sortedTickets;
}

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|available",
      "Philadelphia|132.20|departed",
      "Chicago|140.20|available",
      "Dallas|144.60|sold",
      "New York City|206.20|sold",
      "New York City|240.20|departed",
      "New York City|305.20|departed",
    ],
    "price"
  )
);
