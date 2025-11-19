import { constants } from "../utils/constants.js"

export const getTweetDetail = async (tweetId) => {
    let tweet = null;

    try {
      const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}?_expand=user`);
      if (!response.ok) {
        throw new Error();
      }
      tweet = await response.json();
    } catch (error) {
      throw new Error("El tweet no existe")
    }


  return tweet;
}

export const getUserData = async () => {
  let userData = null;
  const token = localStorage.getItem(constants.tokenKey)
  try {
      const response = await fetch(`http://localhost:8000/auth/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error();
      }
      userData = await response.json();
    } catch (error) {
      throw new Error("El usuario no existe")
    }

    return userData;
}