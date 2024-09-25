import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItems = ({image,name,desc,id}) => {

const{playWithId} = useContext(PlayerContext)
    return (
        <div onClick={()=>playWithId(id)} className='min-w-[180px]  mx-2 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
          <img src={image} alt="" className="rounded" />
          <p className="font-bold mt-2 mb-1">{name}</p>
          <p className="text-slate-200 text-sm">{desc}</p>
    
        </div>
      )
    }
    
    export default SongItems
