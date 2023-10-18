import { expect } from '@jest/globals'
const fibonacci = require('./1 - funcional')

test('Teste de resultado de Fibonacci', () => {
  expect(fibonacci(1, 2)).toBe(5)
})