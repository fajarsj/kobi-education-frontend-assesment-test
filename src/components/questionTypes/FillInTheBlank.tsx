'use client'

import QuestionEditable from '@/components/typograhpy/QuestionEditable'

const FillInTheBlank = () => {
  return (
    <div className="bg-[#FAFAFA] py-14 px-20">
      <p className="mb-11 text-center text-[#505050] font-semibold leading-5">Travel Save</p>
      <div className="flex flex-col gap-3">
        <p className="text-base leading-6 font-medium text-[#292929]">Department : Motor insurance</p>
        <p className="text-base font-normal leading-6 text-[#292929]">Client details :</p>
        <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
          Name : Elisabeth: <span>4. </span>
          <QuestionEditable />
        </p>
        <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">Date of birth : 8.10.1975</p>
        <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
          Address : <span className="ml-4">5. </span>
          <QuestionEditable />
          <span>(street) Callington (town)</span>
        </p>
        <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
          Policy number : <span>6. </span>
          <QuestionEditable />
        </p>
      </div>
    </div>
  )
}

export default FillInTheBlank
