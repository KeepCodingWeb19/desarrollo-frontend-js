import { getTweets } from "./tweet-list.model.js";
import { buildTweet, buildEmptyTweets } from "./tweet-list.view.js";

export async function tweetListController(tweetContainer) {
  let tweetsToShow = [];
  const loader = document.querySelector(".loader");
  try {
    // muestro interfaz de carga
    loader.classList.remove("hidden");
    tweetsToShow = await getTweets();    
  } catch (error) {
    alert(error.message)
  } finally {
    // oculto interfaz de carga
    loader.classList.add("hidden");
  }
  
  if (tweetsToShow.length === 0) {
    tweetContainer.innerHTML = buildEmptyTweets()
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