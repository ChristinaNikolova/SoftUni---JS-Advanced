function addItem() {
   
    let $newTextInput = document.getElementById("newItemText");

    let newLiElement = document.createElement("li");
    newLiElement.textContent = $newTextInput.value;

    let $table = document.getElementById("items");
    $table.appendChild(newLiElement);
    $newTextInput.value = "";
}