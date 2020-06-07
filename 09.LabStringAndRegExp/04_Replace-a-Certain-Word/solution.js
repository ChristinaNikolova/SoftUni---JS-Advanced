function solve() {
  let $inputWord = document.getElementById("word");
  let newWord = $inputWord.value;

  let $inputText = document.getElementById("text");
  let text = JSON.parse($inputText.value);

  let firstLine = text[0].split(" ");
  let oldWord = firstLine[2];

  let pattern = new RegExp(`${oldWord}`, "gmi");

  let result = [];

  for (let currentLine of text) {
    if (currentLine.match(pattern)) {
      let match = currentLine.match(pattern)[0];

      let indexOldWord = currentLine.indexOf(match);
      let firstPart = currentLine.substring(0, indexOldWord);
      let secondPart = currentLine.substring(indexOldWord + match.length);

      currentLine = firstPart + newWord + secondPart;
    }

    result.push(currentLine);
  }

  let $resultOutput = document.getElementById("result");

  for (let i = 0; i < result.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = result[i];
    $resultOutput.appendChild(paragraph);
  }

  $inputWord.value = "";
  $inputText.value = "";
}
