function deleteByEmail() {
  let $emailInput = document.querySelector("[name=email]");
  let $allRows = [...document.getElementsByTagName("tr")];

  let isFound = false;
  let $bodyTable = document.getElementsByTagName("tbody")[0];
  let $resultInput = document.getElementById("result");

  for (const row of $allRows) {
    let currentEmail = row.children[1];

    if (currentEmail.textContent === $emailInput.value) {
        $bodyTable.removeChild(row);
        $resultInput.textContent = "Deleted."
        isFound = true;
        break;
    }
  }

  if(!isFound){
    $resultInput.textContent = "Not found."
  }
}
