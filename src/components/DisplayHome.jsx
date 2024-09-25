import React from 'react';
import NavBar from './NavBar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItems from './AlbumItems';
import SongItems from './SongItems';

const DisplayHome = () => {
    return (
        <>
            <NavBar />
            <div className='mb-4 px-4 md:px-8'>
                <h1 className='my-5 font-bold text-2xl md:text-3xl'>Featured Charts</h1>
                <div className="flex overflow-x-auto space-x-4">
                    {albumsData.map((item, index) => (
                        <AlbumItems 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            id={item.id} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </div>
            <div className='mb-4 px-4 md:px-8'>
                <h1 className='my-5 font-bold text-2xl md:text-3xl'>Today's Hits</h1>
                <div className="flex overflow-x-auto space-x-4">
                    {songsData.map((item, index) => (
                        <SongItems 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            id={item.id} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
