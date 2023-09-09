import QuestionEditable from '@/components/typograhpy/QuestionEditable'

interface FillInTheBlankTransparentProps {
  title: string
  no: number
}

const FillInTheBlankTransparent = ({ title, no }: FillInTheBlankTransparentProps) => {
  return (
    <div className="flex gap-4">
      <div>
        <p className="text-base leading-6 flex gap-4 text-[#292929] font-medium">{no}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base leading-6 flex gap-4 text-[#292929] font-medium">{title}</p>
        <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
          <span className="font-medium">answer</span>
          <QuestionEditable />
        </p>
      </div>
    </div>
  )
}

export default FillInTheBlankTransparent
