'use client';
import React from 'react';
import {MyCollapsible} from './MyCollapsible';
import Movie from './Movie'
import {IMovie} from './PreferencesPanel'
import Image from 'next/image'

const ResultsPanel = (
    {
        ids, 
        movies, 
        resultLoaded,
        resultLoading,
        resultFailed,
    }:
    {
        ids: number[], 
        movies: any[],
        resultLoading: boolean,
        resultLoaded: boolean,
        resultFailed: boolean,
    }) => {
        const moviesList = ids.map((id) => {
            const currentMovie: IMovie = movies[id]
            if (currentMovie) { 
                return <Movie key={id} id={id} title={currentMovie.title} />
            } else {
                return <Movie key={id} id={0} title='Movie not found' />
            }   
        })
    return (
      <MyCollapsible 
            trigger="Step 2: See your recommendations" 
            triggerClassName='bg-orange-400 text-white rounded-xl font-thin text-xl p-2' 
            triggerOpenedClassName='text-orange-900 font-light text-xl h-500'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
            open={resultLoading || resultLoaded || resultFailed}
       >

        {
            resultFailed &&
            <div className='w-full text-center text-xl font-bold p-10'>
                    Something went wrong, please try again
            </div>
        }
        {
            (!resultFailed && !resultLoading && !resultLoaded) &&
            <div className='w-full text-center text-xl font-bold p-10'>
                    Please complete Step 1 first to see your recommendations
            </div> 
        }
        {
            (!resultFailed && resultLoading && !resultLoaded) &&
            <div className='w-full align-middle text-xl font-bold p-10'>
                    <Image src='/loading.gif' alt='' width={100} height={100}/>
            </div> 
        }
        {
            !resultFailed && resultLoaded &&
            <div className='flex flex-wrap justify-center font-light'>
                    {moviesList}
            </div>
        }
      </MyCollapsible>
    );
  };
  
  export default ResultsPanel;