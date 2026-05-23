import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Learning = () => {

  const learnRef = useRef(null) 
  const textRef = useRef([])

  useGSAP(()=>{
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: learnRef.current,
        start: 'top 50%',
        end: 'bottom 40%',
        toggleActions: 'play reverse play reverse',
      }
    })
  })


  return (
    <div ref={learnRef}>
      <div className='mx-auto max-w-7xl px-5 py-40 sm:py-0 space-y-5 list-inside sm:h-screen flex flex-col justify-center '>
        <h1 ref={(el) => (textRef.current[0] = el)} className='font-montserrat font-semibold text-lg sm:text-3xl' > Keep Learing and growing </h1>
            <li ref={(el) => (textRef.current[1] = el)}> Express, MongoDB study running. . . </li>
            <li ref={(el)=> (textRef.current[2] = el)}> Next Learning Next.js </li>
            <li ref={(el)=>(textRef.current[3]) = el}> Then Next Study Data Structures & Algorithms (Basic) </li>
            <li ref={(el)=>(textRef.current[4]) = el}> Then Next Study Backend Architecture (MVC) </li>
        </div>
    </div>
  )
}


export default Learning
