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
      if (!request.query.bts) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta el integrante ");
      } else if (!request.query.edad) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la edad");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */

      if (request.query.bts == 1 && request.query.edad >= 15 && request.query.edad < 70) {
        response.send(`Do You, Forever Rain, Moonchild, Tokyo, Change, Joke entre otras muchas canciones que tiene nuestro maravilloso lides. El non enseña a amarnos a nosotros mismos <3 `);


    } else if (request.query.bts == 2 && request.query.edad  >= 15 && request.query.edad  < 70) {
        response.send(`Nuestro querido jin no tiene muchas canciones en solitario, pero Awake, Mom y Moon te haran sentir super especial`);

     

    } else if (request.query.bts == 3 && request.query.edad  >= 15 && request.query.edad  < 70) {
        response.send(`Nuestro querido Suga,uno de los raperos del grupo, sus canciones para ti serian The last, So far away, First love y Seesaw`);

    

    } else if (request.query.bts == 4 && request.query.edad  >= 15 && request.query.edad  < 70) {
        response.send(`Nuestra esperanza, igual que sus canciones Daydream, Chicken Noodle soup, Just dance, Hope world y su mas reciente sencillo EGO nos iluman y alegran los dias`);

   } else if (request.query.bts == 5 && request.query.edad  >= 15 && request.query.edad  < 70) {
    response.send(`Nuestro hermoso mochi igual que el sus canciones tienen esa sansualidad y ternura, por ejemplo Serendipity, Promise, Lie y la mas nueva FILTER`);
   
   }else if (request.query.bts == 6 && request.query.edad  >= 15 && request.query.edad  < 70) {
    response.send(`Even If I Die, It's You, Stigma, Stigma,  Singularity entre otras muchas nos demuestran lo maravilloso y talentoso que es`);
   }else if (request.query.bts == 7 && request.query.edad  >= 15 && request.query.edad  < 70) {
    response.send(`El maknae de oro, el es tan talentoso y lo demuestra en cada una de sus canciones, como lo son: Begin, We Don´t Talk Anymore, Euphoria, Porpuse y Paper hearts`);
    }else if (request.query.bts == 8 && request.query.edad  >= 15 && request.query.edad  < 70) {
    response.send(`sin lugar a dudas tu eres un(a) OT7 amas a todos los chicos por igual, te recomendamos que escuches el nuevo album MOST:7 en donde nos muestran toda su trayectoria!!`);
    }
    else if (request.query.bts== 1 && request.query.edad >=70){
    response.send(`Oh usted es old ARMY`);

      } else if (request.query.bts== 2 && request.query.edad >=70){
        response.send(`Oh usted es old ARMY!`);

      } else if (request.query.bts== 3 && request.query.edad >=70){
        response.send(`Oh usted es old ARMY`);

      } else if (request.query.bts== 4  && request.query.edad >=70){
        response.send(`Oh usted es old ARMY`);

      } else if (request.query.bts== 5  && request.query.edad >=70){
        response.send(`Oh usted es old ARMY`);

      }else if (request.query.bts== 6 && request.query.edad >=70){
        response.send(`Oh usted es old ARMY`);

      }else if (request.query.bts== 7  && request.query.edad >=70){
        response.send(`Oh usted es old ARMY`);

      }else if (request.query.bts== 8  && request.query.edad >=70){
        response.send(`Oh usted es old ARMY`);

      }
      else {
        response.send(`Por favor, primero seleccione correctamente su integrante favorito`);

    }
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });
