import { convertStringToCamelCase } from '@/utils/stringUtils'

describe('Logo', () => {
  it('convert normal text to camelcase', () => {
    expect(convertStringToCamelCase('convert normal text to camelcase')).toBe('convertNormalTextToCamelcase')
  })
})
