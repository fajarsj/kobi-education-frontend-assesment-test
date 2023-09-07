import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/lib/store'

interface FormQuestionWrapperProps {
  children: React.ReactNode
  title: string
  id: string
}

const FormQuestionWrapper = ({ children, title, id }: FormQuestionWrapperProps) => {
  const { removeFromForms, forms } = useAppStore()

  const handleDelete = () => removeFromForms(id)

  return (
    <div className="border border-[#CCCCCC] py-8 px-7 bg-white flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h6 className="text-[#505050] font-semibold text-base leading-5 ">{title}</h6>
        <p className="text-gray-600 text-sm cursor-pointer flex gap-2 items-center" onClick={handleDelete}>
          <TrashIcon className="w-4 h-4" />
          Delete
        </p>
      </div>
      {children}
    </div>
  )
}

export default FormQuestionWrapper
