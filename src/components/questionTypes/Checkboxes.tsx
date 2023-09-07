import QuestionLetter from '@/components/QuestionLetter'
import QuestionSubtitle from '@/components/typograhpy/QuestionSubtitle'

const Checkboxes = () => {
  return (
    <div className="flex flex-col gap-4">
      <QuestionSubtitle title="Write the correct letters in boxes 19-21 on your answer sheet" />
      <ul className="flex flex-col gap-[14px]">
        <li>
          <QuestionLetter character="A" title="Germany" checkboxLabel="Germany" />
        </li>
        <li>
          <QuestionLetter character="B" title="Germany" checkboxLabel="Germany" />
        </li>
        <li>
          <QuestionLetter character="C" title="Germany" checkboxLabel="Germany" />
        </li>
        <li>
          <QuestionLetter character="D" title="Germany" checkboxLabel="Germany" />
        </li>
        <li>
          <QuestionLetter character="E" title="Germany" checkboxLabel="Germany" />
        </li>
      </ul>
    </div>
  )
}

export default Checkboxes
