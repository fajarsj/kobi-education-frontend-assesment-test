'use client'

import { useDrop } from 'react-dnd'
import DragHere from '@/components/DragHere'
import { ItemTypes } from '@/interfaces/ItemTypes'
import React from 'react'

interface FormAdminBodyProps {
  questionList: React.ReactNode
}

const FormAdminBody = ({ questionList }: FormAdminBodyProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.QUESTION_CARD,
    drop: () => ({ name: 'Question List' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  const isActive = canDrop && isOver
  let bgColor = '0'

  if (isActive) {
    bgColor = '300'
  } else if (canDrop) {
    bgColor = '100'
  }

  return (
    <div className={`w-full px-12 py-8 flex flex-col gap-6 bg-slate-${bgColor} transition`} ref={drop}>
      <h3 className="text-base text-[#505050] font-semibold">Section 1/1</h3>
      {questionList}
      <DragHere title={isActive ? 'Release to drop' : 'Drag and drop type soal'} />
    </div>
  )
}

export default FormAdminBody