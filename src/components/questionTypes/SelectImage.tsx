import Image from 'next/image'
import QuestionSelect from '@/components/QuestionSelect'

const SelectImage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative max-w-[700px] h-[615px]">
        <Image src="/images/question-image.jpg" fill className="rounded-2xl" alt="Question Image" />
      </div>
      <ol className="list-decimal ml-8 flex flex-col gap-5" start={16}>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['A', 'B', 'C', 'D']} title="Began producing the first automobiles" />
          </div>
        </li>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['A', 'B', 'C', 'D']} title="Began producing the first automobiles" />
          </div>
        </li>
        <li>
          <div className="ml-5">
            <QuestionSelect options={['A', 'B', 'C', 'D']} title="Began producing the first automobiles" />
          </div>
        </li>
      </ol>
    </div>
  )
}

export default SelectImage
