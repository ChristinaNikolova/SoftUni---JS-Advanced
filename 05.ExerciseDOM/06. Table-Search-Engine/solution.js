function solve() {
   
   let $button = document.getElementById("searchBtn");
   $button.addEventListener("click", searchInTable);

   let $rows = [...document.querySelectorAll("tbody tr")];

   function searchInTable(){

      for (const row of $rows) {
         
         if(row.hasAttribute("class", "select")){
            row.removeAttribute("class", "select");
         }
      }

      let $searchInput = document.getElementById("searchField");

      for (const row of $rows) {
         
         if(row.innerHTML.includes($searchInput.value)){
            row.setAttribute("class", "select");
         }
      }

      $searchInput.value = "";
   }
}