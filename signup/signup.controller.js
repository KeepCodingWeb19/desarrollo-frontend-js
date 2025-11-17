export const signupController = (signupForm) => {

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // let isFormValid = true;
    const errors = []

    const password = signupForm.querySelector("#password");
    const passwordConfirmation = signupForm.querySelector("#passwordConfirm");
    const email = signupForm.querySelector("#email");

    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailRegExp.test(email.value)) {
      // isFormValid = false;
      const validationErrorEvent = new CustomEvent('signup-validation-error', {
        detail: {
          message: "El email no es válido",
          type: "error"
        }
      });
      errors.push(validationErrorEvent)
    }

    if (password.value !== passwordConfirmation.value) {
      // isFormValid = false;
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
      // consumir api
    }

  })
}