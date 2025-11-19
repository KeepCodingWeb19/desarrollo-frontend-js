import { createTweet } from "./createTweet.model.js";

export const createTweetController = (createTweetForm) => {
  
  createTweetForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const tweetContent = createTweetForm.querySelector("#tweetContent").value

    try {
      await createTweet(tweetContent)
      alert("tweet creado crrectamente");
      window.location.href = '/'
    } catch (error) {
      alert(error)
    }
  })
}