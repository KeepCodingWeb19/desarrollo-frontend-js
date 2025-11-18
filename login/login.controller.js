import { loginUser } from "./login.model.js";
import { constants } from '../utils/constants.js'

export const loginController = (loginForm) => {

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = [];
  
    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    const emailRegExp = new RegExp(constants.mailRegExp);
    if (!emailRegExp.test(email)) {
      const validationErrorEvent = new CustomEvent('login-validation-error', {
        detail: {
          message: "El email no es válido",
          type: "error"
        }
      });
      errors.push(validationErrorEvent)
    }

    errors.forEach(errorEvent => {
      loginForm.dispatchEvent(errorEvent)
    })

    if (errors.length === 0) {
      loginUser(email, password)
    }
  })
}