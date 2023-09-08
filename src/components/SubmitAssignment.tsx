'use client'

import { useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const SubmitAssignment = () => {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }
  const router = useRouter()

  const handleConfirm = () => {
    props.setOpenModal(undefined)
    router.push('/')
  }

  return (
    <>
      <Button
        className="px-[176px] py-4 mt-[71px] bg-[#064C85]"
        onClick={() => props.setOpenModal('pop-up')}
        data-testid="submit-assignment"
      >
        Submit
      </Button>
      <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <CheckIcon className="mx-auto mb-4 h-14 w-14 text-green-500 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Assignment successfully submitted
            </h3>
            <div className="flex justify-center gap-4">
              <Button onClick={handleConfirm}>Back to admin dashboard</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SubmitAssignment
