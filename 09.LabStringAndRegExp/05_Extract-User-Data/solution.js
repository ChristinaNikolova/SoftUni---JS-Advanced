function solve() {
  let $inputText = document.getElementById("arr");
  let text = JSON.parse($inputText.value);

  let pattern = new RegExp(
    /^([A-Z][a-z]*[ ][A-Z][a-z]*)[ ]((\+359)([ ]|[-])[0-9]{1}\4[0-9]{3}\4[0-9]{3})[ ]([a-z0-9]+[@][a-z]+[.][a-z]{2,3})/
  );

  let result = [];

  for (const currentLine of text) {
    if (currentLine.match(pattern)) {
      let name = currentLine.match(pattern)[1];
      let phone = currentLine.match(pattern)[2];
      let email = currentLine.match(pattern)[5];

      result.push(`Name: ${name}`);
      result.push(`Phone Number: ${phone}`);
      result.push(`Email: ${email}`);
    } else {
      result.push("Invalid data");
    }

    result.push("- - -");
  }

  let $resultOutput = document.getElementById("result");

  for (let i = 0; i < result.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = result[i];
    $resultOutput.appendChild(paragraph);
  }

  $inputText.value = "";
}
