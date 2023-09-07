import QuestionLetter from '@/components/QuestionLetter'
import QuestionSelect from '@/components/QuestionSelect'

const SelectLetter = () => {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-[14px]">
        <li>
          <QuestionLetter character="A" title="Ford" />
        </li>
        <li>
          <QuestionLetter character="B" title="Mercedes Benz" />
        </li>
        <li>
          <QuestionLetter character="C" title="Cadillac and Linvoln" />
        </li>
        <li>
          <QuestionLetter character="D" title="Mazda" />
        </li>
        <li>
          <QuestionLetter character="E" title="Jeep" />
        </li>
      </ul>
      <ol className="list-decimal ml-8 flex flex-col gap-5" start={13}>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['A', 'B', 'C', 'D', 'E']} title="Began producing the first automobiles" />
          </div>
        </li>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['A', 'B', 'C', 'D', 'E']} title="Began producing the first automobiles" />
          </div>
        </li>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['A', 'B', 'C', 'D', 'E']} title="Began producing the first automobiles" />
          </div>
        </li>
      </ol>
    </div>
  )
}

export default SelectLetter
