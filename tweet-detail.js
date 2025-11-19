
const urlParams = window.location.search;

const searchParams = new URLSearchParams(urlParams);

const tweetId = searchParams.get("tweetId");

const h1 = document.querySelector("h1");

h1.textContent = h1.textContent + ` ${tweetId}`;