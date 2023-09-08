'use client'

import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { v4 as uuidv4 } from 'uuid'
import Navbar from '@/components/Navbar'
import DrawerMenus from '@/components/DrawerMenus'
import Toolbar from '@/components/Toolbar'
import QuestionCard from '@/components/QuestionCard'
import DrawerQuestionTypes from '@/components/DrawerQuestionTypes'
import AdminFormBody from '@/modules/AdminForm/Body'
import { QuestionTypesEnum } from '@/interfaces/QuestionTypes'
import renderQuestionForms from '@/helpers/renderQuestionForms'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'

const FormAdmin = () => {
  const router = useRouter()
  const { addToForms, forms } = useAppStore()

  const handleQuestionCardDrop = (questionType: QuestionTypesEnum) => {
    addToForms(
      {
        id: `${questionType}-${uuidv4()}`,
        type: questionType
      },
      questionType
    )
  }

  const handleSubmit = () => {
    router.push('/dashboard')
  }

  return (
    <>
      <Navbar type="admin" />
      <div className="mt-6">
        <Toolbar onClickSubmit={handleSubmit} />
      </div>
      <div className="flex">
        <DrawerMenus />
        <DndProvider backend={HTML5Backend}>
          <AdminFormBody questionList={renderQuestionForms({ questionList: forms })} />
          <DrawerQuestionTypes title="Pilih type soal">
            <QuestionCard
              title="Type Soal 1"
              imagePath="/images/question-type-1.jpg"
              type={QuestionTypesEnum.MULTIPLE_CHOICE}
              onDrop={handleQuestionCardDrop}
            />
            <QuestionCard
              title="Type Soal 2"
              imagePath="/images/question-type-2.jpg"
              type={QuestionTypesEnum.CHECKBOX}
              onDrop={handleQuestionCardDrop}
            />
            <QuestionCard
              title="Type Soal 3"
              imagePath="/images/question-type-3.jpg"
              type={QuestionTypesEnum.FILL_IN_THE_BLANK_IMAGE}
              onDrop={handleQuestionCardDrop}
            />
            <QuestionCard
              title="Type Soal 4"
              imagePath="/images/question-type-4.jpg"
              type={QuestionTypesEnum.FILL_IN_THE_BLANK}
              onDrop={handleQuestionCardDrop}
            />
            <QuestionCard
              title="Type Soal 5"
              imagePath="/images/question-type-5.jpg"
              type={QuestionTypesEnum.FILL_IN_THE_BLANK_TRANSPARENT}
              onDrop={handleQuestionCardDrop}
            />
            <QuestionCard
              title="Type Soal 6"
              imagePath="/images/question-type-6.jpg"
              type={QuestionTypesEnum.SELECT_LETTER}
              onDrop={handleQuestionCardDrop}
            />
            <QuestionCard
              title="Type Soal 7"
              imagePath="/images/question-type-7.jpg"
              type={QuestionTypesEnum.SELECT_PASSAGE}
              onDrop={handleQuestionCardDrop}
            />
          </DrawerQuestionTypes>
        </DndProvider>
      </div>
    </>
  )
}

export default FormAdmin
