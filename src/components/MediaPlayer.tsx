'use client'

import { useRef, useState, useEffect } from 'react'
import { Progress } from 'flowbite-react'
import ThreeDotsIcon from '@/components/icons/threeDots.svg'
import PauseIcon from '@/components/icons/pause.svg'
import { customProgress } from '@/utils/theme'
import { PlayIcon } from '@heroicons/react/24/outline'

const MediaPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [duration, setDuration] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState<number | null>(null)

  const handlePlay = () => {
    audioRef.current?.play()
    setIsPlaying(true)
    setIsEnded(false)
  }

  const handlePause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsEnded(true)
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      // Update current time while playing
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current!.currentTime)
      })

      setDuration(audioRef.current!.duration)
    }
  }, [])

  return (
    <div className="bg-white shadow-[0px_20px_40px_0px_rgba(102,102,102,0.16)] flex gap-3 items-center w-full p-3 rounded">
      <div
        className="w-10 h-10 rounded-full border flex justify-center items-center basis-10 grow-0 shrink-0 cursor-pointer"
        onClick={() => (isPlaying ? handlePause() : handlePlay())}
      >
        {isPlaying && !isEnded ? <PauseIcon /> : <PlayIcon className="w-6 h-6" />}
      </div>
      <p className="text-base font-normal leading-6">
        00:0{currentTime !== null ? Math.floor(currentTime) : 0}/00:0{duration !== null ? Math.floor(duration) : 0}
      </p>
      <div className="w-full">
        <Progress
          progress={currentTime !== null && duration !== null ? (currentTime / duration) * 100 : 0}
          color="yellow"
          theme={customProgress}
        />
      </div>
      <ThreeDotsIcon />
      <audio
        controls
        ref={audioRef}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onLoadedMetadata={handleLoadedMetadata}
        className="invisible w-0"
      >
        <source src="/audio/people-talking.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default MediaPlayer
