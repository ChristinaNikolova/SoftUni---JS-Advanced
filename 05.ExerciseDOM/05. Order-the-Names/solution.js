function solve() {

    let $button = document.getElementsByTagName("button")[0];
    $button.addEventListener("click", addNewName);

    function addNewName(){

        let $nameInput = document.getElementsByTagName("input")[0];

        let startLetter = ($nameInput.value)[0].toUpperCase();
        let formatedName = startLetter;

        for(let i = 1; i < $nameInput.value.length; i++){
            formatedName += ($nameInput.value[i]).toLowerCase();
        }

        let $table = document.getElementsByTagName("ol")[0];
        let $letters = $table.children;

        let index = startLetter.charCodeAt(0) - 65;
        
        if($letters[index].textContent === ""){
            $letters[index].textContent += formatedName;
        } else{
            $letters[index].textContent += ", " + formatedName;
        }

        $nameInput.value = "";
    }
}