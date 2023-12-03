'use client';
import React, { useEffect, useState } from 'react';
import {MyCollapsible} from './MyCollapsible';
import MovieRate from './MovieRate';
import Image from 'next/image'
import GenreSamples from './GenreSamples';

export interface IMovie {
    title: string;
    genres: string;
}
const ALL_GENRES = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Film-Noir', 'Horror', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western']
const GENRES_SAMPLES: {[key: string]: number[]} = {
    'Action': [1788, 251, 1739, 2990, 3197, 2403, 112],
    'Adventure': [1587, 2879, 1291, 3153, 3104, 1373, 1198],
    'Animation': [2102, 709, 2099, 2189, 1907, 3776, 2089],
    "Children": [2050, 1495, 595, 2083, 1029, 1547, 1010],
    'Comedy': [2381, 3597, 2350, 2914, 1588, 838, 2699],
    'Crime': [1447, 259, 858, 3860, 3744, 3521, 2580],
    'Documentary': [759, 3007, 1289, 1649, 1145, 1780, 556],
    'Drama': [2845, 1392, 1354, 1930, 2427, 3336, 1233],
    'Fantasy': [1750, 2872, 2193, 60, 2017, 2043, 3466],
    'Film-Noir': [1248, 3435, 2940, 746, 1783, 707, 3292],
    'Horror': [253, 2868, 532, 3665, 3472, 611, 2902],
    'Musical': [2394, 3818, 661, 1031, 1856, 3383, 1282],
    'Mystery': [350, 648, 2267, 3706, 1689, 2126, 1065],
    'Romance': [1043, 46, 362, 2888, 2259, 287, 1088],
    'Sci-Fi': [2094, 2643, 2377, 2528, 2525, 2613, 3190],
    'Thriller': [1852, 2186, 1407, 1076, 230, 2827, 2841],
    'War': [1210, 2816, 2028, 3585, 2662, 1507, 1263],
    'Western': [967, 3122, 2527, 3074, 432, 3508, 1209]
}
const PreferencesPanel = ({movies, loading}:{movies: any[], loading:boolean}) => {

    return (
      <MyCollapsible 
            trigger="Step 1: Rate as many movies as possible" 
            triggerClassName='bg-orange-400 text-white rounded-xl font-thin text-xl p-2 cursor-pointer' 
            triggerOpenedClassName='text-orange-900 font-light text-xl cursor-pointer'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
       >
       {loading ? 
            <div className='w-full'>
                <Image src='/loading.gif' alt='' width={200} height={200}/>
            </div> :
            <>
                {ALL_GENRES.map((genre) => { 
                    const samples: number[] = GENRES_SAMPLES[genre]
                    return <GenreSamples genre={genre} movies={movies} samples={GENRES_SAMPLES[genre]}/>
                })}
            </>

        }
      </MyCollapsible>
    );
  };


export default PreferencesPanel;

    // Fetch data during build time
export async function getStaticProps() {
    const response = await fetch('/data/movies.json');
    const data = await response.json();
    console.log(data[0])
    return {
      props: {
        movies: data, // Pass the file content as prop
      },
    };
  }
  