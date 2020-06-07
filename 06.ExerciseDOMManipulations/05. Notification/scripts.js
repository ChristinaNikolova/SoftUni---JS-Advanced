function notify(message) {
    
    let $resultInput = document.getElementById("notification");
    $resultInput.textContent = message;
    $resultInput.style.display = "block";

    setTimeout(hiddenMessage, 2000);

    function hiddenMessage(){
        $resultInput.style.display = "none";
    }
}