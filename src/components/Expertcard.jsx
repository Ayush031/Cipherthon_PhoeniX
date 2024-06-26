import React, { useState } from 'react'
import master from '../assets/Master.jpg'
import masterIcon1 from '../assets/masterIcon1.svg'
import masterIcon2 from '../assets/masterIcon2.svg'


import masterIcon3 from '../assets/masterIcon3.svg'
export default function Expertcard() {
    const [viewProfile, setViewProfile] = useState(false);
    const showProfile = () => {
        setViewProfile(!viewProfile);
    }


  return (
    <>
    <div className='flex justify-center w-full gap-8  items-center relative'>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Satyansh Mittal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of studentHub</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

        <div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Satyansh Mittal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of studentHub</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

        <div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Satyansh Mittal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of studentHub</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

        <div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Satyansh Mittal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of studentHub</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

        <div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Satyansh Mittal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of studentHub</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

        <div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div>
        

    </div>

   
     
   
    </div>
    </>
  )
}
