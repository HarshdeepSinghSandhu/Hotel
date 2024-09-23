import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const nav_routes= [
        {
            name:"HOME",
            path:"/home"
        },
        {
            name:"AMENITIES",
            path:""
        },
        {
            name:"SERVICES",
            path:""
        },
        {
            name:"ABOUT US",
            path:""
        },
        {
            name:"RESERVATIONS",
            path:""
        }
    ]

  return (
    <div className=' flex flex-row w-full py-4 justify-between px-10 items-center text-[17px] text-white fixed z-10'>
      <span><img src="../../assets/logo.png" /></span>
      <div className='flex flex-row font-semibold'>
        {nav_routes.map((e,i)=>(<NavLink key={i} className="ml-10" to={e.path}>{e.name}</NavLink>))}
      </div>
    </div>
  )
}

export default Navbar
