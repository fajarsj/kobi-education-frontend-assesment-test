import { Label, Button, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customButton } from '@/utils/theme'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { FieldPropertiesInterface } from '@/interfaces/FormsInterface'

interface FieldPropertiesProps {
  id: string
}

const FieldProperties = ({ id }: FieldPropertiesProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: FieldPropertiesInterface = findForms(id, QuestionTypesEnum.FIELD_PROPERTIES)
  const [formsValues, setFormValues] = useState<FieldPropertiesInterface>(
    defaultForm || {
      question: '',
      title: ''
    }
  )
  const [showToast, setShowToast] = useState(false)
  const props = { showToast, setShowToast }

  const handleChangeFormField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: 'question' | 'title'
  ) => {
    const newFormsValues = Object.assign({}, formsValues)
    newFormsValues[field] = event.target.value

    setFormValues(newFormsValues)
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        ...formsValues,
        id,
        type: QuestionTypesEnum.FIELD_PROPERTIES
      },
      QuestionTypesEnum.FIELD_PROPERTIES
    )

    props.setShowToast(!props.showToast)
    setTimeout(() => props.setShowToast(false), 2000)
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label value="Title" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput
              type="text"
              color="white"
              onChange={(event) => handleChangeFormField(event, 'title')}
              value={formsValues.title}
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label value="Question" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput
              type="text"
              color="white"
              onChange={(event) => handleChangeFormField(event, 'question')}
              value={formsValues.question}
              placeholder="Enter Question"
            />
          </div>
        </div>
        <Button
          color="info"
          theme={customButton}
          className="ml-auto mt-8 px-8"
          pill
          onClick={handleApply}
          disabled={!formsValues.question && !formsValues.title}
        >
          <span className="text-base font-bold leading-6">Apply</span>
        </Button>
      </div>
      <Toast
        className={`fixed right-0 left-0 mx-auto bottom-8 ${
          props.showToast ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <CheckIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Change was applied.</div>
        <Toast.Toggle />
      </Toast>
    </>
  )
}

export default FieldProperties
