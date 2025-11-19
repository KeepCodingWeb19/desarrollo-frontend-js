import { getTweetDetail } from "./tweet-detail.model.js"
import { buildTweetDetail } from "./tweet-detail.view.js"

// user esta imagen para el detalle del tweet si el tweet obtenido por sparrest no tiene imagen.
// https://demofree.sirv.com/nope-not-here.jpg

export const tweetDetailController = async (tweetDetailContainer, tweetId) => {

    try {
        const tweet = await getTweetDetail(tweetId)
        tweetDetailContainer.innerHTML = buildTweetDetail(tweet)
    } catch (error) {
        alert(error)
        window.location.href = '/'
    }

}