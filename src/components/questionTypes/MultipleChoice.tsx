'use client'

import { Label, Radio } from 'flowbite-react'
import { convertStringToCamelCase } from '@/utils/stringUtils'
import { customRadio } from '@/utils/theme'

interface MultipleChoicesProps {
  title: string
  id: string
  no: number
  options: string[]
}

const MultipleChoices = ({ title, options, id, no }: MultipleChoicesProps) => {
  return (
    <fieldset className="flex gap-4" id="radio">
      <div>
        <legend className="mb-4 text-base font-medium leading-6 text-[#292929]">{no}.</legend>
      </div>
      <div>
        <legend className="mb-4 text-base font-medium leading-6 text-[#292929]">{title}</legend>
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <div className="flex items-center gap-4" key={`${option}-${id}`}>
              <Radio id={convertStringToCamelCase(`${option}-${id}`)} name={id} value={option} theme={customRadio} />
              <Label htmlFor={convertStringToCamelCase(`${option}-${id}`)}>{option}</Label>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  )
}

export default MultipleChoices
