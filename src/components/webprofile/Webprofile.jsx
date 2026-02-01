import { Link } from 'react-router';
import web_pic from '../../assets/web-profile.jpg'
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { SlBriefcase } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { RiBook3Line } from "react-icons/ri";




const Webprofile = () => {


  return (    
    <div className='bg-[#17181b] h-full'>  
      <div className=''>
        <img src={web_pic} alt="" />
      </div>
      <div className=' space-y-1'>

        <Link to=''>
      <div className='flex gap-2 font-light text-gray-400'>
        <AiOutlineHome className=' text-lg '/>
        <h2 className=' '> HOME </h2>
      </div>
      </Link>

      <hr className='w-full h-2 text-gray-700'/>

      <Link to='webabout'>
      <div className={`flex gap-2 font-light text-gray-400 ${isActive('/resume/webresumelayout/webabout') ? 'text-green-400': ''}`}>
        <IoPersonOutline className='text-lg '/>
        <h2 className=' '> ABOUT ME </h2>
      </div>
      </Link>

      <hr className='w-full h-2 text-gray-700'/>

      <Link to='webresume'>
      <div className={`flex gap-2 font-light text-gray-400 ${isActive('/resume/webresumelayout/webresume') ? 'text-green-400': ''}`}>
        <FaRegAddressCard className='text-lg'/>
        <h2 className=' '> RESUME </h2>
      </div>
      </Link>

      <hr className='w-full h-2 text-gray-700'/>

      <Link to='webportfolio'>
      <div className={`flex gap-2 font-light text-gray-400 ${isActive('/resume/webresumelayout/webportfolio') ? 'text-green-400': ''}`}>
        <SlBriefcase className='text-lg '/>
        <h2 className=' '> PORTFOLIO </h2>
      </div>
      </Link>

      <hr className='w-full h-2 text-gray-700'/>
      
      <Link to='webblog'>
      <div className={`flex gap-2 font-light text-gray-400 ${isActive('/resume/webresumelayout/webblog') ? 'text-green-400': ''}`}>
        <RiBook3Line className='text-lg '/>
        <h2 className=' '> BLOG </h2>
      </div>
      </Link>

      <hr className='w-full h-2 text-gray-700'/>

      <Link to='webcontact'>
      <div className={`flex gap-2 font-light text-gray-400 ${isActive('/resume/webresumelayout/webcontact') ? 'text-green-400': ''}`}>
        <AiOutlineMail className='text-lg '/>
        <h2 className=' '> CONTACT </h2>
      </div>
      </Link>

      <hr className='w-full h-2 text-gray-700'/>
      </div>

    </div>
  )
}

export default Webprofile
