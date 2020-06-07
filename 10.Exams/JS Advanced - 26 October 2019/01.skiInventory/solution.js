function solve() {
  let $elements = {
    name: document.getElementById("add-new").children[1],
    quantity: document.getElementById("add-new").children[2],
    price: document.getElementById("add-new").children[3],
    addNewProductButton: document.getElementById("add-new").children[4],
    avaiableProducts: document.getElementById("products").children[1],
    filterText: document.getElementById("filter"),
    filterButton: document.querySelector("section > div > button"),
    myProducts: document.getElementById("myProducts").children[1],
    buyButton: document.getElementById("myProducts").children[2],
    totalPrice: document.getElementsByTagName("h1")[1],
  };

  $elements.addNewProductButton.addEventListener("click", addNewProduct);
  $elements.filterButton.addEventListener("click", filterProducts);
  $elements.buyButton.addEventListener("click", buyProducts);

  function buyProducts() {
    let totalPriceArgs = $elements.totalPrice.textContent.split(" ");
    totalPriceArgs[2] = "0.00";
    $elements.totalPrice.textContent = totalPriceArgs.join(" ");

    $elements.myProducts.innerHTML = "";
  }

  function filterProducts() {
    let targetText = $elements.filterText.value;

    let pattern = new RegExp(`${targetText}`, "gmi");

    let lis = Array.from($elements.avaiableProducts.children);

    for (const currentLi of lis) {
      if (currentLi.children[0].textContent.match(pattern)) {
        currentLi.style.display = "block";
      } else {
        currentLi.style.display = "none";
      }
    }
  }

  function addNewProduct(event) {
    event.preventDefault();

    if (
      $elements.name.value !== "" &&
      $elements.quantity.value > 0 &&
      $elements.price.value > 0
    ) {
      let li = createHtmlElement("li");
      let span = createHtmlElement("span", null, $elements.name.value);
      let strong = createHtmlElement(
        "strong",
        null,
        `Available: ${$elements.quantity.value}`
      );
      let div = createHtmlElement("div");
      let divStrong = createHtmlElement(
        "strong",
        null,
        `${(+$elements.price.value).toFixed(2)}`
      );
      let divButton = createHtmlElement(
        "button",
        null,
        "Add to Client's List",
        null,
        { name: "click", function: addToClientsList }
      );

      div = appendChildrent([divStrong, divButton], div);
      li = appendChildrent([span, strong, div], li);

      $elements.avaiableProducts.appendChild(li);
    }

    $elements.name.value = "";
    $elements.quantity.value = "";
    $elements.price.value = "";
  }

  function addToClientsList(event) {
    let parentProduct = event.target.parentElement.parentElement;

    let quantityArgs = parentProduct.children[1].textContent.split(" ");
    quantityArgs[1] = +quantityArgs[1];

    if (quantityArgs[1] - 1 === 0) {
      $elements.avaiableProducts.removeChild(parentProduct);
    } else {
      quantityArgs[1]--;
      parentProduct.children[1].textContent = quantityArgs.join(" ");
    }

    let name = parentProduct.children[0].textContent;
    let price = +parentProduct.children[2].children[0].textContent;

    let li = createHtmlElement("li", null, name);
    let strong = createHtmlElement("strong", null, `${price.toFixed(2)}`);
    li = appendChildrent([strong], li);

    $elements.myProducts.appendChild(li);

    let totalPriceArgs = $elements.totalPrice.textContent.split(" ");
    totalPriceArgs[2] = (+totalPriceArgs[2] + price).toFixed(2);
    $elements.totalPrice.textContent = totalPriceArgs.join(" ");
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
