'use client'

import SectionDivider from '@/components/SectionDivider'
import MediaPlayer from '@/components/MediaPlayer'
import ButtonListen from '@/components/ButtonListen'
import MultipleChoice from '@/components/questionTypes/MultipleChoice'
import QuestionTitle from '@/components/typograhpy/QuestionTitle'
import FillInTheBlank from '@/components/questionTypes/FillInTheBlank'
import FillInTheBlankImage from '@/components/questionTypes/FillInTheBlankImage'
import FillInTheBlankTransparent from '@/components/questionTypes/FillInTheBlankTransparent'
import SelectLetter from '@/components/questionTypes/SelectLetter'
import SelectImage from '@/components/questionTypes/SelectImage'
import ImageEssay from '@/components/questionTypes/ImageEssay'
import FillInTheBlankTable from '@/components/questionTypes/FillInTheBlankTable'
import Checkboxes from '@/components/questionTypes/Checkboxes'
import SelectPassage from '@/components/questionTypes/SelectPassage'
import { Button } from 'flowbite-react'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'

const DashboardBody = () => {
  const { getSpesificForms } = useAppStore()

  return (
    <div className="flex flex-col items-center mb-[122px] w-full">
      <div className="flex flex-col gap-10 w-full ">
        <div className="w-[560px] flex flex-col gap-4">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">Listening Tip</h2>
          <p className="text-sm font-normal leading-5 text-gray-500">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>
        <MediaPlayer />
        <div className="flex flex-col gap-7">
          <SectionDivider title="Part 1" subtitle="Question 1" />
          <ButtonListen title="Question 1-3" disabled />
          <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
          <ul className="list-decimal ml-4 flex flex-col gap-6">
            {getSpesificForms(QuestionTypesEnum.MULTIPLE_CHOICE).map((form) => (
              <li className="pl-4" key={form.id}>
                <MultipleChoice title={form.description || ''} id={form.id} options={form.options || []} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 4-6" />
          <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
          <FillInTheBlank />
        </div>
        <div className="flex flex-col gap-7">
          <SectionDivider title="Part 2" subtitle="Question 1" />
          <ButtonListen title="Question 7-9" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
            <QuestionTitle title="Write the correct letter, A-G next to questions 11-13" />
          </div>
          <FillInTheBlankImage />
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 10-12" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle title="Answer the following questions NO MORE THAN THREE WORDS AND/OR NUMBER" italic />
          </div>
          <FillInTheBlankTransparent />
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 13-15" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle
              title="Look at the following descriptions (Questions 1-6) and the list automobile brands below"
              italic
            />
            <QuestionTitle title="Match each description with the correct automobile brand A-G. Write the correct letter A-G in boxes 1-6 on your answer Brands" />
          </div>
          <SelectLetter />
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 16-19" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
            <QuestionTitle title="Write the correct letter, A-G next to questions 11-13" />
          </div>
          <SelectImage />
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 17-20" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle title="Label the diagram below" italic />
            <QuestionTitle title="Write NO MORE THAN TWO WORDS for each answer" />
          </div>
          <ImageEssay />
        </div>
        <div className="flex flex-col gap-7">
          <SectionDivider title="Part 3" subtitle="Question 1" />
          <ButtonListen title="Question 7-9" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
            <QuestionTitle title="Write the correct letter, A-G next to questions 11-13" />
          </div>
          <FillInTheBlankTable />
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 7-9" disabled />
          <div className="flex flex-col gap-2">
            <QuestionTitle title="Choose THREE letters, A-F" italic />
          </div>
          <Checkboxes />
        </div>
        <div className="flex flex-col gap-7">
          <ButtonListen title="Question 4-5" disabled />
          <SelectPassage />
        </div>
      </div>
      <Button className="px-[176px] py-4 mt-[71px] bg-[#064C85]">Submit</Button>
    </div>
  )
}

export default DashboardBody
