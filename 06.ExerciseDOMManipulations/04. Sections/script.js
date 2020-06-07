function create(words = []) {
  let $mainDiv = document.getElementById("content");

  words.forEach((word) => {
    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = word;
    paragraphElement.style.display = "none";

    let divElement = document.createElement("div");
    divElement.appendChild(paragraphElement);
    divElement.addEventListener("click", showText);

    $mainDiv.appendChild(divElement);
  });

  function showText(event) {
    let textToShow = event.target.children[0];
    textToShow.style.display = "block";
  }
}
