'use client'

import React, { useState } from 'react'

interface ContentEditableProps {
  value: string | undefined
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>
}

const ContentEditable = ({ value, onChange }: ContentEditableProps) => {
  const [initialValue] = useState(value)

  const handleInput = (event: React.FormEvent<HTMLSpanElement>) => {
    if (onChange) {
      onChange(event.currentTarget.innerHTML)
    }
  }

  return (
    <span
      placeholder="..............................."
      contentEditable
      className={`empty:before:content-[attr(placeholder)] empty:focus:before:content-[''] before:text-[#292929]  cursor-text outline-none text-[#FB8818] min-w-[110px] max-w-[220px] ${
        value && value.length > 0 ? 'underline' : ''
      } decoration-[#292929] caret-[#292929]`}
      onInput={handleInput}
      suppressContentEditableWarning
      dangerouslySetInnerHTML={{ __html: initialValue! }}
    />
  )
}

const QuestionEditable = () => {
  const [textValue, setTextValue] = useState<string | undefined>()

  return <ContentEditable value={textValue} onChange={setTextValue} />
}
export default QuestionEditable
