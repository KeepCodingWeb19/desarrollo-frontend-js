import { constants } from "../utils/constants.js";

export const createTweet = async (tweetContent) => {

  const token = localStorage.getItem(constants.tokenKey)

  try {
    const response = await fetch('http://localhost:8000/api/tweets', {
      method: "POST",
      body: JSON.stringify({
        content: tweetContent,
        createdAt: new Date().toISOString(),
        likes: 0,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message, { cause: "data" });
    }

    return data.accessToken;

  } catch (error) {
    const errorMessage = error.cause === "data" ? error.message : "Error iniciando sesión";
    throw new Error(errorMessage)
  }
}