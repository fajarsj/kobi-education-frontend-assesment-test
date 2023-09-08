import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import MultipleChoice from '@/components/questionForms/MultipleChoice'
import Checkboxes from '@/components/questionTypes/Checkboxes'
import FillInTheBlankImage from '@/components/questionTypes/FillInTheBlankImage'
import FillInTheBlank from '@/components/questionTypes/FillInTheBlank'
import FillInTheBlankTransparent from '@/components/questionTypes/FillInTheBlankTransparent'
import SelectLetter from '@/components/questionTypes/SelectLetter'
import SelectPassage from '@/components/questionTypes/SelectPassage'
import Wrapper from '@/components/questionForms/Wrapper'
import { FormsInterface, DefaultFormInterface, MultipleChoiceInterface } from '@/interfaces/FormsInterface'
import React from 'react'

interface RenderFormQuestionProps {
  questionList: FormsInterface
}

const renderFormQuestion = ({ questionList }: RenderFormQuestionProps) => {
  let renderComponent: React.ReactNode[] = []

  Object.keys(questionList).map((key) => {
    const components: React.ReactNode[] = []

    switch (key) {
      case QuestionTypesEnum.MULTIPLE_CHOICE:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 1" id={question.id} type={question.type}>
              <MultipleChoice id={question.id} />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
      case QuestionTypesEnum.CHECKBOX:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 2" id={question.id} type={question.type}>
              <Checkboxes />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
      case QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 3" id={question.id} type={question.type}>
              <FillInTheBlankImage withoutImage />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
      case QuestionTypesEnum.FILL_IN_THE_BLANK:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 4" id={question.id} type={question.type}>
              <FillInTheBlank />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
      case QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 5" id={question.id} type={question.type}>
              <FillInTheBlankTransparent />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
      case QuestionTypesEnum.SELECT_LETTER:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 6" id={question.id} type={question.type}>
              <SelectLetter />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
      case QuestionTypesEnum.SELECT_PASSAGE:
        questionList[key].forEach((question) =>
          components.push(
            <Wrapper title="Type Soal 7" id={question.id} type={question.type}>
              <SelectPassage />
            </Wrapper>
          )
        )
        renderComponent = [...renderComponent, ...components]
        return
    }
  })

  return renderComponent
}

export default renderFormQuestion
