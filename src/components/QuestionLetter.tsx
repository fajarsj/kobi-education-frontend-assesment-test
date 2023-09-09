'use client'

import { Checkbox } from 'flowbite-react'
import { convertStringToCamelCase } from '@/utils/stringUtils'
import { customCheckbox } from '@/utils/theme'

interface QuestionLetterProps {
  character: string
  title?: string
  withCheckbox?: boolean
}

const QuestionLetter = ({ character, title, withCheckbox }: QuestionLetterProps) => {
  return (
    <div className="flex gap-[14px] items-center" data-testid="question-letter">
      <div
        className="bg-[#064C85] w-8 h-8 rounded flex items-center justify-center text-white text-base font-normal"
        data-testid="question-letter-character"
      >
        {character}
      </div>
      {withCheckbox && title && (
        <Checkbox id={`${convertStringToCamelCase(title)}-${character}}`} className="ml-4" theme={customCheckbox} />
      )}
      {title && (
        <label
          className="leading-6 text-base font-normal text-[#505050]"
          htmlFor={title && `${convertStringToCamelCase(title)}-${character}}`}
          data-testid="question-letter-title"
        >
          {title}
        </label>
      )}
    </div>
  )
}

export default QuestionLetter
