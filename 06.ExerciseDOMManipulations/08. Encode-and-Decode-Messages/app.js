function encodeAndDecodeMessages() {
  let $buttons = [...document.getElementsByTagName("button")];

  let $decodeButton = $buttons[0];
  $decodeButton.addEventListener("click", decodeMessage);

  let $encodeButton = $buttons[1];
  $encodeButton.addEventListener("click", encodeMessage);

  let $textAreas = [...document.getElementsByTagName("textarea")];

  let decodedMessage = "";

  function decodeMessage() {
    let message = $textAreas[0].value;
    decodedMessage = message
      .split("")
      .map((x) => String.fromCharCode(x.charCodeAt(0) + 1))
      .join("");

    $textAreas[0].value = "";
    $textAreas[1].value = decodedMessage;
  }

  function encodeMessage() {
      let encodedMessage = decodedMessage
      .split("")
      .map((x) => String.fromCharCode(x.charCodeAt(0) - 1))
      .join("");

      $textAreas[1].value = encodedMessage;
  }
}
