function growingWord() {
  let $parentDiv = document.getElementById("exercise");
  let $word = $parentDiv.children[2];

  if ($word.style.color === "blue") {
    $word.style.color = "green";
    changePx();
  } else if ($word.style.color === "green") {
    $word.style.color = "red";
    changePx();
  } else if ($word.style.color === "red") {
    $word.style.color = "blue";
    changePx();
  } else {
    $word.style.color = "blue";
    $word.style.fontSize = "2px";
  }

  function changePx(){
    let currentPx = $word.style.fontSize;
    currentPx = currentPx.substring(0, currentPx.length - 2);
    let newPx = +currentPx * 2;
    $word.style.fontSize = newPx + "px";
  }
}
