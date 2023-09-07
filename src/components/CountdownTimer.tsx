'use client'

import { Button, Modal } from 'flowbite-react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  initialMinutes: number
}

const CountDownTimer = ({ initialMinutes }: CountdownTimerProps) => {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timerID: ReturnType<typeof setInterval>

    if (isRunning && (minutes > 0 || seconds > 0)) {
      timerID = setInterval(() => {
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1)
            setSeconds(59)
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1)
        }
      }, 1000)
    } else if (minutes === 0 && seconds === 0) {
      setIsRunning(false)
      setOpenModal('pop-up')
    }

    return () => {
      clearInterval(timerID)
    }
  }, [isRunning, minutes, seconds])

  useEffect(() => {
    setIsRunning(true)
  }, [])

  return (
    <>
      <div className="rounded-lg shadow-[0px_20px_40px_0px_rgba(102,102,102,0.16)] bg-white w-full p-6 flex flex-col items-center gap-4">
        <h4 className="font-semibold text-base leading-5 text-center">Time Left</h4>
        <hr className="w-full" />
        <div className="flex gap-8">
          <div className="text-center">
            <h5 className="mb-3 text-[#064C85] font-bold text-3xl">{minutes}</h5>
            <p>Minutes</p>
          </div>
          <h6 className="mb-3 text-[#505050] font-semibold text-3xl">:</h6>
          <div className="text-center">
            <h5 className="mb-3 text-[#064C85] font-bold text-3xl">{seconds}</h5>
            <p>Seconds</p>
          </div>
        </div>
      </div>
      <Modal show={openModal === 'pop-up'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ExclamationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Assignment is over!</h3>
            <div className="flex justify-center gap-4">
              <Button onClick={() => setOpenModal(undefined)}>Yes, I know</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CountDownTimer
