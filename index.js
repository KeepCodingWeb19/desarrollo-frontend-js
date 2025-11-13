import { loaderController } from "./loader/loader.controller.js";
import { notificationsController } from "./notifications/notifications.controller.js";
import { tweetListController } from "./tweet-list/tweet-list.controller.js";

const loaderContainer = document.querySelector("#loaderContainer");
const tweetListContainer = document.querySelector("#tweets");
const notificationsContainer = document.querySelector("#notifications")

const {showNotification} = notificationsController(notificationsContainer)
const {show, hide} = loaderController(loaderContainer);

tweetListContainer.addEventListener('start-fetching-tweets', () => {
    // tengo que mostrar la ruleta
    show();
})
tweetListContainer.addEventListener('finish-fetching-tweets', () => {
    // tengo que ocultar la ruleta
    hide();
})
tweetListContainer.addEventListener('error-fetching-tweets', (event) => {
    // mostrar notificación
    showNotification(event.detail.message)
})

tweetListController(tweetListContainer)