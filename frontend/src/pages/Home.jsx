import React from 'react'
import '../components/Home/home.css'

const Home = () => {
  return (
    <div className='w-full h-screen hero relative flex flex-col justify-center items-center '>
        <div className=' absolute bg-black w-full h-screen opacity-70'></div>
        <div className='flex flex-col w-[70%] items-center text-center justify-center z-10'>
            <h1 className='text-[50px] text-white font-bold mb-5 '>Welcome to Your Perfect Getaway</h1>
            {/* <h2 className='text-zinc-300'>Discover our exquisite accommodations, world-class amenities, and personalized service that make every stay unforgettable.</h2> */}
            <button className='flex bg-white text-black text-xl px-3 justify-center items-center py-3 rounded-full font-semibold'>Book now</button>
        </div>
    </div>
  )
}

export default Home
