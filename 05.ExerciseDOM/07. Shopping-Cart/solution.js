function solve() {
  let prices = {
    Bread: 0.8,
    Milk: 1.09,
    Tomatoes: 0.99,
  };

  let $addButtons = [...document.querySelectorAll("[class=add-product]")];

  $addButtons.forEach((button) => {
    button.addEventListener("click", addToBasket);
  });

  let $textAreaInput = document.getElementsByTagName("textarea")[0];

  let $checkoutButton = document.querySelector("[class=checkout]");
  $checkoutButton.addEventListener("click", buyProducts);

  let boughtProducts = [];
  let totalSum = 0;

  function addToBasket(event) {
    let $productInputInfo = event.target.parentElement.parentElement;
    let productName = $productInputInfo.children[1].children[0].textContent;
    let procuctPrice = +prices[productName];

    if (!boughtProducts.includes(productName)) {
      boughtProducts.push(productName);
    }

    totalSum += procuctPrice;

    $textAreaInput.value +=
      `Added ${productName} for ${procuctPrice.toFixed(2)} to the cart.` + "\n";
  }

  function buyProducts() {
    $textAreaInput.value += `You bought ${boughtProducts.join(
      ", "
    )} for ${totalSum.toFixed(2)}.`;

    $addButtons.forEach((button) => {
      button.removeEventListener("click", addToBasket);
    });

    $checkoutButton.removeEventListener("click", buyProducts);
  }
}
