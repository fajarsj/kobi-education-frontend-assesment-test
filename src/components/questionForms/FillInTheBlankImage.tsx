import { Label, Button, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customButton } from '@/utils/theme'
import PlusIcon from '@/components/icons/plus.svg'
import { TrashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { FillInTheBlankImageInterface, FillInTheBlankImageFormInterface } from '@/interfaces/FormsInterface'

interface FillInTheBlankImageProps {
  id: string
}

const FillInTheBlankImage = ({ id }: FillInTheBlankImageProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: FillInTheBlankImageInterface = findForms(id, QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE)
  const [formsValues, setFormValues] = useState<FillInTheBlankImageFormInterface>(
    defaultForm.forms || {
      questions: []
    }
  )
  const [noValue, setNoValue] = useState(defaultForm.no)
  const [pointSetValue, setPointSetValue] = useState(defaultForm.pointSet)
  const [showToast, setShowToast] = useState(false)
  const props = { showToast, setShowToast }

  const handleAddFormField = () => {
    const newFormsValues = Object.assign({}, formsValues)
    newFormsValues['questions']!.push({
      question: '',
      answer: ''
    })
    setFormValues(newFormsValues)
  }

  const handleChangeFormField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    field: 'question' | 'answer'
  ) => {
    const newFormsValues = Object.assign({}, formsValues)
    const targetValue = event.target.value

    if (field === 'question') {
      newFormsValues['questions']![index]['question'] = targetValue
    }

    if (field === 'answer') {
      newFormsValues['questions']![index]['answer'] = targetValue
    }

    setFormValues(newFormsValues)
  }

  const handleDeleteFormField = (index: number) => {
    const newFormsValues = Object.assign({}, formsValues)
    newFormsValues.questions!.splice(index, 1)
    setFormValues(newFormsValues)
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        ...defaultForm,
        id,
        type: QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE,
        forms: formsValues,
        no: noValue,
        pointSet: pointSetValue
      },
      QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE
    )

    props.setShowToast(!props.showToast)
    setTimeout(() => props.setShowToast(false), 2000)
  }

  const handlOnChangeNo = (event: React.ChangeEvent<HTMLInputElement>) => setNoValue(+event.target.value)
  const handlOnChangePointSet = (event: React.ChangeEvent<HTMLInputElement>) => setPointSetValue(+event.target.value)

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label value="No" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput type="number" color="white" onChange={handlOnChangeNo} value={noValue} min="0" />
          </div>
          <Label value="Add Question" className="font-normal text-base text-[#505050] leading-6" />
          {formsValues.questions!.map((question, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="flex items-center gap-2" key={`${question}-${index}`}>
              <TextInput
                type="text"
                color="white"
                value={question.question}
                onChange={(event) => handleChangeFormField(event, index, 'question')}
                placeholder="Question"
                className="w-full"
              />

              <TextInput
                type="text"
                color="white"
                onChange={(event) => handleChangeFormField(event, index, 'answer')}
                value={question.answer}
                placeholder="Answer"
                className="w-full"
              />
              <p
                className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center"
                onClick={() => handleDeleteFormField(index)}
              >
                <TrashIcon className="w-4 h-4" />
                Delete
              </p>
            </div>
          ))}
          <Button color="gray" size="sm" className="block w-max" onClick={() => handleAddFormField()}>
            <div className="flex items-center gap-2">
              <PlusIcon />
              Add Question & Answer
            </div>
          </Button>
          <div className="flex flex-col gap-2">
            <Label value="Point Set" className="font-normal text-base text-[#505050] leading-6" />
            <TextInput type="number" color="white" onChange={handlOnChangePointSet} value={pointSetValue} min="0" />
          </div>
        </div>
        <Button
          color="info"
          theme={customButton}
          className="ml-auto mt-8 px-8"
          pill
          onClick={handleApply}
          disabled={formsValues.questions?.length === 0}
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

export default FillInTheBlankImage
