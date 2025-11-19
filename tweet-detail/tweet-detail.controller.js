import { getTweetDetail, getUserData, removeTweet } from "./tweet-detail.model.js"
import { buildTweetDetail } from "./tweet-detail.view.js"

// user esta imagen para el detalle del tweet si el tweet obtenido por sparrest no tiene imagen.
// https://demofree.sirv.com/nope-not-here.jpg

export const tweetDetailController = async (tweetDetailContainer, tweetId) => {

    const handleRemoveTweetButton = (userData, tweet) => {
        if (userData.id === tweet.userId) {
            const removeButton = document.createElement("button");
            removeButton.textContent = 'Eliminar tweet';
            tweetDetailContainer.appendChild(removeButton);
            removeButton.addEventListener("click", async () => {
                const shouldRemoveTweet = confirm("Seguro que desea borrar el tweet?");
                if (shouldRemoveTweet) {
                    await removeTweet(tweet.id);
                    window.location.href = '/'
                }
            })
        }
    }

    let tweet = null;
    try {
        tweet = await getTweetDetail(tweetId)
        tweetDetailContainer.innerHTML = buildTweetDetail(tweet)
    } catch (error) {
        alert(error)
        window.location.href = '/'
    }
    
    try {
        const userData = await getUserData()
        handleRemoveTweetButton(userData, tweet)        
    } catch (error) {
        
    }




    /**
     * obtener datos del usuario que ha iniciado sesión
     * comparar el id de usuario logado con el id de usuario del tweet
     * si es el mismo, crear un botón de borrado
     * cuando el botón se pulsa, confirmar acción y borrar el tweet.
     */
}