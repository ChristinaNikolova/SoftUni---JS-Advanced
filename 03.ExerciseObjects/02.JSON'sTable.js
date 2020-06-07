function solve(input = []) {
  input = input.map((x) => JSON.parse(x));

  let output = "<table>" + "\n";

  input.forEach((line) => {
    let values = Object.values(line);

    output +=  "\t" + "<tr>" + "\n";
    
    while (values.length !== 0) {
        let currentValue = values.shift();
      output += "\t" + "\t" + `<td>${currentValue}</td>` + "\n";
    }

    output += "\t" + "</tr>" + "\n";
  });

  output += "</table>";

  console.log(output);
}

solve([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);
