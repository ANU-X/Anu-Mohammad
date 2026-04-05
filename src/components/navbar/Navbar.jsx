import { Link, useLocation } from "react-router";
import logo_1 from '../../assets/5c87f8-bc94f5-3bd595.png'
import { useContext, useEffect, useRef, useState} from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { AllassetContet } from "../../context/AssetsProvider";


const Navbar = () => {
  const {aboutRef, skillRef, projectsRef, exprenceRef, serviceRef, learningRef, educationRef, contactRef, scrollToSection, activeSection} = useContext(AllassetContet)

  const [activeLink, setActiveLink] = useState('')
  const [manubar, setManubar] = useState(true)
  const {theme, setTheme} = useTheme()

  const PathLocatio = useLocation()


  useEffect( ()=>{
    setActiveLink(PathLocatio.pathname)
  }, [PathLocatio])

      const isActive = (path)=>{
        return activeLink === path
      }
      
      const toogleMode = ()=>{
        setTheme(theme === 'dark'? 'light': 'dark')
      }

      const ManubarHander = ()=> {
        setManubar(!manubar)
      }

      
  return (
    <nav className=" sticky top-0 left-0 z-50">
    <div className="py-4 relative top-0 z-10 flex justify-around items-center bg-gray-50 shadow">
      <div className=" w-10">
        <Link> <img src={logo_1} alt=""  /> </Link>
      </div>

      <div className=" hidden sm:block ">
        <ul className=" flex gap-10">
          <li>
            <button onClick={()=>scrollToSection(aboutRef, 'about')} className={`text-lg text-black hover:text-green-700 active:text-amber-200 cursor-pointer  ${activeSection === 'about' ? 'text-green-600': ''}`}> About </button>
          </li>
          <li>
            <button onClick={()=>scrollToSection(skillRef, 'skill')} className={`text-lg text-black active:text-amber-200 hover:text-green-700 cursor-pointer ${activeSection === 'skill' ? 'text-green-600' : ''}`}> Skill </button>
          </li>
          <li>
        <button onClick={()=>scrollToSection(projectsRef, 'project')} className={`text-lg text-black active:text-amber-200 hover:text-green-700 cursor-pointer ${activeSection === 'project' ? 'text-green-600' : ''}`}> Project </button>
          </li>
          <li>
        <button onClick={()=>scrollToSection(exprenceRef, 'experince')} className={`text-lg text-black active:text-amber-200 hover:text-green-700 cursor-pointer ${activeSection === 'experince' ? 'text-green-600' : ''}`}> Experince </button>
          </li>
          <li>
        <button onClick={()=>scrollToSection(learningRef, 'learning')} className={`text-lg text-black active:text-amber-200 hover:text-green-700 cursor-pointer ${activeSection === 'learning' ? 'text-green-600' : ''}`}> Learing </button>
          </li>
          <li>
        <button onClick={()=>scrollToSection(contactRef, 'contact')} className={`text-lg text-black  active:text-amber-200 hover:text-green-700 cursor-pointer ${activeSection === 'contact' ? 'text-green-600' : ''}`}> Contact </button>
          </li>                            
        </ul>
      </div>
      <div className="hidden sm:block">
            <Link to='/webresumelayout' className={`text-lg text-black active:text-amber-200 hover:text-green-700 ${isActive('/webresumelayout') ? 'text-green-600' : ''}`}> Resume </Link>        
      </div>

    <div>
      <button onClick={toogleMode} className="text-3xl text-black cursor-pointer">

        {theme === 'dark' ? <MdDarkMode/> : <CiLight/> }
      </button>
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
    </nav>
  );
};


export default Navbar;
