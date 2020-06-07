function solve() {
  let $buttons = [...document.getElementsByTagName("button")];

  let $generateButton = $buttons[0];
  $generateButton.addEventListener("click", generateItems);

  let $buyButton = $buttons[1];
  $buyButton.addEventListener("click", buyItems);

  let $textAreas = [...document.getElementsByTagName("textarea")];

  function generateItems() {
    let $tbodyInput = document.getElementsByTagName("tbody")[0];

    let $itemsInput = document.getElementsByTagName("textarea")[0];
    let items = JSON.parse($itemsInput.value);

    for (const item of items) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");

      for (let i = 0; i < 5; i++) {
        tr.appendChild(td.cloneNode(true));
      }

      tr.children[0].innerHTML = `<img src=${item.img}>`;
      tr.children[1].innerHTML = `<p>${item.name}</p>`;
      tr.children[2].innerHTML = `<p>${item.price}</p>`;
      tr.children[3].innerHTML = `<p>${item.decFactor}</p>`;
      tr.children[4].innerHTML = `<input type="checkbox"/>`;

      $tbodyInput.appendChild(tr);
    }
  }

  function buyItems() {
    let boughtProducts = [];
    let totalSum = 0;
    let totalFactor = 0;

    let $rows = [...document.querySelectorAll("tbody tr")];

    for (const row of $rows) {
      if (row.children[4].children[0].checked) {
        boughtProducts.push(row.children[1].children[0].textContent);
        totalSum += +row.children[2].children[0].textContent;
        totalFactor += +row.children[3].children[0].textContent;
      }
    }

    $textAreas[1].value +=
      `Bought furniture: ${boughtProducts.join(", ")}` +
      "\n" +
      `Total price: ${totalSum.toFixed(2)}` +
      "\n" +
      `Average decoration factor: ${totalFactor / boughtProducts.length}`;
  }
}
