import React, { useState } from 'react'
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";
import Song from "../assets/song.mp3"
import { useRef } from 'react';
const MusicPlayer = () => {

  let audioRef = useRef(null);
  let [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };


  return (
    <div className='pt-1 w-3 h-3 hover:cursor-pointer'>
    {

      isPlaying===false ? (<MdOutlineMusicOff onClick={toggleMusic} /> ): (<MdOutlineMusicNote onClick={toggleMusic}/> )
    }
    
    <audio ref={audioRef} src={Song} loop />

    </div>
  )
}

export default MusicPlayer