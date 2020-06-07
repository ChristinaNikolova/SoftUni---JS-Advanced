function solve(input) {
  String.prototype.htmlEscape = function () {
    return this.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  input = JSON.parse(input);

  let output = "<table>" + "\n" + "\t" + "<tr>";

  let isHeader = false;

  input.forEach((line) => {
    if (!isHeader) {
      isHeader = true;

      let keys = Object.keys(line);

      while (keys.length !== 0) {
        let currentKey = keys.shift();
        output += `<th>${currentKey.htmlEscape()}</th>`;
      }

      output += "</tr>" + "\n";
    }

    output += "\t" + "<tr>";

    let values = Object.values(line);

    while (values.length !== 0) {
      let currentValue = values.shift();
      let type = typeof currentValue;
      if (type !== "number") {
        output += `<td>${currentValue.htmlEscape()}</td>`;
      } else {
        output += `<td>${currentValue}</td>`;
      }
    }

    output += "</tr>" + "\n";
  });

  output += "</table>";

  console.log(output);
}

solve([
  '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]',
]);
