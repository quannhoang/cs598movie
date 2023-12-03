import React from 'react'
import { 
    FaGun, 
    FaCar, 
    FaChildren, 
    FaFaceSmileBeam, 
    FaMasksTheater,
    FaHeart,
    FaHatCowboy,
    FaMusic } from "react-icons/fa6";
import { MdOutlineSmartToy } from "react-icons/md";
import { 
    RiKnifeBloodFill,
    RiTapeFill } from "react-icons/ri";
import { PiFilmSlate } from "react-icons/pi";
import { SiGunicorn,
         SiQuicklook } from "react-icons/si";
import { GiEvilBook,
         GiPirateCannon } from "react-icons/gi";
import { TbUfo } from "react-icons/tb";
import { BsEmojiDizzyFill } from "react-icons/bs";


const GenreHorizontal = ({name}:{name: string}) => {
    switch(name) {
        case "Action":
            return <Action/>
        case "Adventure":
            return <Adventure/>
        case "Animation":
            return <Animation/>
        case "Children":
            return <Children/>
        case "Comedy":
            return <Comedy/>
        case "Crime":
            return <Crime/>
        case "Documentary":
            return <Documentary/>
        case "Drama":
            return <Drama/>
        case "Fantasy":
            return <Fantasy/>
        case "Film-Noir":
            return <FilmNoir/>
        case "Horror":
            return <Horror/>
        case "Musical":
            return <Musical/>
        case "Mystery":
            return <Mystery/>
        case "Romance":
            return <Romance/>
        case "Sci-Fi":
            return <Scifi/>
        case "Thriller":
            return <Thriller/>
        case "War":
            return <War/>
        case "Western":
            return <Western/>
        default:
            return <Action/>
    }

}

const Action = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <FaGun/>
            </div>
            <div className='w-100 text-center'>
                Action
            </div>
        </div>
    )
}

const Adventure = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <FaCar/>
            </div>
            <div className='w-100 text-center'>
                Adventure
            </div>
        </div>
    )
}

const Animation = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <MdOutlineSmartToy/>
            </div>
            <div className='w-100 text-center'>
                Animation
            </div>
        </div>
    )
}

const Children = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <FaChildren/>
            </div>
            <div className='w-100 text-center'>
                Children&apos;s
            </div>
        </div>
    )
}

const Comedy = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <FaFaceSmileBeam/>
            </div>
            <div className='w-100 text-center'>
                Comedy
            </div>
        </div>
    )
}

const Crime = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <RiKnifeBloodFill/>
            </div>
            <div className='w-100 text-center'>
                Crime
            </div>
        </div>
    )
}

const Documentary = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <PiFilmSlate/>
            </div>
            <div className='w-100 text-center'>
                Documentary
            </div>
        </div>
    )
}

const Drama = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <FaMasksTheater/>
            </div>
            <div className='w-100 text-center'>
                Drama
            </div>
        </div>
    )
}

const Fantasy = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <SiGunicorn/>
            </div>
            <div className='w-100 text-center'>
            Fantasy
            </div>
        </div>
    )
}

const FilmNoir = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <RiTapeFill/>
            </div>
            <div className='w-100 text-center'>
            Film-Noir
            </div>
        </div>
    )
}

const Horror = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
            <GiEvilBook/>
            </div>
            <div className='w-100 text-center'>
            Horror
            </div>
        </div>
    )
}

const Musical = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
        <div className='pt-1 px-2'>
        <FaMusic/>
        </div>
        <div className='w-100 text-center'>
            Musical
        </div>
    </div>
    )
}

const Mystery = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
        <div className='pt-1 px-2'>
        <SiQuicklook/>
        </div>
        <div className='w-100 text-center'>
            Mystery
        </div>
    </div>
    )
}

const Romance = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
        <div className='pt-1 px-2'>
        <FaHeart/>
        </div>
        <div className='w-100 text-center'>
            Romance
        </div>
    </div>
    )
}

const Scifi = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
        <div className='pt-1 px-2'>
        <TbUfo/>
        </div>
        <div className='w-100 text-center'>
            Sci-Fi
        </div>
    </div>
    )
}

const Thriller = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
        <div className='pt-1 px-2'>
        <BsEmojiDizzyFill/>
        </div>
        <div className='w-100 text-center'>
            Thriller
        </div>
    </div>
    )
}

const War = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
        <div className='pt-1 px-2'>
        <GiPirateCannon/>
        </div>
        <div className='w-100 text-center'>
            War
        </div>
    </div>
    )
}

const Western = () => {
    return (
        <div className='flex h-100px w-100px text-3xl font-bold'>
            <div className='pt-1 px-2'>
        <FaHatCowboy/>
        </div>
        <div className='w-100 text-center'>
        Western
        </div>
    </div>
    )
}



export default GenreHorizontal