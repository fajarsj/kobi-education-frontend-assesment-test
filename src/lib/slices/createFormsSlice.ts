import { StateCreator } from 'zustand'
import { FormsInterface, FormsTypes } from '@/interfaces/FormsInterface'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'

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
    [QuestionTypesEnum.MULTIPLE_CHOICE]: [],
    [QuestionTypesEnum.CHECKBOX]: [],
    [QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE]: [],
    [QuestionTypesEnum.FILL_IN_THE_BLANK]: [],
    [QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT]: [],
    [QuestionTypesEnum.SELECT_LETTER]: [],
    [QuestionTypesEnum.SELECT_PASSAGE]: []
  },
  addToForms: (form: FormsTypes, type: QuestionTypesEnum) => {
    const forms = get().forms
    forms[type] = [...forms[type], form]

    set({ forms })
  },
  removeFromForms: (id: string, type: QuestionTypesEnum) => {
    const forms = get().forms

    forms[type] = forms[type].filter((form) => form.id !== id)
    set({ forms })
  },
  updateForms: (formId: string, form: FormsTypes, type: QuestionTypesEnum) => {
    const forms = get().forms
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
