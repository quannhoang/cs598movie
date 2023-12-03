'use client';
import React from 'react';
import {MyCollapsible} from './MyCollapsible';
import Movie from './Movie'
import {IMovie} from './PreferencesPanel'
import Image from 'next/image'

const ResultsPanel = ({ids, movies, loading}:{ids: number[], movies: any[], loading: boolean}) => {
    return (
      <MyCollapsible 
            trigger="Step 2: See your recommendations" 
            triggerClassName='bg-orange-400 text-white rounded-xl font-thin text-xl p-2' 
            triggerOpenedClassName='text-orange-900 font-light text-xl'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
       >
       {
        loading ? 
        <div className='w-full'>
                <Image src='/loading.gif' alt='' width={200} height={200}/>
        </div> :
        <div className='flex flex-wrap justify-center font-light'>
                {ids.map((id) => {
                    const currentMovie: IMovie = movies[id]
                    
                    return <Movie id={id} title={currentMovie.title} />
                })}
        </div>
       }
      </MyCollapsible>
    );
  };
  
  export default ResultsPanel;