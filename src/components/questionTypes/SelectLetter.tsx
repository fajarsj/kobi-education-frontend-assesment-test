import QuestionLetter from '@/components/QuestionLetter'
import QuestionSelect from '@/components/QuestionSelect'
import { numberToLetter } from '@/utils/alphabetUtils'
import { QuestionInterface } from '@/interfaces/FormsInterface'

interface SelectLetterProps {
  options: string[]
  questions: QuestionInterface[]
}

const SelectLetter = ({ options, questions }: SelectLetterProps) => {
  const optionsValue = options?.map((_, index) => numberToLetter(index)) || []
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-[14px]">
        {options?.map((option, index) => (
          <li key={option}>
            <QuestionLetter character={numberToLetter(index)} title={option} />
          </li>
        ))}
      </ul>
      <ol className="list-decimal ml-8 flex flex-col gap-5" start={13}>
        {questions?.map((question, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${question}-${index}`}>
            <div className="ml-5">
              <QuestionSelect options={optionsValue} title={question.question} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SelectLetter
