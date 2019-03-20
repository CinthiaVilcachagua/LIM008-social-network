export const createCloud = (post,user) => {
  return firebase.firestore().collection("muro").add({
      posteo: post,
      usuario: user
    })
  };
  
  export const deletePost = (id) => { //este id tiene que ser el de cuando haga click en borrar (no olvidar hacer la confirmación)
    return firebase.firestore().collection("muro").doc(id).delete()
  };
  
  export const editPost = (idMuro,newPost) => {
  let muroRef = firebase.firestore().collection("muro").doc(idMuro);
    // Restablecer el post que publique en el muro
     return muroRef.update({
        posteo : newPost
    })
  }
  
  
  export const changePost = (callback) => {
    return firebase.firestore().collection("muro") //.where("state", "==", "CA")
      .onSnapshot((posts) => {
          const data = [];
          posts.forEach((doc) => {
              data.push({id: doc.id, ...doc.data()});
          });
        callback(data);
      });
  }
