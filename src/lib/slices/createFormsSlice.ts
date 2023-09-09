import { StateCreator } from 'zustand'
import { FormsInterface, FormsTypes } from '@/interfaces/FormsInterface'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { v4 as uuidv4 } from 'uuid'

export interface FormsSlice {
  forms: FormsInterface
  addToForms: (form: FormsTypes, type: QuestionTypesEnum) => void
  removeFromForms: (id: string, type: QuestionTypesEnum) => void
  updateForms: (id: string, form: FormsTypes, type: QuestionTypesEnum) => void
  getSpesificForms: (type: QuestionTypesEnum) => FormsTypes[]
  findForms: (formId: string, type: QuestionTypesEnum) => FormsTypes
}

export const createFormsSlice: StateCreator<FormsSlice> = (set, get) => ({
  forms: {
    [QuestionTypesEnum.FIELD_PROPERTIES]: [
      {
        id: `${QuestionTypesEnum.FIELD_PROPERTIES}-${uuidv4()}`,
        type: QuestionTypesEnum.FIELD_PROPERTIES,
        title: '',
        question: '',
        createdAt: new Date(),
        no: 0,
        pointSet: 0
      }
    ],
    [QuestionTypesEnum.MULTIPLE_CHOICE]: [],
    [QuestionTypesEnum.CHECKBOX]: [],
    [QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE]: [],
    [QuestionTypesEnum.FILL_IN_THE_BLANK]: [],
    [QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT]: [],
    [QuestionTypesEnum.SELECT_LETTER]: [],
    [QuestionTypesEnum.SELECT_PASSAGE]: []
  },
  addToForms: (form: FormsTypes, type: QuestionTypesEnum) => {
    const { forms } = get()
    forms[type] = [...forms[type], form]

    set({ forms })
  },
  removeFromForms: (id: string, type: QuestionTypesEnum) => {
    const { forms } = get()

    forms[type] = forms[type].filter((form) => form.id !== id)
    set({ forms })
  },
  updateForms: (formId: string, form: FormsTypes, type: QuestionTypesEnum) => {
    const { forms } = get()
    const formIndex = forms[type].findIndex((form) => form.id === formId)
    forms[type][formIndex] = form

    set({ forms })
  },
  getSpesificForms: (type: QuestionTypesEnum): FormsTypes[] => {
    return get().forms[type]
  },
  findForms: (formId: string, type: QuestionTypesEnum): FormsTypes => {
    return get().forms[type].filter((form) => form.id === formId)[0]
  }
})
