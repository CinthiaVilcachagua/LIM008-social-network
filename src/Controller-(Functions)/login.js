export const register = (email,password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password)
    // le agregamos la validacion del correo agrgando el then
    /*.then(() => {
      return verificar();
    })*/


//CREANDO UNA FUNCION PARA VERIFICAR/VALIDAR EL CORREO.
/* const verificar = () => {
  const user = firebase.auth().currentUser;
  return user.sendEmailVerification()
  
}*/

export const signIn = (email,password) => 
 firebase.auth().signInWithEmailAndPassword(email,password)
  

export const signOut = () => 
 firebase.auth().signOut()   