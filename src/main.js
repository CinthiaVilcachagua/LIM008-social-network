// El punto de entrada de mi aplicacion

import { myFunction } from './lib/index.js';

myFunction();

// Inicializando Firebase
const init = () =>{
    const config = {
        apiKey: "AIzaSyBP_d2MGv-UAGH9O3rtLo3C_9Io6YCuTJs",
        authDomain: "red-social-11.firebaseapp.com",
        databaseURL: "https://red-social-11.firebaseio.com",
        projectId: "red-social-11",
        storageBucket: "red-social-11.appspot.com",
        messagingSenderId: "846664786919"
      };
      firebase.initializeApp(config);

      //aqui va myFuction() - la que va a representar mi pantalla de inicio
}

 //window.onload = init();