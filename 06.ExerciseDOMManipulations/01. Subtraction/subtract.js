function subtract() {
    
    let $firstNameInput = document.getElementById("firstNumber");
    let $secondNameInput = document.getElementById("secondNumber");

    let result = $firstNameInput.value - $secondNameInput.value;
    let $resultInput = document.getElementById("result");
    $resultInput.textContent = result;
}