import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome.jsx';
import DisplayAlbum from './DisplayAlbum.jsx';
import { albumsData } from '../assets/assets';
import { useParams } from 'react-router-dom';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const { id: albumId } = useParams(); // More reliable ID extraction
  const isAlbum = location.pathname.includes("album");
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    if (displayRef.current) { // Added safety check
      if (isAlbum) {
        displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
      } else {
        displayRef.current.style.background = `#121212`;
      }
    }
  }, [isAlbum, bgColor]);

  return (
    <div 
      ref={displayRef} 
      className='w-full md:w-[100%] lg:w-[75%] m-2 px-4 md:px-6 pt-4 rounded bg-[#121212] text-white overflow-auto'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
