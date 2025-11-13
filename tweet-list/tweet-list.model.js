export const getTweets = async () => {
  let tweets = [];

    try {
      const response = await fetch('http://localhost:8000/api/twees');
      if (!response.ok) {
        throw new Error();
      }
      tweets = await response.json();
    } catch (error) {
      throw new Error("Los tweets no están disponibles")
    }


  return tweets;
}