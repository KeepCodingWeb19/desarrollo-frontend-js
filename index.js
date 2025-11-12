import { tweetListController } from "./tweet-list/tweet-list.controller.js";

const tweetListContainer = document.querySelector("#tweets");
tweetListController(tweetListContainer)


const fetchExample = async () => {
  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data)
}

fetchExample();