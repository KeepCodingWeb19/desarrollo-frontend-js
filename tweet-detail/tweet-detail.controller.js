import { getTweetDetail } from "./tweet-detail.model.js"

// user esta imagen para el detalle del tweet si el tweet obtenido por sparrest no tiene imagen.
// https://demofree.sirv.com/nope-not-here.jpg

export const tweetDetailController = (tweetDetailContainer, tweetId) => {
    getTweetDetail(tweetId)
}