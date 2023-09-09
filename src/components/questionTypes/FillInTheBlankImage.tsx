import Image from 'next/image'
import QuestionEditable from '@/components/typograhpy/QuestionEditable'
import { QuestionInterface } from '@/interfaces/FormsInterface'

interface FillInTheBlankImageProps {
  questions: QuestionInterface[]
  startFrom: number
}

const FillInTheBlankImage = ({ questions, startFrom }: FillInTheBlankImageProps) => {
  return (
    <div>
      <div className="relative h-[450px] w-full mb-12">
        <Image
          src="/images/modern-urban-car-street.jpg"
          fill
          className="rounded-2xl object-cover"
          alt="Modern Urban Car Street Image"
          sizes="100%"
        />
      </div>
      <ol className="flex flex-col gap-6 list-decimal ml-4" start={startFrom}>
        {questions.map((question) => (
          <li className="pl-4" key={question.question}>
            <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
              {question.question}
              <QuestionEditable />
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FillInTheBlankImage
