import Image from 'next/image'
import { useDrag } from 'react-dnd'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { ItemTypes } from '@/interfaces/ItemTypes'

interface QuestionCardProps {
  title: string
  imagePath: string
  type: QuestionTypesEnum
  onDrop: (questionType: QuestionTypesEnum) => void
}

interface DropResult {
  name: string
}

const QuestionCard = ({ title, imagePath, type, onDrop }: QuestionCardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.QUESTION_CARD,
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        onDrop(type)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }))

  const opacity = isDragging ? '40' : '100'

  return (
    <div
      className={`shadow-[0px_3px_12px_0px_rgba(0,0,0,0.09)] bg-[#F8F8FB] p-2 flex flex-col gap-3 rounded-[10px] opacity-${opacity}`}
      ref={drag}
    >
      <div className="h-[147px] w-full relative bg-white">
        <Image src={imagePath} fill className="object-contain" alt="Question Type Image" sizes="100%" priority />
      </div>
      <p className="text-xs font-normal leading-4 text-[#282A30]">{title}</p>
    </div>
  )
}

export default QuestionCard
