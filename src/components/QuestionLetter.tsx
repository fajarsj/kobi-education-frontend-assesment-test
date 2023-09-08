'use client'

import { Checkbox } from 'flowbite-react'
import { convertStringToCamelCase } from '@/utils/stringUtils'
import { customCheckbox } from '@/utils/theme'

interface QuestionLetterProps {
  character: string
  title: string
  checkboxLabel?: string
}

const QuestionLetter = ({ character, title, checkboxLabel }: QuestionLetterProps) => {
  return (
    <div className="flex gap-[14px] items-center">
      <div className="bg-[#064C85] w-8 h-8 rounded flex items-center justify-center text-white text-base font-normal">
        {character}
      </div>
      {checkboxLabel && (
        <Checkbox id={convertStringToCamelCase(checkboxLabel)} className="ml-4" theme={customCheckbox} />
      )}
      <label
        className="leading-6 text-base font-normal text-[#505050]"
        htmlFor={checkboxLabel && convertStringToCamelCase(checkboxLabel)}
      >
        {title}
      </label>
    </div>
  )
}

export default QuestionLetter
