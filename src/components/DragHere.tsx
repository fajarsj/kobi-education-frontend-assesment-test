import QuestionIcon from '@/components/icons/question.svg'

interface DragHereProps {
  title: string
}

const DragHere = ({ title }: DragHereProps) => {
  return (
    <div className="py-24 w-full flex flex-col items-center" data-testid="drag-here">
      <QuestionIcon className="mb-6" />
      <h5 className="text-[#505050] font-semibold leading-5 text-base mb-[6px]" data-testid="drag-here-title">
        {title}
      </h5>
      <p className="text-[#505050] leading-5 text-base">Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default DragHere
