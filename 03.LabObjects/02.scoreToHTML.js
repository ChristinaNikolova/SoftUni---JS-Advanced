function solve(input = []) {
  String.prototype.htmlEscape = function () {
    return this.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  input = JSON.parse(input);
  let output =
    "<table>" + "\n" + "\t" + "<tr><th>name</th><th>score</th></tr>" + "\n";

  input.forEach((line) => {
    let [name, score] = Object.values(line);
    score = +score;

    output +=
      "\t" + `<tr><td>${name.htmlEscape()}</td><td>${score}</td></tr>` + "\n";
  });

  output += "</table>";

  console.log(output);
}

solve([
  { name: "Pesho", score: 479 },
  { name: "Gosho", score: 205 },
]);
