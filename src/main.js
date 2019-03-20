// El punto de entrada de mi aplicacion

import{ initRouter} from "./View-controller/router.js";

const init = () => {
  
  initRouter();
}
//init();
window.addEventListener('load',init);

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