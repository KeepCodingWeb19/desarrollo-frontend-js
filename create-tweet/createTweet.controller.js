import { createTweet } from "./createTweet.model.js";

export const createTweetController = (createTweetForm) => {
  
  createTweetForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const tweetContent = createTweetForm.querySelector("#tweetContent").value

    createTweet(tweetContent)
  })
}