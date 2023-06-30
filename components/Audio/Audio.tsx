import { useRef, useState, useEffect, SyntheticEvent } from "react"
import { BsFillPauseFill, BsFillPlayFill, BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs"
import classes from 'components/Audio/Audio.module.css'



type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  image: string
}

const Audio =(props: {isPlaying: boolean, setIsPlaying: Function, songs: Song[], trackPlaying: number, setTrackPlaying: Function})=>{
  const audioRef = useRef<HTMLAudioElement>(null)
  const [timeSongInfo, setTimeSongInfo] = useState<{currentTime: Number, duration: number}>({
    currentTime: 0,
    duration: 0
  })

  const handlePlay = (): void => {
    props.setIsPlaying(true)
    if(audioRef.current){
      audioRef.current.play();
    }
  }

  const handlePause = (): void => {
    props.setIsPlaying(false)
    if(audioRef.current){
      audioRef.current.pause();
    }
  }


  return(
    <div>
      <div className={classes.rangeInfos}>

      </div>
      <div className={classes.controls}>
        <audio
          ref={audioRef}
          src={props.songs[props.trackPlaying].file}
          className ={classes.controlsAudioPlayer}
          controls
        />
        {/* // <BsFillSkipBackwardFill size={24} onClick={() => handlePreviousOrNext('previous')} /> */}
        {props.isPlaying
          ? <BsFillPauseFill size={32} onClick={() => handlePause()} />
          : <BsFillPlayFill size={32} onClick={() => handlePlay()} /> 
        }
        // <BsFillSkipForwardFill size={24} onClick={() => handlePreviousOrNext('next')} />
      </div>
    </div>
  )
}


export default Audio;