function solve() {
  let $inputText = document.getElementById("text");
  let text = $inputText.value.split(" ");

  let $inputCriteria = document.getElementById("naming-convention");
  let criteria = $inputCriteria.value;

  let result = "";

  if (criteria !== "Pascal Case" && criteria !== "Camel Case") {
    result = "Error!";
  } else {
    for (let i = 0; i < text.length; i++) {
      let currentWord = text[i];
      let startLetter = currentWord[0].toUpperCase();

      if (criteria === "Camel Case" && i === 0) {
        startLetter = currentWord[0].toLowerCase();
      }

      let leftLetters = currentWord
        .substring(1)
        .split("")
        .map((x) => x.toLowerCase());

      result += startLetter + leftLetters.join("");
    }
  }

  let $resultOutput = document.getElementById("result");
  $resultOutput.textContent = result;

  $inputText.value = "";
  $inputCriteria.value = "";
}
