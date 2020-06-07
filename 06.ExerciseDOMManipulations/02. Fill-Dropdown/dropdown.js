function addItem() {

    let $newTextInput = document.getElementById("newItemText");
    let $newValueInput = document.getElementById("newItemValue");

    let optionElement = document.createElement("option");
    optionElement.textContent = $newTextInput.value;
    optionElement.value = $newValueInput.value;

    let $menu = document.getElementById("menu");
    $menu.appendChild(optionElement);
    $newTextInput.value = "";
    $newValueInput.value = "";
}