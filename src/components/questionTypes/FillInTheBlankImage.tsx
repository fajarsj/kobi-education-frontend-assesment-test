import Image from 'next/image'
import QuestionEditable from '@/components/typograhpy/QuestionEditable'

interface FillInTheBlankImageProps {
  withoutImage?: boolean
}

const FillInTheBlankImage = ({ withoutImage }: FillInTheBlankImageProps) => {
  return (
    <div>
      {!withoutImage && (
        <div className="relative h-[450px] w-full mb-12 ml-8">
          <Image
            src="/images/modern-urban-car-street.jpg"
            fill
            className="rounded-2xl object-cover"
            alt="Modern Urban Car Street Image"
            sizes="100%"
          />
        </div>
      )}

      <ol className="flex flex-col gap-6 list-decimal ml-4" start={7}>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            Traffic lights
            <QuestionEditable />
          </p>
        </li>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            Petrol Station
            <QuestionEditable />
          </p>
        </li>
        <li className="pl-4">
          <p className="text-base font-normal leading-6 flex gap-4 text-[#292929]">
            Blue van
            <QuestionEditable />
          </p>
        </li>
      </ol>
    </div>
  )
}

export default FillInTheBlankImage
