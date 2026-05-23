import { MdCall, MdOutlineAlternateEmail, MdOutlineEmail, } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareXTwitter, FaBluesky, FaTelegram, } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { LuMessageSquareShare } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

  const contRef = useRef(null)
  const fromRer = useRef(null)
  const drictRef = useRef(null)
  const iconRef = useRef(null)

  useGSAP(()=>{
    const tl = gsap.timeline(
      {defaults: {
        duration: 1.5, 
        ease: 'power4.out',
      },
      scrollTrigger: {
        trigger: contRef.current,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',
      }
    })
    
    tl.from(fromRer.current, {
      x: -500,
      opacity: 0,
    })
    tl.from(drictRef.current, {
      x: 500,
      opacity: 0
    }, '-=1')
    tl.from(iconRef.current, {
      y: 200,
      opacity: 0
    }, '-=0.5')
  }, [])


  const AllIcon = [
    {id: 1,link: "https://github.com/ANU-X",icon: <FaSquareGithub />,text: "github",},
    {id: 2,link: "https://www.linkedin.com/in/muhammad-anu-9a49102b9/",icon: <FaLinkedin />,text: "linkedin",},
    {id: 3,link: "https://www.facebook.com/marasedulislamranu.ranu",icon: <FaSquareFacebook />,text: "facebook",},
    {id: 4,link: "https://bsky.app/profile/mdanu99.bsky.social",icon: <FaBluesky />,text: "bluesky",},
    {id: 5,link: "https://web.telegram.org/k/",icon: <FaTelegram />,text: "telegram",},
    {id: 6,link: "https://x.com/rasedul_ranu",icon: <FaSquareXTwitter />,text: "twitter",},
  ];

  return (
    <div
    ref={contRef}
      id="contact"
      className=" relative px-5 flex flex-col gap-40 justify-center items-center text-center my-10 overflow-hidden"
    >
      <div className="space-y-2">
        <h1 className=" text-3xl font-extrabold">Let's Connect</h1>
        <p>
          Have a project in mind or just want to say hi? <br /> I'm always open
          to discussing new opportunities and creative ideas.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        <div ref={fromRer} className="text-left space-y-10 border border-white/30 bg-[#ffffff05] rounded-4xl sm:w-sm md:w-md lg:w-lg xl:w-xl 2xl:w-3xl p-10 2xl:p-20 hover:bg-[#5c88f810]">
          <div className="space-y-2">
            <h1 className="text-2xl text-[#3bd595] ">Send a Message</h1>
            <p>I'll get back to you within 24 hours.</p>
          </div>
          <form action="" className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="flex items-center gap-3">
                <GoPerson /> YOUR NAME
              </label>
              <input
                type="text"
                placeholder="name"
                className="border border-app-border rounded-2xl py-4 px-6"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="flex items-center gap-3">
                <MdOutlineEmail /> YOUR EMAIL
              </label>
              <input
                type="text"
                placeholder="youremail@gmail.com"
                className="border border-app-border rounded-2xl py-4 px-6"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="flex items-center gap-3">
                <FiMessageSquare /> YOUR MESSAGE
              </label>
              <textarea
                type="text"
                placeholder="Tell me about your project"
                className="border border-app-border rounded-2xl py-4 px-6 h-40"
              />
            </div>

            <div className="flex flex-col">
              <button className="py-4 rounded-2xl cursor-pointer flex justify-center items-center gap-5 border border-app-border hover:bg-gray-700 hover:text-white">
                SEND MESSAGE <LuMessageSquareShare />
              </button>
            </div>
          </form>
        </div>
        {/* ---------------------dricet message----------------- */}
        <div className="py-5 flex flex-col justify-center gap-10 rounded">
          <div ref={drictRef} className="space-y-12 xl:w-md 2xl:w-xl">
            <h1 className="flex items-center gap-4 text-2xl text-left text-[#3bd595]">
              <BsSend /> Direct Contact
            </h1>
            <div className=" flex gap-6 items-center border border-app-border rounded-2xl px-4 sm:px-6 py-3 sm:py-5 hover:bg-[#5c88f807] hover:scale-105 transition-all duration-400 ">
              <span className="border border-app-border p-3 rounded-xl text-md sm:text-lg">
                <MdCall />
              </span>
              <div className="text-left">
                <p>phone</p>
                <h1>+880 170060-6955</h1>
              </div>
            </div>

            <div className="flex gap-6 items-center border border-app-border rounded-2xl px-4 sm:px-6 py-3 sm:py-5 hover:bg-[#5c88f807] hover:scale-105 transition-all duration-400 ">
              <span className="border border-app-border p-3 rounded-xl text-md sm:text-lg">
                <MdOutlineAlternateEmail />
              </span>
              <div className="text-left">
                <p>gmail</p>
                <h1> mdanumia1999@gmail.com </h1>
              </div>
            </div>

            <div className="flex gap-6 items-center border border-app-border rounded-2xl px-4 sm:px-6 py-3 sm:py-5 hover:bg-[#5c88f807] hover:scale-105 transition-all duration-400 ">
              <span className="border border-app-border p-3 rounded-xl text-md sm:text-lg">
                <TfiLocationPin />
              </span>
              <div className="text-left">
                <p>address</p>
                <h1> Vatara Thana, Nutun Bazar, Dhaka </h1>
              </div>
            </div>
          </div>

          {/* ----------------- all icon-------------------------------- */}
          <h1 className="text-2xl text-left"> Social Presence </h1>
          <div ref={iconRef} className="bottom-30 flex justify-around items-center gap-6 sm:gap-5 text-2xl sm:text-3xl">
            {AllIcon.map((items, index) => {
              return (
                <a
                  key={index.id}
                  href={items.link}
                  target=" _blank "
                  rel="noopener noreferrer"
                  className=" relative group inline-block"
                >
                  <span className=" text-gray-600 hover:text-gray-500 active:text-amber-400">
                    {items.icon}
                  </span>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-600 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {items.text}
                  </span>
                </a>
              );
            })}
          </div>
        </div>{" "}
        {/* 5c87f8-bc94f5-3bd595 */}
      </div>
      <div className=" absolute md:left-[45%] w-50 md:w-100 h-100 rounded-full bg-[#5c88f873] pointer-events-none blur-3xl opacity-60"></div>
    </div>
  );
};

export default Contact;
