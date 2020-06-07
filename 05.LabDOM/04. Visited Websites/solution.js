function solve() {

  let $links = [...document.getElementsByTagName("a")];

  $links.forEach((link) => {
    link.addEventListener("click", increaseVisit);
  });

  function increaseVisit(event){

    let $parent = event.target.parentElement;
    let $subling = $parent.nextElementSibling;

    let args = $subling.textContent
    .split(" ")
    .map(x => x.trim());

    let counter = +args[1];
    counter++;

    $subling.textContent = args[0] + " " + counter + " " + args[2];
  }
}