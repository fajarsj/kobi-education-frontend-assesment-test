import QuestionLetter from '@/components/QuestionLetter'
import QuestionSubtitle from '@/components/typograhpy/QuestionSubtitle'
import { numberToLetter } from '@/utils/alphabetUtils'

interface CheckboxesProps {
  title: string
  checkboxes: string[]
}

const Checkboxes = ({ title, checkboxes }: CheckboxesProps) => {
  return (
    <div className="flex flex-col gap-4">
      <QuestionSubtitle title={title} />
      <ul className="flex flex-col gap-[14px]">
        {checkboxes.map((checkbox, index) => (
          <li key={checkbox}>
            <QuestionLetter character={numberToLetter(index)} title={checkbox} withCheckbox />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Checkboxes
