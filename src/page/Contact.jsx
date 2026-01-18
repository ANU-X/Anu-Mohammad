import React from 'react'
import { Link } from 'react-router';
import Footer from '../components/footer/Footer'
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import contact_bg from '../assets/contact-bg.jpg'



const Contact = () => {
  return (
    <div className='h-[94vh] flex flex-col justify-around items-center bg-cover bg-no-repeat bg-center opacity-85' style={{ backgroundImage: `url(${contact_bg})` }}>

      <div className='w-100 h-95 bg-[#ffffff11] flex flex-col justify-center gap-8 rounded'>
        <div className=' flex justify-between text-white items-center px-8'>
          <MdCall className='text-2xl'/>
          <h1>++880 170060-6955</h1>
        </div>
        <hr className='text-gray-400'/>
        <div className=' flex justify-between text-white items-center px-8'>
          <BiLogoGmail className='text-2xl'/>
          <h1> mdanumia1999@gmail.com </h1>
        </div>
        <hr className='text-gray-400'/>
        <div className=' flex justify-between text-white items-center px-8'>
          <MdLocationOn className='text-2xl'/>
          <h1> Vatara Thana, Nutun Bazar, Dhaka </h1>
        </div>
        <hr className='text-gray-400'/>
      </div>
      {/* -------------------socal icons----------------- */}
      <div className='bottom-30 flex justify-around items-center gap-20 text-3xl'>
        <Link className=' '> <FaSquareGithub className=' text-gray-600 hover:text-gray-800 active:text-amber-400'/> </Link>
        <Link> <FaLinkedin className=' text-gray-600'/> </Link>
        <Link> <FaSquareFacebook className=' text-gray-600'/> </Link>
        <Link> <FaSquareXTwitter className=' text-gray-600'/> </Link>
        <Link> <SlGlobe className=' text-gray-600'/> </Link>
        <Link> <AiOutlineMail className=' text-gray-600'/> </Link>
      </div>
        <div className=' absolute bottom-0'>
        <Footer/>
      </div>
    </div>
  )
}


export default Contact
