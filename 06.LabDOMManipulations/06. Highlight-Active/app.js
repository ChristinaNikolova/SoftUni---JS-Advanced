function focus() {
    
    let $inputTexts = [...document.querySelectorAll("[type=text]")];

    $inputTexts.forEach((input) => {

        input.addEventListener("focus", getFocus);
        input.addEventListener("blur", removeFocus);
    });

    function getFocus(event){

        let $parent = event.target.parentElement;
        $parent.className = "focused";
    }

    function removeFocus(event){
        let $parent = event.target.parentElement;
        $parent.className = "blur";
    }
}