function solve() {
  let $inputKey = document.getElementById("string");
  let key = $inputKey.value;

  let $inputText = document.getElementById("text");
  let text = $inputText.value;

  let patternDirection = new RegExp(
    "(north|east)(.)*?([0-9]{2})[^,]*?[,][^,]*?([0-9]{6})",
    "gmi"
  );

  let north = "";
  let east = "";

  let currentMatch = patternDirection.exec(text);

  while (currentMatch) {
    let direction = currentMatch[1].toLowerCase();

    if (direction === "north") {
      north = currentMatch[3] + "." + currentMatch[4];
    } else if (direction === "east") {
      east = currentMatch[3] + "." + currentMatch[4];
    }

    currentMatch = patternDirection.exec(text);
  }

  let patternMessage = new RegExp(`${key}((.)*)${key}`, "gmi");
  let message = patternMessage.exec(text)[1];

  let $resultOutput = document.getElementById("result");

  let paragraphNorth = document.createElement("p");
  paragraphNorth.textContent = `${north} N`;
  $resultOutput.appendChild(paragraphNorth);

  let paragraphEast = document.createElement("p");
  paragraphEast.textContent = `${east} E`;
  $resultOutput.appendChild(paragraphEast);

  let paragraphMessage = document.createElement("p");
  paragraphMessage.textContent = `Message: ${message}`;
  $resultOutput.appendChild(paragraphMessage);

  $inputKey.value = "";
  $inputText.value = "";
}
