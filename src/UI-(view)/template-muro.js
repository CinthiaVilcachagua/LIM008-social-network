import {clickBtnPostear} from "../View-controller/wall-controller.js";
import { signOut } from "../Controller-(Functions)/login.js" ;
import { editPost, deletePost} from "../Controller-(Functions)/muro.js"
export const wallTmp = () => {
    const divCreate = document.createElement('div');
    const wall = `
        <section id="muro-principal">
            <h2>Muro</h2>
            <div id="cerrar-sesion" class="contenedor-muro">
               <button type="button" id="btn-cerrar">cerrar sesion</button> 
                <p> Bienvenido </p>          
                <input type="text" id="post" placeholder="¿Qué quisieras comparir hoy?">
                <button type="button" id="btn-publicar">publicar</button>
            </div>
        </section>
        <section class="posts">
            <h2>Publicaciones</h2>
            <div id="insert-post" class="contenedor-post">

            </div>
        </section>
    `
    divCreate.innerHTML = wall;
    //INICIALIZANDO LA BASE DE DATOS
    // llamando al boton de publicar post
    const btnPostear = divCreate.querySelector('#btn-publicar');
    btnPostear.addEventListener('click', () => {
        clickBtnPostear();
    });

    //cerrando sesion
    const btnCloseSesion = divCreate.querySelector('#btn-cerrar');
    btnCloseSesion.addEventListener('click' , () => {
        signOut()
        window.location.hash = '#/register';
    });


    return divCreate;
}

export const publicarPost = () => {
    const hall = document.querySelector('#insert-post'); // se elimina el .then()
    firebase.firestore().collection("muro").onSnapshot((querySnapshot) => { // get() es reemplazado por onSnapshot() para que muestre las actualizacion en tiempo real.
        hall.innerHTML = ''; //para que solo se agreguen los post que cuelgo (uno por uno).
        const userLogin = firebase.auth().currentUser.uid;
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().posteo}`);
            hall.innerHTML += ` 
              <textarea rows ="8" cols ="40" data-id-post="${doc.id}" disabled> ${doc.data().posteo} </textarea>
              
              ${
                doc.data().usuario === userLogin ? `<button class="btn-editar" type="button"  data-id-editar="${doc.id}"> editar </button>` : ''
              }
              ${
                doc.data().usuario === userLogin ? `<button class="btn-eliminar" type="button"  data-id-eliminar="${doc.id}"> eliminar </button>` : ''
              }
            
            ` 
        });
        //BORRAR DATOS DEL CLOUD FIRESTORE
          hall.querySelectorAll('button[data-id-eliminar]').forEach((element) => {
            element.addEventListener('click', () => {
              const idPostElim = element.dataset.idEliminar;
              console.log(idPostElim);
              deletePost(idPostElim)
            });
          });
        //EDITAR DATOS DEL POST
          hall.querySelectorAll('button[data-id-editar]').forEach((element) => {
            element.addEventListener('click', () => {
              const idPostedit = element.dataset.idEditar;
              console.log(idPostedit);
  
            hall.querySelectorAll('textarea[data-id-post]').forEach((text) => {
                const textareaIdPost = text.dataset.idPost;
                if (idPostedit === textareaIdPost) {
                  return (text.disabled = false);
                }
            });
              //cambiamos el nombre del boton  (guardar).
              const btnGuardar = element;
              btnGuardar.innerHTML = 'Guardar'
  
            btnGuardar.addEventListener('click', () => {
              
              hall.querySelectorAll('textarea[data-id-post]').forEach((text) => {
                const textareaId = text.dataset.idPost;
                if (idPostedit === textareaId) {
                  console.log(text.value);
                  btnGuardar.innerHTML = 'Editar';
                  editPost(idPostedit, text.value);
                  return text.disabled = true;
                }
             });
            });
          })
        })
      });
  };