import Footer from "../components/footer/Footer";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import contact_bg from "../assets/contact-bg.jpg";


const Contact = () => {
  return (
    <div
      className="h-[92.3vh] flex flex-col justify-around items-center bg-cover bg-no-repeat bg-center opacity-85"
      style={{ backgroundImage: `url(${contact_bg})` }}
    >
      <div className="sm:w-100 sm:h-95 py-5 bg-[#ffffff11] flex flex-col justify-center gap-8 rounded">
        <div className=" flex flex-col gap-2 items-center sm:flex-row sm:justify-between text-white px-8">
          <MdCall className="text-2xl" />
          <h1>++880 170060-6955</h1>
        </div>
        <hr className="text-gray-400" />
        <div className=" flex flex-col items-center gap-2 sm:flex-row sm:justify-between text-white px-8">
          <BiLogoGmail className="text-2xl" />
          <h1> mdanumia1999@gmail.com </h1>
        </div>
        <hr className="text-gray-400" />
        <div className=" flex flex-col items-center gap-2 sm:flex-row sm:justify-between text-white px-8">
          <MdLocationOn className="text-2xl" />
          <h1> Vatara Thana, Nutun Bazar, Dhaka </h1>
        </div>
        <hr className="text-gray-400" />
      </div>
      {/* -------------------socal icons----------------- */}
      <div className="bottom-30 flex justify-around items-center gap-6 sm:gap-20 text-2xl sm:text-3xl">
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
      <div className=" absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
