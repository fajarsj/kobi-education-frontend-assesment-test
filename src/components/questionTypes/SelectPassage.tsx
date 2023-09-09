import QuestionSubtitle from '@/components/typograhpy/QuestionSubtitle'
import QuestionSelect from '@/components/QuestionSelect'
import { QuestionInterface } from '@/interfaces/FormsInterface'

interface SelectPassageProps {
  questions: QuestionInterface[]
  title: string
}

const SelectPassage = ({ questions, title }: SelectPassageProps) => {
  return (
    <div className="flex flex-col gap-6">
      <QuestionSubtitle title={title} />
      <ul className="flex flex-col gap-6">
        <li>
          <div className="flex gap-4 items-center">
            <div className="w-3 h-3 bg-[#FB8818]" />
            <p className="text-[#282828] text-base font-medium leading-5">
              True = the statement matches the information in the passage.
            </p>
          </div>
        </li>
        <li>
          <div className="flex gap-4 items-center">
            <div className="w-3 h-3 bg-[#FB8818]" />
            <p className="text-[#282828] text-base font-medium leading-5">False = the statement</p>
          </div>
        </li>
        <li>
          <div className="flex gap-4 items-center">
            <div className="w-3 h-3 bg-[#FB8818]" />
            <p className="text-[#282828] text-base font-medium leading-5">
              Not Given = the information is not found in the passage.
            </p>
          </div>
        </li>
      </ul>
      <ol className="list-decimal ml-8 flex flex-col gap-5" start={1}>
        {questions?.map((question, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${question}-${index}`}>
            <div className="ml-5">
              <QuestionSelect options={['True', 'False', 'Not Given']} title={question.question} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SelectPassage
