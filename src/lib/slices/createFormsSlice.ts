import { StateCreator } from 'zustand'
import { FormTypes } from '@/interfaces/FormTypes'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'

export interface FormsSlice {
  forms: FormTypes[]
  addToForms: (form: FormTypes) => void
  removeFromForms: (id: string) => void
  updateForms: (id: string, form: FormTypes) => void
  getSpesificForms: (type: QuestionTypesEnum) => FormTypes[]
  findForms: (formId: string) => FormTypes
}

export const createFormsSlice: StateCreator<FormsSlice> = (set, get) => ({
  forms: [],
  addToForms: (form: FormTypes) => {
    const forms = get().forms
    forms.push(form)

    set({ forms })
  },
  removeFromForms: (formId: string) => {
    set({ forms: get().forms.filter((form) => form.id !== formId) })
  },
  updateForms: (formId: string, form: FormTypes) => {
    const forms = get().forms
    const formIndex = forms.findIndex((form) => form.id === formId)
    forms[formIndex] = form

    set({ forms })
  },
  getSpesificForms: (type: QuestionTypesEnum): FormTypes[] => {
    return get().forms.filter((form) => form.type === type)
  },
  findForms: (formId: string): FormTypes => {
    return get().forms.filter((form) => form.id === formId)[0]
  }
})
