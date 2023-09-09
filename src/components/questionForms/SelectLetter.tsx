import { Label, Textarea, Button, Select, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customTextarea, customButton } from '@/utils/theme'
import PlusIcon from '@/components/icons/plus.svg'
import { TrashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { SelectLetterInterface, SelectLetterFormInterface } from '@/interfaces/FormsInterface'
import QuestionLetter from '@/components/QuestionLetter'
import { numberToLetter } from '@/utils/alphabetUtils'

interface SelectLetterProps {
  id: string
}

const SelectLetter = ({ id }: SelectLetterProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: SelectLetterInterface = findForms(id, QuestionTypesEnum.SELECT_LETTER)
  const [formsValues, setFormValues] = useState<SelectLetterFormInterface>(
    defaultForm.forms || {
      options: [],
      questions: []
    }
  )
  const [questionValue, setQuestionValue] = useState(defaultForm.question)
  const [noValue, setNoValue] = useState(defaultForm.no)
  const [pointSetValue, setPointSetValue] = useState(defaultForm.pointSet)
  const [showToast, setShowToast] = useState(false)
  const props = { showToast, setShowToast }

  const handleAddFormField = (field: 'options' | 'questions') => {
    const newFormsValues = Object.assign({}, formsValues)
    if (field === 'options') {
      newFormsValues[field]!.push('')
    } else {
      newFormsValues['questions']!.push({
        question: '',
        answer: ''
      })
    }
    setFormValues(newFormsValues)
  }

  const handleChangeFormField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    field: 'options' | 'questions' | 'answers'
  ) => {
    const newFormsValues = Object.assign({}, formsValues)
    const targetValue = event.target.value

    if (field === 'options') {
      newFormsValues[field]![index] = event.target.value
    }

    if (field === 'questions') {
      newFormsValues['questions']![index]['question'] = targetValue
    }

    if (field === 'answers') {
      newFormsValues['questions']![index]['answer'] = targetValue
    }

    setFormValues(newFormsValues)
  }

  const handleDeleteFormField = (index: number, field: 'options' | 'questions') => {
    const newFormsValues = Object.assign({}, formsValues)
    newFormsValues[field]!.splice(index, 1)
    setFormValues(newFormsValues)
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        ...defaultForm,
        type: QuestionTypesEnum.SELECT_LETTER,
        forms: formsValues,
        question: questionValue,
        no: noValue,
        pointSet: pointSetValue
      },
      QuestionTypesEnum.SELECT_LETTER
    )

    props.setShowToast(!props.showToast)
    setTimeout(() => props.setShowToast(false), 2000)
  }

  const handlOnChangeQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => setQuestionValue(event.target.value)
  const handlOnChangeNo = (event: React.ChangeEvent<HTMLInputElement>) => setNoValue(+event.target.value)
  const handlOnChangePointSet = (event: React.ChangeEvent<HTMLInputElement>) => setPointSetValue(+event.target.value)

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-8">
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
          <div className="flex flex-col gap-6">
            <legend className="font-normal text-base text-[#505050] leading-6">Options</legend>
            {formsValues.options!.length > 0 && (
              <div className="flex flex-col gap-4">
                {formsValues.options!.map((option, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="flex justify-between" key={index}>
                    <div className="flex items-center gap-4">
                      <QuestionLetter character={numberToLetter(index)} />
                      <TextInput
                        type="text"
                        color="white"
                        onChange={(event) => handleChangeFormField(event, index, 'options')}
                        value={option}
                      />
                    </div>
                    <p
                      className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center"
                      onClick={() => handleDeleteFormField(index, 'options')}
                    >
                      <TrashIcon className="w-4 h-4" />
                      Delete
                    </p>
                  </div>
                ))}
              </div>
            )}
            <Button color="gray" size="sm" className="block w-max" onClick={() => handleAddFormField('options')}>
              <div className="flex items-center gap-2">
                <PlusIcon />
                Add Option
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <legend className="font-normal text-base text-[#505050] leading-6">Questions & Answers</legend>
            {formsValues.questions!.length > 0 && (
              <div className="flex flex-col gap-4">
                {formsValues.questions!.map((question, parentIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="flex justify-between" key={parentIndex}>
                    <div className="flex items-center gap-4">
                      <Select
                        className="w-[110px]"
                        onChange={(event) => handleChangeFormField(event, parentIndex, 'answers')}
                      >
                        <option>Answer</option>
                        {formsValues.options!.map((_, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <option key={index} value={numberToLetter(index)}>
                            {numberToLetter(index)}
                          </option>
                        ))}
                      </Select>
                      <TextInput
                        type="text"
                        color="white"
                        onChange={(event) => handleChangeFormField(event, parentIndex, 'questions')}
                        value={question.question}
                      />
                    </div>
                    <p
                      className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center"
                      onClick={() => handleDeleteFormField(parentIndex, 'questions')}
                    >
                      <TrashIcon className="w-4 h-4" />
                      Delete
                    </p>
                  </div>
                ))}
              </div>
            )}
            <Button color="gray" size="sm" className="block w-max" onClick={() => handleAddFormField('questions')}>
              <div className="flex items-center gap-2">
                <PlusIcon />
                Add Question & Answer
              </div>
            </Button>
          </div>
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
          disabled={formsValues.options?.length === 0 && formsValues.questions?.length === 0}
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

export default SelectLetter
