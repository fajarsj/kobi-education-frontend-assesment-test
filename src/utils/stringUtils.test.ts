import { convertStringToCamelCase } from '@/utils/stringUtils'

describe('Logo', () => {
  it('it convert normal text to camelcase', () => {
    expect(convertStringToCamelCase('convert normal text to camelcase')).toBe('convertNormalTextToCamelcase')
  })
})
