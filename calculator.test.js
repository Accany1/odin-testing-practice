const calculator = require('./calculator')

test('addition', () => {
    expect(calculator.add(1,2)).toBe(3)
})

test('subtraction', () => {
    expect(calculator.subtract(2,1)).toBe(1)
})

test('divide', () => {
    expect(calculator.divide(10,5)).toBe(2)
})

test('multiply', () => {
    expect(calculator.multiply(10,5)).toBe(50)
})