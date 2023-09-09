import React from 'react'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import MultipleChoice from '@/components/questionForms/MultipleChoice'
import Checkboxes from '@/components/questionForms/Checkboxes'
import SelectLetter from '@/components/questionForms/SelectLetter'
import SelectPassage from '@/components/questionForms/SelectPassage'
import FillInTheBlankTransparent from '@/components/questionForms/FillInTheBlankTransparent'
import FillInTheBlankImage from '@/components/questionForms/FillInTheBlankImage'
import FillInTheBlank from '@/components/questionForms/FillInTheBlank'
import Wrapper from '@/components/questionForms/Wrapper'
import { FormsInterface } from '@/interfaces/FormsInterface'
import FieldProperties from '@/components/questionForms/FieldProperties'

interface RenderFormQuestionProps {
  questionList: FormsInterface
}

const renderFormQuestion = ({ questionList }: RenderFormQuestionProps) => {
  const renderComponent: React.ReactNode[] = []
  const listAllComponents = []

  for (const question in questionList) {
    for (const component of questionList[question as keyof FormsInterface]) {
      listAllComponents.push({
        ...component,
        type: question
      })
    }
  }

  listAllComponents.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())

  listAllComponents.map((component) => {
    switch (component.type) {
      case QuestionTypesEnum.MULTIPLE_CHOICE:
        renderComponent.push(
          <Wrapper title="Type Soal 1" id={component.id} type={component.type} key={component.id}>
            <MultipleChoice id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.CHECKBOX:
        renderComponent.push(
          <Wrapper title="Type Soal 2" id={component.id} type={component.type} key={component.id}>
            <Checkboxes id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE:
        renderComponent.push(
          <Wrapper title="Type Soal 3" id={component.id} type={component.type} key={component.id}>
            <FillInTheBlankImage id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.FILL_IN_THE_BLANK:
        renderComponent.push(
          <Wrapper title="Type Soal 4" id={component.id} type={component.type} key={component.id}>
            <FillInTheBlank id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT:
        renderComponent.push(
          <Wrapper title="Type Soal 5" id={component.id} type={component.type} key={component.id}>
            <FillInTheBlankTransparent id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.SELECT_LETTER:
        renderComponent.push(
          <Wrapper title="Type Soal 6" id={component.id} type={component.type} key={component.id}>
            <SelectLetter id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.SELECT_PASSAGE:
        renderComponent.push(
          <Wrapper title="Type Soal 7" id={component.id} type={component.type} key={component.id}>
            <SelectPassage id={component.id} />
          </Wrapper>
        )
        return
      case QuestionTypesEnum.FIELD_PROPERTIES:
        renderComponent.push(
          <Wrapper title="Field Properties" id={component.id} type={component.type} key={component.id} noDelete>
            <FieldProperties id={component.id} />
          </Wrapper>
        )
        return
    }
  })

  return renderComponent
}

export default renderFormQuestion
