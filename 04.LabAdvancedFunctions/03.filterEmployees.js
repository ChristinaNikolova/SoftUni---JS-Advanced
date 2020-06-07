function solve(employees = [], criteria = "") {
  employees = JSON.parse(employees);

  let filteredEmployees = [];

  if (criteria === "all") {
    filteredEmployees = employees;
  } else {
    let [criteriaKey, criteriaValue] = criteria.split("-").map((x) => x.trim());
    filteredEmployees = employees.filter(
      (x) => x[criteriaKey] === criteriaValue
    );
  }

  for (let i = 0; i < filteredEmployees.length; i++) {
    let currentEmployee = filteredEmployees[i];

    console.log(
      `${i}. ${currentEmployee["first_name"]} ${currentEmployee["last_name"]} - ${currentEmployee["email"]}`
    );
  }
}

solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
