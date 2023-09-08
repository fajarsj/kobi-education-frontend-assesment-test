import { Label, Textarea, Radio, Button, Modal, TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { customTextarea, customButton } from '@/utils/theme'
import PlusIcon from '@/components/icons/plus.svg'
import { convertStringToCamelCase } from '@/utils/stringUtils'
import { TrashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import { MultipleChoiceInterface } from '@/interfaces/FormsInterface'
import { customRadio } from '@/utils/theme'

interface MultipleChoiceProps {
  id: string
}

const MultipleChoice = ({ id }: MultipleChoiceProps) => {
  const { updateForms, findForms } = useAppStore()
  const defaultForm: MultipleChoiceInterface = findForms(id, QuestionTypesEnum.MULTIPLE_CHOICE)
  const [optionsList, setOptionsList] = useState<string[]>(defaultForm.options || [])
  const [openModal, setOpenModal] = useState<boolean>()
  const [optionName, setOptionName] = useState('')
  const [isOptionNameDuplicated, setIsOptionNameDuplicated] = useState(false)
  const [enterQuestionValue, setEnterQuestionValue] = useState(defaultForm.description)
  const [showToast, setShowToast] = useState(false)
  const props = { openModal, setOpenModal, showToast, setShowToast }

  const handleAddOption = (optionName: string) => {
    const isOptionNameDuplicated = optionsList.indexOf(optionName) !== -1

    if (isOptionNameDuplicated) {
      setIsOptionNameDuplicated(true)
    }

    if (!isOptionNameDuplicated) {
      setOptionsList((prevState) => [...prevState, optionName])
      setOptionName('')
      props.setOpenModal(false)
    }
  }

  const handleChangeOptionName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionName(event.target.value)
    setIsOptionNameDuplicated(false)
  }

  const handleDeleteOption = (optionName: string) => {
    setOptionsList((prevState) => prevState.filter((option) => option !== optionName))
  }

  const handleApply = () => {
    updateForms(
      id,
      {
        id,
        type: QuestionTypesEnum.MULTIPLE_CHOICE,
        options: optionsList,
        description: enterQuestionValue
      },
      QuestionTypesEnum.MULTIPLE_CHOICE
    )

    props.setShowToast(!props.showToast)
    setTimeout(() => props.setShowToast(false), 2000)
  }

  const handleEnterQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setEnterQuestionValue(event.target.value)

  return (
    <>
      <div className="w-full flex flex-col ">
        <div className="mb-2 block">
          <Label value="Question Description" className="font-normal text-base text-[#505050] leading-6" />
        </div>
        <Textarea
          placeholder="Enter your question"
          required
          rows={5}
          theme={customTextarea}
          color="white"
          value={enterQuestionValue}
          onChange={handleEnterQuestion}
        />
      </div>
      <div className="w-full">
        <fieldset className="flex flex-col gap-6" id="radio">
          <legend className="mb-4 font-normal text-base text-[#505050] leading-6">Set Correct Answer</legend>
          {optionsList.length > 0 && (
            <div className="flex flex-col gap-4">
              {optionsList.map((option) => (
                <div className="flex justify-between" key={option}>
                  <div className="flex items-center gap-2">
                    <Radio id={convertStringToCamelCase(option)} value={option} name="options" theme={customRadio} />
                    <Label htmlFor={convertStringToCamelCase(option)}>{option}</Label>
                  </div>
                  <p
                    className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center"
                    onClick={() => handleDeleteOption(option)}
                  >
                    <TrashIcon className="w-4 h-4" />
                    Delete
                  </p>
                </div>
              ))}
            </div>
          )}
          <Button
            gradientDuoTone="cyanToBlue"
            outline
            size="sm"
            className="block w-max"
            onClick={() => props.setOpenModal(true)}
          >
            <div className="flex items-center gap-2">
              <PlusIcon />
              Add Option
            </div>
          </Button>
        </fieldset>
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
      <Modal show={props.openModal} onClose={() => props.setOpenModal(false)}>
        <Modal.Header>Add Option</Modal.Header>
        <Modal.Body>
          <form className="flex w-full flex-col ">
            <TextInput
              placeholder="Enter option name"
              required
              type="text"
              value={optionName}
              onChange={handleChangeOptionName}
              color={isOptionNameDuplicated ? 'failure' : 'gray'}
              helperText={
                isOptionNameDuplicated && (
                  <>
                    <span className="font-medium">Option name is already added</span>, please enter another name!
                  </>
                )
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleAddOption(optionName)}>Apply</Button>
          <Button color="gray" onClick={() => props.setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
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
