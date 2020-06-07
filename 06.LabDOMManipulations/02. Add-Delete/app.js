function addItem() {
   
    let $newTextInput = document.getElementById("newText");

    let newLiElement = document.createElement("li");
    newLiElement.textContent = $newTextInput.value;

    let newLinkElement = document.createElement("a");
    newLinkElement.textContent = "[Delete]";
    newLinkElement.href = "#";
    newLinkElement.addEventListener("click", deleteRow);

    newLiElement.appendChild(newLinkElement);

    let $table = document.getElementById("items");
    $table.appendChild(newLiElement);
    $newTextInput.value = "";

    function deleteRow(event){

        let rowToDelete = event.target.parentElement;
        $table.removeChild(rowToDelete);
    }
}