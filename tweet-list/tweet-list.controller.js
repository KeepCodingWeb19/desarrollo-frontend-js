import { getTweets } from "./tweet-list.model.js";
import { buildTweet } from "./tweet-list.view.js";

export function tweetListController(tweetContainer) {
  // el controlador tiene que obtener los datos del modelo.
  const tweetsToShow = getTweets();

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