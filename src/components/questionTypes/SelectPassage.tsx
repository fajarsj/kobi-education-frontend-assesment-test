import QuestionSubtitle from '@/components/typograhpy/QuestionSubtitle'
import QuestionSelect from '@/components/QuestionSelect'

const SelectPassage = () => {
  return (
    <div className="flex flex-col gap-6">
      <QuestionSubtitle title="Are the following statements true, false or not given according to the information in the passage?" />
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
        <li>
          <div className="ml-5">
            <QuestionSelect options={['True', 'False', 'Not Given']} title="Began producing the first automobiles" />
          </div>
        </li>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['True', 'False', 'Not Given']} title="Began producing the first automobiles" />
          </div>
        </li>
      </ol>
    </div>
  )
}

export default SelectPassage
