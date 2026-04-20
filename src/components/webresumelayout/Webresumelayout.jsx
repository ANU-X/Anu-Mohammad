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
      <div onClick={manuHandler} className=' absolute p-4 z-10 block sm:hidden text-2xl w-full '>
        {
          manubar ? <IoClose/> : <FaBars/>
        }
      {/* -------------mobile reponsive--------------- */}
        <div className={`flex flex-col gap-5 justify-center items-center h-96 bg-gray-700/90 text-white ${manubar ? 'block': 'hidden'} `}>
          <Link to='' >Home</Link>

          <Link to='resume' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webresume') ? 'text-green-400': ''}`}>Resume</Link>

          <Link to='webblog' className={`flex gap-2 font-light ${isActive('/resume/webresumelayout/webblog') ? 'text-green-400': ''}`}>Blog</Link>
        </div>      
      </div>
      <div className='hidden sm:block h-[90vh]'>
        <Webprofile isActive = {isActive}/>
      </div>

      </div>
      <div className='col-span-6 sm:col-span-5 overflow-y-auto'> 
      <Outlet/>
      </div>
    </div>
  )
}


export default Webresumelayout
