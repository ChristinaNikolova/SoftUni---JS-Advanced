function solve() {
  let $inputText = document.getElementById("input");
  let text = $inputText.value;

  let sum = text
    .split("")
    .map((x) => +x)
    .reduce((a, b) => a + b);

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .map((x) => +x)
      .reduce((a, b) => a + b);
  }

  text = text.substring(sum);
  text = text.substring(0, text.length - sum);

  let pattern = new RegExp("[01]{1,8}", "gm");
  let matches = text.match(pattern);

  let result = [];

  for (const currentMatch of matches) {
    let symbol = String.fromCharCode(parseInt(currentMatch, 2));
    result.push(symbol);
  }

  let patternValidSymbols = new RegExp("[A-Za-z ]+", "gmi");
  result = result.filter((x) => x.match(patternValidSymbols));

  let $resultOutput = document.getElementById("resultOutput");
  $resultOutput.textContent = result.join("");

  $inputText.value = "";
}
