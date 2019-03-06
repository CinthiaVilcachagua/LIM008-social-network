// importamos la funcion que vamos a testear
import  MockFirebase  from ' mock-cloud-firestore ' ;
import { signOut, createCloud, publicarPost  } from "../src/Controller-(Functions)/muro.js";
global.firebase  =  new  MockFirebase (fixtureData);

describe('myFunction', () => {
  it('debería ser una función', () => {
    return myFuction('parametro').then((data) => {
    expect(data).toBe('function')
   });
  });
});

describe('signOut', () => {
  it('debería salir del muro y mostrarme la pantalla principal', () => {
    return signOut().then((data) => {
    expect(data).toBe('function')
   });
  });
});