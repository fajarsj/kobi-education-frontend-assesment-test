'use client'

import { useState, useRef } from 'react'
import { Button } from 'flowbite-react'
import HeadphoneIcon from '@/components/icons/headphone.svg'
import HeadphoneWhiteIcon from '@/components/icons/headphoneWhite.svg'
import { customButton } from '@/utils/theme'

interface ButtonListenProps {
  title: string
  disabled?: boolean
}

const ButtonListen = ({ title, disabled }: ButtonListenProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isEnded, setIsEnded] = useState(false)

  const handlePlay = () => {
    audioRef.current?.play()
    setIsEnded(false)
  }

  const handleEnded = () => {
    setIsEnded(true)
  }

  return (
    <div className="flex items-center gap-[26px]">
      <h4 className="text-[#505050] text-lg font-semibold leading-6">{title}</h4>
      <Button
        color={disabled ? 'gray' : 'warning'}
        size="sm"
        theme={customButton}
        className="rounded"
        disabled={disabled || isEnded}
        onClick={handlePlay}
      >
        <div className="flex items-center gap-2">
          {disabled || isEnded ? <HeadphoneIcon /> : <HeadphoneWhiteIcon />}
          <span className={`text-[${disabled || isEnded ? '#808080' : 'white'}] text-sm font-normal`}>
            Click here for the listen
          </span>
        </div>
      </Button>
      <audio controls ref={audioRef} onPlay={handlePlay} onEnded={handleEnded} className="invisible w-0">
        <source src="/audio/people-talking.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default ButtonListen
