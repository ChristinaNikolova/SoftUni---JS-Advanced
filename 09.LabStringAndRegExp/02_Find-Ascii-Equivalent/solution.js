function solve() {
  let $textInput = document.getElementById("text");
  let text = $textInput.value.split(" ");

  let newWord = "";
  let numbers = [];

  let patternNumber = new RegExp("^[0-9]+$");

  let $resultOutput = document.getElementById("result");

  for (let current of text) {
    if (current.match(patternNumber)) {
      let symbol = String.fromCharCode(current);
      newWord += symbol;
    } else {
      for (let i = 0; i < current.length; i++) {
        let ascii = current[i].charCodeAt(0);
        numbers.push(ascii);
      }

      let paragraph = document.createElement("p");
      paragraph.textContent = numbers.join(" ");
      $resultOutput.appendChild(paragraph);
      numbers = [];
    }
  }

  let paragraph = document.createElement("p");
  paragraph.textContent = newWord;
  $resultOutput.appendChild(paragraph);

  $textInput.value = "";
}
