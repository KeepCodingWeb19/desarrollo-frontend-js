import { constants } from "../utils/constants.js"
import { buildAuthenticatedUserSession, buildUnauthenticatedUserSession } from "./session.view.js"

export const sessionController = (sessionContainer) => {

  const token = localStorage.getItem(constants.tokenKey)
  if (token) {
    // usuario con sesión iniciada, muestra X botones
    sessionContainer.innerHTML = buildAuthenticatedUserSession();
    const closeSessionButton = sessionContainer.querySelector("#closeSession");
    closeSessionButton.addEventListener("click", () => {
      localStorage.removeItem(constants.tokenKey);
      sessionController(sessionContainer)
    })
  } else {
    // usuario no autenticado
    // muestro Y botones
    sessionContainer.innerHTML = buildUnauthenticatedUserSession()
  }

}