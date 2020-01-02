describe('Comparadores comunes', () => {
    const user = {
        name: "Juan Pablo",
        lastName: "Mariaca Saldarriaga"
    }
    const user2 = {
        name: "Juan Pablo",
        lastName: "Mariaca Saldarriaga"
    }
    const user3 = {
        name: "Juan Pablo1",
        lastName: "Mariaca Saldarriaga"
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user3)
    })
})