import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import NavBar from './NavBar';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <div className='h-full flex flex-col'>
      <NavBar />
      <div className='mt-10  flex gap-8 flex-col md:w-full md:flex-row md:items-end px-4 md:px-8  '>
        <img src={albumData.image} alt="" className="w-36 md:w-48 rounded sm:min-w-24 " />
        <div className="flex flex-col">
          <p className=' hidden sm:block'>Playlist</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 lg:text-6xl'>{albumData.name}</h2>
          <h4 className='text-sm md:text-base hidden sm:block'>{albumData.desc}</h4>
          <p className='mt-2 hidden flex-wrap space-x-3   sm:flex '>
            <img className='inline-block w-5 md:w-6' src={assets.spotify_logo} alt="" />
            <b className='text-sm md:text-base'>spotify</b>
            <p className='flex items-center gap-2 text-sm'>
              <div className='w-1.5 mt-[1px] h-1.5 rounded-full bg-white'></div>1,234.544 likes
            </p>
            <b className='flex items-center gap-2 text-sm'>
              <div className='w-1.5 mt-[1px] h-1.5 rounded-full bg-white'></div>50 songs,
            </b>
            <p className='text-sm'>about 2 hr 30 min</p>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 pr-2 text-[#a7a7a7] text-xs md:text-sm lg:text-base">
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
      </div>
      <hr />

      <div className='overflow-y-auto'>
        {songsData.map((item, index) => (
          <div
            onClick={() => playWithId(item.id)}
            key={index}
            className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer text-xs md:text-sm lg:text-base'
          >
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img className='w-8 md:w-10 mr-5 inline' src={item.image} alt="" />
              {item.name}
            </p>
            <p className='text-[13px] md:text-[15px]'>{albumData.name}</p>
            <p className='hidden sm:block text-[13px] md:text-[15px]'>5 days ago</p>
            <p className='text-[13px] md:text-[15px] text-center'>{item.duration}</p>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default DisplayAlbum;
