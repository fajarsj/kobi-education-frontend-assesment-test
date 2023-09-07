import QuestionEditable from '@/components/typograhpy/QuestionEditable'

const FillInTheBlankTransparent = () => {
  return (
    <ol className="flex flex-col gap-6 list-decimal ml-8" start={10}>
      <li className="pl-4">
        <div className="flex flex-col gap-4">
          <p className="text-base leading-6 flex gap-4 text-[#292929] font-medium">
            What end of the market are the properties?
          </p>
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            <span className="font-medium">answer</span>
            <QuestionEditable />
          </p>
        </div>
      </li>
      <li className="pl-4">
        <div className="flex flex-col gap-4">
          <p className="text-base leading-6 flex gap-4 text-[#292929] font-normal">
            What <span className="font-medium">does</span> the speaker compare buying houses with?
          </p>
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            answer
            <QuestionEditable />
          </p>
        </div>
      </li>
      <li className="pl-4">
        <div className="flex flex-col gap-4">
          <p className="text-base leading-6 flex gap-4 text-[#292929] font-normal">
            How can you ask the speaker a question
          </p>
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            answer
            <QuestionEditable />
          </p>
        </div>
      </li>
    </ol>
  )
}

export default FillInTheBlankTransparent
