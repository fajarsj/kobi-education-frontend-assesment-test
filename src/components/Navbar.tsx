'use client'

import { useState } from 'react'
import { ExclamationCircleIcon, CheckIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'
import CloudIcon from '@/components/icons/cloud.svg'
import CrossIcon from '@/components/icons/cross.svg'
import { Tooltip, Button, Modal, Toast } from 'flowbite-react'
import { customTootip, customButton } from '@/utils/theme'
import { useRouter } from 'next/navigation'

interface NavbarProps {
  type: 'admin' | 'dashboard'
}

const Navbar = ({ type }: NavbarProps) => {
  const router = useRouter()
  const [openModal, setOpenModal] = useState<string | undefined>()
  const [showToast, setShowToast] = useState(false)
  const props = { openModal, setOpenModal, showToast, setShowToast }

  const handleExit = () => {
    props.setOpenModal(undefined)
    router.push('/')
  }

  const handleSave = () => {
    props.setShowToast(!props.showToast)

    setTimeout(() => props.setShowToast(false), 1500)
  }

  return (
    <>
      <div className="shadow-[0_4px_30px_0_rgba(3,2,13,0.06)]">
        <div className="container mx-auto py-4">
          {type === 'admin' && <Logo />}
          {type === 'dashboard' && (
            <div className="flex justify-between items-center">
              <h1 className="text-xl text-gray-900 leading-7 font-semibold">Practice 1 - Listening Test</h1>
              <div className="flex gap-10 items-center">
                <Tooltip content="Save Progress" placement="bottom" style="light" theme={customTootip}>
                  <CloudIcon className="cursor-pointer" onClick={handleSave} />
                </Tooltip>
                <Button
                  color="failure"
                  theme={customButton}
                  className="rounded-full px-6"
                  onClick={() => props.setOpenModal('pop-up')}
                >
                  <div className="flex items-center gap-2">
                    <CrossIcon />
                    <span className="font-bold text-base">Exit</span>
                  </div>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ExclamationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to exit from this assignment?
            </h3>
            <div className="flex justify-center gap-4">
              <Button onClick={handleExit}>Yes, I&apos;m sure</Button>
              <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Toast
        className={`fixed right-0 left-0 mx-auto bottom-8 ${
          props.showToast ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <CheckIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Progress saved successfully.</div>
        <Toast.Toggle />
      </Toast>
    </>
  )
}

export default Navbar
