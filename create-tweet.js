import { createTweetController } from "./create-tweet/createTweet.controller.js";

const createTweetForm = document.querySelector("form")
createTweetController(createTweetForm)