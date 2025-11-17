export const buildTweet = (tweet) => {
  return `
    <h3>${tweet.handler} escribió el ${tweet.date}: </h3>
    <h4>${tweet.message}</h4>
  `
}

export const buildEmptyTweets = () => {
  return `<img style="width: 400px" src="https://compote.slate.com/images/97d7753a-b5ae-408a-8fed-7ff68b4ce3b7.jpeg" />`
}