const caesarCipher = require('./caesarCipher')

test('check cipher', () => {
    expect(caesarCipher('jdklaskdasidlA',5)).toBe('oipqfxpifxniqF')
})

test('stock cipher test', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})