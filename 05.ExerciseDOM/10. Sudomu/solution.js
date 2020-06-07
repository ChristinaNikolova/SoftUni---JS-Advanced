function solve() {
  let validNumbers = [1, 2, 3];

  let $buttons = [...document.getElementsByTagName("button")];

  let $checkButton = $buttons[0];
  $checkButton.addEventListener("click", checkSudomu);

  let $clearButton = $buttons[1];
  $clearButton.addEventListener("click", clearSudomu);

  let $numbersInput = [...document.getElementsByTagName("input")];

  let $table = document.getElementsByTagName("table")[0];
  let $resultInput = document.getElementById("check");

  function checkSudomu() {
    let isValid = true;

    for (const number of $numbersInput) {
      if (!validNumbers.includes(+number.value)) {
        isValid = false;
        getResult(isValid);
        return;
      }
    }

    let targetSum = 6;

    for (let i = 0; i < $numbersInput.length; i += 3) {
      let currentSum =
        +$numbersInput[i].value +
        +$numbersInput[i + 1].value +
        +$numbersInput[i + 2].value;

      if (currentSum !== targetSum) {
        isValid = false;
        getResult(isValid);
        return;
      }
    }

    for (let i = 0; i < 3; i++) {
      let currentSum =
        +$numbersInput[i].value +
        +$numbersInput[i + 3].value +
        +$numbersInput[i + 6].value;

      if (currentSum !== targetSum) {
        isValid = false;
        getResult(isValid);
        return;
      }
    }

    getResult(isValid);

    function getResult(isValid) {
      if (isValid) {
        $table.style.border = "2px solid green";
        $resultInput.children[0].textContent = "You solve it! Congratulations!";
        $resultInput.children[0].style.color = "green";
      } else {
        $table.style.border = "2px solid red";
        $resultInput.children[0].textContent = "NOP! You are not done yet...";
        $resultInput.children[0].style.color = "red";
      }
    }
  }

  function clearSudomu() {
    $numbersInput.forEach((number) => {
      number.value = "";
    });

    $table.removeAttribute("style", "border");
    $resultInput.children[0].textContent = "";
    $table.removeAttribute("style", "color");
  }
}
