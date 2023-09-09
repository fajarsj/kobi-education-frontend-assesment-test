'use client'

import QuestionEditable from '@/components/typograhpy/QuestionEditable'
import { separateTextByDoubleAsterisk } from '@/utils/stringUtils'

interface FillInTheBlankProps {
  title: string
  markdown: string
}

const FillInTheBlank = ({ title, markdown }: FillInTheBlankProps) => {
  return (
    <div className="bg-[#FAFAFA] py-14 px-20">
      <p className="mb-11 text-center text-[#505050] font-semibold leading-5">{title}</p>
      <div className="flex flex-col gap-3">
        <p className="text-base font-normal leading-6 flex gap-4 flex-wrap text-[#292929]">
          {separateTextByDoubleAsterisk(markdown)?.map((text: string) =>
            text.includes('*') ? (
              <span key={text}>
                <span>4. </span>
                <QuestionEditable />
              </span>
            ) : (
              text
            )
          )}
        </p>
      </div>
    </div>
  )
}

export default FillInTheBlank
