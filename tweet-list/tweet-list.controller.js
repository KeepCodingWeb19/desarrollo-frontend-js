import { getTweets } from "./tweet-list.model.js";
import { buildTweet } from "./tweet-list.view.js";

export async function tweetListController(tweetContainer) {
  let tweetsToShow = [];

  try {
    tweetsToShow = await getTweets();
  } catch (error) {
    alert(error.message)
  }

  tweetsToShow.forEach((tweet) => {

    const newTweet = document.createElement('div');
    // el controlador obtiene el HTML del módulo encargado de generar la vista.
    newTweet.innerHTML = buildTweet(tweet)

    newTweet.addEventListener('click', (event) => {
      // newTweet.remove();
      event.currentTarget.remove();
    })

    // añadir el tweet al DOM
    tweetContainer.appendChild(newTweet)
  })
}