
'use client';
import React from 'react';
import {MyCollapsible} from './MyCollapsible';
import Image from 'next/image';
import Genre from './Genre';
import MovieRate from './MovieRate';

const PreferencesPanel = () => {
    return (
      <MyCollapsible 
            trigger="Step 1: Rate as many movies as possible" 
            triggerClassName='bg-orange-400 text-white rounded-xl font-thin text-xl p-2 cursor-pointer' 
            triggerOpenedClassName='text-orange-900 font-light text-xl cursor-pointer'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
       >
       <div className='flex flex-wrap justify-center font-light'>
            <MovieRate 
                id='1'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='2'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='3'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='4'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='1'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='2'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='3'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='4'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='1'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='2'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='3'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='4'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='1'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='2'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='3'
                title='Toy Story (1995)'
                
            />
            <MovieRate 
                id='4'
                title='Toy Story (1995)'
                
            />
       </div>
      </MyCollapsible>
    );
  };
  
  export default PreferencesPanel;