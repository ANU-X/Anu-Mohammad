import { useState, useEffect } from 'react'
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
    <div className=' relative w-full h-[90vh] grid grid-cols-6'>
      <div className=''>
      <div onClick={manuHandler} className='block sm:hidden absolute top-0 z-10 p-2 text-2xl text-white'>
      {
        manubar ? <IoClose/> :  <FaBars/>
      }
      </div>
      <div className='hidden sm:block h-[90vh]'>
        <Webprofile isActive = {isActive}/>
      </div>

      {/* -------------mobile reponsive--------------- */}
        <div className={`sm:hidden flex flex-col justify-center items-center h-80 w-full space-y-5 bg-gray-800/90 absolute top-0 text-white ${manubar ? 'block': 'hidden'}`}>
          <Link to='' >Home</Link>
          <Link to='webabout' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webabout') ? 'text-green-400': ''}`}>About Me</Link>
          <Link to='webresume' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webresume') ? 'text-green-400': ''}`}>Resume</Link>
          <Link to='webportfolio' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webportfolio') ? 'text-green-400': ''}`}>Portfolio</Link>
          <Link to='webblog' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webblog') ? 'text-green-400': ''}`}>Blog</Link>
          <Link to='webcontact' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webcontact') ? 'text-green-400': ''}`}>Contact</Link>
        </div>
      </div>
      <div className='col-span-6 sm:col-span-5 overflow-y-auto'> 
      <Outlet/>
      </div>
    </div>
  )
}


export default Webresumelayout
