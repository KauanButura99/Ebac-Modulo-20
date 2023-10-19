import { expect } from '@jest/globals'
import result from './2 - funcional'

test('Teste de resultado de Fibonacci', () => {
  expect(result).toBe(8)
}) 