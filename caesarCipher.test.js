const caesarCipher = require('./caesarCipher')

test('check cipher', () => {
    expect(caesarCipher('jdklaskdasidlA',5)).toBe('oipqfxpifxniqF')
})