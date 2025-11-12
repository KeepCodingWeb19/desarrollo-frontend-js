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

document.querySelector("#test").addEventListener("click", () => { console.log("btn1")})
document.querySelector("#test2").addEventListener("click", () => { console.log("btn2")})
document.querySelector("#parent").addEventListener("click", (event) => {
  console.log("parent")
  event.stopPropagation()
})
document.querySelector("body").addEventListener("click", () => { console.log("body")})
