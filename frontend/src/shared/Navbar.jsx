import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const nav_routes= [
        {
            name:"Home",
            path:"/home"
        },
        {
            name:"Gallery",
            path:""
        },
        {
            name:"Rooms",
            path:""
        },
        {
            name:"Bookings",
            path:""
        },
        {
            name:"About-Us",
            path:""
        },
        {
            name:"Contact-Us",
            path:""
        }
    ]

  return (
    <div className=' flex flex-row w-full py-4 justify-between px-10 items-center text-lg text-white fixed z-10'>
      <span>Logo</span>
      <div className='flex flex-row font-semibold'>
        {nav_routes.map((e,i)=>(<NavLink key={i} className="ml-10" to={e.path}>{e.name}</NavLink>))}
      </div>
    </div>
  )
}

export default Navbar
