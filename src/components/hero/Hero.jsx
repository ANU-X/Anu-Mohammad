import React, { useContext, useRef } from 'react'
import { MdCloudDownload } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";
import { AllassetContet } from '../../context/AssetsProvider';
import { GoDotFill } from "react-icons/go";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger)



const Hero = () => {

    const {projectsRef, contactRef, scrollToSection} = useContext(AllassetContet)
    const haders = useRef(null)
    const haderText = useRef(null)
    const hadBotton = useRef(null)
    const hadProTem = useRef(null)


    useGSAP(()=> {
        const tline = gsap.timeline(
            {
                defaults: {
                    duration: 2,
                    ease: 'power4.inOut'
                },
                scrollTrigger: {
                trigger: haders.current,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse'
            }                
            })

            tline.from(haderText.current, {
                x: -100,
                opacity: 0
            })
            tline.from(hadProTem.current, {
                x: 200,
                opacity: 0
            }, '<')            
            tline.from(hadBotton.current, {
                y: 100,
                opacity: 0
            }, '<0.5')


       })


  return (

    <header ref={haders} className=' overflow-hidden flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 2xl:gap-46 md:h-screen px-5'>
        <div className='flex flex-col gap-12'>
            <div ref={haderText}>
            <h1 className='text-4xl md:text-6xl leading-18 md:leading-23 font-medium text-transparent bg-clip-text bg-linear-to-r from-[#3bd595] to-purple-700'> Crafting <br /> Exceptional <br /> Web Experiences </h1>
            <p> I am a Full Stack Developer dedicated to transforming innovative ideas into functional, <br /> practical, and real-world applications. By bridging creativity with robust code, <br /> I bring concepts to life through seamless digital solutions. </p>
            </div>

            <div ref={hadBotton} className='flex flex-wrap items-center gap-5'>
            <button onClick={()=> scrollToSection(projectsRef)} className='flex items-center gap-3 border p-3 md:p-4 rounded-2xl md:text-xl bg-linear-to-r from-blue-500 to-purple-500 hover:to-blue-500 hover:from-purple-500 cursor-pointer text-nowrap md:text-wrap'> View Projects <GoArrowDownRight className='text-lg md:text-2xl hover:animate-ping'/> </button>

            <a href='./Resume.pdf' download='anu_cv.pdf' >  
            <button className='flex items-center gap-3 p-3 md:p-4 border rounded-2xl md:text-xl bg-linear-to-r from-blue-500 to-purple-500 hover:to-blue-500 hover:from-purple-500 cursor-pointer text-nowrap md:text-wrap'>
            Download CV <MdCloudDownload className='text-lg md:text-2xl transition-all animate-bounce'/>
            </button>
            </a>

            <button onClick={()=> scrollToSection(contactRef)} className='flex items-center gap-3 border p-3 md:p-4 rounded-2xl md:text-xl bg-linear-to-r from-blue-500 to-purple-500 hover:to-blue-500 hover:from-purple-500 cursor-pointer text-nowrap md:text-wrap'> Contact Me <GoArrowDownRight className='text-lg md:text-2xl hover:animate-ping'/> </button>
            </div>
        </div>

        <div ref={hadProTem} className='md:w-140 h-80 bg-gray-800 rounded-3xl'>
            <div className='grid grid-rows-6'>
                <div className='flex justify-between items-center px-10 py-4'>
                   <span className='flex items-center'>
                     <GoDotFill className='text-red-400 text-xl'/>
                    <GoDotFill className='text-green-500'/>
                    <GoDotFill className='text-yellow-400'/>
                   </span>
                   <span className='flex items-center gap-1'>
                    <GoDotFill className='text-fuchsia-500 animate-pulse'/>
                    <p className='text-[#e0e0e0]'>Portfolio.tx</p>
                   </span>
                </div>

                <div className=' row-span-5 flex flex-col justify-center px-20 bg-gray-900 rounded-b-3xl leading-relaxed'>
                    <p className='text-[#e0e0e0]'><span className='text-gray-600'>01</span> &nbsp; &nbsp; <span className='text-[#F286C4]'>const</span> developer = &nbsp; <span className='text-[#55CB67]'>&#123;</span></p>
                    <p className='whitespace-pre text-[#e0e0e0]'><span className='text-gray-600'>02</span>            name:&nbsp; <span className='text-[#E7EE98]'>' Md Anu Mia '</span>,</p>
                    <p className='whitespace-pre text-[#e0e0e0]'><span className='text-gray-600'>03</span>            focus: &nbsp; <span className='text-[#E7EE98]'>' Fullstack Mastery '</span>,</p>
                    <p className='whitespace-pre text-[#e0e0e0]'><span className='text-gray-600'>04</span>            skills: &nbsp; <span className='text-[#4EBEEC]'>[</span> <span className='text-[#E7EE98]'>'React', 'Node', 'GSAP', 'AI'</span> <span className='text-[#4EBEEC]'>]</span>,</p>
                    <p className='whitespace-pre text-[#e0e0e0]'><span className='text-gray-600'>05</span>            passionate: &nbsp; <span className='text-red-500'>true</span>,</p>
                    <p className='whitespace-pre text-[#e0e0e0]'><span className='text-gray-600'>06</span>            motto: &nbsp; <span className='text-[#E7EE98]'>" Build with Purpose "</span></p>
                    <p><span className='text-gray-600'>07</span> &nbsp; &nbsp; <span className='text-[#55CB67]'>{'}'};</span></p>
                    <br />
                    <p><span className='text-gray-600'>08</span> &nbsp; <span className='text-[#55CB67]'>developer</span> . showcase<span className='text-[#4EBEEC]'>()</span>;</p>
                </div>
            </div>
        </div>
    </header>
  )
}
{/* 5c87f8-bc94f5-3bd595 */}
export default Hero
