function solution() {
  let $elements = {
    name: document.querySelector("div > section > div > input"),
    addGiftButton: document.querySelector("div > section > div > button"),
    listOfGifts: document.getElementsByTagName("ul")[0],
    sendGifts: document.getElementsByTagName("ul")[1],
    discardGifts: document.getElementsByTagName("ul")[2],
  };

  $elements.addGiftButton.addEventListener("click", addGift);

  function addGift(event) {
    event.preventDefault();

    if ($elements.name.value !== "") {
      let li = createHtmlElement("li", ["gift"], $elements.name.value);
      let sendButton = createHtmlElement(
        "button",
        null,
        "Send",
        [{ key: "id", value: "sendButton" }],
        { name: "click", function: moveGift }
      );
      let discardButton = createHtmlElement(
        "button",
        null,
        "Discard",
        [{ key: "id", value: "discardButton" }],
        { name: "click", function: moveGift }
      );

      li = appendChildrent([sendButton, discardButton], li);
      $elements.listOfGifts.appendChild(li);

      let allLis = Array.from($elements.listOfGifts.children);
      allLis.forEach((li) => $elements.listOfGifts.removeChild(li));
      allLis = allLis.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
      );
      allLis.forEach((li) => $elements.listOfGifts.appendChild(li));
    }

    $elements.name.value = "";
  }

  function moveGift(event) {
    let parentGift = event.target.parentElement;

    let [firstBtn, secondBtn] = Array.from(parentGift.children);
    parentGift.removeChild(firstBtn);
    parentGift.removeChild(secondBtn);

    if (event.target.textContent === "Send") {
      $elements.sendGifts.appendChild(parentGift);
    } else {
      $elements.discardGifts.appendChild(parentGift);
    }

    $elements.listOfGifts.removeChild(parentGift);
  }

  function createHtmlElement(
    tagName,
    classNames,
    textContent,
    attributes,
    event
  ) {
    let element = document.createElement(tagName);

    if (classNames) {
      element.classList.add(...classNames);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    if (attributes) {
      attributes.forEach((a) => element.setAttribute(a.key, a.value));
    }

    if (event) {
      element.addEventListener(event.name, event.function);
    }

    return element;
  }

  function appendChildrent(children, parent) {
    children.forEach((c) => parent.appendChild(c));
    return parent;
  }
}
