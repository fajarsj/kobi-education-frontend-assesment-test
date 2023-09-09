import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'

export interface FormsInterface {
  [QuestionTypesEnum.MULTIPLE_CHOICE]: MultipleChoiceInterface[]
  [QuestionTypesEnum.CHECKBOX]: CheckboxesInterface[]
  [QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE]: FillInTheBlankImageInterface[]
  [QuestionTypesEnum.FILL_IN_THE_BLANK]: FillInTheBlankInterface[]
  [QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT]: FillInTheBlankTransparentInterface[]
  [QuestionTypesEnum.SELECT_LETTER]: SelectLetterInterface[]
  [QuestionTypesEnum.SELECT_PASSAGE]: SelectPassageInterface[]
  [QuestionTypesEnum.FIELD_PROPERTIES]: FieldPropertiesInterface[]
}

export interface DefaultFormInterface {
  id: string
  type: QuestionTypesEnum
  createdAt: Date
  no: number
  pointSet: number
}

export interface MultipleChoiceInterface extends DefaultFormInterface {
  description?: string
  options?: string[]
}

export interface CheckboxesInterface extends DefaultFormInterface {
  description?: string
  checkboxes?: string[]
}

export interface SelectLetterInterface extends DefaultFormInterface {
  question?: string
  forms?: SelectLetterFormInterface
}

export interface FillInTheBlankTransparentInterface extends DefaultFormInterface {
  question?: string
  answer?: string
}

export interface FillInTheBlankImageInterface extends DefaultFormInterface {
  forms?: FillInTheBlankImageFormInterface
}

export interface FillInTheBlankInterface extends DefaultFormInterface {
  title?: string
  question?: string
}

export interface FieldPropertiesInterface extends DefaultFormInterface {
  title?: string
  question?: string
}

export interface SelectPassageInterface extends DefaultFormInterface {
  question?: string
  forms?: SelectPassageFormInterface
}

export interface SelectLetterFormInterface {
  options?: string[]
  questions?: QuestionInterface[]
}

export interface SelectPassageFormInterface {
  questions?: QuestionInterface[]
}

export interface FillInTheBlankImageFormInterface {
  questions?: QuestionInterface[]
}

export interface QuestionInterface {
  question: string
  answer: string
}

export type FormsTypes =
  | DefaultFormInterface
  | MultipleChoiceInterface
  | CheckboxesInterface
  | SelectLetterInterface
  | SelectPassageInterface
  | FillInTheBlankTransparentInterface
  | FillInTheBlankImageInterface
  | FillInTheBlankInterface
