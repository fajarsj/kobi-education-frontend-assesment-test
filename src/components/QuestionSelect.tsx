'use client'

import { Label, Select } from 'flowbite-react'

interface QuestionSelectProps {
  options: string[]
  title: string
}

const QuestionSelect = ({ options, title }: QuestionSelectProps) => {
  return (
    <div className="flex gap-4 items-center" data-testid="question-select">
      <Select id="countries" className="w-[100px]">
        <option></option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value={title}
          className="text-[#505050] leading-6 text-base font-medium"
          data-testid="question-select-title"
        />
      </div>
    </div>
  )
}

export default QuestionSelect
