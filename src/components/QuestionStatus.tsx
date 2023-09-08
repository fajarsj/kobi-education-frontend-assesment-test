import React from 'react'
import { randomNumberUtils } from '@/utils/randomNumberUtils'

const QuestionStatus = () => {
  const renderQuestionNumber = (): React.ReactNode[] => {
    const component: React.ReactNode[] = []
    for (let i = 0; i < 40; i++) {
      component.push(
        <li
          key={i}
          className={`w-7 h-7 bg-[${
            randomNumberUtils({
              min: 1,
              max: 2
            }) === 1
              ? '#E0E0E0'
              : '#FB8818'
          }] flex items-center justify-center text-sm font-normal text-white rounded-full`}
        >
          {i + 1}
        </li>
      )
    }

    return component
  }

  return (
    <div
      className="rounded-lg shadow-[0px_20px_40px_0px_rgba(102,102,102,0.16)] bg-white w-full p-6 flex flex-col gap-8"
      data-testid="question-status"
    >
      <div className="flex flex-col gap-3">
        <h5 className="text-base font-semibold text-[#292929] leading-5">Question Status</h5>
        <hr />
      </div>
      <div>
        <ul className="flex flex-wrap gap-3">{renderQuestionNumber()}</ul>
      </div>
      <div className="flex flex-col gap-[18px]">
        <h5 className="text-base font-semibold text-[#292929] leading-5">Ket</h5>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-[#FB8818] flex items-center justify-center text-sm font-normal text-white rounded-full" />
          <p className="text-sm font-normal">Answered</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-[#E0E0E0] flex items-center justify-center text-sm font-normal text-white rounded-full" />
          <p className="text-sm font-normal">Answered</p>
        </div>
      </div>
    </div>
  )
}

export default QuestionStatus
