function solve() {
  let $inputText = document.getElementById("string");
  let text = $inputText.value.split(",");

  let message = text.shift();
  let criteria = text.pop().trim();

  let patternName = new RegExp(
    "[ ][A-Z][A-Za-z]*[-][A-Z][A-Za-z]*([.][-][A-Z][A-Za-z]*)?[ ]",
    "m"
  );
  let patternAirport = new RegExp("[ ][A-Z]{3}[/][A-Z]{3}[ ]", "m");
  let patternFlight = new RegExp("[ ][A-Z]{1,3}[0-9]{1,5}[ ]", "m");
  let patternCompany = new RegExp(
    "[-][ ][A-Z][A-Za-z]*[*][A-Z][A-Za-z]*[ ]",
    "m"
  );

  let name = message.match(patternName)[0].trim().replace(/-/g, " ");
  let [from, to] = message
    .match(patternAirport)[0]
    .split("/")
    .map((x) => x.trim());
  let flight = message.match(patternFlight)[0].trim();
  let company = message
    .match(patternCompany)[0]
    .replace(/-/g, " ")
    .replace(/\*/g, " ")
    .trim();

  let result = "";

  if (criteria === "name") {
    result = `Mr/Ms, ${name}, have a nice flight!`;
  } else if (criteria === "flight") {
    result = `Your flight number ${flight} is from ${from} to ${to}.`;
  } else if (criteria === "company") {
    result = `Have a nice flight with ${company}.`;
  } else if (criteria === "all") {
    result = `Mr/Ms, ${name}, your flight number ${flight} is from ${from} to ${to}. Have a nice flight with ${company}.`;
  }

  let $resultOutput = document.getElementById("result");
  let span = document.createElement("span");
  span.textContent = result;
  $resultOutput.appendChild(span);

  $inputText.value = "";
}
