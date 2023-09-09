import { Label, Textarea, Button, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customTextarea, customButton } from '@/utils/theme'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { FillInTheBlankTransparentInterface } from '@/interfaces/FormsInterface'

interface FillInTheBlankTransparentProps {
  id: string
}

const FillInTheBlankTransparent = ({ id }: FillInTheBlankTransparentProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: FillInTheBlankTransparentInterface = findForms(id, QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT)
  const [formsValues, setFormValues] = useState<FillInTheBlankTransparentInterface>(
    defaultForm || {
      question: '',
      answer: ''
    }
  )
  const [showToast, setShowToast] = useState(false)
  const props = { showToast, setShowToast }

  const handleChangeFormField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: 'question' | 'answer' | 'no' | 'pointSet'
  ) => {
    const newFormsValues = Object.assign({}, formsValues)
    const targetValue = event.target.value

    if (field === 'question' || field === 'answer') {
      newFormsValues[field] = targetValue
    }

    if (field === 'no' || field === 'pointSet') {
      newFormsValues[field] = +targetValue
    }

    setFormValues(newFormsValues)
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        ...formsValues,
        id,
        type: QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT
      },
      QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT
    )

    props.setShowToast(!props.showToast)
    setTimeout(() => props.setShowToast(false), 2000)
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label value="No" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput
              type="number"
              color="white"
              onChange={(event) => handleChangeFormField(event, 'no')}
              value={formsValues.no}
              min="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label value="Question" className="font-normal text-base text-[#505050] leading-6" />
            <Textarea
              required
              rows={3}
              theme={customTextarea}
              color="white"
              value={formsValues.question}
              onChange={(event) => handleChangeFormField(event, 'question')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label value="Answer" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput
              type="text"
              color="white"
              onChange={(event) => handleChangeFormField(event, 'answer')}
              value={formsValues.answer}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label value="Point Set" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput
              type="number"
              color="white"
              onChange={(event) => handleChangeFormField(event, 'pointSet')}
              value={formsValues.pointSet}
              min="0"
            />
          </div>
        </div>
        <Button
          color="info"
          theme={customButton}
          className="ml-auto mt-8 px-8"
          pill
          onClick={handleApply}
          disabled={!formsValues.question && !formsValues.answer}
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

export default FillInTheBlankTransparent
