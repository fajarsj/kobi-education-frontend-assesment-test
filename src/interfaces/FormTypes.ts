import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'

export interface FormTypes {
  id: string
  type: QuestionTypesEnum
  description?: string
  options?: string[]
}
