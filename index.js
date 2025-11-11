const tweets = [{
   handler: '@usuario1',
   date: new Date().toLocaleDateString(),
   message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
   likes: 40,
 },
 {
   handler: '@usuario2',
   date: new Date().toLocaleDateString(),
   message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
   likes: 3,
 },
 {
   handler: '@usuario3',
   date: new Date().toLocaleDateString(),
   message: 'Ayer estuve en le parque y me lo pasé genial',
   likes: 34,
 },
 {
   handler: '@usuario4',
   date: new Date().toLocaleDateString(),
   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   likes: 400,
 }];


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

 /**
  * recorrer el array de tweets
  * acceder a los datos de cada tweet
  * pintar cada tweet en pantalla
  */
