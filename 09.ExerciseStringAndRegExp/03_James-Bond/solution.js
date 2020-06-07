function solve() {
  let $inputArray = document.getElementById("array");
  let lines = JSON.parse($inputArray.value);

  let key = lines.shift();

  let pattern = new RegExp(`${key}[ ]+([A-Z!%$#]{8,})([ .,]|$)`, "gmi");

  let result = [];

  for (let line of lines) {
    let currentMatch = pattern.exec(line);

    while (currentMatch) {
      if (currentMatch[1].toUpperCase() !== currentMatch[1]) {
        currentMatch = pattern.exec(line);
        continue;
      }

      let originalWord = currentMatch[1];

      while (currentMatch[1].indexOf("!") !== -1) {
        currentMatch[1] = currentMatch[1].replace("!", "1");
      }

      while (currentMatch[1].indexOf("%") !== -1) {
        currentMatch[1] = currentMatch[1].replace("%", "2");
      }

      while (currentMatch[1].indexOf("#") !== -1) {
        currentMatch[1] = currentMatch[1].replace("#", "3");
      }

      while (currentMatch[1].indexOf("$") !== -1) {
        currentMatch[1] = currentMatch[1].replace("$", "4");
      }

      currentMatch[1] = currentMatch[1].toLowerCase();

      line = line.replace(originalWord, currentMatch[1]);

      currentMatch = pattern.exec(line);
    }

    result.push(line);
  }

  let $resultOutput = document.getElementById("result");

  for (let i = 0; i < result.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = result[i];
    $resultOutput.appendChild(paragraph);
  }
  
  $inputArray.value = "";
}
