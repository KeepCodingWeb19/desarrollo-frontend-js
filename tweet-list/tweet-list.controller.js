import { getTweets } from "./tweet-list.model.js";
import { buildTweet, buildEmptyTweets } from "./tweet-list.view.js";

export async function tweetListController(tweetContainer) {
  let tweetsToShow = [];

  try {
    const startEvent = new CustomEvent('start-fetching-tweets')
    tweetContainer.dispatchEvent(startEvent);
    tweetsToShow = await getTweets();    
  } catch (error) {
    const errorEvent = new CustomEvent('error-fetching-tweets', {
      detail: {
        message: error.message
      }
    })
    tweetContainer.dispatchEvent(errorEvent);
  } finally {
    const finishEvent = new CustomEvent('finish-fetching-tweets')
    tweetContainer.dispatchEvent(finishEvent);
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