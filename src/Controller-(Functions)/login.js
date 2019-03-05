export const register = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      // le agregamos la validacion del correo agrgando el then
      .then(() => {
        verificar();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  
  //CREANDO UNA FUNCION PARA VERIFICAR/VALIDAR EL CORREO.
   const verificar = () => {
    const user = firebase.auth().currentUser;
  
    user.sendEmailVerification()
    .then(() => {
      console.log('... enviando correo');
    }).catch((error) => {
      console.log(error);
    });
  }
  
  export const signIn = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage, error);
    });
  };