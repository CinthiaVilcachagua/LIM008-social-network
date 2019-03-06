import  MockFirebase  from ' mock-cloud-firestore ' ;
import {} from '../src/Controller-(Functions)/login.js';

const fixtureData = {
  _collection_: {
    notes: {
       _doc_: {
            abc1d: {
                    post: 'completar los test'
            }
        }
    }
  }
}

global.firebase  =  new  MockFirebase (fixtureData);

describe('myFunction', () => {
    it('debería ser una función', () => {
      return myFuction('parametro').then((data) => {
      expect(data).toBe('function')
     });
    });
  });