import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'

export interface FormsInterface {
  [QuestionTypesEnum.MULTIPLE_CHOICE]: MultipleChoiceInterface[]
  [QuestionTypesEnum.CHECKBOX]: DefaultFormInterface[]
  [QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE]: DefaultFormInterface[]
  [QuestionTypesEnum.FILL_IN_THE_BLANK]: DefaultFormInterface[]
  [QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT]: DefaultFormInterface[]
  [QuestionTypesEnum.SELECT_LETTER]: DefaultFormInterface[]
  [QuestionTypesEnum.SELECT_PASSAGE]: DefaultFormInterface[]
}

export interface DefaultFormInterface {
  id: string
  type: QuestionTypesEnum
}

export interface MultipleChoiceInterface extends DefaultFormInterface {
  description?: string
  options?: string[]
}

export type FormsTypes = DefaultFormInterface | MultipleChoiceInterface
