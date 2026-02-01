import { Link, useLocation } from "react-router";
import logo_1 from '../../assets/5c87f8-bc94f5-3bd595.png'
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
  const [activeLink, setActiveLink] = useState('')
  const [manubar, setManubar] = useState(true)

  const PathLocatio = useLocation()

  useEffect( ()=>{
    setActiveLink(PathLocatio.pathname)
  }, [PathLocatio])

      const isActive = (path)=>{
        return activeLink === path
      }

      const ManubarHander = ()=> {
        setManubar(!manubar)
      }

      
  return (
    <div className=" relative top-0 z-10 flex justify-around items-center h-[7.7vh] bg-gray-100">
      <div className=" w-10">
        <Link> <img src={logo_1} alt=""  /> </Link>
      </div>

      <div className=" hidden sm:block ">
        <ul className=" flex gap-10">
          <li>
            <Link to='/' className={`text-lg hover:text-green-700 active:text-amber-200  ${isActive('/') ? 'text-green-600': ''}`}> Home </Link>
          </li>
          <li>
            <Link to='/about' className={`text-lg active:text-amber-200 hover:text-green-700 ${isActive('/about') ? 'text-green-600' : ''}`}> About </Link>
          </li>
          <li>
            <Link to='/resume' className={`text-lg active:text-amber-200 hover:text-green-700 ${isActive('/resume/webresumelayout') ? 'text-green-600' : ''}`}> Resume </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <Link to='contact' className={`text-lg active:text-amber-200 hover:text-green-700 ${isActive('/contact') ? 'text-green-600' : ''}`}> Contact </Link>
      </div>

      {/* -----------------phone manu bar design-----------------*/}
    <button onClick={ManubarHander} className=" block sm:hidden">
            {
        manubar ? <IoClose/> :  <FaBars/>
      }
    </button>
    <div onClick={ManubarHander} className={`sm:hidden flex flex-col bg-blue-400 absolute top-full w-full h-[92.3vh] justify-center items-center space-y-10 rounded-br-full ${manubar ? 'block' : 'hidden'}`}>
      <Link to='/' className={`text-lg hover:text-green-700 active:text-amber-200  ${isActive('/') ? 'text-green-600': ''}`}> Home </Link>
      <Link to='/about' className={`text-lg active:text-amber-200 hover:text-green-700 ${isActive('/about') ? 'text-green-600' : ''}`}> About </Link>
      <Link to='/resume' className={`text-lg active:text-amber-200 hover:text-green-700 ${isActive('/resume/webresumelayout') ? 'text-green-600' : ''}`}> Resume </Link>
      <Link to='contact' className={`text-lg active:text-amber-200 hover:text-green-700 ${isActive('/contact') ? 'text-green-600' : ''}`}> Contact </Link>
    </div>

    </div>
  );
};


export default Navbar;
