export const getTweets = async () => {

  const response = await fetch('http://localhost:8000/api/tweets');
  const tweets = await response.json();
  
  return tweets;
}