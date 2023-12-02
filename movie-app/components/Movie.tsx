import React from 'react'
import Image from 'next/image'
import RateBar from './RateBar'

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
    width: 50,
    height: 50,
  },
  
}
const Movie = ({id, title} : {id: string, title: string}) => {
    const [loading, setLoading] = React.useState(true)
    return (
        <div className='block h-100px w-100px border-slate-700'>
            <div className='pt-10 px-10 pb-2 text-6xl border-slate-800'>
            <Image
                src={loading? `/loading.gif`: `/movieImages/${id}.jpg`}
                onLoad= {() => setLoading(false)}
                alt={title}
                width={50}
                height={50}
                style={loading ? styles.loading : styles.image}
            />
            </div>
            <div className='w-100 text-center'>
                {title}
            </div>
        </div>
    )
}


export default Movie