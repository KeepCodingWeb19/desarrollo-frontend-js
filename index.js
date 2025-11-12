import { tweetListController } from "./tweet-list/tweet-list.controller.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const tweetListContainer = document.querySelector("#tweets");
  tweetListContainer.innerHTML = "";
  tweetListController(tweetListContainer)
  // 1- deshabilitar el botón
  // button.setAttribute("disabled", "");
  
  // 2- borrar el botón
  // button.remove()
})
