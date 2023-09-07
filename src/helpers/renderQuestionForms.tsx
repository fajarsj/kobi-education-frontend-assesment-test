import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import MultipleChoice from '@/components/questionForms/MultipleChoice'
import Checkboxes from '@/components/questionTypes/Checkboxes'
import FillInTheBlankImage from '@/components/questionTypes/FillInTheBlankImage'
import FillInTheBlank from '@/components/questionTypes/FillInTheBlank'
import FillInTheBlankTransparent from '@/components/questionTypes/FillInTheBlankTransparent'
import SelectLetter from '@/components/questionTypes/SelectLetter'
import SelectPassage from '@/components/questionTypes/SelectPassage'
import Wrapper from '@/components/questionForms/Wrapper'
import { FormTypes } from '@/interfaces/FormTypes'

interface RenderFormQuestionProps {
  questionList: FormTypes[]
}

const renderFormQuestion = ({ questionList }: RenderFormQuestionProps) => {
  const renderComponent = questionList.map((question) => {
    switch (question.type) {
      case QuestionTypesEnum.MULTIPLE_CHOICE:
        return (
          <Wrapper title="Type Soal 1" id={question.id}>
            <MultipleChoice id={question.id} />
          </Wrapper>
        )
      case QuestionTypesEnum.CHECKBOX:
        return (
          <Wrapper title="Type Soal 2" id={question.id}>
            <Checkboxes />
          </Wrapper>
        )
      case QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE:
        return (
          <Wrapper title="Type Soal 3" id={question.id}>
            <FillInTheBlankImage withoutImage />
          </Wrapper>
        )
      case QuestionTypesEnum.FILL_IN_THE_BLANK:
        return (
          <Wrapper title="Type Soal 4" id={question.id}>
            <FillInTheBlank />
          </Wrapper>
        )
      case QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT:
        return (
          <Wrapper title="Type Soal 5" id={question.id}>
            <FillInTheBlankTransparent />
          </Wrapper>
        )
      case QuestionTypesEnum.SELECT_LETTER:
        return (
          <Wrapper title="Type Soal 6" id={question.id}>
            <SelectLetter />
          </Wrapper>
        )
      case QuestionTypesEnum.SELECT_PASSAGE:
        return (
          <Wrapper title="Type Soal 7" id={question.id}>
            <SelectPassage />
          </Wrapper>
        )
    }
  })

  return renderComponent
}

export default renderFormQuestion
