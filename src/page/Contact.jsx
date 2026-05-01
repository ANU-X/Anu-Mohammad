import { MdCall, MdOutlineAlternateEmail, MdOutlineEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareXTwitter, FaBluesky, FaTelegram } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { LuMessageSquareShare } from "react-icons/lu";
import { BsSend } from "react-icons/bs";


const Contact = () => {
  return (
    <div id="contact" className="px-5 flex flex-col gap-40 justify-center items-center text-center my-10">

      <div className="space-y-2">
        <h1 className=" text-3xl font-extrabold">Let's Connect</h1>
        <p> Have a project in mind or just want to say hi? <br /> I'm always open to discussing new opportunities and creative ideas. </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">

        <div className="text-left space-y-10 border border-[#5c87f8] rounded-4xl lg:w-lg xl:w-xl 2xl:w-3xl p-10 2xl:p-20">
          <div className="space-y-2">
          <h1 className="text-2xl">Send a Message</h1>
          <p>I'll get back to you within 24 hours.</p>
          </div>
          <form action="" className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="flex items-center gap-3"><GoPerson/> YOUR NAME</label>
            <input type="text" placeholder="name" className="border border-app-border rounded-2xl py-4 px-6"/>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="flex items-center gap-3"><MdOutlineEmail/> YOUR EMAIL</label>
            <input type="text" placeholder="youremail@gmail.com" className="border border-app-border rounded-2xl py-4 px-6"/>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="flex items-center gap-3"><FiMessageSquare/> YOUR MESSAGE</label>
            <textarea type="text" placeholder="Tell me about your project" className="border border-app-border rounded-2xl py-4 px-6 h-40"/>
          </div>

          <div className="flex flex-col">
            <button className="py-4 rounded-2xl cursor-pointer flex justify-center items-center gap-5 border border-app-border hover:bg-gray-700 hover:text-white">SEND MESSAGE <LuMessageSquareShare/></button>
          </div>
          </form>
        </div>

      {/* ---------------------dricet message----------------- */}
      <div className="py-5 flex flex-col justify-center gap-10 rounded">
        <div className="space-y-12 xl:w-md 2xl:w-xl" >
          <h1 className="flex items-center gap-4 text-2xl text-left"><BsSend/> Direct Contact</h1>
        <div className=" flex gap-6 items-center border border-app-border rounded-2xl px-4 sm:px-6 py-3 sm:py-5 ">
          <span className="border border-app-border p-3 rounded-xl text-md sm:text-lg"><MdCall/></span>
        <div className="text-left">
          <p>phone</p>
          <h1>++880 170060-6955</h1>
        </div>
        </div>

        <div className="flex gap-6 items-center border border-app-border rounded-2xl px-4 sm:px-6 py-3 sm:py-5">
          <span className="border border-app-border p-3 rounded-xl text-md sm:text-lg"><MdOutlineAlternateEmail/></span>
          <div className="text-left">
            <p>gmail</p>
          <h1> mdanumia1999@gmail.com </h1>
          </div>
        </div>

        <div className="flex gap-6 items-center border border-app-border rounded-2xl px-4 sm:px-6 py-3 sm:py-5">
          <span className="border border-app-border p-3 rounded-xl text-md sm:text-lg"><TfiLocationPin/></span>
          <div className="text-left">
            <p>adress</p>
          <h1> Vatara Thana, Nutun Bazar, Dhaka </h1>
          </div>
        </div>
        </div>

        {/* ----------------- all icon-------------------------------- */}
       <h1 className="text-2xl text-left"> Social Presence </h1>
      <div className="bottom-30 flex justify-around items-center gap-6 sm:gap-5 text-2xl sm:text-3xl">
        <a 
        href="https://github.com/ANU-X"
        target=" _blank "
        rel="noopener noreferrer" 
        className=" relative group inline-block">
          <FaSquareGithub className=" text-gray-600 hover:text-gray-500 active:text-amber-400" />
          
          <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-600 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            github
          </span>
        </a>

        <a
        href="https://www.linkedin.com/in/muhammad-anu-9a49102b9/"
        target="_blank"
        rel="noopener noreferrer"
        className=" relative group inline-block">
          <FaLinkedin className=" text-gray-600 hover:text-gray-500 active:text-amber-400" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-500 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            Linkedin
          </span>
        </a>
        <a
        href="https://www.facebook.com/marasedulislamranu.ranu"
        target="_blank"
        rel="noopener noreferrer" 
        className=" relative group inline-block">
          <FaSquareFacebook className=" text-gray-600 hover:text-gray-500 active:text-amber-400" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-500 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            Facebook
          </span>
        </a>
        <a
        href= 'https://x.com/rasedul_ranu'
        target="_blank"
        rel="noopener noreferrer"
        className=" relative group inline-block">
          <FaSquareXTwitter className=" text-gray-600 hover:text-gray-500 active:text-amber-400" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-500 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            Twitter
          </span>
        </a>
        <a 
        href="https://bsky.app/profile/mdanu99.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
        className=" relative group inline-block">
          <FaBluesky className=" text-gray-600 hover:text-gray-500 active:text-amber-400" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-500 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            Bluesky
          </span>
        </a>
        <a 
        href="https://web.telegram.org/k/"
        target="_blank"
        rel="noopener noreferrer" 
        className=" relative group inline-block">
          <FaTelegram className=" text-gray-600 hover:text-gray-500 active:text-amber-400" />
          <span className="absolute top-full left-1/2 -translate-x-1/2 py-1 text-gray-500 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            Telegram
          </span>
        </a>
      </div>        
      </div>
      </div>

    </div>
  );
};

export default Contact;
