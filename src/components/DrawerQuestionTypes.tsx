import React from 'react'

interface DrawerQuestionTypesProps {
  children: React.ReactNode
  title: string
}

const DrawerQuestionTypes = ({ children, title }: DrawerQuestionTypesProps) => {
  return (
    <div className="min-w-[300px] border-l-[10px] border-[#F3F3F3] min-h-screen px-4">
      <h4 className="text-[#505050] font-bold mb-4 pt-10">{title}</h4>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  )
}

export default DrawerQuestionTypes
