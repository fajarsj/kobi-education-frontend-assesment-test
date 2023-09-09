'use client'

import SectionDivider from '@/components/SectionDivider'
import MediaPlayer from '@/components/MediaPlayer'
import ButtonListen from '@/components/ButtonListen'
import SubmitAssignment from '@/components/SubmitAssignment'
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
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import {
  MultipleChoiceInterface,
  CheckboxesInterface,
  FieldPropertiesInterface,
  FillInTheBlankInterface,
  FillInTheBlankTransparentInterface,
  SelectLetterInterface,
  SelectPassageInterface,
  FillInTheBlankImageInterface
} from '@/interfaces/FormsInterface'

const DashboardBody = () => {
  const { getSpesificForms } = useAppStore()
  const [fieldPropertiesForms]: FieldPropertiesInterface[] = getSpesificForms(QuestionTypesEnum.FIELD_PROPERTIES)
  const multipleChoiceForms = getSpesificForms(QuestionTypesEnum.MULTIPLE_CHOICE)
  const fillInTheBlankForms = getSpesificForms(QuestionTypesEnum.FILL_IN_THE_BLANK)
  const fillInTheBlankImageForms = getSpesificForms(QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE)
  const fillInTheBlankImageTransparent = getSpesificForms(QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT)
  const selectLetterForms = getSpesificForms(QuestionTypesEnum.SELECT_LETTER)
  const selectPassageForms = getSpesificForms(QuestionTypesEnum.SELECT_PASSAGE)
  const checkboxForms = getSpesificForms(QuestionTypesEnum.CHECKBOX)

  return (
    <div className="flex flex-col items-center mb-[122px] w-full">
      <div className="flex flex-col gap-10 w-full ">
        <div className="w-[560px] flex flex-col gap-4">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">{fieldPropertiesForms.title}</h2>
          <p className="text-sm font-normal leading-5 text-gray-500">{fieldPropertiesForms.question}</p>
        </div>
        <MediaPlayer />
        <div className="flex flex-col gap-7">
          {multipleChoiceForms.length === 0 && (
            <>
              <SectionDivider title="Part 1" subtitle="Question 1" />
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 1 in the admin dashboard." />
            </>
          )}
          {multipleChoiceForms.length > 0 && (
            <>
              <SectionDivider title="Part 1" subtitle="Question 1" />
              <ButtonListen title={`Question 1-3`} disabled />
              <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
              <ul className="flex flex-col gap-6">
                {multipleChoiceForms.map((form: MultipleChoiceInterface) => (
                  <li key={form.id}>
                    <MultipleChoice
                      title={form.description || ''}
                      id={form.id}
                      options={form.options || []}
                      no={form.no}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="flex flex-col gap-7">
          {multipleChoiceForms.length === 0 && (
            <>
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 4 in the admin dashboard." />
            </>
          )}
          {fillInTheBlankForms.length > 0 && (
            <>
              <ButtonListen title="Question 4-6" />
              <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
              {fillInTheBlankForms.map((form: FillInTheBlankInterface) => (
                <div key={form.id}>
                  <FillInTheBlank title={form.title || ''} markdown={form.question || ''} startFrom={form.no} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-col gap-7">
          <SectionDivider title="Part 2" subtitle="Question 1" />
          {fillInTheBlankImageForms.length === 0 && (
            <>
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 3 in the admin dashboard." />
            </>
          )}
          {fillInTheBlankImageForms.length > 0 && (
            <>
              <ButtonListen title="Question 7-9" disabled />
              <div className="flex flex-col gap-2">
                <QuestionTitle title="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" italic />
                <QuestionTitle title="Write the correct letter, A-G next to questions 11-13" />
              </div>
              {fillInTheBlankImageForms.map((form: FillInTheBlankImageInterface) => (
                <div key={form.id}>
                  <FillInTheBlankImage questions={form.forms?.questions || []} startFrom={form.no} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-col gap-7">
          {fillInTheBlankImageTransparent.length === 0 && (
            <>
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 5 in the admin dashboard." />
            </>
          )}
          {fillInTheBlankImageTransparent.length > 0 && (
            <>
              <ButtonListen title="Question 10-12" disabled />
              <div className="flex flex-col gap-2">
                <QuestionTitle title="Answer the following questions NO MORE THAN THREE WORDS AND/OR NUMBER" italic />
              </div>
              <ol className="flex flex-col gap-6 ">
                {fillInTheBlankImageTransparent.map((form: FillInTheBlankTransparentInterface) => (
                  <li className="pl-4" key={form.id}>
                    <FillInTheBlankTransparent title={form.question || ''} no={form.no} />
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
        <div className="flex flex-col gap-7">
          {selectLetterForms.length === 0 && (
            <>
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 6 in the admin dashboard." />
            </>
          )}
          {selectLetterForms.length > 0 && (
            <>
              <ButtonListen title="Question 13-15" disabled />
              <div className="flex flex-col gap-2">
                <QuestionTitle
                  title="Look at the following descriptions (Questions 1-6) and the list automobile brands below"
                  italic
                />
                <QuestionTitle title="Match each description with the correct automobile brand A-G. Write the correct letter A-G in boxes 1-6 on your answer Brands" />
              </div>
              {selectLetterForms.map((form: SelectLetterInterface) => (
                <div key={form.id}>
                  <SelectLetter options={form.forms?.options || []} questions={form.forms?.questions || []} />
                </div>
              ))}
            </>
          )}
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
          {checkboxForms.length === 0 && (
            <>
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 2 in the admin dashboard." />
            </>
          )}
          {checkboxForms.length > 0 && (
            <>
              <ButtonListen title="Question 7-9" disabled />
              <div className="flex flex-col gap-2">
                <QuestionTitle title="Choose THREE letters, A-F" italic />
              </div>
              {checkboxForms.map((form: CheckboxesInterface) => (
                <div key={form.id}>
                  <Checkboxes checkboxes={form.checkboxes || []} title={form.description || ''} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-col gap-7">
          {selectPassageForms.length === 0 && (
            <>
              <QuestionTitle title="If this section is empty, you may have forgotten to select type soal 7 in the admin dashboard." />
            </>
          )}
          {selectPassageForms.length > 0 && (
            <>
              <ButtonListen title="Question 4-5" disabled />
              {selectPassageForms.map((form: SelectPassageInterface) => (
                <div key={form.id}>
                  <SelectPassage questions={form.forms?.questions || []} title={form.question || ''} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <SubmitAssignment />
    </div>
  )
}

export default DashboardBody
