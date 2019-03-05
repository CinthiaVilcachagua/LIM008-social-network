export const signOut = () => {
  firebase.auth().signOut()
      .then(() => {
        console.log('...saliendo');
      }) //respuesta positiva
      .catch((error) => {
        console.log(error);
      })  //respuesta negativa
};

const db = firebase.firestore();

export const createCloud = (post) => {
  db.collection("muro").add({
    posteo: post
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('post').value = ''; // para que cuando se guarde el post, se vuelva a vacio y seguir publicando.
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};

// Para Mostrar los datos y se puedan LEER
export const publicarPost = () => {
  const hall = document.getElementById('insert-post'); // se elimina el .then()
    db.collection("muro").onSnapshot((querySnapshot) => { // get() es reemplazado por onSnapshot() para que muestre las actualizacion en tiempo real.
      hall.innerHTML = ''; //para que solo se agreguen los post que cuelgo (uno por uno).
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().posteo}`);
          hall.innerHTML += ` 
            <h3> ${doc.data().posteo} </h3>
            <button type="button"  data-id-editar="${doc.id}"> editar </button>
            <button type="button"  data-id-eliminar="${doc.id}"> eliminar </button>
          `;
      });
    });
};
