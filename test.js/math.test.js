const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit} = require('../src/math')

test('Should calculate total with tip', () =>{
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test("Should convert 32 F to 0 C", () => {
    const fahrenheit = fahrenheitToCelsius(32)
    expect(fahrenheit).toBe(0)
})

test("Should convert 0 C to 32 F", () => {
    const celsius = celsiusToFahrenheit(0)
    expect(celsius).toBe(32)
})