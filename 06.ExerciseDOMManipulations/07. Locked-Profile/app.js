function lockedProfile() {
    
    let $buttons = [...document.getElementsByTagName("button")];

    $buttons.forEach((button) => {

        button.addEventListener("click", getInfo);
    });

    function getInfo(event){

        let currentButton = event.target;

        let $parent = event.target.parentElement;
        let $lockedInput = $parent.children[2];

        let currentUser = $lockedInput.name;
        currentUser = currentUser.substring(0, currentUser.length - 6);

        let $hiddenTextInput = $parent.children[9];
        let targetUser = $hiddenTextInput.id;
        targetUser = targetUser.substring(0, targetUser.length - 12);

        if(currentButton.textContent === "Show more"
        && $lockedInput.checked !== true
        && targetUser === currentUser){
            $hiddenTextInput.style.display = "block";
            currentButton.textContent = "Hide it";
        } else if(currentButton.textContent === "Hide it"
        && $lockedInput.checked !== true
        && targetUser === currentUser){
            $hiddenTextInput.style.display = "none";
            currentButton.textContent = "Show more";
        }
    }
}