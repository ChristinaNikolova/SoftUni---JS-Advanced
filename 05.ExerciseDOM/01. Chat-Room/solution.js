function solve() {

   let $button = document.getElementById("send");
   $button.addEventListener("click", createNewMessage);

   function createNewMessage(){

      let $messageInput = document.getElementById("chat_input");

      let divElement = document.createElement("div");
      divElement.textContent = $messageInput.value;
      divElement.setAttribute("class", "message my-message");

      let $parentMessage = document.getElementById("chat_messages");
      $parentMessage.appendChild(divElement);

      $messageInput.value = "";
   }
}