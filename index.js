import { tweetListController } from "./tweet-list/tweet-list.controller.js";

const tweetListContainer = document.querySelector("#tweets");
tweetListController(tweetListContainer)