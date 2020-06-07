function solve() {
  let $inputText = document.getElementById("text");
  let text = $inputText.value;

  let $inputNumber = document.getElementById("number");
  let number = $inputNumber.value;

  let pattern = new RegExp(`(.){1,${number}}`, "gmi");

  let result = [];
  let currentMatch = pattern.exec(text);

  while (currentMatch) {
    if (currentMatch[0].length < number) {
      currentMatch[0] += text.substring(0, number - currentMatch[0].length);
    }

    result.push(currentMatch[0]);
    currentMatch = pattern.exec(text);
  }

  let $resultOutput = document.getElementById("result");
  $resultOutput.textContent = result.join(" ");

  $inputText.value = "";
  $inputNumber.value = "";
}
