function solve() {
  let convertor = {
    binary: (x) => x.toString(2),
    hexadecimal: (x) => x.toString(16).toUpperCase(),
  };

  let $selectMenu = document.getElementById("selectMenuTo");
  addOption();

  let $button = document.getElementsByTagName("button")[0];
  $button.addEventListener("click", convert);

  function addOption() {
    let firstOption = document.createElement("option");
    firstOption.textContent = "Binary";
    firstOption.value = "binary";

    let secondOption = document.createElement("option");
    secondOption.textContent = "Hexadecimal";
    secondOption.value = "hexadecimal";

    $selectMenu.appendChild(firstOption);
    $selectMenu.appendChild(secondOption);
  }

  function convert() {
    let $inputNumber = document.getElementById("input");

    let result = convertor[$selectMenu.value](+$inputNumber.value);
    let $resultInput = document.getElementById("result");
    $resultInput.value = result;
  }
}
