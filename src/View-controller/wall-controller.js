import {createCloud} from "../Controller-(Functions)/muro.js" ;
import {publicarPost} from "../UI-(view)/template-muro.js"
export const clickBtnPostear = () => {
  const postMuro = document.getElementById('post').value;
  document.getElementById('post').value = ''; // para que cuando se guarde el post, se vuelva a vacio y seguir publicando.
  const usuario = firebase.auth().currentUser.uid;
  createCloud(postMuro, usuario);
  publicarPost();
};