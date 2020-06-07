function solve() {
  let operator = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "x": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2,
  };

  let $buttons = [...document.getElementsByTagName("button")];

  $buttons.forEach((button) => {
    button.addEventListener("click", getResult);
  });

  let $expressionOutput = document.getElementById("expressionOutput");
  let $resultInput = document.getElementById("resultOutput");

  function getResult(event) {
    let currentSymbol = event.target;

    if (currentSymbol.textContent === "C") {
      $expressionOutput.textContent = "";
      $resultInput.textContent = "";
    } else if (currentSymbol.textContent === "=") {
      let args = $expressionOutput.textContent
        .split(" ")
        .filter((x) => x !== "");

      if (
        args.length === 3 &&
        operator.hasOwnProperty(args[1]) &&
        typeof +args[0] === "number" &&
        typeof +args[2] === "number"
      ) {
        $resultInput.textContent = operator[args[1]](+args[0], +args[2]);
      } else{
        $resultInput.textContent = NaN;
      }
    } else if (operator.hasOwnProperty(currentSymbol.textContent)) {
      $expressionOutput.textContent += " " + currentSymbol.textContent + " ";
    } else {
      $expressionOutput.textContent += currentSymbol.textContent;
    }
  }
}
