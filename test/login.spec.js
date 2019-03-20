const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();


global.firebase = firebasemock.MockFirebaseSdk(
// use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

import { register, signIn, signOut } from "../src/Controller-(Functions)/login.js";

describe('register', () => {
  it('DEberia poder registrarme', () => {
    return register('inmelody10@gmail.com', '123456')
    .then ((user) => {
      expect(user.email).toBe('inmelody10@gmail.com')
    })
  })
})

describe('signIn', () => {
  it('Debería poder iniciar sesion', () => {
    return signIn('inmelody11@gmail.com', '11042013')
      .then((user) => {
        expect(user.email).toBe('inmelody11@gmail.com')
      })
  });
});

describe('signOut', () => {
  it('deberia poder cerrar sesión', () => {
    return signOut()
    .then((user) => {
      expect(user).toBe(undefined)
    })
  })
})
