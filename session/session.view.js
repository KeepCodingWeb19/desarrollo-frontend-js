export const buildAuthenticatedUserSession = () => {
  return `
        <button id="closeSession">Cerrar sesión</button>
        <a href="/create-tweet.html">Crear tweet</a>
    `
}

export const buildUnauthenticatedUserSession = () => {
  return `
        <a href="/signup.html">Registro</a>
        <a href="/login.html">Login</a>
    `
}