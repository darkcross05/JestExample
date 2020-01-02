import { sumar, multiplicar, restar, dividir } from '../maths'

describe('Cálculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1, 1)).toBe(2)
    })

    test('Multiplicación', () => {
        expect(multiplicar(2, 2)).toBe(4)
    })

    test('Restar', () => {
        expect(restar(5, 2)).toBe(3)
    })

    test('Divisor', () => {
        expect(dividir(4, 2)).toBe(2)
    })
})