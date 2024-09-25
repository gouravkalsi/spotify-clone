import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  return (
    <div className='h-[10%]  bg-black flex flex-col lg:flex-row justify-between items-center text-white px-4 py-2'>
      
      {/* Track Info (hidden on small screens) */}
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className='flex flex-col items-center gap-1 m-auto w-full lg:w-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
          
          {playStatus ? (
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
          )}

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-5 w-1/2 px-5   lg:w-auto">
          <p className='text-sm'>{time.CurrentTime.minute}:{time.CurrentTime.second}</p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[400px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr ref={seekBar} className='h-1 border-none bg-green-800 rounded-full' />
          </div>
          <p className='text-sm'>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Extra Controls (hidden on small screens) */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.play_icon} alt="Play" />
        <img className='w-4' src={assets.mic_icon} alt="Mic" />
        <img className='w-4' src={assets.queue_icon} alt="Queue" />
        <img className='w-4' src={assets.speaker_icon} alt="Speaker" />
        <img className='w-4' src={assets.volume_icon} alt="Volume" />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className='w-4' src={assets.mini_player_icon} alt="Mini Player" />
        <img className='w-4' src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
