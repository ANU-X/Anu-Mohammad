import { Link } from 'react-router';
import web_pic from '../../assets/web-profile.jpg'
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { RiBook3Line } from "react-icons/ri";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub} from "react-icons/fa6";

import Footer from '../footer/Footer';



const Webprofile = (props) => {


  return (    
    <div className='h-full flex flex-col justify-between items-center gap-5 border-r border-amber-300'>  

      <div className='flex flex-col items-center gap-5'>
      <div>
        <img src={web_pic} alt="img" loading='lazy' />
      </div>
      <div className='flex flex-col gap-5'>
      <Link to=''>
      <div className='flex gap-10 font-light '>
        <AiOutlineHome className=' text-lg '/>
        <h2 className=' '> HOME </h2>
      </div>
      </Link>

      <Link to='resume'>
      <div className={`flex gap-10 font-light ${props.isActive('/resume/webresumelayout/webresume') ? 'text-green-400': ''}`}>
        <FaRegAddressCard className='text-lg'/>
        <h2 className=' '> RESUME </h2>
      </div>
      </Link>
   
      <Link to='webblog'>
      <div className={`flex gap-10 font-light ${props.isActive('/resume/webresumelayout/webblog') ? 'text-green-400': ''}`}>
        <RiBook3Line className='text-lg '/>
        <h2 className=' '> BLOG </h2>
      </div>
      </Link>

      <Link to='webabout'>
      <div className={`flex gap-10 font-light ${props.isActive('/resume/webresumelayout/webabout') ? 'text-green-400': ''}`}>
        <IoPersonOutline className='text-lg '/>
        <h2 className=' '> ABOUT ME </h2>
      </div>
      </Link>
      </div>
      </div>
      <div className='space-y-8 mb-4 text-center'>
        <ul className='flex gap-10 justify-center text-2xl'>
          <li><a target='blank' href="https://github.com/ANU-X"><FaSquareGithub/></a></li>
          <li><a target='blank' href="https://www.linkedin.com/in/muhammad-anu-9a49102b9/"> <FaLinkedin/> </a></li>
          <li><a target='blank' href="https://www.facebook.com/marasedulislamranu.ranu"> <FaSquareFacebook/> </a></li>
        </ul>
        <Footer/>
      </div>
    </div>
  )
}

export default Webprofile
