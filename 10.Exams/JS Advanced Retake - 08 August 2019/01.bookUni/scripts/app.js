function solve() {
  let $elements = {
    title: document.getElementsByTagName("form")[0].children[1],
    year: document.getElementsByTagName("form")[0].children[3],
    price: document.getElementsByTagName("form")[0].children[5],
    addBookButton: document.getElementsByTagName("form")[0].children[6],
    oldBooks: document.getElementById("outputs").children[0].children[1],
    newBooks: document.getElementById("outputs").children[1].children[1],
    totalProfit: document.getElementsByTagName("h1")[1],
  };

  $elements.addBookButton.addEventListener("click", addBook);

  function addBook(event) {
    event.preventDefault();

    if (
      $elements.title.value !== "" &&
      $elements.price.value > 0 &&
      $elements.year.value > 0
    ) {
      let div = createHtmlElement("div", ["book"]);
      let paragraph = createHtmlElement(
        "p",
        null,
        `${$elements.title.value} [${$elements.year.value}]`
      );

      if ($elements.year.value >= 2000) {
        let buyButton = createHtmlElement(
          "button",
          null,
          `Buy it only for ${(+$elements.price.value).toFixed(2)} BGN`,
          null,
          { name: "click", function: buyBook }
        );
        let moveButton = createHtmlElement(
          "button",
          null,
          `Move to old section`,
          null,
          { name: "click", function: moveBook }
        );

        div = appendChildrent([paragraph, buyButton, moveButton], div);
        $elements.newBooks.appendChild(div);
      } else {
        let discountPrice =
          +$elements.price.value - +$elements.price.value * 0.15;
        let buyButton = createHtmlElement(
          "button",
          null,
          `Buy it only for ${discountPrice.toFixed(2)} BGN`,
          null,
          { name: "click", function: buyBook }
        );

        div = appendChildrent([paragraph, buyButton], div);
        $elements.oldBooks.appendChild(div);
      }
    }

    $elements.title.value = "";
    $elements.price.value = "";
    $elements.year.value = "";
  }

  function moveBook(event) {
    let parentBook = event.target.parentElement;
    parentBook.removeChild(parentBook.children[2]);

    let priceArgs = parentBook.children[1].textContent.split(" ");
    priceArgs[4] = (+priceArgs[4] - +priceArgs[4] * 0.15).toFixed(2);
    parentBook.children[1].textContent = priceArgs.join(" ");

    $elements.oldBooks.appendChild(parentBook);
    $elements.newBooks.removeChild(parentBook);
  }

  function buyBook(event) {
    let parentBook = event.target.parentElement;
    let grandParent = parentBook.parentElement;

    let priceArgs = event.target.textContent.split(" ");

    let profitArgs = $elements.totalProfit.textContent.split(" ");
    profitArgs[3] = (+profitArgs[3] + +priceArgs[4]).toFixed(2);
    $elements.totalProfit.textContent = profitArgs.join(" ");

    grandParent.removeChild(parentBook);
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
