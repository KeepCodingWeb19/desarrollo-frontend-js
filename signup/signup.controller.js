import { createUser } from "./signup.model.js";

export const signupController = (signupForm) => {

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const errors = []

    const password = signupForm.querySelector("#password");
    const passwordConfirmation = signupForm.querySelector("#passwordConfirm");
    const email = signupForm.querySelector("#email");

    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailRegExp.test(email.value)) {
      const validationErrorEvent = new CustomEvent('signup-validation-error', {
        detail: {
          message: "El email no es válido",
          type: "error"
        }
      });
      errors.push(validationErrorEvent)
    }

    if (password.value !== passwordConfirmation.value) {
      const validationErrorEvent = new CustomEvent('signup-validation-error', {
        detail: {
          message: "Las contraseñas no coinciden",
          type: "error"
        }
      });
      errors.push(validationErrorEvent)
    }

    errors.forEach(errorEvent => {
      signupForm.dispatchEvent(errorEvent)
    })

    // si no hay errores, llamo al api
    if (errors.length === 0) {
      try {
        await createUser(email.value, password.value)
        alert("usuario creado correctametne");
        setTimeout(() => {
          window.location.href = '/'
        }, 3000);
      } catch (error) {
        alert(error.message)
      }
    }

  })
}