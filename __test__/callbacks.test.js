import { callbackHell } from '../calbacks'

describe('Probando Callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola Javascripters')
            done()
        }
        callbackHell(otherCallback)
    })
})
