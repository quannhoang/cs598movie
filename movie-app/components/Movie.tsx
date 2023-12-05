'use client';
import React, { useEffect } from 'react'
import Image from 'next/image'

const styles = {
  image: {
        width: 100,
        height: 135,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 20,
  },
  loading: {
    color: 'orange',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 20,
    width: 100,
    height: 135,
  },
  
}
const Movie = ({id, title} : {id: number, title: string}) => {
    const [loading, setLoading] = React.useState(true)
    const [currentImage, setCurrentImage] = React.useState(`/movieImages/${id}.jpg`)
    return (
        <div className='block h-100px w-100'>
            <div className='pt-10 px-10 pb-2 text-6xl'>
            <Image
                src={loading? `/loading.gif`: currentImage}
                onLoad= {() => setLoading(false)}
                alt={title}
                width={50}
                height={50}
                style={loading ? styles.loading : styles.image}
                onErrorCapture={() => setCurrentImage('/ImgNotFound.jpg')}
            />
            </div>
            <div className='w-40 text-center text-sm ml-3 p-2 break-normal'>
                {title}
            </div>
        </div>
    )
}


export default Movie