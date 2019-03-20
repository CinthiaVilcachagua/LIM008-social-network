import MockFirebase from 'mock-cloud-firestore';

const data = {
    __collection__: {
      muro: {
        __doc__: {
          item1: {
            usuario: 'abc123',
            posteo: 'ahora sé que algo maravilloso comienza tan solo con un const',
          },
          item2: {
            usuario: 'cbd234',
            posteo: 'jamas crei que cambiaria mis fines de semana de salir por fines de semana codeando... Lo amo!',
          }
        }
      }
    }
  }

global.firebase = new MockFirebase(data, { isNaiveSnapshotListenerEnabled: true });  

import { createCloud, deletePost, editPost, changePost } from '../src/Controller-(Functions)/muro.js';

 describe('createCloud', () => {
  it('Debería poder agregar una publicacion', (done) => {
    return createCloud('soy una laboratorians', 'def123')
    .then((data) => {
      const callback = (post) => {
        const result = post.find((element) => {
          return element.posteo === 'soy una laboratorians';
        })
        expect(result.posteo).toBe('soy una laboratorians');
        done()
      }
        changePost(callback)
    })
  });
}); 

describe('deletePost', () =>{
  it('deberia poder eliminar un post que yo he agregado', (done) => {
    return deletePost('item2')
    .then(() => {
      const callback = (data) => {
        const result = data.find((element) => {
          return element.id === 'item2';
        })
        expect(result).toBe(undefined)
        done()
      }
      changePost(callback)
    })
  });
});

describe('editPost', () => {
  it('deberia poder editar mi post', (done) => {
    return editPost('item1', 'hola mundo').then(() => {
      const callback = (data) => {
        const result = data.find((element) => {
          return element.id === 'item1';
        })
        expect(result.posteo).toBe('hola mundo')
        done()
      };
      changePost(callback)
    })
  })
}) 