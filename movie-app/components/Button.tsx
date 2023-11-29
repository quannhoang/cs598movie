'use-client';
import React from 'react'

const Button = ({text} : {text: string}) => {
  return (
    <button className='rounded-md bg-orange-200 text-center p-0.5 px-3 mx-1 font-thin text-sm'>{text}</button>
  )
}

export default Button