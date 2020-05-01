/**
 * Generate a random string of a specific length using Math.random.
 * The characters used are A-Z, a-z, 0-9, _ and -.
 * @param {number} length - Length of generated string.
 *
 * @return {string} The random string.
 */
export function randomStringGenerator(length: number): string {
  const characters = [
    ...new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i)),
    ...new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i)),
    ...new Array(10).fill(1).map((_, i) => String.fromCharCode(48 + i)),
    '_',
    '-',
  ]

  const r = new Array(length)

  for (let i = 0; i < length; i++) {
    r[i] = characters[Math.floor(Math.random() * characters.length)]
  }

  return r.join('')
}
