function solve() {
   
   let $cardsFirstPlayer = document.getElementById("player1Div");
   $cardsFirstPlayer.addEventListener("click", play);

   let $cardsSecondPlayer = document.getElementById("player2Div");
   $cardsSecondPlayer.addEventListener("click", play);

   let $resultInput = document.getElementById("result");

   let firstPlayerCard = "";
   let secondPlayerCard = "";

   function play(event){

      event.target.src="./images/whiteCard.jpg";
      let currentValue = +event.target.name;
      let currentPlayer = event.target.parentElement;

      if(currentPlayer.id === "player1Div"){
         $resultInput.children[0].textContent = currentValue;
         firstPlayerCard = event.target;
      } else{
         $resultInput.children[2].textContent = currentValue;
         secondPlayerCard = event.target
      }

      if(firstPlayerCard !== "" && secondPlayerCard !== ""){

         if(+firstPlayerCard.name > +secondPlayerCard.name){
            firstPlayerCard.style.border = "2px solid green";
            secondPlayerCard.style.border = "2px solid red";
         } else{
            firstPlayerCard.style.border = "2px solid red";
            secondPlayerCard.style.border = "2px solid green";
         }

         let $historyInput = document.getElementById("history");
         $historyInput.textContent += `[${firstPlayerCard.name} vs ${secondPlayerCard.name}] `;

         $resultInput.children[0].textContent = "";
         $resultInput.children[2].textContent = "";
         firstPlayerCard = "";
         secondPlayerCard = "";
      }
   }
}