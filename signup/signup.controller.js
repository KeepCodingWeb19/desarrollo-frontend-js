export const signupController = (signupForm) => {

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = signupForm.querySelector("#password");
    const passwordConfirmation = signupForm.querySelector("#passwordConfirm");
    const email = signupForm.querySelector("#email");

    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailRegExp.test(email.value)) {
      alert("ERROR, email incorrecto")
    }

    if (password.value === passwordConfirmation.value) {
      alert("TODO OK")
    } else {
      alert("ERROR, passwords diferentes")
    }


  })
}