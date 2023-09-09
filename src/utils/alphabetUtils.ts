export const numberToLetter = (num: number) => {
  const charCodeA = 'a'.charCodeAt(0)
  const charCodeZ = 'z'.charCodeAt(0)
  const numberOfLetters = charCodeZ - charCodeA + 1

  let label = ''

  while (num >= 0) {
    label = String.fromCharCode((num % numberOfLetters) + charCodeA) + label
    num = Math.floor(num / numberOfLetters) - 1
  }

  return label.toUpperCase()
}
