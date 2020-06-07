function attachGradientEvents() {

    let $button = document.getElementById("gradient");
    $button.addEventListener("mousemove", mouseMove);
    $button.addEventListener("mouseout", mouseOut);

    let $resultInput = document.getElementById("result");

    function mouseMove(event) {

        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.floor(power * 100);
        $resultInput.textContent = power + "%";
    }

    function mouseOut() {
        $resultInput.textContent = "";
    }
}