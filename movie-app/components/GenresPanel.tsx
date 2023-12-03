'use client';
import React from 'react';
import { MyCollapsible } from './MyCollapsible';
import Image from 'next/image';
import Genre from './Genre';

const GenresPanel = (
    {onGenreSelect} : 
    {onGenreSelect: (genre: string) => any}) => {
    return (
      <MyCollapsible 
            trigger="Step 1: Choose your favorite Genre" 
            triggerClassName='bg-orange-400 text-white rounded-xl font-thin text-xl p-2 cursor-pointer' 
            triggerOpenedClassName='text-orange-900 font-light text-xl cursor-pointer'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
       >
       <div className='flex flex-wrap justify-center font-light'>
            <Genre name="Action" onGenreSelect={onGenreSelect}/>
            <Genre name="Adventure" onGenreSelect={onGenreSelect}/>
            <Genre name="Animation" onGenreSelect={onGenreSelect}/>
            <Genre name="Children" onGenreSelect={onGenreSelect}/>
            <Genre name="Comedy" onGenreSelect={onGenreSelect}/>
            <Genre name="Crime" onGenreSelect={onGenreSelect}/>
            <Genre name="Documentary" onGenreSelect={onGenreSelect}/>
            <Genre name="Drama" onGenreSelect={onGenreSelect}/>
            <Genre name="Fantasy" onGenreSelect={onGenreSelect}/>
            <Genre name="Film-Noir" onGenreSelect={onGenreSelect}/>
            <Genre name="Horror" onGenreSelect={onGenreSelect}/>
            <Genre name="Musical" onGenreSelect={onGenreSelect}/>
            <Genre name="Mystery" onGenreSelect={onGenreSelect}/>
            <Genre name="Romance" onGenreSelect={onGenreSelect}/>
            <Genre name="Sci-Fi" onGenreSelect={onGenreSelect}/>
            <Genre name="Thriller" onGenreSelect={onGenreSelect}/>
            <Genre name="War" onGenreSelect={onGenreSelect}/>
            <Genre name="Western" onGenreSelect={onGenreSelect}/>
       </div>
      </MyCollapsible>
    );
  };
  
  export default GenresPanel;