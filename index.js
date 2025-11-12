

function tweetListController(tweetContainer) {

}


 // 1- recorrer array de tweets - ok
 tweets.forEach((tweet) => {

  // 2- acceder a los datos de cada tweet - ok
  const newTweet = document.createElement('div');
  newTweet.innerHTML = `
    <h3>${tweet.handler} escribió el ${tweet.date}: </h3>
    <h4>${tweet.message}</h4>
  `

  const section = document.querySelector('#tweets');
  // 3- pintar cada tweet en pantalla - ok
  section.appendChild(newTweet)
 })


 // modelo -> obtención de datos
 // controlador -> orquestar la comunicación entre modelo y vista. Se encarga de gestionar un nodo del DOM.
 // Es el único que interactúa con el DOM
 // vista -> preparación del HTML que vamos a gestionar

