import { randomStringGenerator } from './utils'

test('randomStringGenerator(5) returns random string of length 5', () => {
  expect(randomStringGenerator(5).length).toBe(5)
})
