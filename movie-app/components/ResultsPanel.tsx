'use client';
import React from 'react';
import {MyCollapsible} from './MyCollapsible';
import Image from 'next/image';
import Genre from './Genre';

const ResultsPanel = () => {
    return (
      <MyCollapsible 
            trigger="Step 2: See your recommendations" 
            triggerClassName='bg-orange-400 text-white rounded-xl font-thin text-xl p-2' 
            triggerOpenedClassName='text-orange-900 font-light text-xl'
            className='bg-orange-400 rounded-xl p-2 text-orange-900'  
            openedClassName='bg-orange-100 rounded-xl p-2 text-orange-900'
       >
       <div className='flex flex-wrap justify-center font-light'>
            <Genre name="Action"/>
            <Genre name="Adventure"/>
            <Genre name="Animation"/>
            <Genre name="Children"/>
            <Genre name="Comedy"/>
            <Genre name="Crime"/>
            <Genre name="Documentary"/>
            <Genre name="Drama"/>
            <Genre name="Fantasy"/>
            <Genre name="Film-Noir"/>
            <Genre name="Horror"/>
            <Genre name="Musical"/>
            <Genre name="Mystery"/>
            <Genre name="Romance"/>
            <Genre name="Sci-Fi"/>
            <Genre name="Thriller"/>
            <Genre name="War"/>
            <Genre name="Western"/>
       </div>
      </MyCollapsible>
    );
  };
  
  export default ResultsPanel;