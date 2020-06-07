function validate() {
  let $emailInput = document.getElementById("email");
  $emailInput.addEventListener("change", emailValidator);

  let pattern = new RegExp("^[a-z]+@[a-z]+.[a-z]+$");

  function emailValidator(event) {
    if ($emailInput.value.match(pattern)) {
        event.target.removeAttribute("class");
    } else {
      event.target.className = "error";
    }
  }
}
