import { signupController } from "./signup/signup.controller.js";
import { notificationsController } from "./notifications/notifications.controller.js"

const signupForm = document.querySelector("form")
const notificationsContainer = document.querySelector("#notifications")

const {showNotification}  = notificationsController(notificationsContainer)
signupController(signupForm);

signupForm.addEventListener("signup-validation-error", (event) => {
    showNotification(event.detail.message, event.detail.type)
})