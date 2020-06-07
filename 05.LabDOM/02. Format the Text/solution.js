function solve() {
  
  let $inputText = document.getElementById("input");
  let sentences = $inputText.textContent
  .split(".")
  .map(x => x.trim());

  let counterSentances = 1;
  let result = "";

  let $resultInput = document.getElementById("output");

  sentences.forEach((sentence) => {

    result += sentence + ".";

    if(counterSentances % 3 === 0){
      createNewParagraph();
    }

    counterSentances++;
  });

  if(result !== ""){
    createNewParagraph();
  }

  function createNewParagraph(){

    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = result;
    result = "";
    $resultInput.appendChild(paragraphElement);
  }
}