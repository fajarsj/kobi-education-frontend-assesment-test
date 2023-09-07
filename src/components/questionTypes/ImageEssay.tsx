import Image from 'next/image'
import QuestionEditable from '@/components/typograhpy/QuestionEditable'

const ImageEssay = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative max-w-[600px] h-[415px] w-full ml-8">
        <Image src="/images/question-image-2.jpg" fill className="rounded-2xl" alt="Question Image" />
      </div>
      <ol className="flex flex-col gap-6 list-decimal ml-8" start={17}>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            <QuestionEditable />
          </p>
        </li>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            <QuestionEditable />
          </p>
        </li>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            <QuestionEditable />
          </p>
        </li>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            <QuestionEditable />
          </p>
        </li>
      </ol>
    </div>
  )
}

export default ImageEssay
