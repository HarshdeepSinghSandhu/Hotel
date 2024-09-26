import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {

  const hide_background = false ;

    const nav_routes= [
        {
            name:"HOME",
            path:"/home",
            hlight:false
        },
        {
            name:"AMENITIES",
            path:"",
            hlight:false
        },
        {
            name:"SERVICES",
            path:"/services",
            hlight:false
        },
        {
            name:"ABOUT US",
            path:"/aboutus",
            hlight:false
        },
        {
            name:"RESERVATIONS",
            path:"",
            hlight:true
        }
    ]

  return (
    <div className={` flex flex-row w-full py-4 justify-between  px-10 items-center text-[17px] ${hide_background?"text-white":"bg-white text-black"}  fixed z-10`}>
      <span>
        <img src={logo} width="100px" />
      </span>
      <div className='flex flex-row items-center text-md font-semibold font-sans'>
        {nav_routes.map((e,i)=>(<NavLink key={i} className={e.hlight?`ml-10 bg-sky-400 px-7 py-3 rounded-full text-white`:`ml-10`} to={e.path}>{e.name}</NavLink>))}
      </div>
    </div>
  )
}

export default Navbar
