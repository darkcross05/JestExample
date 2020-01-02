import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobaremos fruits array', () => {
    test('¿Tienes una banana?', () => {
        expect(arrayFruits()).toContain('banana')
    })
    test('No contiene un Platano', () => {
        expect(arrayFruits()).not.toContain('platano')
    })
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6)
    })
})

describe('Comprobaremos colors array', () => {
    test('Comprobar existencia del color', () => {
        expect(arrayColors()).toContain('negro')
    })
})