'use client';
import React from 'react';
import Collapsible from 'react-collapsible';
import Image from 'next/image';

const Genres = () => {
    return (
      <Collapsible 
            trigger="Step 1: Choose your favorite Genre"
            triggerClassName='bg-orange-400 text-white rounded-xl' 
            triggerOpenedClassName='text-orange-900 font-bold'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
       >
        <Image 
            src='/movieImages/1.jpg'
            alt='Movie Poster'
            width={50}
            height={50}
        />
      </Collapsible>
    );
  };
  
  export default Genres;