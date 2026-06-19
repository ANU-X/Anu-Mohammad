import React, { useContext } from 'react'
import { Link } from 'react-router'
import logo from '../../assets/logo_2.svg'
import { FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { AllassetContet } from '../../context/AssetsProvider';

const Footer1 = () => {

      const {aboutRef, skillRef, projectsRef, exprenceRef, serviceRef, learningRef, educationRef, contactRef, scrollToSection, activeSection} = useContext(AllassetContet)
    
  return (
    <footer className=' flex flex-col justify-center lg:h-[70vh]'>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-0 items-center justify-items-center p-30">
      <div className='flex flex-col gap-10'>
        <span onClick={()=> scrollToSection(aboutRef)} className='cursor-pointer'> <img src={logo} alt="img" loading='lazy' width={80} /> </span>
        <p className=' leading-relaxed'>A multidisciplinary professional bridging the gap between <br /> design, development, and data. I specialize in crafting <br /> stunning graphics, building functional web solutions <br /> and analyzing data to drive meaningful results. <br /> Let’s collaborate to bring your digital vision to life.</p>
      </div>
      <div className='flex flex-col gap-10'>
        <h1>NAVIGATION</h1>
        <ul className='space-y-3'>
            <li onClick={()=> scrollToSection(aboutRef)} className='hover:text-[#3bd595]'><Link> About </Link></li>
            <li onClick={()=> scrollToSection(skillRef)} className='hover:text-[#3bd595]'><Link> Skill </Link></li>
            <li onClick={()=> scrollToSection(projectsRef)} className='hover:text-[#3bd595]'><Link> Project </Link></li>
            <li onClick={()=> scrollToSection(exprenceRef)} className='hover:text-[#3bd595]'><Link> Experince </Link></li>
            <li onClick={()=> scrollToSection(learningRef)} className='hover:text-[#3bd595]'><Link> Learing </Link></li>
            <li onClick={()=> scrollToSection(contactRef)} className='hover:text-[#3bd595]'><Link> Contact </Link></li>
        </ul>
      </div>
      <div className='flex flex-col gap-10'>
        <h1>CONNECT</h1>
        <div className='flex flex-col gap-4'>
            <a className='hover:text-[#3bd595]' target='blank' href='mailto:mdanumia1999@gmail.com'>mdanumia1999@gmail.com</a>
            <a className='hover:text-[#3bd595]' target='blank' href='tel:+8801700606955'>+880 1700 606955</a>
        <span className='flex justify-between text-2xl'>
            <a className='hover:text-[#3bd595]' target='blank' href="https://www.facebook.com/marasedulislamranu.ranu"> <FaSquareFacebook/> </a>
            <a className='hover:text-[#3bd595]' target='blank' href="https://www.linkedin.com/in/muhammad-anu-9a49102b9/"> <FaLinkedin/> </a>
            <a className='hover:text-[#3bd595]' target='blank' href="https://github.com/ANU-X"> <FaSquareGithub/> </a>
            <a className='hover:text-[#3bd595]' target='blank' href="https://x.com/rasedul_ranu"> <FaSquareXTwitter/> </a>
        </span>            
        </div>
      </div>
    </div>
    <hr className='text-gray-800 w-full' />
    <div className="flex justify-around text-center py-5 text-gray-500 text-sm">
      <span className='font-montserrat word-speace tracking-wide'> &copy; 2026 Powered by Anu. All rights reserved. </span>
      <span className='font-montserrat word-speace tracking-wide'> Made With in Bangladesh <span className=' animate-pulse'>❤️</span></span>
    </div>    
    </footer>
  )
}

export default Footer1
