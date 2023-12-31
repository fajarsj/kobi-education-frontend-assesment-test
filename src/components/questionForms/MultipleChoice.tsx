import { Label, Textarea, Radio, Button, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customTextarea, customButton, customRadio } from '@/utils/theme'
import PlusIcon from '@/components/icons/plus.svg'
import { convertStringToCamelCase } from '@/utils/stringUtils'
import { TrashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { MultipleChoiceInterface } from '@/interfaces/FormsInterface'

interface MultipleChoiceProps {
  id: string
}

const MultipleChoice = ({ id }: MultipleChoiceProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: MultipleChoiceInterface = findForms(id, QuestionTypesEnum.MULTIPLE_CHOICE)
  const [optionsList, setOptionsList] = useState<string[]>(defaultForm.options || [])
  const [questionValue, setQuestionValue] = useState(defaultForm.description)
  const [noValue, setNoValue] = useState(defaultForm.no)
  const [pointSetValue, setPointSetValue] = useState(defaultForm.pointSet)
  const [showToast, setShowToast] = useState(false)
  const props = { showToast, setShowToast }

  const handleAddOption = () => setOptionsList((prevState) => [...prevState, ''])

  const handleChangeOption = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOptionList = [...optionsList]
    newOptionList[index] = event.target.value
    setOptionsList(newOptionList)
  }

  const handleDeleteOption = (index: number) => {
    const newOptionList = [...optionsList]
    newOptionList.splice(index, 1)
    setOptionsList(newOptionList)
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        ...defaultForm,
        type: QuestionTypesEnum.MULTIPLE_CHOICE,
        options: optionsList,
        description: questionValue,
        no: noValue,
        pointSet: pointSetValue
      },
      QuestionTypesEnum.MULTIPLE_CHOICE
    )

    props.setShowToast(!props.showToast)
    setTimeout(() => props.setShowToast(false), 2000)
  }

  const handlOnChangeQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => setQuestionValue(event.target.value)
  const handlOnChangeNo = (event: React.ChangeEvent<HTMLInputElement>) => setNoValue(+event.target.value)
  const handlOnChangePointSet = (event: React.ChangeEvent<HTMLInputElement>) => setPointSetValue(+event.target.value)

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label value="No" className="font-normal text-base text-[#505050] leading-6" />
          <TextInput type="number" color="white" onChange={handlOnChangeNo} value={noValue} min="0" />
        </div>
        <div className="flex flex-col gap-2">
          <Label value="Question Description" className="font-normal text-base text-[#505050] leading-6" />
          <Textarea
            placeholder="Enter your question"
            required
            rows={5}
            theme={customTextarea}
            color="white"
            value={questionValue}
            onChange={handlOnChangeQuestion}
          />
        </div>
        <fieldset className="flex flex-col gap-4" id="radio">
          <legend className="mb-4 font-normal text-base text-[#505050] leading-6">Set Correct Answer</legend>
          {optionsList.length > 0 && (
            <div className="flex flex-col gap-4">
              {optionsList.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="flex justify-between" key={index}>
                  <div className="flex items-center gap-2">
                    <Radio id={convertStringToCamelCase(option)} value={option} name="options" theme={customRadio} />
                    <TextInput
                      type="text"
                      color="white"
                      onChange={(event) => handleChangeOption(event, index)}
                      value={option}
                    />
                  </div>
                  <p
                    className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center"
                    onClick={() => handleDeleteOption(index)}
                  >
                    <TrashIcon className="w-4 h-4" />
                    Delete
                  </p>
                </div>
              ))}
            </div>
          )}
          <Button color="gray" size="sm" className="block w-max" onClick={handleAddOption}>
            <div className="flex items-center gap-2">
              <PlusIcon />
              Add Option
            </div>
          </Button>
        </fieldset>
        <div className="flex flex-col gap-2">
          <Label value="Point Set" className="font-normal text-base text-[#505050] leading-6" />
          <TextInput type="number" color="white" onChange={handlOnChangePointSet} value={pointSetValue} min="0" />
        </div>
        <Button
          color="info"
          theme={customButton}
          className="ml-auto mt-8 px-8"
          pill
          onClick={handleApply}
          disabled={optionsList.length === 0}
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

export default MultipleChoice
