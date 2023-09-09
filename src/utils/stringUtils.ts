export const convertStringToCamelCase = (str: string) => {
  // Split the text into words using whitespace as the delimiter
  const words = str.split(' ')

  // Capitalize the first letter of each word (except the first word)
  const camelCaseWords = [
    words[0].toLowerCase(),
    ...words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  ]

  // Join the CamelCase words to create the final string
  const camelCaseText = camelCaseWords.join('')

  return camelCaseText
}

export const separateTextByDoubleAsterisk = (text: string) => {
  const regex = /(\*\*[^*]+\*\*)|([^*]+)/g
  const matches = text.match(regex)
  return matches
}
