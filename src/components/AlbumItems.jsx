import React from 'react';
import { useNavigate } from "react-router-dom";

const AlbumItems = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/album/${id}`)} 
      className='min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[260px] mx-2 p-2 px-3 rounded cursor-pointer overflow-hidden hover:bg-[#ffffff26] transition-all duration-300 ease-in-out'
    >
      <img src={image} alt={name} className="rounded w-full h-auto object-cover" />
      <p className="font-bold mt-2 mb-1 text-base md:text-lg lg:text-xl">{name}</p>
      <p className="text-slate-200 text-sm md:text-base">{desc}</p>
    </div>
  );
};

export default AlbumItems;
