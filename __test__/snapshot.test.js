import {
    getCharacter
} from '../snapshot'
import rick from '../rick.json'

//jest -u snapshot to update the Snapshot

describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    })

    test('Siempre fallará la instantanea', () => {
      const user = {
          createAt: new Date(),
          id: Math.floor(Math.random() * 20),
      }
      expect(user).toMatchSnapshot()
    })

    // Se espera que la data recibida coincida con la instantánea. A excepción de los campos id y createdAt, los cuales se espera que reciban cualquier Numero y Fecha respectivamente
    test('Tenemos una excepción dentro del código', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Juan Mariaca"
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
    
})