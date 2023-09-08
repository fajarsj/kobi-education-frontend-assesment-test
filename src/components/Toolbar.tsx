'use client'

import { Button } from 'flowbite-react'
import PlusIcon from '@/components/icons/plus.svg'
import { useAppStore } from '@/lib/store'
import { FormsInterface } from '@/interfaces/FormsInterface'

interface ToolbarProps {
  onClickSubmit: () => void
}

const Toolbar = ({ onClickSubmit }: ToolbarProps) => {
  const { forms } = useAppStore()

  let isSubmitDisabled = true

  for (const key in forms) {
    if (forms[key as keyof FormsInterface].length > 0) {
      isSubmitDisabled = false
    }
  }

  return (
    <div className="flex border-b items-end">
      <h1 className="text-xl font-semibold leading-7 text-[#505050] w-[300px] ml-8 mb-[6px]">Reading Test</h1>
      <ul className="flex gap-1">
        <li className="bg-gray-50 px-4 py-2 border-t border-l border-r rounded-t text-sm leading-6 text-gray-800">
          Description
        </li>
        <li className="px-4 py-2 border-t border-l border-r rounded-t text-sm leading-6 text-gray-800">Add Items</li>
        <li className="bg-gray-50 px-4 py-2 border-t border-l border-r rounded-t text-sm leading-6 text-gray-800">
          Preview
        </li>
        <li className="bg-gray-50 px-4 py-2 border-t border-l border-r rounded-t text-sm leading-6 text-gray-800">
          Explanations
        </li>
      </ul>
      <div className="flex gap-3 ml-[255px] mb-2 items-center">
        <button className="rounded text-sm py-1 px-6 text-[#292929] flex gap-[10px] border items-center border-[#064C85]">
          <PlusIcon />
          <span>Add Field</span>
        </button>
        <Button className="bg-[#064C85] rounded w-[163px] h-[40px]" onClick={onClickSubmit} disabled={isSubmitDisabled}>
          <span className="text-xs font-normal leading-5">Submit</span>
        </Button>
      </div>
    </div>
  )
}

export default Toolbar
