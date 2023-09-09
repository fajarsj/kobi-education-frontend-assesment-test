import { Label, Textarea, Button, Checkbox, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customTextarea, customButton, customCheckbox } from '@/utils/theme'
import PlusIcon from '@/components/icons/plus.svg'
import { TrashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { CheckboxesInterface } from '@/interfaces/FormsInterface'
import QuestionLetter from '@/components/QuestionLetter'
import { numberToLetter } from '@/utils/alphabetUtils'

interface CheckboxesProps {
  id: string
}

const Checkboxes = ({ id }: CheckboxesProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: CheckboxesInterface = findForms(id, QuestionTypesEnum.CHECKBOX)
  const [checkboxesList, setCheckboxesList] = useState<string[]>(defaultForm.checkboxes || [])
  const [questionValue, setQuestionValue] = useState(defaultForm.description)
  const [noValue, setNoValue] = useState(defaultForm.no)
  const [pointSetValue, setPointSetValue] = useState(defaultForm.pointSet)
  const [showToast, setShowToast] = useState(false)
  const props = { showToast, setShowToast }

  const handleAddCheckbox = () => setCheckboxesList((prevState) => [...prevState, ''])

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCheckboxList = [...checkboxesList]
    newCheckboxList[index] = event.target.value
    setCheckboxesList(newCheckboxList)
  }

  const handleDeleteCheckbox = (index: number) => {
    const newCheckboxList = [...checkboxesList]
    newCheckboxList.splice(index, 1)
    setCheckboxesList(newCheckboxList)
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        ...defaultForm,
        id,
        type: QuestionTypesEnum.CHECKBOX,
        checkboxes: checkboxesList,
        description: questionValue,
        no: noValue,
        pointSet: pointSetValue
      },
      QuestionTypesEnum.CHECKBOX
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
        <fieldset className="flex flex-col gap-6" id="radio">
          <legend className="mb-4 font-normal text-base text-[#505050] leading-6">Set Correct Answer</legend>
          {checkboxesList.length > 0 && (
            <div className="flex flex-col gap-4">
              {checkboxesList.map((checkbox, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="flex justify-between" key={index}>
                  <div className="flex items-center gap-4">
                    <QuestionLetter character={numberToLetter(index)} />
                    <Checkbox id={`checkbox-${index}`} theme={customCheckbox} />
                    <Label className="flex" htmlFor={`checkbox-${index}`}>
                      True?
                    </Label>
                    <TextInput
                      type="text"
                      color="white"
                      onChange={(event) => handleChangeCheckbox(event, index)}
                      value={checkbox}
                    />
                  </div>
                  <p
                    className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center"
                    onClick={() => handleDeleteCheckbox(index)}
                  >
                    <TrashIcon className="w-4 h-4" />
                    Delete
                  </p>
                </div>
              ))}
            </div>
          )}
          <Button color="gray" size="sm" className="block w-max" onClick={handleAddCheckbox}>
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
          disabled={checkboxesList.length === 0}
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

export default Checkboxes
