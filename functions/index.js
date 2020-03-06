// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "reco". */
exports.reco = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
        
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.music) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta el nombre ");
      } else if (!request.query.music1) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la edad");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */

      if (request.query.music == 2 && request.query.music1 >= 15 && request.query.music1 < 70) {
        response.send(`Camila Cabello,Charlie Puth, Billie Elish,Shawn Mendes Te pueden Gustar! :D`);


    } else if (request.query.music == 3 && request.query.music1  >= 15 && request.query.music1  < 70) {
        response.send(`Ozuna,Daddy Yankie,Anuel, Bad Bunny Te pueden gustar! :D`);

     

    } else if (request.query.music == 4 && request.query.music1  >= 15 && request.query.music1  < 70) {
        response.send(`Nirvana,Queen,Pink Floyd,Metallica Te pueden Gustar! :D`);

    

    } else if (request.query.music == 5 && request.query.music1  >= 15 && request.query.music1  < 70) {
        response.send(`Pixies,Artick Monkies,Foals,Interpool,Te pueden Gustar! :D`);

   } else if (request.query.music== 2 && request.query.music1 >=70){
    response.send(`!Que loco`);

      } else if (request.query.music== 3 && request.query.music1 >=70){
        response.send(`Que loco!`);

      } else if (request.query.music== 4 && request.query.music1 >=70){
        response.send(`!Que loco!`);

      } else if (request.query.music== 5  && request.query.music1 >=70){
        response.send(`!Que loco`);

      } else {
        response.send(`Selecciona  bien el genero`);

    }
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });
