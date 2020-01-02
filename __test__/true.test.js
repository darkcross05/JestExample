import { isNull, isTrue, isFalse, isUndefined, isUndifined } from '../true'

describe('Probar resultados nullos', () => {
  test('null', () => {
      expect(isNull()).toBeNull()
  })
})

describe('Probar resultados verdaderos', () => {
    test('verdadero', () => {
        expect(isTrue()).toBeTruthy()
    })
})

describe('Probar resultados falsos', () => {
    test('falso', () => {
        expect(isFalse()).toBeFalsy()
    })
})

describe('Probar resultados undefined', () => {
    test('undifined', () => {
        expect(isUndifined()).toBeUndefined()
    })
})

describe('Probar resultados no verdaderos', () => {
    test('Falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy()
    })
})