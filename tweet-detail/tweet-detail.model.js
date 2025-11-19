export const getTweetDetail = async (tweetId) => {
    let tweet = null;

    try {
      const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`);
      if (!response.ok) {
        throw new Error();
      }
      tweet = await response.json();
    } catch (error) {
      throw new Error("El tweet no existe")
    }


  return tweet;
}