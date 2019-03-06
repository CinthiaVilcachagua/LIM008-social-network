// El punto de entrada de mi aplicacion

import{ initRouter} from "./View-controller/router.js";

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

const inicio = () => {
  init();
  initRouter();
}
//init();
window.addEventListener('load',inicio);

const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      mostrarMuro();
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email; // me muestra el email del usuario.
      const emailVerified = user.emailVerified;//me muestra si ya se verifico con el correo enviado
      console.log(emailVerified);
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
    }
  });
}
observador();

//MURO
const mostrarMuro = () => {
  window.location.hash = '#/muro';
};