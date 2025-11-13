export const buildTweet = (tweet) => {
  return `
    <h3>${tweet.handler} escribió el ${tweet.date}: </h3>
    <h4>${tweet.message}</h4>
  `
}

export const buildEmptyTweets = () => {
  return `<p>No hay tweets disponibles</p>`
}