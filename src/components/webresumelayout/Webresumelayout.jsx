import React, { useState } from 'react'
import Webprofile from '../webprofile/Webprofile'
import { Outlet, useLocation } from 'react-router'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router';

const Webresumelayout = () => {
  const [activeLink, setActiveLink] = useState('')
  const pathLocation = useLocation()

  useEffect( ()=> {
    setActiveLink(pathLocation.pathname)
  }, [pathLocation] )
  const isActive = (path)=> {
      return activeLink === path
  }

  //------------------------ 
    const [manubar, setManubar] = useState(false)

    const manuHandler =()=>{
      setManubar(!manubar)
    }

  return (
    <div className=' relative w-full h-[92.3vh] grid grid-cols-6'>
      <div className=''>
      <div onClick={manuHandler} className='block sm:hidden absolute top-0 z-10 p-2 text-2xl text-white'>
      {
        manubar ? <IoClose/> :  <FaBars/>
      }
      </div>
      <div className='hidden sm:block h-[92.3vh]'>
        <Webprofile/>
      </div>

      {/* -------------mobile reponsive--------------- */}
        <div className={`sm:hidden flex flex-col justify-center items-center h-80 w-full space-y-5 bg-gray-800/90 absolute top-0 text-white ${manubar ? 'block': 'hidden'}`}>
          <Link to='' >Home</Link>
          <Link to='webabout' className={`flex gap-2 font-light text-gray-400 ${isActive('/resume/webresumelayout/webabout') ? 'text-green-400': ''}`}>About Me</Link>
          <Link to='webresume'>Resume</Link>
          <Link to='webportfolio'>Portfolio</Link>
          <Link to='webblog'>Blog</Link>
          <Link to='webcontact'>Contact</Link>
        </div>
      </div>
      <div className=' bg-[#2c2d2f] col-span-6 sm:col-span-5 overflow-y-auto'> 
      <Outlet/>
      </div>
    </div>
  )
}

export default Webresumelayout
