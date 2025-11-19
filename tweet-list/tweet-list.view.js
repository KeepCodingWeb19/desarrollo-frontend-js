export const buildTweet = (tweet) => {
  const createdAt = new Date(tweet.createdAt);
  return `
    <h3>${tweet.user.username} escribió el ${createdAt.toLocaleString()}: </h3>
    <h4>${tweet.content}</h4>
  `
}

export const buildEmptyTweets = () => {
  return `<img style="width: 400px" src="https://compote.slate.com/images/97d7753a-b5ae-408a-8fed-7ff68b4ce3b7.jpeg" />`
}