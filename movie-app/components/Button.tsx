'use-client';
import React from 'react'

const Button = ({text, onClick} : {text: string, onClick: ()=> any}) => {
  return (
    <button 
        className='rounded-md bg-orange-200 text-center p-2 px-3 mx-1 font-thin text-sm hover:bg-orange-400 hover:text-white'
        onClick={() => onClick()}
    >{text}</button>
  )
}

export default Button